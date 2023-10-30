'use client';

export default function Home() {
  return (

    <div className="flex h-screen w-screen">

      <div className="flex flex-col justify-center w-full items-center md:items-start md:px-[15%]">
        <p className="ml-2 font-josefinsans text-md text-rose-100/50 mb-1">SABA | AZAD | 17 | GIIS</p>
        <h1 className="mb-2 z-10">Portfolio</h1>
        <h2 className="ml-1">In production.</h2>

        <div className="blob z-0 fixed rounded-[999px] blur-3xl w-[1000px] h-[1000px] bg-gradient-to-l from-blue-500/10 via-[#d2afff]/10 to-rose-300/5" />
        <div className="blob z-0 fixed top-0 left-0 rounded-[999px] blur-3xl w-[500px] h-[600px] bg-gradient-to-l from-purple-500/5 to-rose-400/10" />
        <div className="blob z-0 fixed bottom-0 left-0 rounded-[999px] blur-3xl w-[500px] h-[500px] bg-gradient-to-l from-orange-500/10 md:from-yellow-500/5 to-rose-400/10" />
        <div className="blob z-0 fixed bottom-0 right-0 rounded-[999px] blur-3xl w-[500px] h-[500px] bg-gradient-to-l from-rose-500/10 to-indigo-950/40 md:to-blue-400/5" />
      </div>
    </div>


  )
}
