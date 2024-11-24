// components/icons/Arrows.tsx
import { FC } from "react";

interface ArrowProps {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

export const ArrowRight1: FC<ArrowProps> = ({
  className = "",
  color = "currentColor",
  width = 24,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M14.43 5.93L20.5 12L14.43 18.07"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.5 12H20.33"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowRight2: FC<ArrowProps> = ({
  className = "",
  color = "currentColor",
  width = 24,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 4L20 12L12 20"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 12H20"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowRight3: FC<ArrowProps> = ({
  className = "",
  color = "currentColor",
  width = 24,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L21.7071 12.2929C22.0976 12.6834 22.0976 13.3166 21.7071 13.7071L13.7071 21.7071C13.3166 22.0976 12.6834 22.0976 12.2929 21.7071C11.9024 21.3166 11.9024 20.6834 12.2929 20.2929L19.5858 13L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 13C2 12.4477 2.44772 12 3 12H20C20.5523 12 21 12.4477 21 13C21 13.5523 20.5523 14 20 14H3C2.44772 14 2 13.5523 2 13Z"
      fill={color}
    />
  </svg>
);

export const ArrowRight4: FC<ArrowProps> = ({
  className = "",
  color = "currentColor",
  width = 24,
  height = 24,
}) => {
  return <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    fill={color}
    stroke="black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 6l6 6-6 6" />
  </svg>;
};
