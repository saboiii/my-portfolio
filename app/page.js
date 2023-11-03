'use client';
import React from 'react';
import Image from "next/image";

export default function Home() {
  const getRandomHeight = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const numColumns = 3;

  const projects = [
    {
      title: 'Project 1',
      subtitle: 'Description for Project 1',
      image: '/images/dummy1.jpeg',
    },
    {
      title: 'Project 2',
      subtitle: 'Description for Project 2',
      image: '/images/dummy2.jpeg',
    },
    {
      title: 'Project 3',
      subtitle: 'Description for Project 3',
      image: '/images/dummy3.jpeg',
    },
    {
      title: 'Project 4',
      subtitle: 'Description for Project 4',
      image: '/images/dummy4.jpeg',
    },
    {
      title: 'Project 5',
      subtitle: 'Description for Project 5',
      image: '/images/dummy5.jpeg',
    },
    {
      title: 'Project 6',
      subtitle: 'Description for Project 6',
      image: '/images/dummy6.jpeg',
    },
  ];
  
  const groupedProjects = Array.from({ length: numColumns }, (_, columnIndex) =>
    projects.filter((_, index) => index % numColumns === columnIndex)
  );


  return (
    <div className="">
      <div className="flex h-screen w-screen">

        <div className="flex flex-col justify-center w-full items-center md:items-start md:px-[15%]">
          <p className="ml-2 font-josefinsans text-md text-red-100/50 mb-1">SABA | AZAD | 17 | GIIS</p>
          <h1 className="mb-2 z-10 lg:text-[120px]">PORTFOLIO</h1>
          <div className="line w-screen border-t border-white my-2"></div>
          <h2 className="ml-1 mt-4">In production.</h2>

          <div className="blob z-0 absolute rounded-[999px] blur-3xl md:w-[750px] w-[500px] h-[500px] md:h-[750px] bg-gradient-to-l from-red-500/5 via-orange-500/5 to-rose-300/5" />
          <div className="blob z-0 absolute top-0 left-0 rounded-[999px] blur-3xl w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-l from-orange-500/5 to-rose-400/5" />
          <div className="blob z-0 absolute rounded-[999px] blur-3xl w-[200px] h-[200px] md:w-[500px] md:h-[500px] bg-gradient-to-l from-orange-500/10 md:from-yellow-500/5 to-rose-400/10" />
          <div className="blob z-0 absolute bottom-0 right-0 rounded-[999px] blur-3xl w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-gradient-to-l from-rose-500/5 to-yellow-950/5 md:to-green-400/5" />
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
                <div className="flex justify-center items-center w-full h-full">
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
