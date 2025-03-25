import Image from "next/image";

import Info from "../components/layout/Info/Info";
import Home from "../components/layout/home/Home";
import Portfolio from "../components/layout/portfolio/Portfolio";

export default function Page() {
  return (
    <>
      <main>
        <article>
          <Home />
          <Portfolio />
          <Info />
          <Image
            src="/screenshot.png"
            alt="background"
            loading="eager"
            fill
            sizes="100vw"
            className="top-0 -z-50 mx-auto h-[100svh] max-h-[40.5rem] min-h-[42rem] max-w-[calc(1536px+6rem)] animate-opacityBlur object-cover object-center opacity-30 blur-sm sm:h-[60svh] sm:max-h-[45rem] sm:object-left md:h-[95svh] md:max-h-[61.5rem] md:min-h-[50rem] lg:max-h-[59.5rem] xl:max-h-[61.5rem]"
            quality={100}
          />
        </article>
      </main>
    </>
  );
}
