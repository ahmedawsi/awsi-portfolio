"use client";

import Image from "next/image";
import { useState, useRef, useLayoutEffect } from "react";

export default function WorkPost({ alt, title, imgSrc, figProtoLink }) {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <div
      className="flex flex-col w-full gap-4 p-4 bg-[#1e1e1e] rounded-xl overflow-y-hidden"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <Image
        alt={alt}
        src={imgSrc}
        className="object-cover w-full h-full rounded-md drop-shadow-[0_5px_8px_rgba(0,0,0,0.5)]"
        width="1080"
        height="1080"
      />

      <div
        className="flex flex-row items-center justify-between gap-5"
      >
        <p className="py-[5px]">{title}</p>
        {figProtoLink?.length ? (
          <a
            href={figProtoLink}
            target="_blank"
            className="px-6 py-[5px] rounded-md bg-[#383838]"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#ffffff"
              className="w-4 h-4"
            >
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </a>
        ) : null}
      </div>
    </div>
  );
}
