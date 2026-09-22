"use client";

import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Play, 
  CheckCircle2, 
  Sparkles, 
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const TYPEFORM_URL = "https://yourtypeformlink.typeform.com/to/yourformid";

/* Ambient Background Blobs */
const BackgroundBlobs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <div 
      className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"
      style={{ backgroundColor: '#DBE2E0' }}
    />
    <div 
      className="absolute top-[20%] -right-[15%] w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"
      style={{ backgroundColor: '#6B1C23' }}
    />
    <div 
      className="absolute bottom-[20%] -left-[10%] w-[550px] h-[550px] rounded-full mix-blend-multiply filter blur-3xl opacity-55 animate-blob animation-delay-4000"
      style={{ backgroundColor: '#DBE2E0' }}
    />
    <div 
      className="absolute -bottom-[10%] right-[10%] w-[650px] h-[650px] rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-3000"
      style={{ backgroundColor: '#6B1C23' }}
    />
  </div>
);

/* Navigation Bar */
const Navbar = ({ onBookCall }: { onBookCall: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/case-studies', active: true },
    { name: 'DTC', href: '/dtc' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/50 backdrop-blur-md py-4 shadow-xl border-b border-white/10' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
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
        </Link>

        <nav className="hidden md:flex items-center gap-8 bg-black/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                link.active ? 'text-white font-bold underline underline-offset-4 decoration-amber-300' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <button 
            onClick={onBookCall}
            className="bg-white text-black hover:bg-neutral-100 font-bold px-5 py-2.5 rounded-full transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg flex items-center gap-2 text-sm"
          >
            <span>Book a call</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white/80 hover:text-white focus:outline-none"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white rounded transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-white rounded transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-white rounded transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-white/90 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onBookCall(); }}
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

/* Case Studies Hero Section */
const CaseStudiesHero = () => {
  return (
    <section className="relative pt-36 pb-12 md:pt-44 md:pb-16 px-6 md:px-12 text-center text-white z-10">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/15 text-xs md:text-sm font-medium tracking-wide text-white/90 shadow-lg">
          <Sparkles className="w-4 h-4 text-amber-300" />
          Proven Performance
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
          Real Results Captured On <span className="underline decoration-white/30 decoration-wavy underline-offset-8">Video & Screenshots</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-normal leading-relaxed">
          These case studies come from our lead generation and growth operating systems. We generated over 2M+ in direct revenue across creators, platforms, and institutions.
        </p>

        {/* Top Summary Bar */}
        <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="bg-black/30 backdrop-blur-md border border-white/15 rounded-2xl p-4 text-center">
            <div className="text-2xl md:text-3xl font-black text-white">2M+</div>
            <div className="text-[11px] text-white/70 uppercase tracking-wider font-semibold mt-0.5">Attributable Revenue</div>
          </div>
          <div className="bg-black/30 backdrop-blur-md border border-white/15 rounded-2xl p-4 text-center">
            <div className="text-2xl md:text-3xl font-black text-white">60k/m</div>
            <div className="text-[11px] text-white/70 uppercase tracking-wider font-semibold mt-0.5">Mollen (Infinite Faith)</div>
          </div>
          <div className="bg-black/30 backdrop-blur-md border border-white/15 rounded-2xl p-4 text-center">
            <div className="text-2xl md:text-3xl font-black text-white">20k+/m</div>
            <div className="text-[11px] text-white/70 uppercase tracking-wider font-semibold mt-0.5">Amiri Elkurdi</div>
          </div>
          <div className="bg-black/30 backdrop-blur-md border border-white/15 rounded-2xl p-4 text-center">
            <div className="text-2xl md:text-3xl font-black text-white">+50k</div>
            <div className="text-[11px] text-white/70 uppercase tracking-wider font-semibold mt-0.5">Platinum College</div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Creator Breakdown Section */
const CreatorBreakdowns = () => {
  const creators = [
    {
      name: "Mollen (INFINITEFAITHGLOBAL)",
      metric: "60,000 / Month",
      handle: "@infinitefaithglobal",
      socials: "10K IG • 25K TikTok",
      description: "Scaled content monetization and offer infrastructure, taking revenue up to 60k per month consistently.",
      image: "/mollen.jpg" // Add your image path or placeholder
    },
    {
      name: "Amiri Elkurdi",
      metric: "20,000+ / Month",
      handle: "@amirielkurdi",
      socials: "2K IG • 4K TikTok • 53,190 Shopify Run",
      description: "Engineered high-converting e-commerce email flows and ad conversion funnels generating regular 20k+ monthly runs.",
      image: "/amiri.jpg"
    },
    {
      name: "Platinum College",
      metric: "+50,000 Extra Revenue",
      handle: "platinumcollege.co.za",
      socials: "Educational Institution",
      description: "Deployed lead generation acquisition systems that drove over 50,000 in additional student enrollments.",
      image: "/platinum.jpg"
    }
  ];

  return (
    <section className="relative py-12 md:py-16 px-6 md:px-12 z-10">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="text-xs font-bold uppercase tracking-widest text-amber-300">Featured Creator Results</div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Client Success Breakdown</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {creators.map((creator, idx) => (
            <div 
              key={idx}
              className="bg-black/30 backdrop-blur-xl border border-white/15 rounded-3xl p-6 hover:bg-black/40 transition-all duration-300 hover:-translate-y-1.5 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="bg-white/10 rounded-2xl p-4 text-center mb-6 border border-white/10">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">Generated</div>
                  <div className="text-3xl font-black text-white">{creator.metric}</div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{creator.name}</h3>
                <div className="text-xs text-white/60 mb-4 font-mono">{creator.socials}</div>

                <p className="text-sm text-white/80 leading-relaxed font-normal">
                  {creator.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Verified Case
                </span>
                <span className="font-mono">{creator.handle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Video Proof Grid Section (From Screenshot Layout) */
const VideoProofSection = () => {
  const videoCards = [
    {
      title: "Over 2M Generated (Lead Gen Era)",
      desc: "Video proof from our lead generation phase — the work that shaped how we now build creator growth infrastructure.",
    },
    {
      title: "Client Results Breakdown (Lead Gen Era)",
      desc: "Video proof from our lead generation phase — the work that shaped how we now build creator revenue systems.",
    },
    {
      title: "Video Case Study (System Deep Dive)",
      desc: "Detailed walkthrough showing how we scale offer conversion, pipeline flow, and recurring revenue.",
    },
    {
      title: "Video Case Study (Funnel Execution)",
      desc: "Step-by-step breakdown of paid acquisition, backend community systems, and revenue retention.",
    }
  ];

  return (
    <section className="relative py-12 md:py-16 px-6 md:px-12 z-10">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="text-xs font-bold uppercase tracking-widest text-amber-300">Legacy & Video Proof</div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Watch The Walkthroughs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoCards.map((card, idx) => (
            <div 
              key={idx}
              className="bg-black/30 backdrop-blur-xl border border-white/15 rounded-3xl p-6 shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Video Container Mockup */}
                <div className="relative aspect-video w-full bg-neutral-900 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center group cursor-pointer mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  
                  {/* Play Button Overlay */}
                  <div className="w-16 h-16 rounded-full bg-[#FF5712] text-white flex items-center justify-center shadow-2xl z-20 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-7 h-7 fill-white ml-1" />
                  </div>

                  <div className="absolute bottom-4 left-4 z-20 text-xs font-bold text-white/80 bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
                    Click to Play Video
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">{card.desc}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <button className="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs px-4 py-2 rounded-xl transition flex items-center gap-2 border border-white/15">
                  <span>Watch Video</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] text-white/50 font-mono">Cape Neto Proof</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Call To Action Banner */
const CaseStudiesCta = ({ onApply }: { onApply: () => void }) => {
  return (
    <section className="relative py-16 md:py-20 px-6 md:px-12 z-10">
      <div className="max-w-5xl mx-auto bg-black/40 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
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
            Want This Level Of Execution Inside Your Business?
          </h2>

          <p className="text-white/80 text-sm sm:text-base max-w-lg mx-auto">
            These results are proof of our operating systems. Today, we go beyond acquisition to build offers, funnels, sales systems, and retention engines.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onApply}
              className="w-full sm:w-auto bg-white text-black hover:bg-neutral-100 font-extrabold text-base px-9 py-4 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl inline-flex items-center justify-center gap-3"
            >
              <span>Apply To Partner</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>

            <button 
              onClick={onApply}
              className="w-full sm:w-auto bg-black/40 hover:bg-black/60 text-white font-bold text-base px-8 py-4 rounded-full border border-white/20 transition backdrop-blur-md inline-flex items-center justify-center gap-2"
            >
              <span>Book Strategy Call</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Main Case Studies Page Export */
export default function CaseStudiesPage() {
  const handleApply = () => {
    window.open(TYPEFORM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#FF5712] text-white font-sans antialiased selection:bg-black selection:text-white relative overflow-x-hidden">
      <BackgroundBlobs />
      <Navbar onBookCall={handleApply} />

      <main className="relative z-10">
        <CaseStudiesHero />
        <CreatorBreakdowns />
        <VideoProofSection />
        <CaseStudiesCta onApply={handleApply} />
      </main>

      <footer className="relative z-10 border-t border-white/10 py-8 px-6 text-center text-xs text-white/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Cape Neto Solutions Inc. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <a href="/about" className="hover:text-white transition">About Us</a>
            <a href="/dtc" className="hover:text-white transition">DTC</a>
          </div>
        </div>
      </footer>
    </div>
  );
}