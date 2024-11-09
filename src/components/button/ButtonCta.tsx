'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

interface ButtonCtaInterface {
  link: string;
  text: string;
  background_color: string; 
  background_color_hover: string;
}

export function ButtonCta({ 
  link, 
  text, 
  background_color, 
  background_color_hover 
}: ButtonCtaInterface) {

  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link href={link} passHref className="w-fit h-fit">
      <Button 
        className={`text-[1.6rem] jakarta-medium hover:bg-${background_color_hover}`}
        style={{ 
          backgroundColor: isHovered ? background_color_hover : background_color, 
          paddingInline: '1.6rem', 
          paddingBlock: '1.8rem'
        }}
        onMouseLeave={() => setIsHovered(false)}
        onMouseOver={() => setIsHovered(true)}  
      >
        {text}
      </Button>
    </Link>
  );
}
