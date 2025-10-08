import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaAngleRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg- text-white py-12 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Our Office */}
        <div>
          <h3 className="text-lg mb-4 text-[#8a6037] font-bold">Our Office</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-5">
              <FaLocationDot className="text-[#8a6037] text-2xl" />
              <span className="text-[#8a6037] font-bold">123 Street, Xyz Germany</span>
            </li>
            <li className="flex items-center gap-5">
              <FiPhone className="text-[#8a6037] text-2xl" />
              <span className="text-[#8a6037] font-bold">+012 345 67890</span>
            </li>
            <li className="flex items-center gap-5">
              <FiMail className="text-[#8a6037] text-2xl" />
              <span className="text-[#8a6037] font-bold">info@example.com</span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-3 mt-8">
            <a href="#" className="bg-[#8a6037] hover:bg-[#e55a1f] text-white p-2 rounded-full">
              <FaTwitter />
            </a>
            <a href="#" className="bg-[#8a6037] hover:bg-[#e55a1f] text-white p-2 rounded-full">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-[#8a6037] hover:bg-[#e55a1f] text-white p-2 rounded-full">
              <FaYoutube />
            </a>
            <a href="#" className="bg-[#8a6037] hover:bg-[#e55a1f] text-white p-2 rounded-full">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg mb-4 text-[#8a6037] font-bold">Quick Links</h3>
          <ul className="space-y-3">
            {["About Us", "Contact Us", "Our Services", "Terms & Condition", "Support"].map(
              (link, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 hover:text-[#e55a1f] cursor-pointer transition"
                >
                  <FaAngleRight className="text-[#8a6037]" />
                  <span className="text-[#8a6037] font-bold">{link}</span>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Business Hours */}
        <div>
          <h3 className="text-lg mb-4 text-[#8a6037] font-bold">Business Hours</h3>
          <ul className="space-y-3">
            <li className="text-[#8a6037] font-bold">
              Monday - Friday <br />
              <span className="text-[#8a6037] font-bold">09:00 am - 07:00 pm</span>
            </li>
            <li className="text-[#8a6037] font-bold">
              Saturday <br />
              <span className="text-[#8a6037] font-bold">09:00 am - 12:00 pm</span>
            </li>
            <li className="text-[#8a6037] font-bold">
              Sunday <br />
              <span className="text-[#8a6037] font-bold">Closed</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg mb-4 text-[#8a6037] font-bold">Newsletter</h3>
          <p className="text-[#8a6037] font-bold mb-4">
            Dolor amet sit justo amet elitr clita ipsum elitr est.
          </p>
          <form className="flex flex-col sm:flex-row border border-[#8a6037] rounded-md overflow-hidden w-full max-w-md mx-auto gap-y-4 sm:gap-y-0 sm:gap-x-2">

            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 flex-grow text-[#8a6037] bg-transparent focus:outline-none placeholder-[#8a6037] text-sm sm:text-base"
            />
            <button
              type="submit"
              className="bg-[#8a6037] hover:bg-[#8d5824] text-white px-5 py-2 font-bold text-sm sm:text-base w-full sm:w-auto transition "
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer Line */}
      <div className="border-t border-[#8a6037]  mt-10 pt-4 text-center text-[#8a6037] font-bold text-sm">
        © 2025 Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
