import React from "react";

export default function SocialCard({ title, socialLink, socialIcon }) {
  return (
    <a
      href={socialLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title}
      className="w-fit h-fit focus:outline-none focus:ring-2 focus:ring-white/50 rounded-xl"
    >
      <div className="flex flex-row items-center w-full h-fit gap-2 py-2 px-3 bg-transparent border-2 backdrop-blur-xl hover:scale-105 transition rounded-xl">
        {socialIcon && socialIcon}
        <p>{title}</p>
      </div>
    </a>
  );
}