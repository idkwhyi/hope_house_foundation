import { gsap } from "gsap/gsap-core";



//? MENU ANIMATION
interface MenuAnimationProps {
  autoAlpha: number;
  y: number;
}

export const revealMenu = (): gsap.core.Timeline => {
  const tl: gsap.core.Timeline = gsap.timeline();

  const fromProps: MenuAnimationProps = {
    autoAlpha: 0,
    y: 32,
  };

  const toProps: MenuAnimationProps & {
    stagger: number;
    ease: string;
    duration: number;
  } = {
    autoAlpha: 1,
    y: 0,
    stagger: 0.2,
    ease: "expo.out",
    duration: 2,
  };

  tl.fromTo(
    "[data-menu-item]",
    fromProps,
    toProps
  );

  return tl;
};


//? HERO LINE AND TEXT ANIMATION
interface TimelineDefaults {
  ease: string;
  duration: number;
}

interface TitleAnimationProps {
  x: number;
  autoAlpha: number;
}

interface LineAnimationProps {
  scaleX: number;
}

export const animateTitle = (): gsap.core.Timeline => {
  const defaults: TimelineDefaults = {
    ease: "expo.out",
    duration: .5,
  };

  const tl: gsap.core.Timeline = gsap.timeline({
    defaults,
  });

  const lineAnimation: LineAnimationProps = {
    scaleX: 1,
  };

  const titleFromProps: TitleAnimationProps = {
    x: 100,
    autoAlpha: 0,
  };

  const titleToProps: TitleAnimationProps = {
    x: 0,
    autoAlpha: 1,
  };

  const lastTitleFromProps: TitleAnimationProps = {
    x: -100,
    autoAlpha: 0,
  };

  tl.to("[data-hero-line]", lineAnimation)
    .fromTo(
      "[data-title-first]",
      titleFromProps,
      titleToProps,
      "<2%"
    )
    .fromTo(
      "[data-title-last]",
      lastTitleFromProps,
      titleToProps,
      "<"
    );

  return tl;
};