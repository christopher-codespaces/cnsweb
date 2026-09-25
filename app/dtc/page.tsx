"use client";

import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  ShoppingBag, 
  Zap, 
  CheckCircle2, 
  Target, 
  Repeat, 
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const TYPEFORM_URL = "https://opnform.com/forms/application-form-linlsi";
/* Background Ambient Blobs */
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
    { name: 'About Us', href: '/#about' },
    { name: 'Case Studies', href: '/#case-studies' },
    { name: 'DTC', href: '/dtc', active: true },
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
            <span>Scale Your DTC Brand</span>
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
              <span>Scale Your DTC Brand</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

/* DTC Hero Section */
const DtcHero = ({ onApply }: { onApply: () => void }) => {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-6 md:px-12 text-center text-white z-10">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/15 text-xs md:text-sm font-medium tracking-wide text-white/90 shadow-lg">
          <ShoppingBag className="w-4 h-4 text-amber-300" />
          Dedicated DTC & E-Commerce Scale Engine
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
          We Scale <span className="underline decoration-white/30 decoration-wavy underline-offset-8">DTC Brands</span> Past 8-Figures With Performance Media & Lifecycle CRO
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-normal leading-relaxed">
          Stop struggling with ad fatigue and shrinking margins. We engineer high-ROAS Meta & TikTok acquisition, custom retention flows, and offer optimization for ambitious DTC brands doing 30k–300k+/month.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onApply}
            className="w-full sm:w-auto bg-white text-black hover:bg-neutral-100 font-extrabold text-lg px-9 py-4 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl inline-flex items-center justify-center gap-3"
          >
            <span>Book DTC Growth Audit</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>

          <a 
            href="#dtc-pillars"
            className="w-full sm:w-auto bg-black/30 hover:bg-black/50 text-white font-bold text-base px-8 py-4 rounded-full border border-white/20 transition backdrop-blur-md inline-flex items-center justify-center gap-2"
          >
            <span>Explore Growth Pillars</span>
          </a>
        </div>
      </div>
    </section>
  );
};

/* DTC Growth Engine Pillars */
const DtcPillars = () => {
  const pillars = [
    {
      icon: Target,
      tag: "Acquisition",
      title: "Paid Media & Omnichannel Paid Social",
      description: "We scale Meta, TikTok, and Google Ads using high-converting UGC creative engines, bid testing, and blended MER tracking."
    },
    {
      icon: Repeat,
      tag: "Retention & LTV",
      title: "Klaviyo Email & SMS Retention Systems",
      description: "Boost customer lifetime value (LTV) with intelligent segmentation, post-purchase replenishment flows, and win-back sequences."
    },
    {
      icon: Zap,
      tag: "Conversion",
      title: "Full-Funnel CRO & Offer Engineering",
      description: "Turn clicks into buyers with high-converting custom landing pages, bundle builds, order bumps, and checkout optimization."
    }
  ];

  return (
    <section id="dtc-pillars" className="relative py-16 md:py-20 px-6 md:px-12 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-white/70">The DTC Playbook</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Our 3-Pillar E-Commerce Scale System
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-black/30 backdrop-blur-xl border border-white/15 rounded-2xl p-8 hover:bg-black/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      {pillar.tag}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-white/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs text-white/70">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Tested across 40+ active brands</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* Metrics Section */
const DtcMetrics = () => {
  return (
    <section className="relative py-16 md:py-20 px-6 md:px-12 z-10">
      <div className="max-w-6xl mx-auto bg-black/30 backdrop-blur-xl border border-white/15 rounded-3xl p-8 md:p-12 shadow-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          <div className="pt-4 sm:pt-0">
            <div className="text-3xl sm:text-4xl font-black text-white">4.8x</div>
            <div className="text-xs sm:text-sm text-white/70 mt-1">Average Blended ROAS</div>
          </div>
          <div className="pt-4 sm:pt-0 sm:pl-8">
            <div className="text-3xl sm:text-4xl font-black text-white">+142%</div>
            <div className="text-xs sm:text-sm text-white/70 mt-1">First-Order AOV Growth</div>
          </div>
          <div className="pt-4 sm:pt-0 sm:pl-8">
            <div className="text-3xl sm:text-4xl font-black text-white">38%</div>
            <div className="text-xs sm:text-sm text-white/70 mt-1">Repeat Purchase Rate</div>
          </div>
          <div className="pt-4 sm:pt-0 sm:pl-8">
            <div className="text-3xl sm:text-4xl font-black text-white">300K+</div>
            <div className="text-xs sm:text-sm text-white/70 mt-1">Tracked DTC Tracked Spend</div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Call To Action */
const DtcCta = ({ onApply }: { onApply: () => void }) => (
  <section className="relative py-16 md:py-20 px-6 md:px-12 z-10">
    <div className="max-w-5xl mx-auto bg-black/40 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Ready To Scale Your DTC Brand?
        </h2>
        <p className="text-white/80 text-sm sm:text-base">
          Get a full creative, media, and funnel audit with our direct-to-consumer growth team today.
        </p>
        <button 
          onClick={onApply}
          className="bg-white text-black hover:bg-neutral-100 font-extrabold text-base px-9 py-4 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl inline-flex items-center gap-3"
        >
          <span>Claim Free DTC Audit</span>
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  </section>
);

export default function DtcPage() {
  const handleApply = () => {
    window.open(TYPEFORM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#FF5712] text-white font-sans antialiased selection:bg-black selection:text-white relative overflow-x-hidden">
      <BackgroundBlobs />
      <Navbar onBookCall={handleApply} />

      <main className="relative z-10">
        <DtcHero onApply={handleApply} />
        <DtcMetrics />
        <DtcPillars />
        <DtcCta onApply={handleApply} />
      </main>

      <footer className="relative z-10 border-t border-white/10 py-8 px-6 text-center text-xs text-white/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Cape Neto Solutions Inc. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/#about" className="hover:text-white transition">About Us</Link>
            <Link href="/#case-studies" className="hover:text-white transition">Case Studies</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}