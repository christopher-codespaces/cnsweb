"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import PdfViewer from './PdfViewer';

interface HeroProps {
  onApply: () => void;
}

export default function Hero({ onApply }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 text-center text-white z-10">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/15 text-xs md:text-sm font-medium tracking-wide text-white/90 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          For Coaches & Course Creators above 10k per month
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
          Learn <span className="underline decoration-white/30 decoration-wavy underline-offset-8">How To Launch</span> & Grow Your Digital Product Business With Our Bespoke Services
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-normal leading-relaxed">
          We help creators launch info-products and digital programs that grow past 100k/m by implementing our proven launch, sales, & growth systems.
        </p>

        {/* Step 1 Indicator */}
        <div className="pt-8 pb-3">
          <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-white/80 bg-black/20 px-4 py-1.5 rounded-full border border-white/10">
            <span className="w-5 h-5 rounded-full bg-white text-black text-xs flex items-center justify-center font-bold">1</span>
            Step 1: Read The Growth Guide Below
          </div>
        </div>

        {/* Interactive PDF Slide Presentation */}
        <div className="pt-2 pb-10">
          <PdfViewer pdfUrl="/my-growth-guide.pdf" totalSlides={12} />
        </div>

        {/* Step 2 Call to Action */}
        <div className="space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-white/80 bg-black/20 px-4 py-1.5 rounded-full border border-white/10">
            <span className="w-5 h-5 rounded-full bg-white text-black text-xs flex items-center justify-center font-bold">2</span>
            Step 2: Apply Now And Speak With Us
          </div>
          <div>
            <button 
              onClick={onApply}
              className="bg-white text-black hover:bg-neutral-100 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl inline-flex items-center gap-3 border border-white/20"
            >
              <span>Apply Now</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}