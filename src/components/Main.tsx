import dynamic from "next/dynamic";
import { IoIosLink } from "react-icons/io";

import cards from "./CardPortfolio";

const Dinamico = dynamic(() => import("./Referencia"), {
  ssr: false,
});

export default function Main() {
  return (
    <main
      id="idmain"
      className="scrollStyle relative h-[100svh] max-h-[972px] min-h-[375px] w-full snap-x snap-mandatory snap-start overflow-y-hidden overflow-x-scroll whitespace-nowrap px-[10vw] py-[5svh] sm:min-h-fit sm:bg-opacity-100 md:h-[90vh] 2xl:py-20 max-sm:landscape:min-h-[320px] max-sm:landscape:py-1"
    >
      <Dinamico />

      {cards.map((card, index) => (
        <>
          <div
            key={index}
            className="relative mr-0 inline-block h-full w-[40svh] min-w-[180px] max-w-sm snap-start snap-always scroll-ml-[8vw] rounded-l-md bg-white/60 px-2 align-middle shadow-2xl sm:min-h-[320px] 2xl:max-w-md portrait:max-sm:w-[75vw] landscape:lg:h-5/6 dark:bg-zinc-100/80"
          >
            <ul className="h-full w-full snap-y snap-mandatory overflow-x-hidden overflow-y-scroll py-[17%] sm:py-[5vh] 2xl:py-3">
              {card.conteúdo.map((img, index) => (
                <li
                  key={index}
                  className="m-auto mb-[15%] h-auto w-[80%] max-w-[280px] snap-center snap-always overflow-hidden rounded-2xl shadow-2xl shadow-black/70 2xl:my-10 portrait:max-sm:mb-[5svh] landscape:max-w-[70%] landscape:lg:max-w-[60%]"
                >
                  {img}
                </li>
              ))}
            </ul>
          </div>
          <aside
            key={`${index}-aside`}
            className="mr-2 inline-flex h-full w-[25vh] min-w-min max-w-[270px] snap-end snap-always scroll-mr-[5vw] flex-col justify-between overflow-y-auto rounded-r-md bg-zinc-900/10 py-7 align-middle shadow-2xl backdrop-blur-3xl sm:min-h-[320px] max-md:landscape:py-3 landscape:lg:h-5/6 dark:bg-zinc-900/50"
          >
            <div className="px-3">
              <h1 className="whitespace-normal text-2xl font-light text-white dark:text-zinc-100">
                {card.title}
              </h1>

              <div className="py-3">
                <span className="whitespace-normal text-base font-light text-white dark:text-zinc-100">
                  {card.info}
                </span>
              </div>
            </div>
            <div className="px-1">
              <a
                href={card.link}
                className="text-gray-900 visited:text-gray-900 dark:text-zinc-100"
                target="_blank"
              >
                <span className="inline-flex w-full items-center gap-2 whitespace-normal rounded px-2 py-1 text-lg font-light transition-colors hover:bg-gray-900/10 dark:text-zinc-400 dark:hover:bg-white/10">
                  <IoIosLink size={20} className="stroke-0" />
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
