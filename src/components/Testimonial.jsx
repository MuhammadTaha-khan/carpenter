import React from 'react';
import client01 from '../img/clientimg1.png';
import client02 from '../img/clientimg2.png';

const Testimonials = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h5 className="text-3xl font-normal flex justify-center items-center gap-2">
            <span>My</span>
            <span className="font-bold">TESTIMONIALS</span>
          </h5>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <TestimonialCard
            image={client01}
            alt="David Miller"
            title="David Miller"
            text="Absolutely outstanding craftsmanship! Shahrukh built our custom oak dining table with incredible precision and attention to detail. The finish and joinery are flawless — it’s truly a centerpiece in our home."
            bg="bg-white"
            textColor="text-gray-900"
            border="border-gray-300"
            designation="Homeowner"
          />
          <TestimonialCard
            image={client02}
            alt="Sophia Carter"
            title="Sophia Carter"
            text="From start to finish, the experience was seamless. Shahrukh designed and installed our new kitchen cabinets perfectly — sturdy, elegant, and beautifully fitted. His dedication to quality carpentry really shows!"
            bg="bg-[#8a6037]"
            textColor="text-white"
            border="border-white"
            designation="Interior Designer"
          />
          <TestimonialCard
            image={client01}
            alt="Michael Ross"
            title="Michael Ross"
            text="I needed custom wood shelving for my office, and Shahrukh delivered beyond expectations. The craftsmanship, wood selection, and smooth finish were top-notch. Highly recommend for any woodworking project!"
            bg="bg-white"
            textColor="text-gray-900"
            border="border-gray-300"
            designation="Business Owner"
          />
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ image, alt, title, text, bg, textColor, border, designation }) => (
  <div className={`${bg} rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 w-full max-w-sm border-2`}>
    <div className="flex flex-col items-center text-center ">
      <img src={image} alt={alt} className="w-20 h-20 rounded-full mb-4 shadow-lg object-cover" />
      <p className={`${textColor} text-sm mb-8 leading-relaxed`}>{text}</p>
      <div className={`h-0 w-24 border ${border} mb-4`}></div>
      <h3 className={`${textColor} text-lg font-semibold mb-1`}>{title}</h3>
      <p className={`${textColor} text-sm opacity-80`}>{designation}</p>
    </div>
  </div>
);

export default Testimonials;
