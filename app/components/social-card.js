import Image from "next/image";

export default function SocialCard({ title, imgSrc, socialLink }) {
  return (
    <a href={socialLink} target="_blank" className="w-fit h-fit">
      <div className="flex flex-row items-center w-full h-fit gap-2 py-2 px-3 bg-[#282828] rounded-xl">
        <img
          src={imgSrc}
          className="object-cover h-[30px] w-[30px] rounded-md drop-shadow-md"
        />
        <p>{title}</p>
      </div>
    </a>
  );
}