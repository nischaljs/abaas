import React, { useRef, useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('#menu-toggle')) {
        setShowMenu(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuRef]);

  // Handle mobile menu toggle
  const toggleMenu = () => setShowMenu(prev => !prev);
  
  return (
    <div className="relative w-full bg-white ">
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="logo.png" alt="Abaas Logo" className="lg:h-20 h-12 md:h-12" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks className="flex items-center space-x-6" />
        </div>

        {/* Authentication Buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-5 py-2 text-sm font-medium rounded-full border border-black text-black hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer">
            Sign Up
          </button>
          <button className="px-5 py-2 text-sm font-medium rounded-full bg-black text-white hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
            Log In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            id="menu-toggle"
            className="flex items-center justify-center p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            onClick={toggleMenu}
            aria-label={showMenu ? "Close menu" : "Open menu"}
          >
            {showMenu ? <IoMdClose size={20} /> : <GiHamburgerMenu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <div 
            ref={menuRef}
            className="absolute top-full right-0 left-0 bg-white shadow-lg z-50 transform transition-transform duration-200 ease-in-out md:hidden"
          >
            <div className="flex flex-col py-4 px-6 divide-y divide-gray-100">
              <NavLinks className="flex flex-col space-y-4 py-4" />
              
              <div className="flex flex-col space-y-3 pt-4">
                <button className=" cursor-pointer w-full px-5 py-2 text-sm font-medium rounded-full border border-black text-black hover:bg-gray-100 transition-colors duration-300 ">
                  Sign Up
                </button>
                <button className="w-full px-5 py-2 text-sm font-medium rounded-full bg-black text-white hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
                  Log In
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// navlinks 
const NavLinks = ({ className }:{className:string}) => {
  return (
    <nav className={className}>
      <a href="/" className="text-gray-800 hover:text-black font-medium transition-colors duration-200">Home</a>
      <a href="/about" className="text-gray-800 hover:text-black font-medium transition-colors duration-200">About</a>
      <a href="/contacts" className="text-gray-800 hover:text-black font-medium transition-colors duration-200">Contacts</a>
      <a href="/agents" className="text-gray-800 hover:text-black font-medium transition-colors duration-200">Agents</a>
    </nav>
  );
};

export default NavBar;