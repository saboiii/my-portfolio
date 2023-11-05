'use client';
import React from 'react';
import Image from "next/legacy/image";
import Link from "next/link"
import Contact from '@/components/contact/Contact'

export default function Home() {
  const getRandomHeight = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const numColumns = 3;

  const projects = [
    {
      title: 'SLEEPWALKER',
      subtitle: '2D Platformer made using Unity Engine & URP',
      image: '/images/sleepwalker.png',
      link: 'https://github.com/saboiii/SLEEPWALKER',
    },
    {
      title: 'IMMUNE',
      subtitle: 'Top-down 2D Battle Strategy game made using Unity',
      image: '/images/immune.png',
      link: 'https://github.com/saboiii/IMMUNE-V1.1-Code',
    },
    {
      title: 'CHERISH SG Website',
      subtitle: 'Next.js, React, TailwindCSS full-stack blog web app for social campaign',
      image: '/images/cherish.png',
      link: 'https://cherish.netlify.app',
    },
    {
      title: 'PORTFOLIO',
      subtitle: 'Example portfolio website created using TailwindCSS & React',
      image: '/images/artdemon.png',
      link: 'https://github.com/saboiii/Artdemon-MyTestPortfolio',
    },
  ];

  const groupedProjects = Array.from({ length: numColumns }, (_, columnIndex) =>
    projects.filter((_, index) => index % numColumns === columnIndex)
  );


  return (
    <div className="w-screen">
      {/* main sect*/}
      <div className="flex h-screen w-full">
        <div className="flex flex-col justify-center w-full items-center md:items-start md:px-[15%]">
          <p className="ml-2 font-josefinsans text-md text-rose-100 mb-1">SABA AZAD | 17 | GIIS</p>
          <div className="line w-48 ml-2 border-t border-white-[0.5px] my-2"></div>
          <h1 className="md:text-8xl mb-2 z-10">PORTFOLIO</h1>
          <h2 className="ml-1 mb-4 text-center">ARTIST, DEVELOPER</h2>
          <div className='w-1/2'>
            <p className='text-xs text-center md:text-justify'>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ligula eros, facilisis id leo id, venenatis tempor libero. Cras ullamcorper ultrices metus ac accumsan. Integer iaculis nibh eu lacinia vehicula. Nam at consequat justo. Suspendisse potenti. Aenean bibendum augue et mi suscipit bibendum.`}</p>
          </div>

          <div className="blob z-0 absolute rounded-[999px] blur-3xl md:w-[750px] w-[500px] h-[500px] md:h-[750px] bg-gradient-to-l from-blue-500/5 via-purple-200/5 to-rose-300/5" />
          <div className="blob z-0 absolute top-0 left-0 rounded-[999px] blur-3xl w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-l from-pink-200/5 to-rose-400/5" />
          <div className="blob z-0 absolute rounded-[999px] blur-3xl w-[200px] h-[200px] md:w-[500px] md:h-[500px] bg-gradient-to-l from-pink-500/10 md:from-purple-500/5 to-rose-400/5" />
          <div className="blob z-0 absolute bottom-0 right-0 rounded-[999px] blur-3xl w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-gradient-to-l from-rose-500/5 to-blue-950/5 md:to-purple-400/5" />
        </div>
      </div>

      {/* projects sect*/}
      <div className='flex flex-col justify-center items-center'>
        <div className="w-full flex flex-row justify-center items-center mb-12">
          <div className="w-[32%] h-[0.5px] mr-4 bg-[#42342f]" />
          <h2 className="text-3xl">Projects</h2>
          <div className="w-[32%] h-[0.5px] ml-4 bg-[#42342f]" />
        </div>
        <div className="h-full w-screen grid grid-cols-1 md:grid-cols-3 gap-4 pb-24 px-12 md:px-24">
          {groupedProjects.map((columnProjects, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-4">
              {columnProjects.map((project, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden"
                  style={{ height: `${getRandomHeight(250, 350)}px` }}
                >
                  <div className="relative overflow-hidden w-full h-full opacity-70">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>

                  <Link href={project.link} className="overlay absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black/70 text-white text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <h3 className="text-xl font-averiabold">{project.title}</h3>
                    <p className="text-sm font-pridimed px-12">{project.subtitle}</p>
                  </Link>

                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="w-[83%] h-[0.5px] bg-[#42342f]" />
      </div>

      {/* about sect*/}
      <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col md:flex-row w-screen h-[80vh]'>
          <div className="blob z-0 absolute rounded-[999px] blur-3xl md:w-[750px] w-[500px] h-[500px] md:h-[750px] bg-gradient-to-l from-blue-500/5 via-purple-200/5 to-rose-300/5" />
          <div className="blob z-0 absolute rounded-[999px] blur-3xl w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-l from-pink-200/5 to-rose-400/5" />
          <div className="blob z-0 absolute rounded-[999px] blur-3xl w-[200px] h-[200px] md:w-[500px] md:h-[500px] bg-gradient-to-l from-pink-500/10 md:from-purple-500/5 to-rose-400/5" />

          <div className='w-screen md:w-1/2 flex items-center justify-center'>
            <div className='relative w-full h-[75%] z-100 overflow-hidden flex items-center justify-center'>
              <Image
                src='/images/me.png'
                alt='My picture'
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>
          <div className='w-full justify-center py-32 md:py-0 items-center md:items-start md:w-1/2 flex flex-col px-16 md:pr-24 md:pl-8 '>
            <h2 className="text-[20px] font-averiabold">learn more</h2>
            <h1 className='md:text-4xl lg:text-6xl'>ABOUT ME.</h1>
            <div className="w-[75%] h-[0.5px] mb-4 bg-rose-100" />
            <p className='text-xs text-justify'>{`In at metus augue. Duis eget sagittis dolor. Morbi placerat fermentum orci sit amet interdum. Mauris iaculis enim ac nisi convallis sollicitudin. Aenean consequat commodo consequat. Mauris in metus ut velit accumsan mattis sit amet ac diam. Phasellus vel sem accumsan, commodo libero eget, sodales massa. Integer luctus quis mi vel fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc dictum rhoncus dolor ac varius.`}</p>
            <div className="mt-2 flex flex-wrap">
              <span className="rounded-full bg-[#cfbbb4] text-[#0a0706] px-4 m-1 font-averiabold">HTML</span>
              <span className="rounded-full bg-[#cfb4b4] text-[#0a0706] px-4 m-1 font-averiabold">CSS</span>
              <span className="rounded-full bg-[#cfb4c7] text-[#0a0706] px-4 m-1 font-averiabold">Python</span>
              <span className="rounded-full bg-[#cfb4b4] text-[#0a0706] px-4 m-1 font-averiabold">MongoDB</span>
              <span className="rounded-full bg-[#cfbbb4] text-[#0a0706] px-4 m-1 font-averiabold">TailwindCSS</span>
              <span className="rounded-full bg-[#cfb4c7] text-[#0a0706] px-4 m-1 font-averiabold">React</span>
              <span className="rounded-full bg-[#cfb4c7] text-[#0a0706] px-4 m-1 font-averiabold">Next.js</span>
              <span className="rounded-full bg-[#cfb4b4] text-[#0a0706] px-4 m-1 font-averiabold">Photoshop</span>
              <span className="rounded-full bg-[#cfbbb4] text-[#0a0706] px-4 m-1 font-averiabold">Illustrator</span>
              <span className="rounded-full bg-[#cfb4c7] text-[#0a0706] px-4 m-1 font-averiabold">InDesign</span>
              <span className="rounded-full bg-[#cfbbb4] text-[#0a0706] px-4 m-1 font-averiabold">After Effects</span>
            </div>
          </div>

        </div>
        <div className="w-[83%] h-[0.5px] mt-16 bg-[#42342f]" />
      </div>

      {/* contact sect*/}
      <Contact/>

    </div>



  )
}
