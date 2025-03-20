import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

import { Button, ButtonMail } from "./BtnSocial";
import Sobre from "./Sobre";

export default function Home() {
  return (
    <>
      <header className="container mx-auto flex h-[calc(100svh-4.5rem)] max-h-[40.5rem] min-h-fit w-full select-none flex-col items-start justify-end gap-4 py-5 sm:h-[calc(60svh-4.5rem)] md:h-[calc(95svh-4.5rem-16.5rem)] lg:h-[calc(95svh-4.5rem-14.5rem)] xl:h-[calc(95svh-4.5rem-16.5rem)]">
        <h1 className="mx-5 mt-72 select-text whitespace-nowrap rounded-md bg-backgroundSecondary px-2 py-2 text-xl font-medium leading-7 tracking-normal text-textPrimary sm:mx-12 md:mx-8 xl:mx-12">
          Michael Henrique Jacob
        </h1>
        <p className="subtitle text-textTertiary">Dev. Front-end</p>
      </header>
      <figure className="not-sr-only absolute left-0 top-0 -z-40 h-[45rem] w-48 sm:left-[calc((100vw-640px)/2)] md:left-[calc((100vw-768px)/2)] lg:left-[calc((100vw-1024px)/2)] xl:left-[calc((100vw-1280px)/2)] 2xl:left-[calc((100vw-1536px)/2)]">
        <Image
          src="/foto.png"
          alt="Foto de Michael Henrique Jacob"
          className="h-full object-cover object-right-top"
          width={192}
          height={720}
          quality={100}
        />
        <figcaption className="sr-only">
          Foto de Michael Henrique Jacob
        </figcaption>
      </figure>
      <address className="h-auto w-full max-sm:bg-backgroundSecondary">
        <ul className="content mx-auto flex h-full w-full list-none flex-row flex-wrap items-center justify-start gap-2 whitespace-normal py-5">
          <Button text="GitHub" linkPage="https://github.com/MichaelHJacob">
            <FaGithubAlt size={16} className="fill-textTertiary" />
          </Button>
          <Button
            text="LinkedIn"
            linkPage="https://www.linkedin.com/in/michaelhjacob/"
          >
            <FaLinkedinIn size={16} className="fill-textTertiary" />
          </Button>
          <ButtonMail text="Mail">
            <IoIosMail size={16} className="fill-textTertiary" />
          </ButtonMail>
        </ul>
      </address>
      <Sobre />
    </>
  );
}
