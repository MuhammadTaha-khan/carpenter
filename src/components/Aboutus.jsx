import { CheckCircleIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import worker1 from "../img/about1.png"; // replace with your image
import worker2 from "../img/about2.png"; // replace with your image

const Aboutus = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left side - Images */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <img
            src={worker1}
            alt="Carpenter at work"
            className="w-60 h-72 object-cover rounded-lg shadow-md "
          />
          <img
            src={worker2}
            alt="Woodworking craftsman"
            className="w-60 h-72 object-cover rounded-lg shadow-md mt-6 translate-y-14"
          />
        </div>

        {/* Right side - Content */}
        <div>
          <p className="text-[#8a6037] font-semibold uppercase mb-2 mt-16 lg:mt-8">About Us</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#8a6037] mb-4 leading-tight">
            Expert Craftsmanship in Every Piece We Build
          </h2>
          <p className="text-gray-600 mb-6">
            With years of experience in fine woodworking, we take pride in turning raw timber
            into beautiful, functional designs. From custom furniture and cabinetry to full
            interior woodwork, our skilled carpenters deliver exceptional quality and precision
            in every detail.
          </p>

          <div className="flex items-center gap-6 mb-8">
            {/* Years of Experience */}
            <div className="bg-[#8a6037] text-white p-6 text-center rounded-md shadow-lg">
              <h3 className="text-4xl font-extrabold">25</h3>
              <p className="text-sm mt-1 leading-tight font-semibold">
                Years of <br /> Experience
              </p>
            </div>

            {/* Services List */}
            <ul className="space-y-2 text-gray-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-[#8a6037]" />
                Custom Furniture Design
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-[#8a6037]" />
                Residential Woodwork
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-[#8a6037]" />
                Kitchen & Wardrobe Cabinets
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-[#8a6037]" />
                Flooring & Paneling
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-[#8a6037]" />
                Restoration & Repair Work
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-[#8a6037] p-3 rounded-full">
                <EnvelopeIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Email us</p>
                <p className="text-gray-700 font-semibold">craft@woodworks.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#8a6037] p-3 rounded-full">
                <PhoneIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Call us</p>
                <p className="text-gray-700 font-semibold">+012 345 6789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
