import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import FadeContent from "@/components/FadeContent";
import profileImage from "@/assets/profile.jpg";
import { IconSql, IconBrandFlutter, IconBrandNextjs, IconBrandSupabase, IconBrandTailwind } from "@tabler/icons-react";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-10 w-full h-screen px-4 tablet:px-0">
      <FadeContent>
        <p id="aboutme" className="pt-4 text-2xl font-serif text-center pb-12">
          Who Am I?
        </p>
      </FadeContent>
      <div className="w-full max-w-[1000px] pb-10 bg-transparent items-center flex flex-col justify-center">
        <FadeContent delay={500}>
          <div className="flex flex-row w-fit gap-10 items-center mb-4">

            <Image
              src={profileImage}
              alt="Profile Picture"
              className="w-fit h-35 rounded-full mx-auto mb-4"
            />
            <span className="font-bold text-4xl font-serif">Ahmed<br />Awsi</span>
          </div>
        </FadeContent>

        <FadeContent delay={1000}>
          <Card className="p-4 bg-white/2 text-md items-center leading-7 flex flex-col md:text-md md:max-w-md md:leading-8 md:text-center font-sans">

            A software developer with a passion for UI/UX, focused on crafting smooth experiences from the code up.<br /><br />Computer Science B.Sc. grad and current M.Sc. student at the University of Wasit, where I'm deepening my knowledge in the field.

            <div className="h-6" />
            <FadeContent delay={900}>
              <Card className="p-2 gap-2 w-fit flex flex-row">
                <FadeContent delay={1300}>
                  <IconBrandNextjs />
                </FadeContent>
                <FadeContent delay={1400}>
                  <IconBrandTailwind />
                </FadeContent>
                <FadeContent delay={1500}>
                  <IconBrandFlutter />
                </FadeContent>
                <FadeContent delay={1600}>
                  <IconBrandSupabase />
                </FadeContent>
                <FadeContent delay={1700}>
                  <IconSql />
                </FadeContent>
              </Card>
            </FadeContent>
          </Card>
        </FadeContent>
      </div>
    </div>
  );
};

export default AboutMe;
