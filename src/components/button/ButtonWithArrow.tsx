import { Button } from "@/components/ui/button";
// import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
// import { ArrowRight3 } from "../icons/Arrow";

type ButtonWithArrowType = {
  link: string;
  text: string;
  font_size?: string;
  color?: string;
};

/**
 * Button With Right Arrow Component - Displays an action item with title, description, image, and links
 * @param {string} link - URL for redirecting to other page
 * @param {string} text - The main content/button text
 * @param {string} font_size - Custom font size in rem | default 16rem
 * @param {string} color - Custom border and text color | default black
 */

export const ButtonWithArrow: FC<ButtonWithArrowType> = ({
  link,
  text,
  font_size = "1.6",
  color = "black",
}) => {
  return (
    <Link
      href={link}
      className={`w-fit h-fit flex items-center justify-center rounded-md`}
    >
      <Button
        variant="link"
        style={{ fontSize: `${font_size}rem` }}
        className={`w-full h-fit px-8 py-6 flex rounded-md items-center justify-between text-left text-${color}`}
      >
        <span className={`text-${color}`}>{text} &#8250;</span>

        {/* <Image src={"/images/next.png"} alt="logo" width={20} height={20} /> */}
        {/* <p className={`text-${color} bg-red-50 w-fit h-fit items-center justify-center `}>&#8250;</p> */}
      </Button>
    </Link>
  );
};
