import Image from "next/image";
import WorkPost from "./components/work-post";

export default function Home() {
  return (
    <div>
      <div className="h-screen min-w-screen">
        <div className="absolute z-20 flex flex-col items-center justify-center w-full h-full gap-3 backdrop-blur-xs">
          <p className="text-4xl ">Ahmed Awsi</p>
          <p className="px-6 text-center opacity-70">
            B.Sc. in CS & IT | Software developer & UI/UX designer
          </p>
        </div>
        <div className="z-40 flex flex-col bottom-[-80px] w-full h-fit absolute justify-center">
          {/* <p class="opacity-40 text-xs self-center mb-2">Scroll Down</p> */}

          <div className="flex self-center -translate-x-[3.75px]">
            <div className="absolute w-[7px] h-[7px] rounded-full bg-gray-50" />
            {/* <div className="absolute w-[7px] h-[7px] rounded-full bg-gray-50 animate-ping"/> */}
          </div>
          {/* <div className="self-center w-[7px] h-[7px] rounded-full bg-gray-50"/> */}
          <div className="w-[1.5px] h-[185px] bg-gray-400 self-center" />
        </div>

        <Image
          src="media/ahmedphoto.JPG"
          className="z-0 object-cover w-full h-full opacity-20"
        />
      </div>
      <div className="flex flex-col justify-center w-full h-fit">
        <div className="h-fit pt-[90px] w-full flex flex-col gap-5 justify-center">
          <p className="text-2xl font-medium text-center">My Work</p>
          <div className="bg-[#141414] mb-11 rounded-xl py-4 px-4 self-center gap-5 grid items-center justify-center content-center
            w-[80%] grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3">
            <WorkPost
              title="test one two three"
              imgSrc="media/ahmedphoto.JPG"
            />
            <WorkPost
              title="test one two three"
              imgSrc="media/ahmedphoto.JPG"
            />
            <WorkPost
              title="test one two three"
              imgSrc="media/ahmedphoto.JPG"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
