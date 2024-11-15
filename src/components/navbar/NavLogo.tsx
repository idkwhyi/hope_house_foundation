'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react";

const NavLogo = () => {
  const [imageSize, setImageSize] = useState(40); // Set initial size for small screens

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setImageSize(50);
      } else {
        setImageSize(40);
      }
    };

    handleResize(); // Set the initial size based on the current window size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2">
      <Image 
        src='/images/logo.jpeg'
        alt="logo"
        width={imageSize}
        height={imageSize}
      />
      <span className="jakarta-bold lg:jakarta-medium text-[2rem] lg:text-[2rem]">Hope House Foundation</span>
    </div>
  );
};

export default NavLogo;
