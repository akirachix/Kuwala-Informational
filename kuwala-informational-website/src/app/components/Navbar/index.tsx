'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  return (
    <header className="relative bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="DH logo"
                width={120}
                height={40}
                className="w-24 md:w-28 mr-25 mt-20  lg:w-32 h-auto max-h-20 object-contain"
              />
            </div>
            
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <Link href="#Landingpage" className="text-base lg:text-lg xl:text-xl hover:text-amber-700 transition-colors">Home</Link>
              <Link href="#About" className="text-base lg:text-lg xl:text-xl hover:text-amber-600 transition-colors">About</Link>
              <Link href="#product" className="text-base lg:text-lg xl:text-xl hover:text-amber-600 transition-colors">Products</Link>
              <Link href="#services" className="text-base lg:text-lg xl:text-xl hover:text-amber-600 transition-colors">Services</Link>
              <Link href="#team" className="text-base lg:text-lg xl:text-xl hover:text-amber-600 transition-colors">Team</Link>
            </div>
            
            <button onClick={toggleMenu} className="md:hidden focus:outline-none" aria-label="Toggle menu">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className='fixed inset-0 z-50 bg-white flex flex-col items-center justify-center'>
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 p-2 focus:outline-none"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <div className="flex flex-col items-center space-y-6 text-xl">
            <Link href="#Landingpage" className="hover:text-amber-700 transition-colors" onClick={toggleMenu}>Home</Link>
            <Link href="#About" className="hover:text-amber-600 transition-colors" onClick={toggleMenu}>About</Link>
            <Link href="#product" className="hover:text-amber-600 transition-colors" onClick={toggleMenu}>Products</Link>
            <Link href="#services" className="hover:text-amber-600 transition-colors" onClick={toggleMenu}>Services</Link>
            <Link href="#team" className="hover:text-amber-600 transition-colors" onClick={toggleMenu}>Team</Link>
          </div>
        </div>
      )}
    </header>
  );
}