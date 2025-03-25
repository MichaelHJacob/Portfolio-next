export default function Sobre() {
  return (
    <section
      id="about"
      className="bg-backgroundSecondary md:bg-backgroundSecondary/70 md:py-8 md:backdrop-blur-md xl:py-12"
    >
      <h2 className="subtitle md:sr-only">Sobre</h2>
      <div className="content flex flex-col gap-5 md:flex-row md:gap-8">
        <p className="text-block intersect-once intersect:fade-up max-w-96 tracking-wide md:intersect:animate-delay-500">
          Desenvolvedor front-end com experiência prática em projetos utilizando
          tecnologias como React, Next.js, TypeScript e Tailwind CSS. Hábil em
          criar interfaces responsivas e mobile-first, além de integrar
          aplicações a APIs REST.
        </p>
        <p className="text-block intersect-once intersect:fade-up max-w-96 tracking-wide intersect:animate-delay-200 md:intersect:animate-delay-700">
          Transição de carreira fundamentada em uma trajetória de
          desenvolvimento pessoal, com sólida experiência em trabalho em equipe,
          organização e resolução de problemas.
        </p>
      </div>
    </section>
  );
}
