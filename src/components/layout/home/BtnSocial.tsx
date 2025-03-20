"use client";

import { ComponentProps, useRef, useState } from "react";

import { FaCheck } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa6";

export type ButtonProps = ComponentProps<"a"> & {
  linkPage: string;
  text: string;
};

export function Button({ linkPage, text, children, ...props }: ButtonProps) {
  return (
    <li className="overflow-hidden rounded-md bg-backgroundPrimary">
      <a
        className="button-social"
        target="_blank"
        rel="noreferrer"
        href={linkPage}
        {...props}
      >
        {children}

        <span className="button-socialText">{text}</span>
      </a>
    </li>
  );
}
type ButtonMailProps = ComponentProps<"button">;

export function ButtonMail({
  text,
  children,
  ...props
}: ButtonMailProps & { text: string }) {
  const emailRef = useRef<string>("michael_h.jacob@outlook.com");
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(emailRef.current);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error(
        "Falha ao copiar endereço de e-mail para área de transferência:",
        error,
      );
    }
  }

  return (
    <li className="group/item flex w-fit items-center overflow-hidden rounded-md bg-backgroundPrimary">
      <a
        className="button-social"
        href={`mailto:${emailRef.current}?subject=Vim pelo seu portfólio`}
      >
        {children}
        <span className="button-socialText">{text}</span>
      </a>
      <div className="group/edit inline-flex w-0 overflow-hidden overscroll-none whitespace-nowrap bg-backgroundCard opacity-100 transition-all duration-200 md:w-80 md:group-hover/item:w-80 md:group-hover/item:opacity-100">
        <p className="button-socialText box-border block w-[17rem] select-text border-x-2 border-backgroundPrimary py-2 text-center leading-4">
          {emailRef.current}
        </p>
        <button
          className="group h-8 w-12 overflow-hidden"
          {...props}
          onClick={copy}
          onTouchEnd={(e) => {
            e.preventDefault();
            copy();
          }}
        >
          <span
            className={`${copied ? "-translate-x-12" : "translate-x-0"} inline-block h-8 w-24 transition-all duration-200`}
          >
            <FaRegCopy
              size={16}
              className="inline-block h-8 w-12 fill-textTertiary px-4 py-2"
            />
            <FaCheck
              size={16}
              className={`inline-block h-8 w-12 bg-textPrimary fill-backgroundPrimary px-4 py-2`}
            />
          </span>
        </button>
      </div>
    </li>
  );
}
