import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import "../../assets/GlobalCss/Styles.css"

function MainLayoutHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-100">
      <div
        className="max-w-full mx-auto flex items-center justify-between px-8 py-12
                    transition-all duration-800ms ease-[cubic-bezier(0.16,1,0.3,1)] 
                    bg-linear-to-b from-[#080808f2] to-transparent"
      >
        <Link
          to="/framd/home"
          className="text-white uppercase text-2xl font-semibold tracking-widest font-(family-name:--love-light-font)"
        >
          Framd
        </Link>
        <ul className="hidden md:flex gap-10 text-sm tracking-wider">
          <li className="cursor-pointer border-transparent border-b-2 hover:border-[#d1a759] transition-all duration-300">
            <Link to="/framd/home">Home</Link>
          </li>
          <li className="cursor-pointer border-transparent border-b-2 hover:border-[#d1a759] transition-all duration-300">
            <Link to="/framd/gallery">Gallery</Link>
          </li>
          <li className="cursor-pointer border-transparent border-b-2 hover:border-[#d1a759] transition-all duration-300">
            <Link to="/framd/about-us">About Us</Link>
          </li>
          <li className="cursor-pointer border-transparent border-b-2 hover:border-[#d1a759] transition-all duration-300">
            <Link to="/framd/contact-us">Contact Us</Link>
          </li>
        </ul>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black/90 text-white px-6 pb-6">
          <ul className="flex flex-col gap-4">
            <li>
              <Link to="/framd/home" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/framd/gallery" onClick={() => setIsOpen(false)}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/framd/about-us" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/framd/contact-us" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default MainLayoutHeader;
