import Image from "next/image";
import React, { FC } from "react";

type BlogImageType = {
  alt: string;
  imageUrl: string;
};

/**
 * Project component props
 * @param {string} alt - Image alt
 * @param {string} imageUrl - Image url or source
 */

const BlogImage: FC<BlogImageType> = ({ alt, imageUrl }) => {
  return (
    <div className="relative w-full h-0 pb-[56.25%] rounded-lg">
      <Image
        alt={alt}
        src={imageUrl}
        fill
        className="object-cover rounded-lg"
      />
    </div>
  );
};

export default BlogImage;
