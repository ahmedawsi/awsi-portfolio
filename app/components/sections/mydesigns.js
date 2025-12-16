import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import DesignCard from "@/components/DesignCard";
import FadeContent from "@/components/FadeContent";

const MyDesigns = () => {
  const imagesPath = "/media/";

  const items = [
    {
      image: imagesPath + "musicapp.jpg",
      title: "Music App",
      handle: "",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: null
    },
    {
      image: imagesPath + "moviesapp.jpg",
      title: "Movies App",
      handle: "",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(145deg, #8B5CF6, #000)",
      url: null
    },
    {
      image: imagesPath + "transactionsapp.jpg",
      title: "Transactions App",
      handle: "",
      borderColor: "#EC4899",
      gradient: "linear-gradient(145deg, #EC4899, #000)",
      url: "https://www.figma.com/proto/wFFf9ryuyQZEu4avqtvdtq/Transactions-App?type=design&node-id=1-2&t=pr9s3mEdEwfOD7zR-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design"
    },
    {
      image: imagesPath + "articlesapp.jpg",
      title: "Articles App",
      handle: "",
      borderColor: "#14B8A6",
      gradient: "linear-gradient(145deg, #14B8A6, #000)",
      url: null
    },
    {
      image: imagesPath + "foodapp.jpg",
      title: "Food App",
      handle: "",
      borderColor: "#F97316",
      gradient: "linear-gradient(145deg, #F97316, #000)",
      url: "https://www.figma.com/proto/hgwZEp08VhEZTWDQdwykFS/Food-App?type=design&node-id=439-238&t=vDz2DnS6iSYap5hX-1&scaling=scale-down&page-id=439%3A6&starting-point-node-id=439%3A238&mode=design"
    }
  ];

  return (
    <div className="flex flex-col items-center gap-4 pt-10 w-full px-4 tablet:px-0">
      <FadeContent>
        <p id="mywork" className="pt-4 text-2xl font-serif text-center pb-12">
          Designs
        </p>
      </FadeContent>
      <div className="w-full max-w-[1000px] pb-20 bg-transparent">

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <FadeContent key={i} delay={200} blur={true} >
              <DesignCard
                image={item.image}
                title={item.title}
                url={item.url}
                loading="eager"
              />
            </FadeContent>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyDesigns;
