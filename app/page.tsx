"use client";

import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Maximize2, 
  Minimize2, 
  Presentation, 
  Sparkles, 
  TrendingUp, 
  BarChart3, 
  Layers, 
  Users, 
  Rocket, 
} from 'lucide-react';
import Image from 'next/image';

// Replace with your actual Typeform URL
const TYPEFORM_URL = "https://yourtypeformlink.typeform.com/to/yourformid";

/* Floating Ambient Background Blobs Component */
const BackgroundBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Blob 1 - Light Grey/Green (#DBE2E0) Top Left */}
      <div 
        className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"
        style={{ backgroundColor: '#DBE2E0' }}
      />
      
      {/* Blob 2 - Dark Maroon (#6B1C23) Top Right */}
      <div 
        className="absolute top-[20%] -right-[15%] w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"
        style={{ backgroundColor: '#6B1C23' }}
      />
      
      {/* Blob 3 - Light Grey/Green (#DBE2E0) Mid/Bottom Left */}
      <div 
        className="absolute bottom-[20%] -left-[10%] w-[550px] h-[550px] rounded-full mix-blend-multiply filter blur-3xl opacity-55 animate-blob animation-delay-4000"
        style={{ backgroundColor: '#DBE2E0' }}
      />

      {/* Blob 4 - Dark Maroon (#6B1C23) Bottom Right */}
      <div 
        className="absolute -bottom-[10%] right-[10%] w-[650px] h-[650px] rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-3000"
        style={{ backgroundColor: '#6B1C23' }}
      />
    </div>
  );
};

/* Header Navigation Bar */
/* Header Navigation Bar */
const Navbar = ({ onBookCall }: { onBookCall: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: 'about' },
    { name: 'Case Studies', href: 'case-studies' },
    { name: 'DTC', href: 'dtc' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/50 backdrop-blur-md py-4 shadow-xl border-b border-white/10' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-inner overflow-hidden p-2 group-hover:border-white/40 transition">
            <Image 
              src="/v3.png" 
              alt="Logo" 
              width={20} 
              height={20} 
              className="w-5 h-5 object-contain transform -rotate-12 group-hover:rotate-0 transition-transform duration-300" 
            />
          </div>
          <span className="font-bold text-xl tracking-tight text-white flex items-center gap-1">
            Cape Neto<span className="opacity-80 font-normal">Solutions</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 bg-black/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Header CTA Button */}
        <div className="hidden md:flex items-center">
          <button 
            onClick={onBookCall}
            className="bg-white text-black hover:bg-neutral-100 font-bold px-5 py-2.5 rounded-full transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg flex items-center gap-2 text-sm"
          >
            <span>Book a call</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white/80 hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white rounded transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-white rounded transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-white rounded transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-white/90 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onBookCall();
              }}
              className="w-full bg-white text-black font-bold px-5 py-3 rounded-full flex items-center justify-center gap-2 text-sm"
            >
              <span>Book a call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

