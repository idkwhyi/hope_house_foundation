import React, { forwardRef } from "react";
import { ButtonWithArrow } from "../button/ButtonWithArrow";
import { NormalButton } from "../button/Button";

type ActionProps = {
  title: string;
  body: string;
  imageUrl: string;
  readMoreLink: string;
  donationLink: string;
  buttonColor?: string;
};

/**
 * Action Component - Displays an action item with title, description, image, and links
 * @param {string} title - The title of the action
 * @param {string} body - The main content/description
 * @param {string} imageUrl - URL for the action's image
 * @param {string} readMoreLink - Link to additional information
 * @param {string} donationLink - Link to donation page
 * @param {string} buttonColor - Color theme for the button | default black
 */
const Action = forwardRef<HTMLDivElement, ActionProps>(({
  title,
  body,
  imageUrl,
  readMoreLink,
  donationLink,
  buttonColor = 'black',
}, ref) => {
  return (
    <article 
      ref={ref}
      className="relative min-h-[40vh] lg:min-h-[400px] bg-blue-200 w-full overflow-hidden rounded-[2rem] group"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full w-full justify-between p-[2.4rem] lg:p-[3.2rem]">
        <div className="w-full h-fit flex flex-col items-start gap-[5.2rem]">
          <h2 className="jakarta-bold text-[2.4rem] lg:text-[3.2rem] font-bold text-white w-full">
            {title}
          </h2>
          <p className="jakarta-regular text-[1.8rem] text-gray-200 w-full">{body}</p>
        </div>

        {/* Buttons Container */}
        <div className="w-full flex items-center pt-[1.6rem] gap-[2rem] lg:gap-[2.4rem]">
          <NormalButton text="Read More" url={readMoreLink} />
          <ButtonWithArrow link={donationLink} text="Donate Now" color={buttonColor}/>
        </div>
      </div>
    </article>
  );
});

// Add a display name for better debugging
Action.displayName = 'Action';

export default Action;