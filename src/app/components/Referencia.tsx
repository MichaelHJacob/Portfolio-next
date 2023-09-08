"use client";
import { useRef } from "react";
import React from "react";

export default function Dinamico() {
  let refMain = useRef<HTMLDivElement | null>(null);

  function update() {
    var elemento = document.getElementById("backAnim");
    let blur = 0;
    let opacity = 0;

    if (refMain.current !== null) {
      if (elemento !== null) {
        let top = refMain.current.getBoundingClientRect().top;
        if (top < 700 && top >= 0) {
          blur = Math.floor(((700 - top) / 700) * 20);
          opacity = ((700 - top) / 700) * 0.3;
          let bgcolor = `rgba(0 0 0 / ${opacity})`;
          elemento.style.cssText = `background-color: ${bgcolor}; -webkit-backdrop-filter: blur(${blur}px);
          backdrop-filter: blur(${blur}px); `;
        }
        if (top > 900) {
          elemento.style.cssText = `background-color: initial ; -webkit-backdrop-filter: blur(0px);
          backdrop-filter: blur(0px); `;
        }
      }
    }
  }

  document.addEventListener("scroll", update);

  return (
    <div ref={refMain} className="absolute z-[-1] top-0 left-0 h-0 w-0 "></div>
  );
}
