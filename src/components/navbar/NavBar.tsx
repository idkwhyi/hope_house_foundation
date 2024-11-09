'use client'
import NavLogo from "./NavLogo";
import "../navbar/NavBar.css";
import { ButtonLink } from "../button/ButtonLink";
import { ButtonCta } from "../button/ButtonCta";
import HamburgerButton from "../hamburger_menu/HamburgerButton";
import { useState } from "react";

const NavBar = () => {
  const tailwind_styling =
    "w-screen min-h-[6rem] max-h-[6rem] fixed top-0 z-50 bg-faded-gray";

  const button_bg = "#FF6B6B";
  const button_bg_hover = "#E85A5A";

  const [sidebarStatus, setSidebarStatus] = useState<boolean>(false);

  const handleToggleSidebar = ():void => {
    setSidebarStatus(!sidebarStatus)
  }

  return (
    <header className="mb-[6rem] bg-none">
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
      <nav
        className={`${tailwind_styling} lg:hidden flex c px-8 items-center justify-between`}
      >
        <NavLogo />
        <HamburgerButton size="md" isActive={sidebarStatus} handleClicked={handleToggleSidebar} />
        {sidebarStatus && (
          <div className="absolute w-screen h-screen bg-blue-200 top-0 left-0 mt-[6rem]">
            test
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
