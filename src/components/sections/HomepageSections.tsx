import React from 'react';
import Link from 'next/link';
import { Search, Link as LinkIcon, Zap, BarChart3, CheckCircle, ArrowRight, TrendingUp, Globe, Shield } from 'lucide-react';

const TOOLS = [
  {
    icon: Search,
    color: 'indigo',
    tag: 'On-Page SEO',
    title: 'Deep On-Page Analysis',
    description: 'Uncover every on-page issue holding your site back. We scan meta tags, heading hierarchy, content structure, keyword density, schema markup, and 50+ more signals.',
    highlights: ['Title & meta description checks', 'H1–H6 heading structure', 'Image alt text audit', 'Internal linking opportunities'],
  },
  {
    icon: LinkIcon,
    color: 'violet',
    tag: 'Off-Page SEO',
    title: 'Full Backlink Profiling',
    description: 'See every link pointing to your site, assess its quality, and discover the exact platforms your competitors are using to build authority.',
    highlights: ['Domain authority scoring', 'Toxic link detection', 'Referring domain analysis', 'Platform recommendations'],
  },
  {
    icon: Zap,
    color: 'amber',
    tag: 'Performance',
    title: 'Core Web Vitals Audit',
    description: 'Google ranks fast pages higher. Get a detailed breakdown of your LCP, CLS, FID, and TTFB scores with actionable fix recommendations.',
    highlights: ['LCP, CLS & FID scores', 'Mobile vs. Desktop comparison', 'Server response time', 'Third-party script impact'],
  },
  {
    icon: BarChart3,
    color: 'emerald',
    tag: 'Competitive Intel',
    title: 'Competitor Tracking',
    description: 'Know exactly who ranks above you and why. Identify competitor keyword gaps and steal their traffic with data-driven content strategies.',
    highlights: ['Top competing domains', 'Keyword overlap analysis', 'Content gap identification', 'SERP ranking changes'],
  },
];

const TESTIMONIALS = [
  {
    name: 'Sarah Mitchell',
    role: 'Head of SEO, Growthify Agency',
    quote: 'SEO Hero helped us identify 47 critical issues on a client site in under 60 seconds. It would have taken our team a full day. Absolutely indispensable.',
    avatar: 'SM',
    color: 'bg-indigo-500',
  },
  {
    name: 'James Okafor',
    role: 'Founder, RankBoost Digital',
    quote: 'The competitor tracking feature alone is worth 10x the price. We found three keyword goldmines our rivals were ranking for and flipped them within a month.',
    avatar: 'JO',
    color: 'bg-violet-500',
  },
  {
    name: 'Priya Sharma',
    role: 'Marketing Director, TechScale',
    quote: 'Finally, a tool that doesn\'t require a PhD to understand. Clear insights, clear fixes, clear results. We saw a 34% organic traffic increase in 6 weeks.',
    avatar: 'PS',
    color: 'bg-emerald-500',
  },
];

const BENEFITS = [
  { icon: TrendingUp, text: 'Boost organic traffic within weeks' },
  { icon: Globe, text: 'Covers 200+ SEO ranking signals' },
  { icon: Shield, text: 'Enterprise-grade accuracy' },
  { icon: Zap, text: 'Results delivered in under 60 seconds' },
];

const colorMap: Record<string, { bg: string; text: string; ring: string; light: string }> = {
  indigo: { bg: 'bg-indigo-600', text: 'text-indigo-600', ring: 'ring-indigo-600', light: 'bg-indigo-50' },
  violet: { bg: 'bg-violet-600', text: 'text-violet-600', ring: 'ring-violet-600', light: 'bg-violet-50' },
  amber: { bg: 'bg-amber-500', text: 'text-amber-600', ring: 'ring-amber-500', light: 'bg-amber-50' },
  emerald: { bg: 'bg-emerald-600', text: 'text-emerald-600', ring: 'ring-emerald-600', light: 'bg-emerald-50' },
};

export function HomepageSections() {
  return (
    <>
      {/* Tools Section */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">Complete SEO Platform</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Everything You Need to <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Dominate Search</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From on-page fixes to competitive intelligence — our four specialized tools work together to give you the complete picture.
            </p>
          </div>

          <div className="space-y-8">
            {TOOLS.map((tool, i) => {
              const Icon = tool.icon;
              const c = colorMap[tool.color];
              return (
                <div
                  key={tool.title}
                  className={`group bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-8 items-start ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Icon Side */}
                  <div className="shrink-0 flex flex-col items-start gap-4 md:w-72">
                    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${c.light} ${c.text}`}>{tool.tag}</span>
                    <div className={`w-16 h-16 rounded-2xl ${c.bg} flex items-center justify-center shadow-lg`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{tool.title}</h3>
                    <Link
                      href="/analyze"
                      className={`inline-flex items-center gap-2 text-sm font-semibold ${c.text} group-hover:gap-3 transition-all`}
                    >
                      Try it free <ArrowRight size={15} />
                    </Link>
                  </div>

                  {/* Content Side */}
                  <div className="flex-1">
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">{tool.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {tool.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                          <CheckCircle size={16} className={`${c.text} shrink-0`} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="py-14 bg-gradient-to-r from-indigo-900 to-slate-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {BENEFITS.map(({ icon: Icon, text }) => (
              <div key={text} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Icon size={22} className="text-indigo-300" />
                </div>
                <p className="text-white text-sm font-medium leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-3">Trusted by SEO Professionals</h2>
            <p className="text-slate-500 text-lg">Real results from real marketers and agencies.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-slate-50 rounded-2xl p-7 border border-slate-100 flex flex-col gap-5">
                <p className="text-slate-700 leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Ready to See What&apos;s Holding <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Your Site Back?</span>
          </h2>
          <p className="text-lg text-slate-500 mb-10">
            Get a complete SEO audit in under 60 seconds. No account, no credit card required.
          </p>
          <Link
            href="/analyze"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold px-10 py-4 rounded-xl transition-all shadow-lg shadow-indigo-300/40 text-lg"
          >
            Start Your Free Audit
            <ArrowRight size={20} />
          </Link>
          <p className="mt-4 text-sm text-slate-400">Free forever · No signup required · Results in 60 seconds</p>
        </div>
      </section>
    </>
  );
}
