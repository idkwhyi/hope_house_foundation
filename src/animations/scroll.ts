/* This file contain all animation when scrolling:
  - items animation on scroll

*/

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ? Appear animation from left
/* To use this animation:
  - element must have x declared in minus
*/
interface RevealFromLeftProps {
  autoAlpha: number;
  x: number
}

export const revealFromLeft = (): gsap.core.Timeline => {
  const tl: gsap.core.Timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "[data-show-left-item]", // Parent component or specific element to observe
      start: "80% top", // When 80% of the viewport height hits the bottom of the trigger
      toggleActions: "play none none none", // Play animation once
      markers: true, // Set to true for debugging
    },
  });

  const fromProps: RevealFromLeftProps = {
    autoAlpha: 0,
    x: -32,
  };

  const toProps: RevealFromLeftProps & {
    stagger: number;
    ease: string;
    duration: number;
  } = {
    autoAlpha: 1,
    x: 0,
    stagger: 0.2,
    ease: "expo.out",
    duration: 2,
  };

  tl.fromTo("[data-show-left-item]", fromProps, toProps);

  return tl;
};