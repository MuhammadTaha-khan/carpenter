import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import carousel1 from "../img/image1.png";
import carousel2 from "../img/image3.jpg";
import carousel3 from "../img/image6.jpg";
import carousel4 from "../img/image7.jpg";
import carousel5 from "../img/image8.jpg";

const Herosection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

const slides = [
  {
    image: carousel1,
    title: "Custom Woodwork",
    subtitle: "Handcrafted furniture made to last.",
  },
  {
    image: carousel2,
    title: "Home Renovation",
    subtitle: "Elegant interiors with fine wood details.",
  },
  {
    image: carousel3,
    title: "Trusted Craftsmanship",
    subtitle: "Beautiful, durable wood solutions.",
  },
  {
    image: carousel4,
    title: "Bespoke Cabinets",
    subtitle: "Tailored storage built for your space.",
  },
  {
    image: carousel5,
    title: "Outdoor Wood Projects",
    subtitle: "Decks, pergolas, and patios built to last.",
  },
];


  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0"></div>

          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-4xl md:text-6xl font-bold text-[#8a6037] drop-shadow-lg">
              {slide.title}
            </h2>
            <p className="text-lg md:text-2xl text-white mt-4 max-w-2xl drop-shadow-md">
              {slide.subtitle}
            </p>
            <button className="mt-8 bg-[#8a6037] hover:bg-[#885421] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              Get Free Estimate
            </button>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-[#8a6037] scale-110"
                : "bg-white bg-opacity-50 hover:bg-opacity-80"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Herosection;
