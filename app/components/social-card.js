import { IconBrandDribbble } from "@tabler/icons-react";
import Image from "next/image";

export default function SocialCard({ title, socialLink, socialIcon }) {
  return (
    <a href={socialLink} target="_blank" className="w-fit h-fit">
      <div className="flex flex-row items-center w-full h-fit gap-2 py-2 px-3 bg-transparent border-2 backdrop-blur-xl hover:scale-105 transition rounded-xl">
        {socialIcon && socialIcon}
        <p>{title}</p>
      </div>
    </a>
  );
}