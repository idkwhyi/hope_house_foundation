import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ButtonLinkInterface {
  link: string;
  text: string;
}

export function ButtonLink({ link, text }: ButtonLinkInterface) {
  return (
    <Link href={link} className="w-fit h-fit">
      <Button variant="link" className="text-[1.8rem]">{text}</Button>
    </Link>
  );
}
