import React, { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';

const Navbar = ({ Mode, setMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (sectionName) => {
    setTimeout(() => {
      console.log("Scrolling to:", sectionName);
      scroller.scrollTo(sectionName, {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY ) {
      
        setIsVisible(false);
      } else {
        
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-4 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        Mode ? 'bg-white' : 'bg-[#171c28]'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="col-span-1 p-5">
        <h1 className="font text-xl sm:text-2xl">Karan Kumar</h1>
      </div>

      <div className="col-span-1 flex items-center relative md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-[10%]"
        >
          {isOpen ? (
            // Cross Icon (X)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon (≡)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      <div className="hidden md:col-span-3 md:grid md:grid-cols-5 p-5">
        <div className="col-span-1 flex items-center justify-center">
          <button
            onClick={() => scrollToSection('Skills')}
            className={`${
              Mode ? 'hover:bg-[#f4f4f4]' : 'hover:bg-[#55198b]'
            } p-2 text-md lg:text-lg cursor-pointer`}
          >
            Skills
          </button>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <button
            onClick={() => scrollToSection('Projects')}
            className={`${
              Mode ? 'hover:bg-[#f4f4f4]' : 'hover:bg-[#55198b]'
            } p-2 text-md lg:text-lg cursor-pointer`}
          >
            Projects
          </button>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <button
            onClick={() => scrollToSection('Education')}
            className={`${
              Mode ? 'hover:bg-[#f4f4f4]' : 'hover:bg-[#55198b]'
            } p-2 text-md lg:text-lg cursor-pointer`}
          >
            Education
          </button>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <button
            onClick={() => scrollToSection('Contact-me')}
            className={`${
              Mode ? 'hover:bg-[#f4f4f4]' : 'hover:bg-[#55198b]'
            } p-2 text-md lg:text-lg cursor-pointer`}
          >
            Contact me
          </button>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <button
            onClick={() => setMode(!Mode)}
            className={`${
              Mode ? 'hover:bg-[#f4f4f4]' : 'hover:bg-[#55198b]'
            } p-2 cursor-pointer`}
          >
            {Mode ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </div>

      <div className={`relative ${isOpen ? 'block' : 'hidden'} mt-3 z-10 w-screen`}>
        <ul
          className={`flex absolute top-0 z-50 flex-col text-xl gap-5 p-5 ${
            Mode ? 'bg-white' : 'bg-[#171c28]'
          } w-screen`}
        >
          <li
            className="cursor-pointer"
            onClick={() => {
              scrollToSection('Skills');
              setIsOpen(false);
            }}
          >
            Skills
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              scrollToSection('Projects');
              setIsOpen(false);
            }}
          >
            Projects
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              scrollToSection('Education');
              setIsOpen(false);
            }}
          >
            Education
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              scrollToSection('Contact-me');
              setIsOpen(false);
            }}
          >
            Contact
          </li>
          <li className="cursor-pointer">
            <button
              className="cursor-pointer"
              onClick={() => setMode(!Mode)}
            >
              {Mode ? 'Dark 🌙' : 'Light ☀️'}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;