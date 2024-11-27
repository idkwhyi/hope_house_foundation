import React, { useState } from "react";
import FooterList from "./FooterList";
import FooterListTitle from "./FooterListTitle";
import NormalButton from "../button/Button";

const Footer = () => {
  const [message, setMessage] = useState("");

  const sendMail = () => {
    if (!message) {
      alert("Please enter a message before sending.");
      return;
    }
    const subject = "Email from Hope House Foundation website";
    const mailToLink = `mailto:company@example.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailToLink;
  };

  // ? Container style
  const groupContainerStyle = "w-fit h-fit flex flex-col gap-[1.6rem]";
  const listContainerStyle = "w-fit h-fit flex flex-col gap-[1.4rem]";

  return (
    <footer className="w-full p-[3.2rem] lg:p-[6.4rem] bg-black text-white grid grid-cols-2 lg:flex lg:flex-row items-start justify-between gap-10 lg:gap-0">
      <h2 className="col-span-2 jakarta-bold text-[2.4rem] ">
        HOPE HOUSE
        <br />
        FOUNDATION
      </h2>
      <div className={groupContainerStyle}>
        <FooterListTitle text="PAGES" />
        <ul className={listContainerStyle}>
          <FooterList text="Home" url="" />
          <FooterList text="About Us" url="" />
          <FooterList text="Contact" url="" />
          <FooterList text="Donation" url="" />
        </ul>
      </div>

      <div className={groupContainerStyle}>
        <FooterListTitle text="CONNECT" />
        <ul className={listContainerStyle}>
          <FooterList text="Facebook" url="" />
          <FooterList text="Instagram" url="" />
          <FooterList text="Twitter" url="" />
        </ul>
      </div>

      <div className={groupContainerStyle}>
        <FooterListTitle text="DONATION METHOD" />
        <ul className={listContainerStyle}>
          <FooterList text="Whatsapp" url="" />
        </ul>
      </div>

      <div className="w-fit h-fit flex flex-col items-end justify-between gap-[6.4rem] col-span-2">
        <div className="w-fit h-fit flex flex-col items-start justify-start gap-[3.2rem]">
          <h2 className="jakarta-bold text-[4rem]">Connect With Us</h2>
          <div className="w-full lg:w-fit h-fit border border-[#ccc] rounded-lg flex flex-row items-center justify-between lg:justify-center">
            <textarea
              required
              rows={1}
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="roboto-regular px-[1rem] py-[.9rem] w-full lg:w-[25vw] focus:outline-none focus:border-white"
              style={{
                overflowX: "hidden",
                resize: "none", // Disable manual resizing
                height: "100%",
                fontSize: "14px",
                backgroundColor: "inherit",
              }}
            />
            <NormalButton
              color="black"
              background="white"
              hoverBackground="#cfcfcf"
              hoverColor="black"
              text="Send"
              onClick={sendMail}
            />
          </div>
        </div>
        <p>&copy; 2024 Indonesia Hope House Foundation.</p>
      </div>
    </footer>
  );
};

export default Footer;
