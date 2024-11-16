import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface ButtonWithArrowInterface {
  link: string;
  text: string;
  font_size: string;
}

export function ButtonWithArrow({
  link,
  text,
  font_size,
}: ButtonWithArrowInterface) {
  return (
    <Link
      href={link}
      className="w-fit h-fit flex items-center justify-center rounded-md"
    >
      <Button
        variant="link"
        style={{ fontSize: `${font_size}rem` }}
        className="w-full h-fit px-8 py-6 flex rounded-md items-center justify-between text-left"
      >
        <span>{text}</span>


        <Image 
          src={'/images/next.png'}
          alt="logo"
          width={20}
          height={20}
        />
      </Button>
    </Link>
  );
}
