'use client';
import React from 'react';
import Image from "next/image";

export default function Home() {
  const getRandomHeight = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const numColumns = 3;

  const projects = [
    {
      title: 'SLEEPWALKER',
      subtitle: '2D Platformer made using Unity Engine & URP',
      image: '/images/sleepwalker.png',
    },
    {
      title: 'IMMUNE',
      subtitle: 'Top-down 2D Battle Strategy game made using Unity',
      image: '/images/immune.png',
    },
    {
      title: 'PORTFOLIO',
      subtitle: 'Example portfolio website created using TailwindCSS & React',
      image: '/images/artdemon.png',
    },
    {
      title: 'CHERISH SG Website',
      subtitle: 'Next.js, React, TailwindCSS full-stack blog web app for social campaign',
      image: '/images/cherish.png',
    },
  ];

  const groupedProjects = Array.from({ length: numColumns }, (_, columnIndex) =>
    projects.filter((_, index) => index % numColumns === columnIndex)
  );


  return (
    <div className="">
      <div className="flex h-screen w-screen">

        <div className="flex flex-col justify-center w-full items-center md:items-start md:px-[15%]">
          <p className="ml-2 font-josefinsans text-md text-rose-100/50 mb-1">SABA | AZAD | 17 | GIIS</p>
          <div className="line w-48 ml-2 border-t border-white my-2"></div>
          <h1 className="mb-2 z-10">PORTFOLIO</h1>
          <h2 className="ml-1">In production.</h2>

          <div className="blob z-0 absolute rounded-[999px] blur-3xl md:w-[750px] w-[500px] h-[500px] md:h-[750px] bg-gradient-to-l from-blue-500/5 via-orange-200/5 to-rose-300/5" />
          <div className="blob z-0 absolute top-0 left-0 rounded-[999px] blur-3xl w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-l from-orange-200/5 to-rose-400/5" />
          <div className="blob z-0 absolute rounded-[999px] blur-3xl w-[200px] h-[200px] md:w-[500px] md:h-[500px] bg-gradient-to-l from-orange-500/10 md:from-purple-500/5 to-rose-400/5" />
          <div className="blob z-0 absolute bottom-0 right-0 rounded-[999px] blur-3xl w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-gradient-to-l from-rose-500/5 to-blue-950/5 md:to-purple-400/5" />
        </div>

      </div>

      <div className="w-screen grid grid-cols-1 md:grid-cols-3 gap-4 p-24">
        {groupedProjects.map((columnProjects, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-4">
            {columnProjects.map((project, index) => (
              <div
                key={index}
                className="relative overflow-hidden"
                style={{ height: `${getRandomHeight(250, 400)}px` }}
              >
                <div className="relative overflow-hidden w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="overlay absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black/70 text-white text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <h3 className="text-xl font-averiabold">{project.title}</h3>
                  <p className="text-sm font-pridimed">{project.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>



  )
}
