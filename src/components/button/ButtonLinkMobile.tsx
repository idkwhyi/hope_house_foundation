import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
// import { FaArrowRight } from "react-icons/fa";
// import Image from "next/image";

interface ButtonLinkMobileInterface {
  link: string;
  text: string;
  font_size: string;
}

export function ButtonLinkMobile({
  link,
  text,
  font_size,
}: ButtonLinkMobileInterface) {
  return (
    <Link href={link} className="w-full h-fit flex items-center justify-center">
      <Button
        variant="link"
        style={{ fontSize: font_size }}
        className="w-full h-fit px-8 py-5 flex items-start justify-between text-left"
      >
        <span>{text}</span>

        <Image 
          src={'/images/arrow_right.png'}
          alt="logo"
          width={20}
          height={20}
        />
      </Button>
    </Link>
  );
}
