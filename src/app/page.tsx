import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { PiLinkedinLogo } from "react-icons/pi";

import foto from "../../public/foto.png";
import { Button, ButtonMail } from "../components/BtnSocial";
import Footer from "../components/Footer";
import Fundo from "../components/Fundo";
import Main from "../components/Main";

function Sobre() {
  return (
    <div className="relative flex h-screen w-[90vw] snap-start snap-always flex-col-reverse justify-center bg-gradient-to-b from-gray-700/95 via-gray-700/50 to-transparent px-4 sm:order-last sm:col-span-1 sm:block sm:h-[50vh] sm:w-auto sm:snap-align-none sm:bg-none">
      <div className="relative z-50 flex h-auto w-full flex-wrap justify-start lg:justify-end">
        <Button
          text="LinkedIn"
          linkPage="https://www.linkedin.com/in/michaelhjacob/"
        >
          <PiLinkedinLogo
            size={25}
            className="fill-gray-900/60 stroke-0 dark:fill-white"
          />
        </Button>
        <Button text="GitHub" linkPage="https://github.com/MichaelHJacob">
          <FiGithub
            size={22}
            className="stroke-gray-900/60 stroke-[1.5px] dark:stroke-white"
          />
        </Button>
        <ButtonMail text="mail">
          <HiOutlineMail
            size={27}
            className="stroke-gray-900/60 stroke-[1.3px] dark:stroke-white"
          />
        </ButtonMail>
      </div>
      <div className="relative z-50 mb-3 w-3/5 max-w-lg rounded-3xl max-sm:bg-gray-900/50 max-sm:p-5 max-sm:backdrop-blur-3xl sm:w-full sm:py-2">
        <p className="text-base font-semibold leading-normal text-white sm:text-lg sm:font-normal sm:tracking-tight sm:text-gray-900/80 sm:dark:text-white">
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
    <section className="relative grid w-full grid-cols-[auto_auto] grid-rows-[auto_auto] overflow-x-clip sm:justify-evenly">
      <div className="z-50 col-span-2 flex h-[100svh] w-auto snap-end snap-always flex-col items-start justify-end bg-black/30 px-4 backdrop-blur-3xl max-sm:pb-4 sm:col-span-1 sm:h-[50vh] sm:bg-inherit sm:backdrop-blur-none">
        <h1 className="rounded-sm bg-gray-700/80 px-2 text-xl font-light tracking-normal text-white sm:bg-gray-900/50 dark:sm:bg-gray-900/90">
          Oi, sou Michael Jacob
        </h1>

        <h1 className="mr-[-4px] font-sans text-7xl font-bold tracking-tight text-gray-700/80 max-sm:ml-[-4px] sm:ml-[-4.5px] sm:text-8xl sm:text-gray-900/50 lg:ml-[-6px] lg:text-9xl dark:sm:text-gray-900/90">
          Dev. Front-end
        </h1>
      </div>
      <Sobre />
      <div className="relative z-30 row-span-2 h-screen w-[20vw] bg-gradient-to-b from-gray-700/95 via-gray-700/50 to-transparent max-md:w-[10vw] sm:bg-none">
        <div className="absolute right-0 h-full w-[30vw] min-w-[40vh] skew-x-12 overflow-clip bg-yellow-400/0 portrait:w-[50vw]">
          <div className="absolute right-[-10vh] top-1/2 h-screen w-[calc(100%_+_20vh)] min-w-[100vh] translate-y-[-50%] skew-x-[-12deg] bg-green-400/0 square:right-[calc(-40vh_+_18vw)] square:bg-red-700/0 portrait:right-[calc(-40vh_+_28vw)]">
            <Image
              src={foto}
              alt="foto"
              className="foto object-cover"
              fill={true}
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
      <Fundo />
    </>
  );
}
