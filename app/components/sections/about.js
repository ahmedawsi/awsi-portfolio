import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import FadeContent from "@/components/FadeContent";
import profileImage from "@/assets/profile.webp";
import { IconSql, IconBrandFlutter, IconBrandNextjs, IconBrandSupabase, IconBrandTailwind } from "@tabler/icons-react";

const AboutMe = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 pt-10 w-full min-h-screen px-4 tablet:px-0">
      <FadeContent>
        <h2 id="aboutme" className="pt-4 text-2xl font-serif text-center pb-12">
          About Me
        </h2>
      </FadeContent>
      <div className="w-full max-w-[1000px] pb-10 bg-transparent items-center flex flex-col justify-center">
        <FadeContent delay={500}>
          <div className="flex flex-row w-fit gap-8 sm:gap-10 items-center mb-4">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 aspect-square rounded-full overflow-hidden border border-white/15 shadow-md">
              <Image
                src={profileImage}
                alt="Ahmed Awsi Profile Picture"
                width={140}
                height={140}
                className="w-full h-full object-cover"
                priority={false}
              />
            </div>
            <span className="font-bold text-3xl sm:text-4xl font-serif leading-tight">
              Ahmed<br />Awsi
            </span>
          </div>
        </FadeContent>

        <FadeContent delay={1000}>
          <Card className="p-4 bg-white/5 border border-white/10 text-md items-center leading-7 flex flex-col md:text-md md:max-w-md md:leading-8 md:text-center font-sans">
            A software developer with a passion for UI/UX, focused on crafting smooth experiences from the code up.<br /><br />
            Computer Science B.Sc. grad and current M.Sc. student at the University of Wasit, where I&apos;m deepening my knowledge in the field.

            <div className="h-6" />
            <div className="p-2 gap-3 w-fit flex flex-row items-center justify-center rounded-xl bg-white/5 border border-white/10">
              <IconBrandNextjs size={24} title="Next.js" aria-label="Next.js" />
              <IconBrandTailwind size={24} title="Tailwind CSS" aria-label="Tailwind CSS" />
              <IconBrandFlutter size={24} title="Flutter" aria-label="Flutter" />
              <IconBrandSupabase size={24} title="Supabase" aria-label="Supabase" />
              <IconSql size={24} title="SQL" aria-label="SQL" />
            </div>
          </Card>
        </FadeContent>
      </div>
    </section>
  );
};

export default AboutMe;
