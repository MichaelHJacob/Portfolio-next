import "../globals.css";

const CardInfo = ({
  title,
  info,
}: {
  title: string;
  info: (string | JSX.Element)[];
}) => {
  return (
    <div className="w-auto h-auto py-2.5  ">
      <h1 className=" py-4 text-zinc-700/70 text-base dark:text-white font-bold mx-5">
        {title}
      </h1>

      <ul
        className={`${
          info.length > 3 ? "grid-cols-2" : "grid-cols-1"
        } grid h-auto  max-w-xs leading-normal `}
      >
        {info.map((value, index) => (
          <li
            key={index}
            className="  text-zinc-700/80 dark:text-white text-sm font-normal leading-normal mx-5 pb-1"
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
      className=" min-h-[44vh]  w-full bg-gray-200/70 dark:bg-zinc-900/50   backdrop-blur-3xl   flex justify-center items-start snap-start snap-always "
      id="idFooter"
    >
      <div className="flex  flex-row   justify-start sm:justify-between items-start flex-wrap sm:pt-8 sm:p-8 max-w-7xl w-full ">
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
            >
              <span className=" rounded-md p-2 m-[-0.5rem] hover:bg-gray-100 transition-colors duration-1000 ">
                {" "}
                LinkedIn
              </span>
            </a>,
          ]}
        />
      </div>
    </footer>
  );
}
