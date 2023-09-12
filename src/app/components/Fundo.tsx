// 'use client'
import "../globals.css";

export default function Fundo() {
  return (
    <div className="fixed z-[-1] h-screen w-screen  top-0  bg-gradient-to-b dark:from-emerald-950 dark:via-cyan-800 dark:to-gray-950 from-[#F4F7F7] via-[#c7d3d4] to-[#799ba9]"> 
    
    <span className=" h-screen w-[33vw] bg-black/5  absolute left-[-10vw] animate-size1 max-sm:hidden"></span>
      <span className=" h-screen w-[27vw] bg-black/5  absolute left-[-10vw] animate-size2 max-sm:hidden"></span>
      <span className=" h-screen w-[20vw] bg-black/5  absolute left-[-10vw] animate-size3 max-sm:hidden"></span>
      <div id="backAnim" className=" absolute h-full w-full z-10 bg-black/0 backdrop-blur-[0px] transform-gpu transition-all duration-1000 "></div>
    </div>
  );
}
