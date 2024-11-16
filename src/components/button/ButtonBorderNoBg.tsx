import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { FaArrowRight } from "react-icons/fa";
// import Image from "next/image";

interface ButtonBorderNoBgInterface {
  link: string;
  text: string;
  font_size: string;
}

export function ButtonBorderNoBg({
  link,
  text,
  font_size,
}: ButtonBorderNoBgInterface) {
  return (
    <Link href={link} className="w-fit h-fit flex items-center justify-center rounded-md bg-transparent">
      <Button
        variant="ghost"
        style={{ fontSize: `${font_size}rem` }}
        className="w-full h-fit rounded-md px-8 py-6 flex items-center jakarta-regular justify-between text-left border hover:bg-white border-black"
      >
        <span>{text}</span>
      </Button>
    </Link>
  );
}
