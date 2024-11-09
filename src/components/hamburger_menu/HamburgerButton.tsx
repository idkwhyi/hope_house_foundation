'use client'
import './hamburger.css'

interface HamburgerButtonProps {
  size?: 'sm' | 'md' | 'lg';
  isActive: boolean;
  handleClicked: () => void;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ 
  size = 'md', 
  handleClicked,
  isActive
}) => {
  // State to manage the active state of the hamburger


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
      onClick={handleClicked}
    >
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
    </div>
  );
};

export default HamburgerButton;
