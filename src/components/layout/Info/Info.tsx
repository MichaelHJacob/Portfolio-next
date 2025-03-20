import Link from "@/components/common/Link";

import BlockInfo from "./BlockInfo";

export default function Info() {
  return (
    <section id="info" className="bg-backgroundSecondary">
      <h2 className="subtitle">Mais Informações</h2>
      <ul className="content flex list-none flex-wrap items-start justify-between">
        <BlockInfo
          title="Formação"
          cardStyle
          info={[
            <>
              <strong className="text-infoStrong -mt-1 mb-1 block">
                Superior Tecnólogo em Análise e Desenvolvimento de Sistemas
              </strong>

              <ul className="list-none">
                <li className="text-infoCard">Centro Universitário Senac</li>
                <li className="text-infoDate -mb-[5px]">
                  Fev. 2021 - Jun. 2023
                </li>
              </ul>
            </>,
            <>
              <strong className="text-infoStrong -mt-1 mb-1 block">
                Curso Técnico de Hardware, Redes e Notebooks
              </strong>

              <ul className="list-none">
                <li className="text-infoCard">Microlins - Birigui; SP.</li>
                <li className="text-infoDate -mb-[5px]">
                  Jun. 2012 - Fev. 2014
                </li>
              </ul>
            </>,
            <>
              <strong className="text-infoStrong -mt-1 mb-1 block">
                Curso 1Z0-071 - Oracle Database SQL
              </strong>

              <ul className="list-none">
                <li className="text-infoCard">Udemy</li>
                <li className="text-infoDate -mb-[5px]">Jan. 2025</li>
              </ul>
            </>,
          ]}
        />
        <BlockInfo
          title="Skills"
          cardStyle
          info={[
            <p key={1} className="text-infoCard">
              <strong className="text-infoStrong">Front-End:</strong> React,
              Next.js, TypeScript, Tailwind CSS, HTML5, CSS3, JavaScript ES6+
            </p>,
            <p key={2} className="text-infoCard">
              <strong className="text-infoStrong">
                Banco de Dados & APIs:
              </strong>
              SQL (Oracle SQL e MySQL), Integração com APIs REST.
            </p>,
            <p key={3} className="text-infoCard">
              <strong className="text-infoStrong">Ferramentas:</strong> Git, VS
              Code, Figma (prototipação básica).
            </p>,
            <p key={4} className="text-infoCard">
              <strong className="text-infoStrong">Outros:</strong> Design
              responsivo, metodologias ágeis (Scrum)
            </p>,
            <p key={5} className="text-infoCard">
              <strong className="text-infoStrong">Idiomas:</strong> Inglês
              intermediário, Português nativo
            </p>,
          ]}
        />
        <BlockInfo
          title="Contato"
          info={[
            <Link
              key="mail"
              mail
              url="michael_h.jacob@outlook.com"
              label="michael_h.jacob@outlook.com"
            />,
            <Link
              key="linkedIn"
              url="https://www.linkedin.com/in/michaelhjacob/"
              label="LinkedIn.com/in/michaelhjacob"
            />,
            <Link
              key="GitHub"
              url="https://github.com/MichaelHJacob"
              label="Github.com/MichaelHJacob"
            />,
          ]}
        />
        <BlockInfo
          title="Currículo"
          info={[
            <Link
              key="cv"
              url="/CV_Michael_Henrique_Jacob.pdf"
              download
              label="CV_Michael_Henrique_Jacob.pdf"
            />,
          ]}
        />
      </ul>
    </section>
  );
}
