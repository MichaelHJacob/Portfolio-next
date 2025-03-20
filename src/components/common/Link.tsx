import { IoMdArrowDropright } from "react-icons/io";

export default function Link({
  label,
  url,
  download,
  mail,
}: {
  label: JSX.Element | string;
  url: string;
  download?: boolean;
  mail?: boolean;
}) {
  if (download) {
    return (
      <a
        href={url}
        download
        rel="noopener noreferrer"
        className="group flex flex-col items-start no-underline visited:text-textTertiary"
      >
        <span className="text-info">{label}</span>
        <span className="ml-[-0.5rem] flex w-min border-b-[1px] border-textPrimary border-opacity-0 pl-2 text-left text-sm font-normal leading-6 text-textTertiary transition-colors duration-200 group-hover:border-opacity-100">
          Download
          <IoMdArrowDropright size={24} className="fill-textTertiary" />
        </span>
      </a>
    );
  } else if (mail) {
    return (
      <a
        href={`mailto:${url}`}
        className="ml-[-0.5rem] flex w-fit items-center border-b-[1px] border-textPrimary border-opacity-0 pl-2 no-underline transition-colors duration-200 visited:text-textTertiary hover:border-opacity-100"
      >
        <span className="max-w-fit text-wrap break-words text-left text-sm font-normal leading-6 text-textTertiary">
          {label}
        </span>
        <IoMdArrowDropright size={24} className="fill-textTertiary" />
      </a>
    );
  } else {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-[-0.5rem] flex w-fit items-center border-b-[1px] border-textPrimary border-opacity-0 pl-2 no-underline transition-colors duration-200 visited:text-textTertiary hover:border-opacity-100"
      >
        <span className="max-w-fit text-left text-sm font-normal leading-6 text-textTertiary">
          {label}
        </span>
        <IoMdArrowDropright size={24} className="fill-textTertiary" />
      </a>
    );
  }
}
