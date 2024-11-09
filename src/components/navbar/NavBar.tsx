import NavLogo from "./NavLogo";
import "../navbar/NavBar.css";
import { ButtonLink } from "../button/ButtonLink";
import { ButtonCta } from "../button/ButtonCta";
import HamburgerButton from "../hamburger_menu/HamburgerButton";

const NavBar = () => {
  const tailwind_styling =
    "w-screen min-h-[7rem] fixed top-0 z-50 bg-faded-gray";

  const button_bg = "#FF6B6B";
  const button_bg_hover = "#E85A5A";

  return (
    <header className="mb-[7rem] bg-none">
      {/* Desktop NavBar */}
      <nav
        className={`${tailwind_styling} hidden lg:flex lg:px-12 py-0 items-center justify-between bg-white_ghost border-b border-b-[rgb(185,185,185)]`}
      >
        <NavLogo />
        <ul className="w-fit gap-6 flex items-center justify-between jakarta-medium">
          <li>
            <ButtonLink link="#" text="Home" />
          </li>
          <li>
            <ButtonLink link="#" text="About us" />
          </li>
          <li>
            <ButtonLink link="#" text="Contact" />
          </li>
          <li>
            <ButtonLink link="#" text="Donation" />
          </li>
        </ul>
        <ButtonCta
          link="#"
          text="Donate"
          background_color={button_bg}
          background_color_hover={button_bg_hover}
        />
      </nav>

      {/* Mobile NavBar */}
      <nav className={`${tailwind_styling} lg:hidden flex c px-8 items-center justify-between`}>
        <NavLogo />
        {/* SIDEBAR BUTTON  */}
        <HamburgerButton size="md"/>
      </nav>
    </header>
  );
};

export default NavBar;
