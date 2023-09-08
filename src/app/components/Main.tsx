import "../globals.css";
import cards from "./CardPortfolio";
import { IoIosLink } from "react-icons/io";
import dynamic from "next/dynamic";
const Dinamico = dynamic(() => import("./Referencia"), {
  ssr: false,
});

export default function Main() {
  return (
    <main
      id="idmain"
      className="max-sm:landscape:py-1 min-h-[375px] max-sm:landscape:min-h-[320px] sm:min-h-fit sm:bg-opacity-100 w-full  h-[100svh]  md:h-[90vh] max-h-[972px] py-[5svh]  2xl:py-20 px-[10vw]   overflow-x-scroll overflow-y-hidden whitespace-nowrap  snap-start snap-x snap-mandatory relative scrollStyle "
    >
      <Dinamico />

      {cards.map((card, index) => (
        <>
          <div
            key={index}
            className=" bg-white/60 dark:bg-zinc-100/80 px-2 h-full sm:min-h-[320px] landscape:lg:h-5/6 min-w-[180px] portrait:max-sm:w-[75vw]     w-[40svh]  max-w-sm 2xl:max-w-md   inline-block align-middle scroll-ml-[8vw] snap-start snap-always mr-0 rounded-l-md shadow-2xl "
          >
            <ul className="overflow-y-scroll  overflow-x-hidden w-full h-full  snap-y snap-mandatory py-[17%]   sm:py-[5vh] 2xl:py-3 ">
              {card.conteúdo.map((img, index) => (
                <li
                  key={index}
                  className=" w-[80%] max-w-[280px] landscape:max-w-[70%] landscape:lg:max-w-[60%]  h-auto     m-auto  shadow-2xl shadow-black/70  rounded-2xl snap-center snap-always portrait:max-sm:mb-[5svh]  mb-[15%] 2xl:my-10 overflow-hidden  "
                >
                  {img}
                </li>
              ))}
            </ul>
          </div>
          <aside
          key={index}
            className=" 
          bg-zinc-900/10 dark:bg-zinc-900/50  backdrop-blur-3xl  h-full landscape:lg:h-5/6 sm:min-h-[320px]  min-w-min w-[25vh] max-w-[270px]  inline-flex justify-between flex-col align-middle scroll-mr-[5vw] snap-end snap-always mr-2 shadow-2xl rounded-r-md overflow-y-auto  max-md:landscape:py-3  py-7 "
          >
            <div className="px-3">
              <h1 className="text-white dark:text-zinc-100 whitespace-normal text-2xl font-light ">
                {card.title}
              </h1>

              <div className="py-3 ">
                <span className="text-white dark:text-zinc-100 text-base font-light whitespace-normal">
                  {card.info}
                </span>
              </div>
            </div>
            <div className="px-1 ">
              <a
                href={card.link}
                className="visited:text-gray-900 text-gray-900 dark:text-zinc-100"
                target="_blank"
              >
                <span className="inline-flex items-center gap-2 text-lg font-light whitespace-normal py-1 px-2 w-full dark:text-zinc-400 hover:bg-gray-900/10 dark:hover:bg-white/10 transition-colors rounded">
                  <IoIosLink size={20} className=" stroke-0" />
                  link
                </span>
              </a>
            </div>
          </aside>
        </>
      ))}
    </main>
  );
}
