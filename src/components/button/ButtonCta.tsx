'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

interface ButtonCtaInterface {
  link: string;
  text: string;
  background_color: string; 
  background_color_hover: string;
  padding_x: string;
  padding_y: string;
  font_weight: string;
  font_color: string;
  border_color: string;
}

export function ButtonCta({ 
  link, 
  text, 
  background_color, 
  background_color_hover,
  padding_x,
  padding_y,
  font_weight,
  font_color,
  border_color
}: ButtonCtaInterface) {

  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link href={link} passHref className="w-fit h-fit">
      <Button 
        className={`text-[1.6rem] jakarta-${font_weight} hover:bg-${background_color_hover} rounded-md`}
        style={{ 
          backgroundColor: isHovered ? background_color_hover : background_color, 
          paddingInline: padding_x, 
          paddingBlock: padding_y,
          color: font_color,
          border: '1px solid',
          borderColor: border_color,
        }}
        onMouseLeave={() => setIsHovered(false)}
        onMouseOver={() => setIsHovered(true)}  
      >
        {text}
      </Button>
    </Link>
  );
}
