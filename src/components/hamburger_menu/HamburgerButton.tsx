'use client'
import React, { useState } from 'react';
import './hamburger.css'

interface HamburgerButtonProps {
  size?: 'sm' | 'md' | 'lg';
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ size = 'md' }) => {
  // State to manage the active state of the hamburger
  const [isActive, setIsActive] = useState<boolean>(false);

  // Toggle function to switch between active and inactive states
  const toggle = () => {
    setIsActive((prev) => !prev);
  };

  // Define class names based on the size prop and isActive state
  const getHamburgerSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'is-sm';
      case 'lg':
        return 'is-lg';
      default:
        return 'is-md';
    }
  };

  return (
    <div
      className={`hamburger ${isActive ? 'is-active' : ''} ${getHamburgerSizeClass()} cursor-pointer block lg:hidden`} // Tailwind: visible on mobile only (lg:hidden)
      onClick={toggle}
    >
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
    </div>
  );
};

export default HamburgerButton;
