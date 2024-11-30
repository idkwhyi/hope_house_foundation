import React, { FC } from "react";
import { Button } from "../ui/button";

type ButtonToggleType = {
  text: string;
  activeId?: string | null;
  onActivate?: (id: string) => void;
  id: string;
};

const ButtonToggle: FC<ButtonToggleType> = ({
  text,
  activeId,
  onActivate,
  id,
}) => {
  const handleClick = () => {
    onActivate?.(id);
  };

  return (
    <Button
      variant="link"
      className={`
        no-underline 
        hover:no-underline 
        ${activeId === id ? "border-b-2 border-b-red-400 text-black" : "text-[#525560]"}
        jakarta-medium
        text-[1.6rem]
        rounded-none
        py-6
      `}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};

export default ButtonToggle;
