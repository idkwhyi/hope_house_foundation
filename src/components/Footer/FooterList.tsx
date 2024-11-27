import React, { FC } from "react";
import Link from "next/link";

type FooterListType = {
  text: string;
  url: string;
};

/**
 * Footer list component
 * @param {string} text - The main text
 * @param {string} url - URL for redirecting to other page
 */

const FooterList: FC<FooterListType> = ({ text, url }) => {
  return (
    <li className="list-none">
      <Link href={url}>{text}</Link>
    </li>
  );
};
export default FooterList;
