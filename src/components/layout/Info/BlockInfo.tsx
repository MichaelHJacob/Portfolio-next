export default function BlockInfo({
  title,
  info,
  cardStyle,
}: {
  title: string;
  info: (string | JSX.Element)[];
  cardStyle?: boolean;
}) {
  return (
    <li
      itemScope
      className="intersect:fade-up intersect-once h-auto py-4 intersect:animate-delay-100 md:[&:nth-child(1)]:intersect:animate-delay-100 md:[&:nth-child(2)]:intersect:animate-delay-300 md:[&:nth-child(3)]:intersect:animate-delay-500 md:[&:nth-child(4)]:intersect:animate-delay-700"
    >
      <h3 className="mb-4 py-2 text-lg font-bold leading-7 text-textTertiary">
        {title}
      </h3>
      <ul className="flex w-full list-none flex-col gap-7 md:max-w-72 lg:max-w-80 xl:max-w-96">
        {info.map((value, index) => {
          if (cardStyle) {
            return (
              <li
                key={index}
                className="border-l-[1px] border-textSubTitle px-4"
              >
                {value}
              </li>
            );
          } else {
            return (
              <li key={index} className="pr-4 first:-mt-1">
                {value}
              </li>
            );
          }
        })}
      </ul>
    </li>
  );
}
