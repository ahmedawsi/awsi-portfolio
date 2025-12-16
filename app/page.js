"use client";

import React from "react";
import Introduction from "./components/sections/introduction";
import About from "./components/sections/about";
import MyDesigns from "./components/sections/mydesigns";
import ContactForm from "./components/sections/contactform";
import SocialAccounts from "./components/sections/socialaccounts";

export default function Home() {
  return (
    <main>
      <Introduction />
      <About />
      <MyDesigns />
      {/* <ContactForm /> */}
      <SocialAccounts />
    </main>
  );
}
