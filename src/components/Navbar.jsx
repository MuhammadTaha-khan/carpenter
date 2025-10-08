'use client'

import { Bars3Icon } from '@heroicons/react/24/outline'
import { RxCross2 } from "react-icons/rx"
import { useState } from "react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-[999]">
      <nav className="flex items-center justify-between md:px-8 ">
        {/* Logo */}
        <div
          className="px-8 py-3 bg-[#8a6037] relative"
          style={{
            clipPath: 'polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%)'
          }}
        >
          <h4 className="text-xl text-white font-bold">Heat Case</h4>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center justify-between flex-1 ml-8">
          <div className="flex gap-x-10">
            {["Home", "Company", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-md font-bold text-[#8a6037] hover:text-[#6f4d2e] transition"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-5">
            <div className="border border-[#8a6037] rounded-md text-[#8a6037] px-3 py-1 cursor-pointer hover:bg-[#8a6037] hover:text-white transition">
              EN | DE
            </div>
            <button className="text-md font-semibold text-[#8a6037] hover:text-[#6f4d2e]">
              Contact Us
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-gray-700"
          >
            <Bars3Icon className="h-7 w-7" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl p-6 animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-xl font-bold text-[#8a6037]">Heat Case</h4>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-[#8a6037]">
                <RxCross2 className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-5">
              {["Home", "Company", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-[#8a6037] font-semibold text-lg hover:text-[#6f4d2e] transition"
                >
                  {item}
                </a>
              ))}

              <div className="mt-8 border-t border-gray-200 pt-4 flex items-center justify-between">
                <div className="border border-[#8a6037] rounded-md text-[#8a6037] px-3 py-1 cursor-pointer hover:bg-[#8a6037] hover:text-white transition">
                  EN | DE
                </div>
                <button className="text-md font-semibold text-[#8a6037] hover:text-[#6f4d2e]">
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Slide-in animation */}
      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  )
}
