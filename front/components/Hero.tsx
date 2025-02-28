import Image from "next/image";
import { Facebook, Linkedin, Youtube, Globe } from "lucide-react";
import top1 from "../public/top1.jpg";
import top2 from "../public/top2.jpg";
import React, { useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [top1, top2];
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right");

  const handleNextSlide = () => {
    setSlideDirection("right");
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePreviousSlide = () => {
    setSlideDirection("left");
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-screen flex flex-col md:flex-row bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-10 flex items-center justify-center md:w-1/2 pointer-events-none">
        <div className="hidden md:block w-1 h-3/4 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent animate-pulse" />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 p-6 relative">
        <div className="max-w-lg px-6 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight animate-fade-in-up">
            Find <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">your perfect pet</span> with us
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-gray-300 animate-fade-in-up delay-100">
            Experts in pet care and training
          </h2>
          
          <p className="text-sm md:text-base text-gray-400 animate-fade-in-up delay-200">
            Explore our services or contact us directly for more information
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 animate-fade-in-up delay-300">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl">
              VIEW OUR LOCATION
            </button>
          </div>
          
          <div className="flex justify-center md:justify-start gap-6 animate-fade-in-up delay-400">
            {[Facebook, Linkedin, Youtube, Globe].map((Icon, index) => (
              <Icon
                key={index}
                className="w-7 h-7 text-blue-400 hover:text-blue-300 cursor-pointer transition-all transform hover:-translate-y-1 hover:scale-110"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 relative h-64 md:h-auto bg-gray-900">
        <div className="relative w-full h-full overflow-hidden">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="Hero Image"
              layout="fill"
              objectFit="cover"
              className={`absolute inset-0 transition-transform duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                index === currentImage
                  ? "translate-x-0 opacity-100"
                  : slideDirection === "right"
                  ? "translate-x-full opacity-0"
                  : "-translate-x-full opacity-0"
              }`}
            />
          ))}
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 md:hidden">
          <button
            onClick={handlePreviousSlide}
            className="bg-white/10 backdrop-blur-sm p-3 rounded-full shadow-xl hover:bg-white/20 transition"
          >
            <ChevronLeftIcon className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={handleNextSlide}
            className="bg-white/10 backdrop-blur-sm p-3 rounded-full shadow-xl hover:bg-white/20 transition"
          >
            <ChevronRightIcon className="h-6 w-6 text-white" />
          </button>
        </div>

        <button
          onClick={handlePreviousSlide}
          className="hidden md:block absolute top-1/2 left-4 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full shadow-xl hover:bg-white/20 transition transform hover:scale-110"
        >
          <ChevronLeftIcon className="h-8 w-8 text-white" />
        </button>
        <button
          onClick={handleNextSlide}
          className="hidden md:block absolute top-1/2 right-4 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full shadow-xl hover:bg-white/20 transition transform hover:scale-110"
        >
          <ChevronRightIcon className="h-8 w-8 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Hero;