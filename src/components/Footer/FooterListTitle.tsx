import React, { FC } from "react";

type FooterListTitleType = {
  text: string;
};

/**
 * Footer List Title Component
 * @param {string} text - Title of footer list
 */

const FooterListTitle: FC<FooterListTitleType> = ({ text }) => {
  return <h3 className="roboto-bold text-[1.4rem]">{text}</h3>;
};
export default FooterListTitle;
