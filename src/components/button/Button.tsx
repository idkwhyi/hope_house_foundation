'use client'

import { Button } from "@/components/ui/button";
import { FC, useState } from "react";

type NormalButtonType = {
  color?: string;
  background?: string;
  hoverBackground?: string;
  hoverColor?: string;
  text: string;
  font_size?: string;
  url?: string;
  padding?: string;
  openInNewTab?: boolean;
  transitionDuration?: string;
  onClick?: () => void;
  border?: boolean;
  borderColor?: string;
  borderWidth?: string;
};

/**
 * Button Bordered, No Background - Displays an action item with title, description, image, and links
 * @param {string} color - Custom text color | default black
 * @param {string} background - Button background
 * @param {string} hoverBackground - Button background when hovered | default rgb(54, 54, 54)
 * @param {string} hoverColor - Text color when hovered | default black
 * @param {string} text - Button text
 * @param {string} font_size - Custom font size | default 1.6 rem
 * @param {string} url - Button link | if you pass an onclick function then leave this empty
 * @param {string} padding - Custom button padding in rem | default 2rem
 * @param {boolean} openInNewTab - Open url in new tab | default false
 * @param {string} transitionDuration - Duration of hover | default 0.1s
 * @param {Function} onClick - Function to handle onclick events
 */


export const NormalButton: FC<NormalButtonType> = ({
  color = "black",
  background = "white",
  hoverBackground = "#e0e0e0",
  hoverColor = "black",
  text,
  font_size = "1.6",
  url,
  padding = "2",
  openInNewTab = false,
  transitionDuration = "0.1s",
  onClick,
  border = false,
  borderColor = "black",
  borderWidth = "1"
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (url) {
      const isInternal = url.startsWith("/");
      if (isInternal) {
        window.location.href = url;
      } else {
        window.open(url, openInNewTab ? "_blank" : "_self");
      }
    }
  };

  // Construct styles more explicitly
  const buttonStyle = {
    backgroundColor: isHovered ? hoverBackground : background,
    color: isHovered ? hoverColor : color,
    fontSize: `${font_size}rem`,
    padding: `${padding}rem`,
    transition: `all ${transitionDuration} ease-in-out`,
    cursor: "pointer",
    ...(border ? {
      border: `${borderWidth}px solid ${borderColor}`,
      borderColor: borderColor,
    } : {
      border: 'none',
    }),
    ':hover': {
      ...(border ? {
        borderColor: hoverBackground,
      } : {}),
    }
  };

  return (
    <Button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={buttonStyle}
      className="jakarta-regular relative overflow-hidden w-fit"
    >
      <span
        style={{
          display: "inline-block",
          transition: `transform ${transitionDuration} ease-in-out`,
        }}
      >
        {text}
      </span>
    </Button>
  );
};

export default NormalButton;