"use client";
import NavLogo from "./NavLogo";
import "../navbar/NavBar.css";
import { ButtonLink } from "../button/ButtonLink";
import { ButtonLinkMobile } from "../button/ButtonLinkMobile";
import { ButtonCta } from "../button/ButtonCta";
import HamburgerButton from "../hamburger_menu/HamburgerButton";
import { useState, useEffect } from "react";

const NavBar = () => {
  const tailwind_styling =
    "w-screen min-h-[6rem] max-h-[6rem] fixed top-0 z-50 bg-faded-gray border-b border-b-[rgb(185,185,185)]";

  const button_bg = "#a3cfba";
  const button_bg_hover = "#8FC0A9";
  const desktop_font_size = "1.8rem";
  const mobile_font_size = "2rem";

  const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/contact", label: "Contact" },
    { href: "/donation", label: "Donation" },
    { href: "/reflection", label: "Reflection" },
    { href: "/gallery", label: "Gallery" },
  ];

  const [sidebarStatus, setSidebarStatus] = useState<boolean>(false);

  const handleToggleSidebar = (): void => {
    setSidebarStatus(!sidebarStatus);
  };

  // Handle body scrolling
  useEffect(() => {
    if (sidebarStatus) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    // Cleanup on unmount or when `sidebarStatus` changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarStatus]);

  return (
    <header className="mb-[2rem] bg-none" role="banner">
      {/* Desktop NavBar */}
      <nav
        className={`${tailwind_styling} hidden lg:flex lg:px-12 py-0 items-center justify-between bg-faded-gray backdrop-blur-md`}
        aria-label="Desktop Navigation"
      >
        <NavLogo />
        <ul className="w-fit gap-6 flex items-center justify-between jakarta-medium">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <ButtonLink
                link={link.href}
                text={link.label}
                font_size={desktop_font_size}
              />
            </li>
          ))}
        </ul>
        <ButtonCta
          link="/donate"
          text="Donate"
          background_color={button_bg}
          background_color_hover={button_bg_hover}
          padding_x="1.6rem"
          padding_y="1.8rem"
          font_weight="medium"
          font_color="black"
          border_color="#747474"
        />
      </nav>

      {/* Mobile NavBar */}
      <nav
        className={`${tailwind_styling} lg:hidden flex c px-8 items-center justify-between`}
        aria-label="Mobile Navigation"
      >
        <NavLogo />
        <HamburgerButton
          size="md"
          isActive={sidebarStatus}
          handleClicked={handleToggleSidebar}
        />
        {sidebarStatus && (
          <ul
            className="absolute w-screen h-screen top-0 left-0 mt-[6rem] flex flex-col items-end justify-start pt-5 gap-4 jakarta-medium bg-main-bg"
            aria-hidden={!sidebarStatus}
          >
            {NAV_LINKS.map((link) => (
              <li
                key={link.href}
                className="w-full flex items-center justify-center"
              >
                <ButtonLinkMobile
                  link={link.href}
                  text={link.label}
                  font_size={mobile_font_size}
                />
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
