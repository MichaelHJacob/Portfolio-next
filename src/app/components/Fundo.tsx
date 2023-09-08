// 'use client'
import "../globals.css";

export default function Fundo() {
  return (
    // <div className="fixed z-[-1] h-screen w-screen  top-0  bg-gradient-to-b dark:from-emerald-950 dark:via-cyan-800 dark:to-gray-950 from-[#766144] via-[#786A49] to-gray-300">
    <div className="fixed z-[-1] h-screen w-screen  top-0  bg-gradient-to-b dark:from-emerald-950 dark:via-cyan-800 dark:to-gray-950 from-emerald-50 via-cyan-50 to-gray-300">
    
      <span className="skew-x-12 h-screen w-[35%] bg-black/5  absolute left-[-10vw]   "></span>
      <span className="skew-x-12 h-screen w-1/4 bg-black/5  absolute left-[-10vw] "></span>
      <span className="skew-x-12 h-screen w-[50%] bg-black/5  absolute left-[-10vw]  "></span>
      <div id="backAnim" className=" absolute h-full w-full z-10"></div>
    </div>
  );
}
