import React, { useEffect, useRef, useCallback } from "react";
import LineAndText from "@/components/line/LineAndText";
import Action from "@/components/Actions/Action";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useSmoothReveal } from "@/animations/scroll";

const HomeWhatWeDo = () => {
  useSmoothReveal();
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Use useCallback to create a stable ref assignment function
  const setCardRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      cardsRef.current[index] = el;
    },
    []
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Ensure we have cards to animate
    const cards = cardsRef.current.filter((card) => card !== null);
    if (cards.length === 0) return;

    // Create a timeline for stacking effect
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Smoother scrubbing
      },
    });

    // Animate cards with a stacking effect
    cards.forEach((card, index) => {
      if (!card) return;

      tl.fromTo(
        card,
        {
          y: 100 * (index + 1), // Stagger vertical position
          opacity: 0.7,
          scale: 0.9 - index * 0.1, // Slightly reduce scale for each card
          rotationX: -15,
          transformOrigin: "center bottom",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        index * 0.2 // Stagger timing between cards
      );
    });

    // Clean up ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-full p-[3.2rem] py-[6.4rem] lg:p-[6.4rem] flex flex-col items-start justify-between gap-0"
    >
      <LineAndText text="WHAT WE DO" />
      <div className="w-full h-fit flex flex-col gap-[3.2rem] lg:gap-[6.4rem] lg:pl-[6.4rem] pt-[3.2rem] lg:pt-[6.4rem] justify-center">
        <div className="w-full">
          <h3
            data-smooth-reveal
            className="merri-bold bold text-[3.2rem] lg:text-[4.8rem] w-full lg:w-[60vw] "
          >
            We are creating a place where children with special needs can
            thrive.
          </h3>
        </div>
      </div>

      <div className="h-fit grid lg:grid-cols-2 gap-10 grid-cols-1 lg:px-[6.4rem] ">
        {[
          {
            title: "HBB Christian Schools",
            body: "We currently have 12 schools spread across Indonesia. We encourage good education as well as low tuition fees due to their financial disability.",
            imageUrl: "/images/swing.jpeg",
          },
          {
            title: "Little House",
            body: "Provided math and English tutors, this activity is open to all social groups and religious backgrounds.",
            imageUrl:
              "https://images.unsplash.com/photo-1489451058181-433dc9ffa757?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            title: "Character Building",
            body: "We started character building school with the aim of shaping children's behavior. We realize that character is one of the important aspects of life, both in religious and social life.",
            imageUrl:
              "https://images.unsplash.com/photo-1510590337019-5ef8d3d32116?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWRlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            title: "HBB Shelter Home",
            body: "Our foundation also provides attention to homeless children, children whose families have been broken up, and also disadvantaged adults.",
            imageUrl:
              "https://images.unsplash.com/photo-1479244209311-71e35c910f59?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ].map((card, index) => (
          <Action
            key={card.title}
            ref={setCardRef(index)}
            title={card.title}
            body={card.body}
            imageUrl={card.imageUrl}
            readMoreLink=""
            donationLink="donation"
            buttonColor="white"
          />
        ))}
      </div>
    </section>
  );
};

export default HomeWhatWeDo;
