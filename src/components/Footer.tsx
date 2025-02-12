const CardInfo = ({
  title,
  info,
}: {
  title: string;
  info: (string | JSX.Element)[];
}) => {
  return (
    <div className="h-auto w-auto py-2.5">
      <h1 className="mx-5 py-4 text-base font-bold text-zinc-700/70 dark:text-white">
        {title}
      </h1>

      <ul
        className={`${info.length > 3 ? "grid-cols-2" : "grid-cols-1"} grid h-auto max-w-xs leading-normal`}
      >
        {info.map((value, index) => (
          <li
            key={index}
            className="mx-5 pb-1 text-sm font-normal leading-normal text-zinc-700/80 dark:text-white"
          >
            {typeof value === "string" ? <p>{value}</p> : <>{value}</>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Footer() {
  return (
    <footer
      className="flex min-h-[44vh] w-full snap-start snap-always items-start justify-center bg-gray-200/70 backdrop-blur-3xl dark:bg-zinc-900/50"
      id="idFooter"
    >
      <div className="flex w-full max-w-7xl flex-row flex-wrap items-start justify-start sm:justify-between sm:p-8 sm:pt-8">
        {/* <CardInfo
          title="Outros"
          info={[
            <a href="/Curriculum.pdf" download>
              <span className=" rounded-md p-2 m-[-0.5rem] hover:bg-gray-100 transition-colors duration-1000">
                Pdf - Currículo
              </span>
            </a>,
          ]}
        /> */}
        <CardInfo
          title="Formação e mais"
          info={[
            "Senac - Graduação em Análise e Desenvolvimento de Sistemas",
            "Inglês básico",
          ]}
        />
        <CardInfo
          title="Habilidades"
          info={[
            "React",
            "JavaScript",
            "TypeScript",
            "HTML",
            "Css",
            "Tailwind",
            "Figma",
            "Pixel Perfect",
            "Metodologia ágeis",
          ]}
        />
        <CardInfo
          title="Entre em contato"
          info={[
            "michael_h.jacob@hotmail.com",
            <a
              href="https://www.linkedin.com/in/michael-henrique-jacob-93703421a/"
              target="_blank"
              key="www.linkedin.com/in/michaelhjacob"
            >
              <span className="m-[-0.5rem] rounded-md p-2 transition-colors duration-1000 hover:bg-gray-100">
                LinkedIn
              </span>
            </a>,
          ]}
        />
      </div>
    </footer>
  );
}
