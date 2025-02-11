export default function Fundo() {
  return (
    <div className="fixed top-0 z-[-1] h-screen w-screen bg-gradient-to-b from-[#F4F7F7] via-[#c7d3d4] to-[#799ba9] dark:from-emerald-950 dark:via-cyan-800 dark:to-gray-950">
      <span className="absolute left-[-10vw] h-screen w-[33vw] animate-size1 bg-black/5 max-sm:hidden"></span>
      <span className="absolute left-[-10vw] h-screen w-[27vw] animate-size2 bg-black/5 max-sm:hidden"></span>
      <span className="absolute left-[-10vw] h-screen w-[20vw] animate-size3 bg-black/5 max-sm:hidden"></span>
      <div
        id="backAnim"
        className="absolute z-10 h-full w-full transform-gpu bg-black/0 backdrop-blur-[0px] transition-all duration-1000"
      ></div>
    </div>
  );
}
