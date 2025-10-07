'use client'
// import "../style/NavbarStyle.css"
// import logo from "../img/logo.webp"
import { Bars3Icon } from '@heroicons/react/24/outline'
import { RxCross2 } from "react-icons/rx"
import { useState } from "react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-[999]">
      <nav className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <div
            className="block px-12 pl-12 pr-14 mr-12 py-4 bg-[#8a6037] relative"
            style={{
              clipPath: 'polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%)'
            }}
          >
            <h4 className='text-xl text-white bold'>Heat Case</h4>
            {/* <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto object-cover"
            /> */}
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center justify-between flex-1 max-w-7xl mx-auto pr-8">
          <div className="flex gap-x-12">
            <a href="#" className="text-md font-semibold text-[#8a6037] hover:text-[#8a6037] no-underline">
              Home
            </a>
            <a href="#" className="text-md font-semibold text-[#8a6037] hover:text-[#8a6037] no-underline">
              Company
            </a>
            <a href="#" className="text-md font-semibold text-[#8a6037] hover:text-[#8a6037] no-underline">
              Services
            </a>
            <a href="#" className="text-md font-semibold text-[#8a6037] hover:text-[#8a6037] no-underline">
              Contact
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-5">
            <div className="border border-[#8a6037] rounded-md text-[#8a6037] px-3 py-1 cursor-pointer">
              EN | DE
            </div>
            <button className="text-md font-semibold text-[#8a6037] hover:text-[#8a6037]">
              Contact Us
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden ml-auto pr-4">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2.5 text-gray-700"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white p-6 sm:max-w-sm shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <button onClick={() => setMobileMenuOpen(false)} className="p-2.5 text-gray-700">
              <RxCross2 className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-4">
            <a href="#" className="block text-[#8a6037] font-semibold  hover:text-[#8a6037]">
              Home
            </a>
            <a href="#" className="block text-base font-semibold text-[#8a6037] hover:text-[#8a6037]">
              Company
            </a>
            <a href="#" className="block text-base font-semibold text-[#8a6037] hover:text-[#8a6037]">
              Services
            </a>
            <a href="#" className="block text-base font-semibold text-[#8a6037] hover:text-[#8a6037]">
              Contact
            </a>

            <div className="mt-6 border-t border-gray-200 pt-4 flex items-center justify-between">
              <div className="border border-[#8a6037] rounded-md text-[#8a6037] px-3 py-1 cursor-pointer">
                EN | DE
              </div>
              <button className="text-md font-semibold text-[#8a6037] hover:text-[#8a6037]">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
