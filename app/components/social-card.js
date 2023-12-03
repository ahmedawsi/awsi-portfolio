import Image from "next/image";

export default function SocialCard({ alt, title, imgSrc, socialLink }) {
  return (
    <a href={socialLink} target="_blank" className="w-fit h-fit">
      <div className="flex flex-row items-center w-full h-fit gap-2 py-2 px-3 bg-[#282828] rounded-xl">
        <Image
          alt={alt}
          src={imgSrc}
          className="object-cover h-[30px] w-[30px] rounded-md drop-shadow-md"
          width="30"
          height="30"
        />
        <p>{title}</p>
      </div>
    </a>
  );
}