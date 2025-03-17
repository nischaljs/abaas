import { useEffect, useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router';
import { currentUserProviders } from '../context/AuthContext';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { currentUser } = currentUserProviders();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
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
    <div className="relative w-full bg-white">
      <div className="container mx-auto py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="logo.png" alt="Abaas Logo" className="lg:h-20 h-12 md:h-12" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks className="flex items-center space-x-6 cursor-pointer" />
        </div>

        {currentUser ? (
          <div className='hidden md:flex items-center space-x-6'>
            <div className='flex items-center justify-between gap-3'>
              <img src={`${currentUser.img}`} alt={`${currentUser.name}`} className='w-12 h-12 object-cover object-center rounded-full' />
              <h6 className='font-semibold'>{currentUser.name}</h6>
            </div>
            <Link to={'/profile'} className='px-5 py-2 text-sm font-medium rounded-full bg-black text-white hover:bg-gray-800 transition-colors duration-300 cursor-pointer'>Profile</Link>
          </div>
        ) : (
          <div className="hidden md:flex items-center space-x-4">
            <Link to={'/register'} className="px-5 py-2 text-sm font-medium rounded-full border border-black text-black hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer">
              Sign Up
            </Link>
            <Link to={'/login'} className="px-5 py-2 text-sm font-medium rounded-full bg-black text-white hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
              Log In
            </Link>
          </div>
        )}

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

              {currentUser ? (
                <div className='flex flex-col space-y-3 pt-4 items-start'>
                  <div className='flex items-center justify-between gap-3'>
                    <img src={`${currentUser.img}`} alt={`${currentUser.name}`} className='w-12 h-12 object-cover object-center rounded-full' />
                    <h6 className='font-semibold'>{currentUser.name}</h6>
                  </div>
                  <Link to={'/profile'} className='px-5 py-2 text-sm font-medium rounded-full bg-black text-white hover:bg-gray-800 transition-colors duration-300 cursor-pointer'>Profile</Link>
                </div>
              ) : (
                <div className="flex flex-col space-y-3 pt-4">
                  <Link to={'/register'} className="w-full px-5 py-2 text-sm font-medium rounded-full border border-black text-black hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
                    Sign Up
                  </Link>
                  <Link to={'/login'} className="w-full px-5 py-2 text-sm font-medium rounded-full bg-black text-white hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
                    Log In
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// NavLinks Component
const NavLinks = ({ className }: { className: string }) => {
  return (
    <nav className={className}>
      <Link to="/" className="text-gray-800 hover:text-black font-medium transition-colors duration-200 hover:font-semibold">Home</Link>
      <Link to="/about" className="text-gray-800 hover:text-black font-medium transition-colors duration-200 hover:font-semibold">About</Link>
      <Link to="/contacts" className="text-gray-800 hover:text-black font-medium transition-colors duration-200 hover:font-semibold">Contacts</Link>
      <Link to="/agents" className="text-gray-800 hover:text-black font-medium transition-colors duration-200 hover:font-semibold">Agents</Link>
    </nav>
  );
};

export default NavBar;
