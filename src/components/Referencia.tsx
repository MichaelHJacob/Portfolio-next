"use client";

import React, { useEffect, useRef } from "react";

export default function Dinamico() {
  const refMain = useRef<HTMLDivElement | null>(null);
  const elemento = document.getElementById("backAnim");
  let opaco = false;

  function scroll() {
    if (refMain.current !== null && elemento !== null) {
      if (opaco == false && refMain.current.getBoundingClientRect().top < 100) {
        opaco = true;
        console.log("hello");
        elemento.style.cssText = `background-color: rgba(0, 0, 0, 0.20) ; -webkit-backdrop-filter: blur(20px);        backdrop-filter: blur(20px); `;
      } else if (
        opaco == true &&
        refMain.current.getBoundingClientRect().top > 100
      ) {
        opaco = false;
        elemento.style.cssText = `background-color: rgba(0, 0, 0, 0) ; -webkit-backdrop-filter: blur(0px);        backdrop-filter: blur(0px); `;
      }
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", scroll);
    scroll();
  });

  return (
    <div ref={refMain} className="absolute left-0 top-0 z-[-1] h-0 w-0"></div>
  );
}
