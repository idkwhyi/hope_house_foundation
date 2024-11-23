// components/LineAndText.tsx
import React, { useEffect, useRef } from "react";
import Line from "./Line";

interface LineAndTextInterface {
  text: string;
}

const LineAndText = ({ text }: LineAndTextInterface) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Load GSAP and ScrollTrigger only on client side
    const initAnimation = async () => {
      // Dynamic import of GSAP
      const gsap = await import('gsap');
      const { ScrollTrigger } = await import('gsap/dist/ScrollTrigger');
      
      // Register ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);

      const container = containerRef.current;
      const line = lineRef.current;
      const textElement = textRef.current;

      if (!container || !line || !textElement) return;

      // Create context
      const ctx = gsap.context(() => {
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
            toggleActions: "play none none reverse"
          }
        });
      }, containerRef);

      // Return cleanup function
      return () => ctx.revert();
    };

    initAnimation();
  }, []);

  return (
    <div 
      className="w-fit flex items-center relative justify-center gap-6 lg:gap-8"
      ref={containerRef}
    >
      <div 
        ref={lineRef}
        className="opacity-0" // Initial state in CSS
      >
        <Line LineColor="black" />
      </div>
      <h2 
        ref={textRef}
        className="jakarta-bold text-[1.6rem] opacity-0" // Initial state in CSS
      >
        {text}
      </h2>
    </div>
  );
};

export default LineAndText;