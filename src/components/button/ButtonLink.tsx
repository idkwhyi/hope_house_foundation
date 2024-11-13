import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ButtonLinkInterface {
  link: string;
  text: string;
  font_size: string;
}

export function ButtonLink({ link, text, font_size }: ButtonLinkInterface) {
  return (
    <Link href={link} className="w-fit h-fit">
      <Button variant="link" style={{ fontSize: font_size }}>{text}</Button>
    </Link>
  );
}
