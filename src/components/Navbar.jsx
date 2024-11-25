import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const additionalCSS = "bg-[#071624dd] py-4 backdrop-blur-[24px] border-b";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`flex sticky top-0 justify-between border-[#ddd]/20 items-center z-[99] px-6  transition-all ${
        isScrolled ? additionalCSS : "py-6"
      }`}
    >
      {/* Logo */}
      <img src="/assets/moonexlogo.png" alt="logo" />

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex gap-8 text-[18px]">
        {["Home", "About Us", "Roadmap", "FAQs", "Contact Us"].map((item) => (
          <li
            key={item}
            className="cursor-pointer text-white hover:text-[#E4B40D] transition-colors duration-200"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Connect Wallet Button */}
      <button className="bg-gradient-to-r lg:block hidden from-[#E4B40D] to-[#FFE68FD6] text-[#111] font-[500] py-3 px-4 rounded-full hover:bg-[#FFE68F] transition-colors duration-200">
        Connect Wallet
      </button>

      {/* Hamburger Icon */}
      <button
        className="lg:hidden flex items-center justify-center w-8 h-8 text-white"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-[40%] bg-dark border-l bg-[#051422] border-[#212121] z-50 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0 opacity-100 " : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-12 right-9 text-white"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col gap-6 mt-16 px-6 text-[18px]">
          {["Home", "About Us", "Roadmap", "FAQs", "Contact Us"].map((item) => (
            <li
              key={item}
              className="cursor-pointer text-white hover:text-[#E4B40D] transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </li>
          ))}
        </ul>
        <button className="mt-8 mx-6 bg-gradient-to-r from-[#E4B40D] to-[#FFE68FD6] text-[#111] font-[500] py-2 px-4 rounded-full hover:opacity-90 transition-opacity duration-200">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
