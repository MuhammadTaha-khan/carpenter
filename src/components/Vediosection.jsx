"use client";
import { useState } from "react";
import worker2 from "../img/vedioimage.png"; // make sure this path is correct
import k12chemical from "../img/vedio.mp4";

const VedioSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="about-area grey-bg max-sm:mt-6 max-lg:mt-6 pt-6 pb-16 sm:pb-24 md:pb-32 mx-4 md:mx-8 lg:mx-16 lg:mt-20">
      <h1 className="text-center text-3xl font-bold mb-12 text-[#8a6037]">
        WHY CHOOSE 
      </h1>

      <div className="about-wrapper">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Image with Play Button */}
            <div className="about-thumb relative text-center mb-8 lg:ml-24">
              <img
                src={worker2}
                alt="Carpenter at work"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />

              {/* Play Button */}
              <button
                onClick={() => setIsOpen(true)}
                className="absolute inset-0 flex justify-center items-center bg-black/0 hover:bg-black/10 transition"
              >
                <span className="bg-[#8a6037] flex items-center justify-center p-5 rounded-full shadow-lg hover:bg-[#86531f] transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-8 h-8"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            </div>

            {/* About Content */}
            <div className="about-content mb-8 lg:ml-16">
              <div className="tp-section">
                <h3 className="tp-section__title mb-6 font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-[#8a6037]">
                  Expert Craftsmanship You Can Trust
                </h3>

                <p className="italic block text-base md:text-lg text-gray-700 mb-6">
                  From custom furniture to home interiors — we create elegant,
                  durable woodwork that brings warmth and character to your
                  space.
                </p>

                <p className="text-base md:text-lg text-gray-600 mb-8">
                  With years of experience in fine woodworking, we combine
                  traditional techniques with modern design to deliver lasting
                  beauty and functionality. Every project reflects our
                  dedication to detail, precision, and quality craftsmanship.
                </p>
              </div>

              <div className="about-content__btn">
                <a
                  href="/about"
                  className="tp-btn bg-[#8a6037] hover:bg-[#9b6229] text-white py-3 px-6 rounded-md transition"
                >
                  Talk with Our Carpenter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute -top-10 right-2 text-[#8a6037] text-3xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>

            {/* Video Player */}
            <div className="aspect-video px-2">
              <video
                className="w-full h-auto rounded-lg"
                controls
                autoPlay
                preload="auto"
              >
                <source src={k12chemical} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VedioSection;
