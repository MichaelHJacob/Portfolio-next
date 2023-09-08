import "./globals.css";
import Image from "next/image";
import foto from "../../public/foto.jpeg";

import Footer from "./components/Footer";
import Main from "./components/Main";

import { Button, ButtonMail } from "./components/BtnSocial";
import { FiGithub } from "react-icons/fi"
import { PiLinkedinLogo }  from "react-icons/pi"
import { HiOutlineMail }  from "react-icons/hi";

function Sobre() {
  return (
    <div className=" h-screen sm:h-[50vh] w-[90vw] sm:w-auto sm:order-last relative  flex flex-col-reverse sm:block justify-center px-4 snap-start sm:snap-align-none snap-always  sm:col-span-1  bg-gradient-to-b from-gray-700/95 via-gray-700/50 to-transparent sm:bg-none">
      <div className="flex justify-start lg:justify-end w-full h-auto flex-wrap z-50 relative">
      <Button
          text="LinkedIn"
          linkPage="https://www.linkedin.com/in/michael-henrique-jacob-93703421a/"
        >
          <PiLinkedinLogo size={25} className=" fill-gray-900/60 stroke-0 dark:fill-white"/>
        </Button>
        <Button text="GitHub" linkPage="https://github.com/MichaelHJacob">
        <FiGithub size={22} className="stroke-gray-900/60 stroke-[1.5px] dark:stroke-white" />
        </Button>
        <ButtonMail text="mail">
        <HiOutlineMail size={27} className="stroke-gray-900/60 dark:stroke-white stroke-[1.3px]" />
        </ButtonMail>
      </div>
      <div className="max-sm:bg-gray-900/50 max-sm:backdrop-blur-3xl z-50 relative  rounded-3xl w-3/5 sm:w-full  max-w-lg max-sm:p-5 sm:py-2 mb-3">
        <p className="text-white font-semibold sm:font-normal text-base  sm:text-gray-900/80 sm:text-lg leading-normal sm:tracking-tight sm:dark:text-white">
          Apaixonado por desenvolvimento Web, e por dar vida a interfaces
          incríveis, Sonho e me proponho a fazer com que lógica e programação se
          tornem mais que uma solução, tragam com sigo uma experiencia mágica e
          transformadora
        </p>
      </div>
    </div>
  );
}

function Home() {
  return (
    <section
      className="grid grid-cols-[auto_auto] grid-rows-[auto_auto] sm:justify-evenly  relative w-full overflow-x-clip "
    >
      <div className="  h-[100svh] sm:h-[50vh] w-auto  flex flex-col justify-end items-start col-span-2 sm:col-span-1 px-4 max-sm:pb-4  bg-black/30  backdrop-blur-3xl sm:bg-inherit sm:backdrop-blur-none snap-end snap-always z-50">
        <h1 className="text-white font-light text-xl tracking-normal px-2 sm:bg-gray-900/50 bg-gray-700/80 rounded-sm dark:sm:bg-gray-900/90">
          Oi, sou Michael Jacob
        </h1>

        <h1 className=" font-sans sm:text-gray-900/50 text-gray-700/80 dark:sm:text-gray-900/90 font-bold text-7xl sm:text-8xl lg:text-9xl  tracking-tight max-sm:ml-[-4px] sm:ml-[-4.5px] lg:ml-[-6px] mr-[-4px] ">
          Dev. Front-end
        </h1>
      </div>
      <Sobre />
      <div className=" max-md:w-[10vw] w-[20vw] h-screen row-span-2 relative  z-30  bg-gradient-to-b from-gray-700/95 via-gray-700/50 to-transparent sm:bg-none">
        <div className=" skew-x-12 h-full  portrait:w-[50vw] w-[30vw] min-w-[40vh] bg-yellow-400/0 absolute right-0 overflow-clip  ">
          <div
            className="absolute   bg-green-400/0 w-[calc(100%_+_20vh)]    min-w-[100vh]   skew-x-[-12deg]  top-[50%] translate-y-[-50%]  
        right-[-10vh] square:bg-red-700/0 square:right-[calc(-40vh_+_18vw)] portrait:right-[calc(-40vh_+_28vw)]  "
          >
            <Image
              src={foto}
              alt="foto"
              className=" opacity-50 grayscale-[70%] object-cover  mask "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  return (
    <>
      <Home />
      <Main />
      <Footer />
    </>
  );
}
