"use client";
import Image from "next/image";
import photo from "../../../public/assets/PhotoProfille.png";
import download from "../../../public/assets/iconsHeader/download.svg";
import "../css/home.css";
import { useMediaQuery } from "@react-hook/media-query";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <main className="bg-[#2A2E35] text-lg text-zinc-300 font-firaCode max-md:p-0!">
      <div className="min-h-screen overflow-hidden p-0!">
        <div className="grid grid-cols-12 min-h-screen max-md:grid-cols-5 max-md:pb-24 max-md:text-center">
          {/* === Left === */}
          <div className="flex items-center relative col-span-5 max-md:hidden">
            <div
              className="w-4/6 h-full bg-[#972Da8] absolute left-0 top-0 z-10 max-md:hidden"
              style={{ clipPath: "polygon(0 0, 46% 0, 79% 100%, 0% 100%)" }}
            />
            <div className="w-1/2 h-5/6 rounded-xl ml-16 bg-[#1E1E1E] z-20 max-md:flex max-md:items-center max-md:justify-center max-md:my-4 max-md:mx-0">
              <Image
                src={photo}
                alt=""
                className="w-full h-full object-cover max-md:h-full max-md:object-cover max-md:m-auto max-md:w-11/12! max-md:my-0! max-md:mx-auto!"
              />
            </div>
          </div>
          {/* === Right === */}
          <div className="flex flex-col justify-center col-span-7 pr-10 max-md:pr-0 max-md:grid-rows-1 max-md:pr-0! max-md:w-11/12 max-md:my-0 max-md:mx-auto max-md:grid max-md:items-center max-md:justify-center">
            <div className="">
              <h1 className="text-[#972Da8] text-5xl font-mrRobot max-md:text-4xl max-md:text-center max-md:p-12">
                Hi, I'm{" "}
                <span className="text-zinc-300">
                  Gustavo <br />
                  Alfredo.
                </span>
                <br />A Web <br />
                Developer.
              </h1>
              <div className="flex items-center justify-center">
                {isMobile && (
                  <div className="w-2/5 h-5/6 rounded-xl bg-[#1E1E1E] z-20 flex items-center justify-center mb-10">
                    <Image
                      src={photo}
                      alt=""
                      className="object-cover m-auto rounded-2xl"
                    />
                  </div>
                )}
              </div>
              <p className="text-base my-4 text-justify w-3/4 max-lg:w-full max-md:text-lg">
                {" "}
                Sou desenvolvimento web, utilizando TypeScript, React e Vue no
                front-end, e Java Spring e NodeJS no back-end. Possuo habilidade
                em prototipagem utilizando o Figma, além de conhecimento na
                utilização de bancos de dados como PostgreSQL e MySQL. 
              </p>
            </div>
            <div className="flex self-start my-4 max-md:items-center max-md:justify-center max-md:w-full max-md:my-9">
              <a
                href=""
                className="btnMain z-20 rounded-3xl relative border-4 border-dashed border-[#972DA8] flex self-start items-center overflow-hidden"
              >
                <span className="pl-2 pr-2 pt-3 pb-3 font-mrRobot font-light">
                  Download CV
                </span>
                <span className="bg-[#972DA8] flex items-center justify-center rounded-3xl p-2">
                  <Image src={download} alt="Download currículo" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
