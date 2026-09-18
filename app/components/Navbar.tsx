"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function Navbar({ onBookCall }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/20 backdrop-blur-md py-4 shadow-lg border-b border-white/10' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-inner overflow-hidden p-1">
            <Image 
              src="/v3.png" 
              alt="Cape Neto Solutions Logo" 
              width={24} 
              height={24} 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-bold text-xl tracking-tight text-white flex items-center gap-1">
            Launch<span className="opacity-80 font-normal">Process</span>
          </span>
        </div>

        <button 
          onClick={onBookCall}
          className="bg-white text-black hover:bg-neutral-100 font-semibold px-5 py-2.5 rounded-full transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg flex items-center gap-2 text-sm"
        >
          <span>Book a call</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}