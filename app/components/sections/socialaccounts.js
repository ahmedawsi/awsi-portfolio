import React from "react";
import SocialCard from "../social-card";
import FadeContent from "@/components/FadeContent";
import Silk from "@/components/Silk";
import { IconBrandDribbble, IconBrandInstagram } from "@tabler/icons-react";

const SocialAccounts = () => {
  const imagesPath = "/media/";

  return (
    <div
      id="home"
      className="h-screen overflow-hidden"
      style={{
        position: "relative",
        maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)"
      }}
    >
      <div className="absolute z-20 gap-10 flex flex-col items-center justify-start pt-70 md:justify-center md:pt-0 w-full h-full">
        <FadeContent delay={400}>
          <p className="text-4xl md:text-5xl font-medium font-serif text-center">Social Accounts</p>
          <p className="h-4 md:h-6" />
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
      </div >
      <Silk scale={1} noiseIntensity={0.5} color="#222222" />
    </div >
  );
};

export default SocialAccounts;