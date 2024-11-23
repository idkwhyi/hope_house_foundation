import { useEffect } from "react";

// ? Text reveal animation
/*TODO: to use this animation: 
1. import useTextReveal
2. call the useTextReveal function inside the component
3. add this data-text-reveal properties in the element that you want to animate
*/
const initTextReveal = async () => {
  try {
    const { default: gsap } = await import("gsap");
    const { ScrollTrigger } = await import("gsap/dist/ScrollTrigger");

    gsap.registerPlugin(ScrollTrigger);

    // Get all elements with data-text-reveal attribute
    const textElements = document.querySelectorAll("[data-text-reveal]");

    textElements.forEach((element) => {
      // Create a wrapper div
      const wrapper = document.createElement("div");
      wrapper.style.overflow = "hidden";
      wrapper.style.display = "inline-block"; // Maintain inline flow

      // Clone original element's classes
      const originalClasses = element.getAttribute("class");
      if (originalClasses) {
        wrapper.setAttribute("class", originalClasses);
        element.removeAttribute("class");
      }

      // Move the element inside the wrapper
      element.parentNode?.insertBefore(wrapper, element);
      wrapper.appendChild(element);

      // Set initial state
      gsap.set(element, {
        yPercent: 100,
        opacity: 0,
      });

      // Create the reveal animation
      gsap.to(element, {
        yPercent: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrapper,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  } catch (error) {
    console.error("Error initializing text reveal animation:", error);
  }
};

export const useTextReveal = () => {
  useEffect(() => {
    initTextReveal();
  }, []);
};