import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { FaArrowRight } from "react-icons/fa";
// import Image from "next/image";

type ButtonBorderNoBgProps = {
  link: string;
  text: string;
  font_size?: string;
  color?: string;
}

/**
 * Button Bordered, No Backgrou,nd - Displays an action item with title, description, image, and links
 * @param {string} link - URL for redirecting to other page
 * @param {string} text - The main content/button text
 * @param {string} font_size - Custom font size | default 16
 * @param {string} color - Custom border and text color | default black
*/

export function ButtonBorderNoBg({
  link,
  text,
  font_size="1.6",
  color="black"
}: ButtonBorderNoBgProps) {
  return (
    <Link href={link} className="w-fit h-fit flex items-center justify-center rounded-md bg-transparent">
      <Button
        variant="ghost"
        style={{ fontSize: `${font_size}rem`, borderColor: `${color}` }}
        className={`w-full h-fit rounded-md px-8 py-6 flex items-center jakarta-regular justify-between border text-left hover:bg-white text-${color}`}
      >
        <span>{text}</span>
      </Button>
    </Link>
  );
}
