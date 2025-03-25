import Link from "@/components/common/Link";

import CardArticle, { CardHeader, CardImage, CardTec } from "./CardArticle";
import data from "./DataPortfolio";

export default function Portfolio() {
  return (
    <section id="projects">
      <h2 className="subtitle">Projetos</h2>
      <div className="content grid w-full auto-rows-auto grid-cols-1 gap-8 *:opacity-0 sm:gap-12 md:grid-cols-[18rem_auto_auto] md:gap-8 lg:grid-cols-[20rem_auto_auto] lg:gap-12 xl:grid-cols-[24rem_auto_auto]">
        {data.map((article, index) => (
          <CardArticle key={index} size={article.size} order={article.order}>
            <CardHeader title={article.title} subtitle={article.subtitle} />
            <CardImage size={article.size}>{article.picture}</CardImage>
            <div className="article-content col-span-1 row-span-1">
              {article.info}
            </div>
            <CardTec tec={article.tec} />
            <address className="article-content col-span-1 row-span-1 pb-6 not-italic">
              <strong className="title-4 block">Link:</strong>
              <Link label={article.labelLink} url={article.url} />
            </address>
          </CardArticle>
        ))}
      </div>
    </section>
  );
}
