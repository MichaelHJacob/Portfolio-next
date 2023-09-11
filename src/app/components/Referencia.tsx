"use client";
import { useEffect, useRef } from "react";
import React from "react";

export default function Dinamico() {
  let refMain = useRef<HTMLDivElement | null>(null);
  var elemento = document.getElementById("backAnim");
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
    <div ref={refMain} className="absolute z-[-1] top-0 left-0 h-0 w-0 "></div>
  );
}
