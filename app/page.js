"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import WorkPost from "./components/work-post";
import SocialCard from "./components/social-card";
import {motion} from "framer-motion";

export default function Home() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fnjxw3b",
        "template_21qx3nv",
        form.current,
        "oxXzwTIDXRSXDdIpY"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong while sending your message.");
        }
      );
  };

  return (
    <div>
      <div className="h-screen min-w-screen">
        <div className="absolute z-20 flex flex-col items-center justify-center w-full h-full gap-3 backdrop-blur-sm">
          <p className="text-5xl opacity-90">Ahmed Awsi</p>
          <p className="px-6 text-center opacity-70">
            B.Sc. in CS & IT | Software developer & UI/UX designer
          </p>
        </div>
        <div className="z-40 flex flex-col bottom-[-80px] w-full h-fit absolute justify-center">
          {/* <p class="opacity-40 text-xs self-center mb-2">Scroll Down</p> */}

          <div className="flex self-center -translate-x-[3.75px]">
            <div className="absolute w-[7px] h-[7px] rounded-full bg-gray-50" />
            <div className="absolute w-[7px] h-[7px] rounded-full bg-gray-50 animate-ping " />
          </div>
          {/* <div className="self-center w-[7px] h-[7px] rounded-full bg-gray-50"/> */}
          <div className="w-[1.5px] h-[185px] bg-gray-400 self-center" />
        </div>

        <img
          src="media/ahmedphoto.JPG"
          className="z-0 object-cover w-full h-full opacity-20"
          alt="A photo of Ahmed"
        />
      </div>
      <div className="flex flex-col justify-center w-full h-fit">
        <div className="h-fit pt-[90px] w-full flex flex-col gap-5 justify-center">
          <p className="text-2xl font-medium text-center">My Work</p>
          <div layout layoutRoot
            className="bg-[#0e0e0e] mb-11 rounded-xl py-4 px-4 self-center gap-5 grid items-start justify-center content-center
            w-[80%] grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3"
          >
            <WorkPost title="Music App UI" imgSrc="media/musicapp.jpg" />
            <WorkPost title="Movies App UI" imgSrc="media/moviesapp.jpg" />
            <WorkPost
              title="Transactions App UI"
              imgSrc="media/transactionsapp.jpg"
              figProtoLink="https://www.figma.com/proto/wFFf9ryuyQZEu4avqtvdtq/Transactions-App?type=design&node-id=1-2&t=pr9s3mEdEwfOD7zR-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design"
            />
            <WorkPost title="Articles App UI" imgSrc="media/articlesapp.jpg" />
            <WorkPost
              title="Food App UI"
              imgSrc="media/foodapp.jpg"
              figProtoLink="https://www.figma.com/proto/hgwZEp08VhEZTWDQdwykFS/Food-App?type=design&node-id=439-238&t=vDz2DnS6iSYap5hX-1&scaling=scale-down&page-id=439%3A6&starting-point-node-id=439%3A238&mode=design"
            />
          </div>
          <p className="text-2xl font-medium text-center">Get in touch</p>
          <form
            className="flex justify-center w-full"
            ref={form}
            onSubmit={sendEmail}
          >
            <div
              className="bg-[#0e0e0e] mb-11 rounded-xl py-4 px-4 self-center gap-5 grid
              w-[80%] max-w-[600px] grid-cols-1"
            >
              <input
                className="w-full bg-[#222222] rounded-md p-2"
                placeholder="Your name"
                type="text"
                name="from_name"
                required
              />
              <input
                className="w-full bg-[#222222] rounded-md p-2"
                placeholder="Your email"
                type="email"
                name="email_id"
                required
              />
              <textarea
                className="w-full h-52 bg-[#222222] rounded-md p-2"
                placeholder="Your message"
                name="message"
                required
              />
              <div className="flex justify-end w-full">
                <button className="w-[150px] h-fit py-2 bg-[#333333] rounded-lg">
                  Submit
                </button>
              </div>
            </div>
          </form>
          <div className="flex flex-col justify-center w-full gap-2 h-fit">
            <p className="text-2xl font-medium text-center">Social Accounts</p>
            <p className="text-sm text-center opacity-80">
              I publish all the good stuff there!
            </p>
            <div className="flex flex-col items-center self-center justify-center grid-cols-2 gap-5 px-4 py-4 tablet:flex-row desktop:flex-row mb-11 rounded-xl w-fit">
              <SocialCard
                title="Instagram"
                imgSrc="media/social-media-icons/instagram_48px.png"
                socialLink="https://instagram.com/awsidev"
              />
              <SocialCard
                title="Dribbble"
                imgSrc="media/social-media-icons/dribbble_48px.png"
                socialLink="https://dribbble.com/ahmedawsi"
              />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
