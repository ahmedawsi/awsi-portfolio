"use client";

import React from "react";
import Introduction from "./components/sections/introduction";
import MyDesigns from "./components/sections/mydesigns";
import ContactForm from "./components/sections/contactform";
import SocialAccounts from "./components/sections/socialaccounts";
import Silk from "@/components/Silk";

export default function Home() {
  return (
    <main>
      <Introduction />
      <MyDesigns />
      {/* <ContactForm /> */}
      <SocialAccounts />
    </main>
  );
}
