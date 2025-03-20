import Image from "next/image";

import { CardSize, CardTec } from "./CardArticle";
import churras from "./Images/ChurrascometroMobile.png";
import wm from "./Images/WhatMovieDesktop.png";

interface DataPortfolioType extends CardSize, CardTec {
  title: string;
  subtitle: string;
  order: number;
  info: JSX.Element;
  picture: JSX.Element;
  labelLink: JSX.Element | string;
  url: string;
}

const data: DataPortfolioType[] = [
  {
    title: "What Movie",
    subtitle: "Catálogo de filmes online",
    size: "large",
    order: 1,
    tec: ["Next.js", "TypeScript", "TailwindCSS", "Rest API"],
    info: (
      <>
        <p className="text-block">
          Site de busca e informações sobre filmes. Exibe lista de lançamentos
          em serviços de streaming, permite pesquisa por nome e oferece filtros
          personalizados.
        </p>
      </>
    ),
    picture: (
      <div className="relative h-full bg-gradient-to-br from-[#06346A] via-[#381D46] to-[#511C13]">
        <Image
          src={wm}
          alt="Captura de tela na página de filtro do site whatmovie.com.br"
          className="sm:img-crisp-edges object-cover object-top md:min-h-[120%] md:object-left-top"
          sizes="(max-width: 640px) 95vw, (max-width: 768px) 544px, (max-width: 1280px) 916px, (max-width: 1536px) 966px, 1056px"
          fill
          quality={100}
        />
      </div>
    ),
    labelLink: "WhatMovie.com.br",
    url: "https://whatmovie.com.br",
  },
  {
    title: "Churrascômetro",
    subtitle: "Projeto Integrador Senac",
    size: "middle",
    tec: ["Css", "JavaScript", "Html"],
    order: 3,
    info: (
      <p className="text-block">
        Calculadora para estimar a quantidade de alimentos e bebidas para
        churrascos. Desenvolvido como parte de um trabalho em grupo na
        graduação.
      </p>
    ),
    picture: (
      <div className="relative h-full bg-gradient-to-b from-[#281D1B] to-[#2C2A2A]">
        <Image
          src={churras}
          alt="Captura de tela do Churrascômetro"
          className="sm:img-crisp-edges mx-auto mt-5 max-w-[min(90%,288px)] object-cover object-top drop-shadow-[0_14px_30px_rgba(0,0,0,0.70)] sm:max-w-none sm:object-none lg:my-auto lg:ml-[30%] lg:object-left xl:ml-0 xl:object-center"
          fill
          sizes="(max-width: 640px) 90vw, 270px"
          quality={100}
        />
      </div>
    ),
    labelLink: (
      <>
        Michaelhjacob.Github.io/
        <wbr />
        Churrascometro
      </>
    ),
    url: "https://michaelhjacob.github.io/Churrascometro/",
  },
  {
    title: "Relógio Analógico",
    subtitle: "Projeto JavaScript",
    size: "small",
    tec: ["JavaScript", "Css", "Html"],
    order: 2,
    info: (
      <p className="text-block">
        Um simple projeto criado como o intuito de utilizar a propriedade
        transforme com JavaScript
      </p>
    ),
    picture: (
      <div className="h-full w-full bg-[#F7F6F6]">
        <iframe
          src="https://michaelhjacob.github.io/relogio-analogico/"
          title="Relógio Analógico"
          width="100%"
          className="mx-auto aspect-[4/3] h-[20rem] w-auto translate-x-[9%]"
        ></iframe>
      </div>
    ),
    labelLink: (
      <>
        Michaelhjacob.Github.io/
        <wbr />
        Relogio-Analogico
      </>
    ),
    url: "https://michaelhjacob.github.io/relogio-analogico/",
  },
];

export default data;
