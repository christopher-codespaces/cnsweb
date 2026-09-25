"use client";

import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Target, 
  CheckCircle2,
  Sparkles,
  Layers,
  Activity
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const TYPEFORM_URL = "https://opnform.com/forms/application-form-linlsi";
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
    { name: 'About Us', href: '/about', active: true },
    { name: 'Case Studies', href: '/#case-studies' },
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

/* About Hero Header Section */
const AboutHero = () => {
  return (
    <section className="relative pt-36 pb-12 md:pt-44 md:pb-16 px-6 md:px-12 text-center text-white z-10">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/15 text-xs md:text-sm font-medium tracking-wide text-white/90 shadow-lg">
          <Sparkles className="w-4 h-4 text-amber-300" />
          Our Story
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
          We Didn&apos;t Start as a &quot;Growth Partner.&quot; <br className="hidden sm:inline" />
          <span className="underline decoration-white/30 decoration-wavy underline-offset-8">We Built It The Hard Way.</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-normal leading-relaxed">
          Cape Neto Solutions started in pure lead generation—building paid acquisition campaigns from scratch and generating over 2M+ in trackable client revenue.
        </p>
      </div>
    </section>
  );
};

/* Origin Story Breakdown */
const OriginStory = () => {
  return (
    <section className="relative py-12 md:py-16 px-6 md:px-12 z-10">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Realization Box */}
        <div className="bg-black/30 backdrop-blur-xl border border-white/15 rounded-3xl p-8 md:p-12 shadow-2xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <Activity className="w-5 h-5 text-amber-300" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300">The Hard Truth We Learned</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
            Demand is almost never the bottleneck.
          </h2>

          <div className="text-sm md:text-base text-white/80 space-y-4 leading-relaxed font-normal">
            <p>
              When we started out, we focused strictly on paid acquisition. It worked—our funnels drove hundreds of qualified leads and generated over 2M+ for our partners. But as campaigns scaled, we noticed a trend that most agencies ignore:
            </p>
            <p className="p-4 bg-black/40 rounded-2xl border border-white/10 font-medium text-white italic">
              &quot;When follow-up is messy, onboarding is weak, offers are unclear, or retention is ignored... even great traffic collapses into wasted spend.&quot;
            </p>
            <p>
              Generating leads showed us what works—and more importantly, exposed where businesses break down when trying to scale up.
            </p>
          </div>
        </div>

        {/* The Evolution Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black/30 backdrop-blur-xl border border-white/15 rounded-3xl p-8 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">From Task-Doers To Growth Operators</h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                We stopped being an agency that just &quot;runs ads.&quot; Instead, we build the actual infrastructure that keeps businesses profitable—fixing offers, funnels, sales processes, and customer retention.
              </p>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-xl border border-white/15 rounded-3xl p-8 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Lean By Design</h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                We take on fewer partners on purpose. We embed directly into your business with a clear rule: if a system doesn’t drive revenue, improve conversion, or boost retention, it gets cut.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

/* Principles / Rules */
const Principles = () => {
  const rules = [
    { title: "2M+ Proven Base", desc: "Built from real lead gen wins across competitive markets." },
    { title: "Full-Stack Integration", desc: "We fix what happens after the click: sales, onboarding, & LTV." },
    { title: "Zero Fluff Policy", desc: "No vanity metrics. Everything is tied directly to cash collection." },
  ];

  return (
    <section className="relative py-12 md:py-16 px-6 md:px-12 z-10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rules.map((rule, idx) => (
            <div key={idx} className="bg-black/30 backdrop-blur-xl border border-white/15 rounded-2xl p-6">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mb-3" />
              <h4 className="text-base font-bold text-white mb-1">{rule.title}</h4>
              <p className="text-xs text-white/70">{rule.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Call To Action Banner */
const AboutCta = ({ onApply }: { onApply: () => void }) => {
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
            Let&apos;s Build Your Growth System
          </h2>

          <p className="text-white/80 text-sm sm:text-base max-w-lg mx-auto">
            Book a call with us today to see if your offer is ready for scale.
          </p>

          <div className="pt-4">
            <button 
              onClick={onApply}
              className="bg-white text-black hover:bg-neutral-100 font-extrabold text-base px-9 py-4 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl inline-flex items-center gap-3"
            >
              <span>Speak With Us</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function AboutPage() {
  const handleApply = () => {
    window.open(TYPEFORM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#FF5712] text-white font-sans antialiased selection:bg-black selection:text-white relative overflow-x-hidden">
      <BackgroundBlobs />
      <Navbar onBookCall={handleApply} />

      <main className="relative z-10">
        <AboutHero />
        <OriginStory />
        <Principles />
        <AboutCta onApply={handleApply} />
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