import React from "react";
import DesignCard from "@/components/DesignCard";
import FadeContent from "@/components/FadeContent";

const MyDesigns = () => {
  const items = [
    {
      image: "/media/musicapp.webp",
      title: "Music App",
      url: null
    },
    {
      image: "/media/moviesapp.webp",
      title: "Movies App",
      url: null
    },
    {
      image: "/media/transactionsapp.webp",
      title: "Transactions App",
      url: "https://www.figma.com/proto/wFFf9ryuyQZEu4avqtvdtq/Transactions-App?type=design&node-id=1-2&t=pr9s3mEdEwfOD7zR-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design"
    },
    {
      image: "/media/articlesapp.webp",
      title: "Articles App",
      url: null
    },
    {
      image: "/media/foodapp.webp",
      title: "Food App",
      url: "https://www.figma.com/proto/hgwZEp08VhEZTWDQdwykFS/Food-App?type=design&node-id=439-238&t=vDz2DnS6iSYap5hX-1&scaling=scale-down&page-id=439%3A6&starting-point-node-id=439%3A238&mode=design"
    }
  ];

  return (
    <section className="flex flex-col items-center gap-4 pt-10 w-full px-4 tablet:px-0">
      <FadeContent>
        <h2 id="mywork" className="pt-4 text-2xl font-serif text-center pb-12">
          Designs
        </h2>
      </FadeContent>
      <div className="w-full max-w-[1000px] pb-20 bg-transparent">
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <FadeContent key={i} delay={200} blur={true}>
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
    </section>
  );
};

export default MyDesigns;
