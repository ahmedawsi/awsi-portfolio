import React from "react";
import SocialCard from "../social-card";

const SocialAccounts = () => {
    const imagesPath = "/media/";
    
  return (
    <div>
      <div className="flex flex-col justify-center w-full gap-2 h-fit">
        <p className="text-2xl font-medium text-center">Social Accounts</p>
        <p className="text-sm text-center opacity-80">
          I publish all the good stuff there!
        </p>
        <div className="flex flex-col items-center self-center justify-center grid-cols-2 gap-5 px-4 py-4 tablet:flex-row desktop:flex-row mb-11 rounded-xl w-fit">
          <SocialCard
            title="Instagram"
            alt="Instagram icon"
            imgSrc={imagesPath + "social-media-icons/instagram_48px.png"}
            socialLink="https://instagram.com/awsidev"
          />
          <SocialCard
            title="Dribbble"
            alt="Dribbble icon"
            imgSrc={imagesPath + "social-media-icons/dribbble_48px.png"}
            socialLink="https://dribbble.com/ahmedawsi"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialAccounts;
