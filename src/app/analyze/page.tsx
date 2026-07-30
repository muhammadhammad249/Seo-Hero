'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Search, Globe, ArrowRight, Zap, ShieldCheck, BarChart3, Link as LinkIcon } from 'lucide-react';

const FEATURES = [
  { icon: Search, label: 'On-Page Analysis', desc: 'Meta tags, headings, content structure' },
  { icon: LinkIcon, label: 'Backlink Profiling', desc: 'Inbound links & domain authority' },
  { icon: Zap, label: 'Performance Audit', desc: 'Core Web Vitals & speed scores' },
  { icon: BarChart3, label: 'Competitor Tracking', desc: 'Rival rankings & keyword gaps' },
];

export default function AnalyzePage() {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = url.trim();
    if (!trimmed) {
      setError('Please enter a website URL');
      return;
    }
    // Normalize URL
    const normalized = trimmed.startsWith('http') ? trimmed : `https://${trimmed}`;
    router.push(`/audit?url=${encodeURIComponent(normalized)}`);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_#eef2ff,_#ffffff_50%,_#f5f3ff)] flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-slate-900">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-9 5 18 3-9h5"/></svg>
          </div>
          SEO Hero
        </Link>
        <Link href="/" className="text-sm text-slate-500 hover:text-slate-800 transition-colors">← Back to Home</Link>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pb-16">
        <div className="w-full max-w-2xl text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-semibold mb-8">
            <ShieldCheck size={14} />
            Free — No Account Required
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-4">
            Analyze Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600"> Website</span>
          </h1>
          <p className="text-lg text-slate-500 mb-12 max-w-md mx-auto">
            Enter your website URL below. We&apos;ll run a full SEO, performance, and competitor audit in seconds.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="relative">
            <div className="flex flex-col sm:flex-row gap-3 bg-white p-2 rounded-2xl shadow-xl shadow-indigo-900/10 ring-1 ring-slate-200">
              <div className="flex items-center gap-3 flex-1 px-3">
                <Globe size={20} className="text-slate-400 shrink-0" />
                <input
                  type="text"
                  id="website-url"
                  value={url}
                  onChange={(e) => { setUrl(e.target.value); setError(''); }}
                  placeholder="yourwebsite.com"
                  className="flex-1 py-3 text-lg text-slate-900 placeholder-slate-400 bg-transparent outline-none"
                  autoFocus
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold px-8 py-3 rounded-xl transition-all shadow-md hover:shadow-indigo-300/50 text-base"
              >
                Run Audit
                <ArrowRight size={18} />
              </button>
            </div>
            {error && (
              <p className="absolute -bottom-8 left-0 right-0 text-center text-sm text-rose-500">{error}</p>
            )}
          </form>

          {/* Example links */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-12 text-sm text-slate-500">
            <span>Try an example:</span>
            {['stripe.com', 'notion.so', 'vercel.com'].map((example) => (
              <button
                key={example}
                onClick={() => { setUrl(example); setError(''); }}
                className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors"
              >
                {example}
              </button>
            ))}
          </div>
        </div>

        {/* Features row */}
        <div className="mt-20 w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-4">
          {FEATURES.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="bg-white/70 backdrop-blur border border-slate-100 rounded-2xl p-4 text-center shadow-sm">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon size={20} className="text-indigo-600" />
              </div>
              <p className="font-semibold text-slate-800 text-sm">{label}</p>
              <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
