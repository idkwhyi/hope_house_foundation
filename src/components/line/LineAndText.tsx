// components/LineAndText.tsx
import React, { FC, useEffect, useRef } from "react";
import Line from "./Line";

type LineAndTextInterface = {
  text: string;
}

/**
 * Line and Text Component - Displays an action item with title, description, image, and links
 * @param {string} text - Main text displayed after the line
*/

const LineAndText: FC<LineAndTextInterface> = ({ text }: LineAndTextInterface) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    let ctx: gsap.Context | undefined;

    const initAnimation = async () => {
      try {
        const { default: gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/dist/ScrollTrigger');
        
        gsap.registerPlugin(ScrollTrigger);

        const container = containerRef.current;
        const line = lineRef.current;
        const textElement = textRef.current;

        if (!container || !line || !textElement) return;

        // Create context
        ctx = gsap.context(() => {
          // Set initial state
          gsap.set([line, textElement], {
            opacity: 0,
            x: -50,
          });

          // Create animation
          gsap.to([line, textElement], {
            opacity: 1,
            x: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          });
        }, containerRef);
      } catch (error) {
        console.error('Error initializing animation:', error);
      }
    };

    initAnimation();

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div 
      className="w-fit flex items-center relative justify-center gap-6 lg:gap-8"
      ref={containerRef}
    >
      <div 
        ref={lineRef}
        className="opacity-0"
      >
        <Line LineColor="black" />
      </div>
      <h2 
        ref={textRef}
        className="jakarta-bold tracking-wider text-[1.6rem] opacity-0"
      >
        {text}
      </h2>
    </div>
  );
};

export default LineAndText;