"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);
  return (
    <header className="sticky mt-[20px] md z-50">
      <nav className="flex justify-between items-center px-4 py-2 sm:px-6 lg:px-8 max-w-7xl mx-auto pro:gap-[80px]">

      <div className="flex justify-start items-center ml-4 2xl:ml-[-150px]">
      <div className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36">
  <img
    src="/images/logo.png"
    alt="DH logo"
    className="w-full h-auto max-h-20 ml-[20px] object-contain gx:ml-[-4px] gs:ml-[-12px] ipa:ml-[-4px] ipm:ml-[-3px] ipA:ml-[-5px] fs:ml-[-10px]"
  />
</div>

</div>

<div className="hidden md:flex space-x-2 md:space-x-4 lg:space-x-6 xl:space-x-8 text-base md:text-lg lg:text-2xl xl:text-[30px] ml-4 lg:ml-8 pro:text-[30px] text-[1.125rem] md:text-[1.65rem] lg:text-2xl xl:text-[30px]">
  <Link href="/home" className="text-amber-600 hover:text-amber-700 transition-colors nav-link">Home</Link>
  <Link href="/about" className="hover:text-amber-600 transition-colors nav-link">About</Link>
  <Link href="/products" className="hover:text-amber-600 transition-colors nav-link">Products</Link>
  <Link href="/services" className="hover:text-amber-600 transition-colors nav-link">Services</Link>
  <Link href="/team" className="hover:text-amber-600 transition-colors nav-link">Team</Link>
</div>

        <button onClick={toggleMenu} className="md:hidden focus:outline-none" aria-label="Toggle menu">
          <Menu size={24} />
        </button>
      </nav>


      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 p-2 focus:outline-none"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <div className="flex flex-col items-center space-y-6 text-[20px]">
            <Link href="/home" className="text-amber-600 hover:text-amber-700 transition-colors" onClick={toggleMenu}>Home</Link>
            <Link href="/about" className="hover:text-amber-600 transition-colors" onClick={toggleMenu}>About</Link>
            <Link href="/products" className="hover:text-amber-600 transition-colors" onClick={toggleMenu}>Products</Link>
            <Link href="/services" className="hover:text-amber-600 transition-colors" onClick={toggleMenu}>Services</Link>
            <Link href="/team" className="hover:text-amber-600 transition-colors" onClick={toggleMenu}>Team</Link>
          </div>
        </div>
      )}
    </header>
  );
}

