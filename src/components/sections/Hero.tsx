import React from 'react';
import Link from 'next/link';
import { HeroData } from '@/types';
import { ArrowRight, Star } from 'lucide-react';

export function Hero({ data }: { data: HeroData }) {
  return (
    <section className="relative pt-24 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-r from-indigo-400/10 to-violet-400/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 max-w-5xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold mb-8 ring-1 ring-inset ring-indigo-700/10">
          <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
          {data.badge}
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
          {data.heading.split('Hidden').map((part, i) => (
            i === 0
              ? <React.Fragment key={i}>{part}<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Hidden</span></React.Fragment>
              : <React.Fragment key={i}>{part}</React.Fragment>
          ))}
        </h1>

        {/* Sub-heading */}
        <p className="text-xl text-slate-600 mb-4 max-w-2xl mx-auto leading-relaxed">
          {data.subheading}
        </p>
        <p className="text-slate-500 mb-12 max-w-xl mx-auto text-lg">{data.paragraph}</p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">
          <Link
            href="/analyze"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-indigo-300/40 text-lg"
          >
            {data.cta.text}
            <ArrowRight size={20} />
          </Link>
          <a
            href="#features"
            className="inline-flex items-center gap-2 text-slate-700 hover:text-indigo-700 font-semibold px-8 py-4 rounded-xl border border-slate-200 hover:border-indigo-200 bg-white transition-all shadow-sm text-lg"
          >
            See How It Works
          </a>
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
          <div className="flex -space-x-1.5">
            {['bg-indigo-500','bg-violet-500','bg-amber-500','bg-emerald-500','bg-rose-500'].map((c,i) => (
              <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-white`} />
            ))}
          </div>
          <div className="flex items-center gap-1 ml-2">
            <Star size={14} className="text-amber-400 fill-amber-400" />
            <span className="font-semibold text-slate-700">4.9</span>
          </div>
          <span>Trusted by <span className="font-semibold text-slate-800">12,000+</span> agencies & marketers</span>
        </div>

        {/* Stats */}
        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-wrap justify-center gap-10 md:gap-20">
          {data.stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-extrabold text-slate-900">{stat.value}</span>
              <span className="text-sm font-medium text-slate-500 mt-1 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
