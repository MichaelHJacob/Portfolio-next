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
        className="inline-flex p-4 sm:p-2 items-center rounded-2xl 
        sm:rounded-xl mr-4 sm:mr-2 my-2 sm:my-0
        backdrop-blur-xl  
        bg-zinc-200/30 hover:bg-white/50  
        dark:bg-gray-900/10  dark:hover:bg-white/10
        border-gray-300/80   
        dark:border-white/10 
        dark:border-solid dark:border-2  transition-all duration-1000 ease-in-out "
        target="_blank"
        rel="noreferrer"
        href={linkPage}
        {...props}
      >
        {children}
        <span className="pl-1.5  font-medium text-gray-900/60 dark:text-gray-100  ">{text}</span>
      </a>
    );
  }
  type ButtonMailProps = ComponentProps<"button">;
  
  export function ButtonMail({
    text,
    children,
    ...props
  }: ButtonMailProps & { text: string }) {
    const emailRef = useRef<any>();
    function copy() {
      navigator.clipboard.writeText(`${emailRef.current.innerText}`);
    }
  
    return (
      <div className="inline-flex  items-center overflow-hidden rounded-2xl sm:rounded-xl  my-2 sm:my-0 group/item 
      border-gray-300/80   
      dark:border-white/10 
      dark:border-solid dark:border-2
      backdrop-blur-xl  
      bg-zinc-200/30 hover:bg-white/50 
      dark:bg-gray-900/10  dark:hover:bg-white/10
        transition-all duration-1000 ease-in-out
      ">
        <a
          className="inline-flex p-4 sm:p-2 md:hover:bg-white/50 md:dark:hover:bg-white/10 transition-all duration-1000 ease-in-out"
          href="mailto:michael_h.jacob@hotmail.com?subject=Vim pelo seu portfólio"
        >
          {children}
          <span className="pl-1.5  font-medium text-gray-900/60  dark:text-gray-100">{text}</span>
        </a>
        <div className="group/edit overflow-hidden overscroll-none w-0 opacity-0 md:group-hover/item:w-[275px] md:group-hover/item:opacity-100  transition-all duration-1000 ease-in-out inline-flex">
          <span className="p-4 h-full rounded-sm sm:p-2 bg-zinc-200/30  dark:bg-zinc-800/20 w-[300px] backdrop-blur-3xl font-medium text-gray-900/60  dark:text-gray-100 text-center " ref={emailRef}>
            michael_h.jacob@hotmail.com
          </span>
          <button
            className="p-4 sm:p-2 hover:bg-white/50  dark:hover:bg-white/10 transition-all duration-1000 ease-in-out"
            {...props}
            onClick={copy}
          >
            <GoCopy size={25} className="fill-gray-900/60 dark:fill-white stroke-0" />
          </button>
        </div>
      </div>
    );
  }
  