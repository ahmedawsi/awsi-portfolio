import React from "react";
import WorkPost from "../work-post";

const MyDesigns = () => {
  const imagesPath = "/media/";

  return (
    <div className="flex flex-col items-center gap-4 pt-[90px]">
      <p id="mywork" className="pt-4 text-2xl font-medium text-center ">
        My UI Designs
      </p>
      <div
        className="bg-[#0e0e0e] mb-11 rounded-xl py-4 px-4 gap-5 grid
      w-[60%] grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3"
      >
        <WorkPost
          title="Music App"
          alt="Music App UI image"
          imgSrc={imagesPath + "musicapp.jpg"}
        />
        <WorkPost
          title="Movies App"
          alt="Movies App UI image"
          imgSrc={imagesPath + "moviesapp.jpg"}
        />
        <WorkPost
          title="Transactions App"
          alt="Transactions App UI image"
          imgSrc={imagesPath + "transactionsapp.jpg"}
          figProtoLink="https://www.figma.com/proto/wFFf9ryuyQZEu4avqtvdtq/Transactions-App?type=design&node-id=1-2&t=pr9s3mEdEwfOD7zR-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design"
        />
        <WorkPost
          title="Articles App"
          alt="Articles App UI image"
          imgSrc={imagesPath + "articlesapp.jpg"}
        />
        <WorkPost
          title="Food App"
          alt="Food App UI image"
          imgSrc={imagesPath + "foodapp.jpg"}
          figProtoLink="https://www.figma.com/proto/hgwZEp08VhEZTWDQdwykFS/Food-App?type=design&node-id=439-238&t=vDz2DnS6iSYap5hX-1&scaling=scale-down&page-id=439%3A6&starting-point-node-id=439%3A238&mode=design"
        />
      </div>
    </div>
  );
};

export default MyDesigns;
