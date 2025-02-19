"use client";

import { ComponentProps, useRef } from "react";

import { GoCopy } from "react-icons/go";

export type ButtonProps = ComponentProps<"a"> & {
  linkPage: string;
  text: string;
};

export function Button({ linkPage, text, children, ...props }: ButtonProps) {
  return (
    <a
      className="my-2 mr-4 inline-flex items-center rounded-2xl border-gray-300/80 bg-zinc-200/30 p-4 backdrop-blur-xl transition-all duration-1000 ease-in-out hover:bg-white/50 sm:my-0 sm:mr-2 sm:rounded-xl sm:p-2 dark:border-2 dark:border-solid dark:border-white/10 dark:bg-gray-900/10 dark:hover:bg-white/10"
      target="_blank"
      rel="noreferrer"
      href={linkPage}
      {...props}
    >
      {children}
      <span className="pl-1.5 font-medium text-gray-900/60 dark:text-gray-100">
        {text}
      </span>
    </a>
  );
}
type ButtonMailProps = ComponentProps<"button">;

export function ButtonMail({
  text,
  children,
  ...props
}: ButtonMailProps & { text: string }) {
  const emailRef = useRef<string>("michael_h.jacob@outlook.com");
  function copy() {
    if (!emailRef.current) return;
    navigator.clipboard.writeText(`${emailRef.current}`);
  }

  return (
    <div className="group/item my-2 inline-flex items-center overflow-hidden rounded-2xl border-gray-300/80 bg-zinc-200/30 backdrop-blur-xl transition-all duration-1000 ease-in-out hover:bg-white/50 sm:my-0 sm:rounded-xl dark:border-2 dark:border-solid dark:border-white/10 dark:bg-gray-900/10 dark:hover:bg-white/10">
      <a
        className="inline-flex p-4 transition-all duration-1000 ease-in-out sm:p-2 md:hover:bg-white/50 md:dark:hover:bg-white/10"
        href={`mailto:${emailRef.current}?subject=Vim pelo seu portfólio`}
      >
        {children}
        <span className="pl-1.5 font-medium text-gray-900/60 dark:text-gray-100">
          {text}
        </span>
      </a>
      <div className="group/edit inline-flex w-0 overflow-hidden overscroll-none opacity-0 transition-all duration-1000 ease-in-out md:group-hover/item:w-[275px] md:group-hover/item:opacity-100">
        <span className="h-full w-[300px] rounded-sm bg-zinc-200/30 p-4 text-center font-medium text-gray-900/60 backdrop-blur-3xl sm:p-2 dark:bg-zinc-800/20 dark:text-gray-100">
          {emailRef.current}
        </span>
        <button
          className="p-4 transition-all duration-1000 ease-in-out hover:bg-white/50 sm:p-2 dark:hover:bg-white/10"
          {...props}
          onClick={copy}
        >
          <GoCopy
            size={25}
            className="fill-gray-900/60 stroke-0 dark:fill-white"
          />
        </button>
      </div>
    </div>
  );
}
