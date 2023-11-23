import Image from "next/image";

export default function WorkPost({ title, imgSrc }) {
  return (
    <div className="flex flex-col h-fit w-full gap-2 pt-3 pb-2 px-3 bg-[#282828] rounded-md">
      <Image
        src={imgSrc}
        className="object-cover w-full rounded-md h-44 tablet:h-52 desktop:h-64 drop-shadow-md"
      />
      <p>{title}</p>
    </div>
  );
}