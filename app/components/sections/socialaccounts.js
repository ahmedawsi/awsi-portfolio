import React from "react";
import dynamic from "next/dynamic";
import SocialCard from "../social-card";
import FadeContent from "@/components/FadeContent";
import { IconBrandDribbble, IconBrandInstagram } from "@tabler/icons-react";

// Dynamically import Three.js Silk canvas so it loads client-side without blocking initial page render
const Silk = dynamic(() => import("@/components/Silk"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#0a0a0a]" />,
});

const SocialAccounts = () => {
  return (
    <section
      id="socials"
      className="h-screen overflow-hidden"
      style={{
        position: "relative",
        maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)"
      }}
    >
      <div className="absolute z-20 gap-10 flex flex-col items-center justify-start pt-70 md:justify-center md:pt-0 w-full h-full">
        <FadeContent delay={400}>
          <h2 className="text-4xl md:text-5xl font-medium font-serif text-center">Social Accounts</h2>
          <div className="h-4 md:h-6" />
          <p className="text-md md:text-xl text-center font-serif opacity-70">
            I publish all the good stuff there!
          </p>
        </FadeContent>
        <FadeContent delay={1000}>
          <div className="flex flex-col items-center justify-center grid-cols-2 gap-5 tablet:flex-row desktop:flex-row mb-11 w-fit">
            <SocialCard
              title="Instagram"
              socialIcon={<IconBrandInstagram />}
              socialLink="https://instagram.com/awsidev"
            />
            <SocialCard
              title="Dribbble"
              socialIcon={<IconBrandDribbble />}
              socialLink="https://dribbble.com/ahmedawsi"
            />
          </div>
        </FadeContent>
      </div>
      <Silk scale={1} noiseIntensity={0.5} color="#222222" />
    </section>
  );
};

export default SocialAccounts;