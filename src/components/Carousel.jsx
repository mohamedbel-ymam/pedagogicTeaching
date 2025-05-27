import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { Keyboard } from 'swiper/modules';
import { Mousewheel } from 'swiper/modules';
import videoDemo from '../assets/enregistrementEcran (1).mp4';
import img1 from '../assets/image1.jpeg';
import img2 from '../assets/img2.jpeg';
import robomind from '../assets/robomind.png';
import figure from '../assets/WEBSITE figure.png';
import figure2 from '../assets/figure 2.png'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const slides = [ {
    key: 'one',
    label: 'Robomind',
    title: 'Introduction à programmation',
    bgImage: robomind,
    tagBg: 'bg-gray-700',
  },
  {
key: 'two',
    label: 'Developpement web',
    title: 'Html/css felxbox ',
    bgImage: figure,
    tagBg: 'bg-green-800',
  },
  {
    key: 'three',
    label: 'Developpement web html/Css grid',
    bgImage: figure2,
    tagBg: 'bg-blue-600',
  },
  {
    key: 'four',
    label: 'Prgrammation visuelle avec Alice',
      bgImage: img1,
    tagBg: 'bg-yellow-600',        
  },
  {
    key: 'five',
    label: 'Prgrammation visuelle avec Alice',
    bgImage: img2,
    tagBg: 'bg-gray-600',
  },
  
  {
    key: 'six',
    type:'video',
    src: videoDemo,
    label: "Post des étudiants ",
    title: "Les projets dans les dossiers des étudiants ",
    tagBg:'bg-red-700'
  },
  ];

export default function Carousel() {
  return (
    <section className="relative w-full min-h-screen 
    flex justify-center 
    items-center 
    bg-gradient-to-br from-[#50E3C2]   to-[#4A90E2]  
    dark:from-[#2F855A]   dark:to-[#1E3A8A] 
    border-2 border-amber-400
    shadow-[3px_2px_6px_3px_rgba(0,0,0,0.7)]
     dark:shadow-[3px_2px_6px_3px_rgba(0,0,0,1)]
    overflow-hidden py-12 ">
      <Swiper
        modules={[EffectCoverflow, Pagination, Keyboard, Mousewheel]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="2"
        breakpoints={{
          0:   { slidesPerView: 1 },
          640: { slidesPerView: 3 },
        }}
        coverflowEffect={{ rotate: 30, stretch: 0, depth: 100, modifier: 1, slideShadows: true }}
        keyboard={{ enabled: true }}
        mousewheel={{ thresholdDelta: 70 }}
        spaceBetween={60}
        loop={true}
        pagination={{ clickable: true }}
        className="w-full h-150 "
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.key}
            className={`w-72 h-96 
              shadow-xl rounded-lg flex flex-col 
              justify-end items-start
              bg-cover 
              bg-center relative
              ring-4 dark:ring-[#50E3C2]
              ring-[#1E3A8A] `
            }
            
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
            {slide.type === 'video' &&( 
              <video
                src={slide.src}
                autoPlay
                muted 
                loop
                playsInline
                controls
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              />
              
              
            )}
            <span className={`${slide.tagBg} text-white uppercase px-4 py-2 rounded-tr-lg rounded-br-lg text-sm font-semibold mb-4 ml-4`}>               
              {slide.label}
            </span>
            <div className="px-6 pb-6">
              <h2 className="text-white font-bold font-roboto text-lg mb-2">{slide.title}</h2>
              <p className="flex items-end text-white font-roboto text-sm text-end">
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
