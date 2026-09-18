"use client";

import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Maximize2, 
  Minimize2, 
  Presentation,
  Sparkles 
} from 'lucide-react';

export default function PdfViewer({ pdfUrl = "/my-growth-guide.pdf", totalSlides = 10 }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 1));
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`relative rounded-2xl overflow-hidden transition-all duration-300 border border-white/20 backdrop-blur-xl bg-black/40 shadow-2xl ${
      isFullscreen ? 'fixed inset-4 z-50 flex flex-col m-0 max-w-none' : 'w-full max-w-4xl mx-auto'
    }`}>
      {/* Presentation Header Bar */}
      <div className="bg-black/60 backdrop-blur-md px-4 py-3 border-b border-white/10 flex items-center justify-between gap-3 text-white text-sm">
        <div className="flex items-center gap-2">
          <div className="bg-orange-500/20 text-orange-400 p-1.5 rounded-lg border border-orange-500/30">
            <Presentation className="w-4 h-4" />
          </div>
          <span className="font-medium text-xs md:text-sm truncate text-white/90">
            Growth Strategy Presentation
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Slide Indicator */}
          <span className="text-xs font-mono bg-white/10 px-2.5 py-1 rounded-md border border-white/10">
            Slide {currentSlide} of {totalSlides}
          </span>

          <a 
            href={pdfUrl} 
            download 
            target="_blank" 
            rel="noreferrer"
            className="p-1.5 hover:bg-white/10 rounded-lg transition text-white/80 hover:text-white"
            title="Download Deck"
          >
            <Download className="w-4 h-4" />
          </a>

          <button 
            onClick={toggleFullscreen}
            className="p-1.5 hover:bg-white/10 rounded-lg transition text-white/80 hover:text-white"
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Embedded Slide Stage (Enforces 16:9 Presentation Ratio) */}
      <div className={`relative bg-neutral-950 flex items-center justify-center p-2 md:p-6 ${
        isFullscreen ? 'flex-1' : 'aspect-video w-full'
      }`}>
        <iframe 
          src={`${pdfUrl}#page=${currentSlide}&view=Fit&toolbar=0&navpanes=0`}
          className="w-full h-full rounded-lg border border-white/10 shadow-2xl"
          title={`Presentation Slide ${currentSlide}`}
        />

        {/* Left Arrow Button Overlay */}
        <button
          onClick={handlePrevSlide}
          disabled={currentSlide === 1}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 disabled:opacity-20 disabled:pointer-events-none transition-all shadow-xl backdrop-blur-md"
          title="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Right Arrow Button Overlay */}
        <button
          onClick={handleNextSlide}
          disabled={currentSlide === totalSlides}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 disabled:opacity-20 disabled:pointer-events-none transition-all shadow-xl backdrop-blur-md"
          title="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Presentation Footer Bar */}
      <div className="bg-black/40 backdrop-blur-sm px-6 py-2.5 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          Interactive Deck Mode
        </span>

        {/* Bottom Slide Navigation Dots */}
        <div className="hidden sm:flex items-center gap-1.5">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx + 1)}
              className={`h-1.5 rounded-full transition-all ${
                currentSlide === idx + 1 ? 'w-6 bg-white' : 'w-1.5 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}