/* Embedded Slide Deck PDF Viewer */
const PdfViewer = ({ pdfUrl = "/agency-growth-blueprint.pdf", totalSlides = 33 }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showInteractiveSlide, setShowInteractiveSlide] = useState(false);

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
            agency-growth-blueprint.pdf
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 md:gap-3">
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
            title="Download PDF Presentation"
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

      {/* Embedded Slide Stage */}
      <div className={`relative bg-neutral-950 flex items-center justify-center p-2 md:p-6 overflow-hidden ${
        isFullscreen ? 'flex-1' : 'aspect-video w-full'
      }`}>
        {!showInteractiveSlide ? (
          <iframe 
            src={`${pdfUrl}#page=${currentSlide}&view=Fit&toolbar=0&navpanes=0`}
            className="w-full h-full rounded-lg border border-white/10 shadow-2xl"
            title={`Presentation Slide ${currentSlide}`}
          />
        ) : (
          /* Canvas Fallback Deck Mode */
          <div className="bg-white text-neutral-900 rounded-xl p-6 md:p-10 shadow-2xl w-full h-full flex flex-col justify-between border border-white/20 select-none">
            <div className="flex items-center justify-between border-b pb-3 border-neutral-200">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-[#FF5712] rounded flex items-center justify-center text-white font-bold text-xs">
                  CNS
                </div>
                <span className="font-bold text-xs md:text-sm tracking-tight text-neutral-800">Cape Neto Solutions</span>
              </div>
              <span className="text-[10px] sm:text-xs bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded-full font-bold">
                SLIDE {currentSlide} / {totalSlides}
              </span>
            </div>

            <div className="my-auto py-4">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 bg-[#FF5712]/10 text-[#FF5712] rounded-md font-bold text-xs tracking-wide uppercase">
                  Executive Strategy Deck
                </div>
                <h2 className="text-xl sm:text-3xl font-extrabold text-neutral-900 leading-tight">
                  Scaling Digital Info-Products Past 100k/Month
                </h2>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  Slide {currentSlide}: Advanced growth framework, acquisition channels, and conversion systems.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between border-t pt-3 border-neutral-100 text-[10px] text-neutral-400">
              <span>Confidential • Cape Neto Solutions</span>
              <span>Use arrows to navigate</span>
            </div>
          </div>
        )}

        {/* Left Arrow Button Overlay */}
        <button
          onClick={handlePrevSlide}
          disabled={currentSlide === 1}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 disabled:opacity-20 disabled:pointer-events-none transition-all shadow-xl backdrop-blur-md"
          title="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Right Arrow Button Overlay */}
        <button
          onClick={handleNextSlide}
          disabled={currentSlide === totalSlides}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 disabled:opacity-20 disabled:pointer-events-none transition-all shadow-xl backdrop-blur-md"
          title="Next Slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Presentation Footer Bar */}
      <div className="bg-black/40 backdrop-blur-sm px-6 py-2.5 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          Interactive Slide Deck Mode
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
              title={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={() => setShowInteractiveSlide(!showInteractiveSlide)}
          className="hover:text-white underline underline-offset-2 transition text-[11px]"
        >
          {showInteractiveSlide ? "Switch to Public PDF Embed" : "Switch to Preview Deck"}
        </button>
      </div>
    </div>
  );
};

/* Hero Section */
const Hero = ({ onApply }: { onApply: () => void }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 text-center text-white z-10">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/15 text-xs md:text-sm font-medium tracking-wide text-white/90 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          For Coaches & Course Creators above 10k per month
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
          Learn <span className="underline decoration-white/30 decoration-wavy underline-offset-8">How To Launch</span> & Grow Your Digital Product Business With Our Bespoke Services
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-normal leading-relaxed">
          We help creators launch info-products and digital programs that grow past 100k/m by implementing our proven launch, sales, & growth systems.
        </p>

        <div className="pt-8 pb-3">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-white/80 bg-black/20 px-4 py-1.5 rounded-full border border-white/10">
            <span className="w-5 h-5 rounded-full bg-white text-black text-xs flex items-center justify-center font-bold">1</span>
            Step 1: Read The Growth Guide Below
          </div>
        </div>

        {/* Embedded Public PDF Viewer */}
        <div className="pt-2 pb-10">
          <PdfViewer pdfUrl="/agency-growth-blueprint.pdf" totalSlides={10} />
        </div>

        <div className="space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-white/80 bg-black/20 px-4 py-1.5 rounded-full border border-white/10">
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
};

/* Stats Metric Section */
const Stats = ({ onSpeak }: { onSpeak: () => void }) => {
  const statsData = [
    { value: "300K+", label: "In Total Client Revenue", icon: TrendingUp },
    { value: "57%", label: "Average Increase In Revenue", icon: BarChart3 },
    { value: "300", label: "In Monthly Ad Spend", icon: Layers },
    { value: "10+", label: "Active Enterprise Clients", icon: Users },
  ];

  return (
    <section className="relative py-16 md:py-20 px-6 md:px-12 z-10">
      <div className="max-w-6xl mx-auto bg-black/30 backdrop-blur-xl border border-white/15 rounded-3xl p-8 md:p-12 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-white/70 mb-2">Our Numbers</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Our Numbers Speak <br className="hidden sm:inline" />For Themselves
            </h2>
            <p className="text-sm text-white/70 mt-2">Including our JV partners</p>
          </div>

          <button 
            onClick={onSpeak}
            className="self-start md:self-auto bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl border border-white/20 transition backdrop-blur-md flex items-center gap-2 text-sm"
          >
            <span>Speak With Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {statsData.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className={`pt-6 sm:pt-0 ${idx !== 0 ? 'sm:pl-8' : ''} flex flex-col justify-between`}>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 w-fit mb-4">
                  <Icon className="w-5 h-5 text-white/90" />
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/80 font-medium leading-snug">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* Services Section */
const Services = () => {
  const servicesList = [
    {
      category: "Launches",
      title: "Launches & Conversion Systems",
      description: "From webinars to multi-stage launches, we build and manage every element, funnels, systems, and automations designed to convert at scale.",
      icon: Rocket
    },
    {
      category: "Sales Consulting & Management",
      title: "Sales Management & Consulting",
      description: "We setup and manage high-performing sales operations — from leadership consulting to daily management — ensuring your team consistently closes more deals.",
      icon: Users
    },
    {
      category: "Data & Revenue Scaling",
      title: "Data & Revenue Scaling",
      description: "We track the right numbers, analyze performance, and help you make data-driven decisions that directly drive revenue and profitability.",
      icon: BarChart3
    }
  ];

  return (
    <section className="relative py-16 md:py-20 px-6 md:px-12 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-white/70">Our Expertise</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            How We Help You When Partnering Up
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative bg-black/30 backdrop-blur-xl border border-white/15 rounded-2xl p-8 hover:bg-black/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-white/60 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      {service.category}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-200 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-white/80 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="pt-8 mt-6 border-t border-white/10 flex items-center text-xs font-semibold text-white/90 gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Learn capabilities</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* Call To Action Banner */
const CtaSection = ({ onApply }: { onApply: () => void }) => {
  return (
    <section className="relative py-16 md:py-20 px-6 md:px-12 z-10">
      <div className="max-w-5xl mx-auto bg-black/40 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-60 h-60 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white overflow-hidden p-1">
              <Image 
                src="/v3.png" 
                alt="Cape Neto Solutions" 
                width={20} 
                height={20} 
                className="w-5 h-5 object-contain transform -rotate-12" 
              />
            </div>
            <span className="font-bold text-lg text-white">Cape Neto Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Apply Now And Speak With Us
          </h2>

          <p className="text-white/80 text-sm sm:text-base max-w-lg mx-auto">
            Ready to scale your info-product revenue beyond 100k/month? Book your application call today.
          </p>

          <div className="pt-4">
            <button 
              onClick={onApply}
              className="bg-white text-black hover:bg-neutral-100 font-extrabold text-base px-9 py-4 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl inline-flex items-center gap-3"
            >
              <span>Apply Now</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Main Root Page Export */
export default function Home() {
  const handleApply = () => {
    window.open(TYPEFORM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#FF5712] text-white font-sans antialiased selection:bg-black selection:text-white relative overflow-x-hidden">
      <BackgroundBlobs />
      <Navbar onBookCall={handleApply} />

      <main className="relative z-10">
        <Hero onApply={handleApply} />
        <Stats onSpeak={handleApply} />
        <Services />
        <CtaSection onApply={handleApply} />
      </main>

      <footer className="relative z-10 border-t border-white/10 py-8 px-6 text-center text-xs text-white/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Cape Neto Solutions Inc. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(40px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 30px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 18s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}