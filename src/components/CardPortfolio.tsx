import Image from "next/image";

import churras1 from "../../public/churrascometro/Screen-Churras01.png";
import churras2 from "../../public/churrascometro/Screen-Churras02.png";
import churras3 from "../../public/churrascometro/Screen-Churras03.png";
import churras4 from "../../public/churrascometro/Screen-Churras04.png";
import churras5 from "../../public/churrascometro/Screen-Churras05.png";
import churras6 from "../../public/churrascometro/Screen-Churras06.png";


import wm1 from "../../public/whatmovie/WhatMovie01.png";
import wm2 from "../../public/whatmovie/WhatMovie02.png";
import wm3 from "../../public/whatmovie/WhatMovie03.png";
import wm4 from "../../public/whatmovie/WhatMovie04.png";
import wm5 from "../../public/whatmovie/WhatMovie05.png";
import wm6 from "../../public/whatmovie/WhatMovie06.png";
import wm7 from "../../public/whatmovie/WhatMovie07.png";



const relogio = [
  <iframe
    src="https://michaelhjacob.github.io/relogio-analogico/"
    title="Relógio Analógico"
    width="100%"
    className="min-h-[100px] h-[32svh] max-h-[290px] landscape:lg:h-[24svh] landscape:2xl:max-h-72 portrait:h-[63vw] "
  ></iframe>,

  <iframe
    src="https://michaelhjacob.github.io/relogio-analogico/"
    title="Relógio Analógico"
    className="w-[170%] min-h-[170px] h-[55svh] max-h-[493px] portrait:h-[107vw] landscape:lg:h-[41svh] landscape:2xl:max-h-[450px]"
  ></iframe>,
];

const imgChuras = [
  <Image
    src={churras1}
    alt="Captura de tela do Churrascômetro"
    className="object-contain w-full"
  />,
  <Image
    src={churras2}
    alt="Captura de tela do Churrascômetro"
    className="object-contain w-full"
  />,
  <Image
    src={churras3}
    alt="Captura de tela do Churrascômetro"
    className="object-contain w-full"
  />,
  <Image
    src={churras4}
    alt="Captura de tela do Churrascômetro"
    className="object-contain w-full"
  />,
  <Image
    src={churras5}
    alt="Captura de tela do Churrascômetro"
    className="object-contain w-full"
  />,
  <Image
    src={churras6}
    alt="Captura de tela do Churrascômetro"
    className="object-contain w-full"
  />,
];
const printWM = [
  <Image src={wm1} alt="Início da página de detalhes sobre um filme contend capa do filme, algumas informações de descrição e parte da sinopse" className="object-contain w-full"/>,
  <Image src={wm2} alt="Página de detalhes sobre um filme exibindo área de videos e mais detalhes" className="object-contain w-full"/>,
  <Image src={wm3} alt="Página de detalhes sobre um filme exibindo parte da área de traduções, elenco e equipe e recomendações" className="object-contain w-full"/>,
  <Image src={wm4} alt="Página de Filtro, na área do menu com alguns campos selecionados" className="object-contain w-full"/>,
  <Image src={wm5} alt="Página de Filtro exibindo resultado de filtro e menu superior de acesso rápido" className="object-contain w-full"/>,
  <Image src={wm6} alt="Área de busca ativa, com resultado da busca sendo exibido" className="object-contain w-full"/>,
  <Image src={wm7} alt="Página Home" className="object-contain w-full"/>,
];

const cards = [
  {
    title: "What Movie",

    info: (
      <>
        <h3 className="text-lg font-light py-1">Catálogo de filmes online</h3>
        <p className="py-1">
        A Plataforma web que atua como um catálogo de filmes está sendo desenvolvida utilizando Next.js, TypeScript e Tailwind Css, e utiliza API TMDB.
        </p>
        <p className="text-sm py-1">
        Fui responsável por todas as etapas do projeto, desde a concepção da ideia até o layout do design. Com um foco profissional, o desenvolvimento teve como objetivo expandir e mostrar minhas habilidades com Next.js e React.
        </p>
      </>
    ),
    conteúdo: printWM,
    link: "https://wm-whatmovie.vercel.app",
  },
  {
    title: "Churrascômetro",

    info: (
      <>
        <h3 className="text-lg font-light py-1">Projeto Integrador Senac</h3>
        <p className="py-1">
          O site calcula uma quantidade ideal de Carne e bebidas com base na
          quantidade Adultos, Crianças e Duração
        </p>
        <span className="text-xs font-light py-1">
          Participaram do projeto:
          <br />
        </span>{" "}
        <p className="text-sm py-1">
          Michael Henrique Jacob; Murilo Henrique Nellis; Mariana de Freitas
          Azevedo Alencar; Misael Oliveira Soares; Natalia Romo; Paulo Henrique
          de Oliveira
        </p>
      </>
    ),
    conteúdo: imgChuras,
    link: "https://michaelhjacob.github.io/Churrascometro/",
  },
  {
    title: "Relógio Analógico",
    info: (
      <p>
        Um simple projeto criado como o intuito de utilizar a propriedade
        transforme com JavaScript
      </p>
    ),
    conteúdo: relogio,
    link: "https://michaelhjacob.github.io/relogio-analogico/",
  },
];

export default cards;
