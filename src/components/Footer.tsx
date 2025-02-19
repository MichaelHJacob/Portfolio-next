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
        <CardInfo
          title="Currículo"
          info={[
            <a href="/CV_Michael_Henrique_Jacob.pdf" download key="cv">
              <span className="m-[-0.5rem] rounded-md p-2 transition-colors duration-1000 hover:bg-gray-100">
                Download
              </span>
            </a>,
          ]}
        />
        <CardInfo
          title="Formação"
          info={[
            "Análise e Desenvolvimento de Sistemas - Centro Universitário Senac",
            "Curso Técnico de Hardware, Redes e Notebooks - Microlins",
            "Curso 1Z0-071 / Oracle Database SQL - Udemy",
          ]}
        />
        <CardInfo
          title="Skills"
          info={[
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "TailwindCSS",
            "HTML5",
            "CSS3",
            "SQL (Oracle SQL e MySQL)",
            "Git e Github",
            "Figma (prototipação básica)",
            "Design responsivo",
            "Metodologia ágeis",
          ]}
        />
        <CardInfo
          title="Contato"
          info={[
            "michael_h.jacob@outlook.com",
            <a
              href="https://www.linkedin.com/in/michaelhjacob/"
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
