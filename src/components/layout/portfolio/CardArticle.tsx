export interface CardSize {
  size: "small" | "middle" | "large";
}

export interface CardTec {
  tec: string[];
}

interface ArticleType extends CardSize {
  children: React.ReactNode;
  order?: number;
}

export default function CardArticle({ size, children, order }: ArticleType) {
  const place = [" order-1 ", " order-2 ", " order-3 "];

  let space = " lg:grid-cols-[20rem_auto] xl:grid-cols-[24rem_auto] ";
  switch (size) {
    case "small":
      space = "";
      break;
    case "middle":
      space += " md:col-span-2";
      break;
    case "large":
      space += " md:grid-cols-[18rem_auto]  md:col-span-3 ";
      break;
  }
  if (order) {
    space += place[order - 1];
  }

  return (
    <article
      className={`${space} col-span-1 row-span-1 grid auto-rows-auto grid-cols-1 content-between overflow-clip rounded-2xl bg-backgroundCard xl:min-h-[33rem]`}
    >
      {children}
    </article>
  );
}

export function CardHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <header className="article-content col-span-1 row-span-1">
      <h3 className="title-3">{title}</h3>
      <p className="font-sans text-base font-normal capitalize leading-none text-textSubTitle">
        {subtitle}
      </p>
    </header>
  );
}

export function CardImage({ size, children }: ArticleType) {
  let space = "";
  switch (size) {
    case "small":
      space = "h-52";
      break;
    case "middle":
      space += " max-lg:h-80 lg:row-span-4 lg:order-none ";
      break;
    case "large":
      space += " md:row-span-4 md:order-none ";
      break;
  }
  return (
    <picture
      className={`${space} order-first col-span-1 row-span-1 overflow-clip max-md:h-52`}
    >
      {children}
    </picture>
  );
}

export function CardTec({ tec }: CardTec) {
  return (
    <div className="article-content col-span-1 row-span-1">
      <h4 className="title-4">Tecnologias:</h4>
      <ol className="flex w-full list-none flex-wrap gap-3">
        {tec.map((item, index) => (
          <li
            key={index}
            className="rounded-lg bg-backgroundSecondary px-2 py-1 text-left text-base font-light capitalize text-textTertiary"
          >
            <strong>{item}</strong>
          </li>
        ))}
      </ol>
    </div>
  );
}
