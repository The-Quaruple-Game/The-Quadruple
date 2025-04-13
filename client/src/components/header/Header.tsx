import homelogo from "../../assets/mlogo.svg"

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navmenu from "@/components/navitems/Navmenu";
import { NavbarDemo } from "../navbardemo/NavBarDemo";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className=" text-black shadow-md">
    <div className="container mx-auto px-4 py-3">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
  <img src={homelogo} alt="Logo" className="h-10 w-auto" />
</Link>


        {/* Desktop Navigation */}
       <Navmenu/>
       {/* <NavbarDemo/> */}

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/signin">
          <button className="px-4 py-2 border border-white text-black cursor-pointer">
            Login
          </button>
          </Link>
          <Link to="/signup">

          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer  transition-colors">
            Register
          </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 pb-3 space-y-3">
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:text-blue-300 py-2">Home</a>
            <a href="#" className="hover:text-blue-300 py-2">About</a>
            <a href="#" className="hover:text-blue-300 py-2">Services</a>
            <a href="#" className="hover:text-blue-300 py-2">Contact</a>
          </div>
          <div className="flex flex-col space-y-2 pt-2 border-t border-gray-700">
            <button className="px-4 py-2 border border-white text-white rounded hover:bg-gray-700 transition-colors">
              Login
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
              Register
            </button>
          </div>
        </div>
      )}
    </div>
  </header>
  )
}

export default Header
