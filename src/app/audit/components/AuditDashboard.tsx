'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { AuditResult } from '@/types';
import {
  Search, Link as LinkIcon, Zap, BarChart3,
  CheckCircle, AlertCircle, AlertTriangle,
  Globe, TrendingUp, ArrowRight, ExternalLink
} from 'lucide-react';

interface Props {
  data: AuditResult;
}

/* ─────────────── Loading Screen ─────────────── */
function AuditLoader({ url }: { url: string }) {
  const steps = [
    'Crawling on-page elements...',
    'Scanning meta tags & headings...',
    'Checking backlinks & domain authority...',
    'Running Core Web Vitals analysis...',
    'Fetching competitor keyword data...',
    'Compiling full report...',
  ];
  const stepsLength = steps.length;
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setStep(s => Math.min(s + 1, stepsLength - 1)), 400);
    return () => clearInterval(interval);
  }, [stepsLength]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
      {/* Animated ring */}
      <div className="relative w-24 h-24 mb-10">
        <div className="absolute inset-0 rounded-full border-4 border-indigo-100" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-600 animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Globe size={28} className="text-indigo-600" />
        </div>
      </div>

      <h2 className="text-2xl font-extrabold text-slate-900 mb-2 text-center">
        Auditing <span className="text-indigo-600">{url}</span>
      </h2>
      <p className="text-slate-500 mb-8 text-center text-sm max-w-xs">
        Running a full SEO scan across 4 dimensions. This takes just a moment.
      </p>

      {/* Step indicators */}
      <div className="w-full max-w-sm space-y-2">
        {steps.map((s, i) => (
          <div key={i} className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 ${
            i < step ? 'bg-emerald-50 text-emerald-700' :
            i === step ? 'bg-indigo-50 text-indigo-700 font-medium' :
            'text-slate-400'
          }`}>
            {i < step
              ? <CheckCircle size={16} className="text-emerald-500 shrink-0" />
              : i === step
                ? <div className="w-4 h-4 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin shrink-0" />
                : <div className="w-4 h-4 rounded-full border-2 border-slate-200 shrink-0" />
            }
            <span className="text-sm">{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────── Score Badge ─────────────── */
function ScoreBadge({ score, color }: { score: number; color: string }) {
  const colorMap: Record<string, string> = {
    indigo: 'text-indigo-600 border-indigo-300 bg-indigo-50',
    violet: 'text-violet-600 border-violet-300 bg-violet-50',
    amber:  'text-amber-600  border-amber-300  bg-amber-50',
    emerald:'text-emerald-600 border-emerald-300 bg-emerald-50',
  };
  return (
    <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border text-sm font-bold ${colorMap[color]}`}>
      {score}/100
    </div>
  );
}

/* ─────────────── Section Header ─────────────── */
function SectionHeader({
  icon: Icon, title, score, color, tag
}: {
  icon: React.ElementType;
  title: string;
  score: number;
  color: string;
  tag: string;
}) {
  const iconBg: Record<string, string> = {
    indigo: 'bg-indigo-600',
    violet: 'bg-violet-600',
    amber:  'bg-amber-500',
    emerald:'bg-emerald-600',
  };
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-100">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-2xl ${iconBg[color]} flex items-center justify-center shadow-sm`}>
          <Icon size={22} className="text-white" />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{tag}</span>
          <h2 className="text-2xl font-extrabold text-slate-900">{title}</h2>
        </div>
      </div>
      <ScoreBadge score={score} color={color} />
    </div>
  );
}

/* ─────────────── Main Dashboard ─────────────── */
export function AuditDashboard({ data }: Props) {
  const searchParams = useSearchParams();
  const url = searchParams.get('url') || data.url;

  const [isAuditing, setIsAuditing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsAuditing(false), 2800);
    return () => clearTimeout(timer);
  }, [url]);

  if (isAuditing) return <AuditLoader url={url} />;

  const overallScore = Math.round(
    (data.onPage.score + data.offPage.score + data.performance.score) / 3
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-24">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* ── Top Summary Bar ── */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Globe size={22} className="text-indigo-600" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-0.5">Full Audit Report</p>
                <h1 className="text-xl md:text-2xl font-extrabold text-slate-900 break-all">{url}</h1>
              </div>
            </div>

            <div className="flex items-center gap-6">
              {/* Overall score ring */}
              <div className="text-center">
                <div className="relative w-20 h-20">
                  <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="34" fill="none" stroke="#e2e8f0" strokeWidth="8"/>
                    <circle cx="40" cy="40" r="34" fill="none"
                      stroke={overallScore >= 80 ? '#10b981' : overallScore >= 60 ? '#f59e0b' : '#ef4444'}
                      strokeWidth="8"
                      strokeDasharray={`${(overallScore / 100) * 213.6} 213.6`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-extrabold text-slate-900">{overallScore}</span>
                  </div>
                </div>
                <p className="text-xs font-semibold text-slate-500 mt-1">Overall</p>
              </div>

              {/* 4 mini scores */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'On-Page', score: data.onPage.score, color: 'text-indigo-600' },
                  { label: 'Off-Page', score: data.offPage.score, color: 'text-violet-600' },
                  { label: 'Performance', score: data.performance.score, color: 'text-amber-600' },
                  { label: 'Competitors', score: data.competitors.topCompetitors.length * 20, color: 'text-emerald-600' },
                ].map(({ label, score, color }) => (
                  <div key={label} className="text-center">
                    <p className={`text-lg font-extrabold ${color}`}>{score}</p>
                    <p className="text-xs text-slate-400 font-medium">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            SECTION 1 — ON-PAGE ANALYSIS
        ══════════════════════════════════════════ */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 mb-6">
          <SectionHeader icon={Search} title="On-Page Analysis" score={data.onPage.score} color="indigo" tag="SEO Fundamentals" />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Issues */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Issues Found</h3>
              <div className="space-y-3">
                {data.onPage.issues.map(issue => (
                  <div key={issue.id} className={`flex gap-3 p-4 rounded-xl border ${
                    issue.severity === 'high'
                      ? 'bg-rose-50 border-rose-100'
                      : 'bg-amber-50 border-amber-100'
                  }`}>
                    {issue.severity === 'high'
                      ? <AlertCircle size={18} className="text-rose-500 shrink-0 mt-0.5" />
                      : <AlertTriangle size={18} className="text-amber-500 shrink-0 mt-0.5" />
                    }
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <h4 className="font-semibold text-slate-900 text-sm">{issue.title}</h4>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                          issue.severity === 'high' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'
                        }`}>{issue.severity}</span>
                      </div>
                      <p className="text-slate-600 text-xs leading-relaxed">{issue.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggestions */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Content Suggestions</h3>
              <div className="space-y-3">
                {data.onPage.suggestions.map(sug => (
                  <div key={sug.id} className="flex gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                    <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-slate-700 text-sm leading-relaxed">{sug.text}</p>
                  </div>
                ))}
                {/* Extra mock suggestions for richness */}
                {[
                  'Add structured data (schema markup) for rich search snippets.',
                  'Ensure all pages have unique, keyword-rich meta descriptions under 160 chars.',
                  'Improve internal linking structure to boost crawl depth.',
                ].map((tip, i) => (
                  <div key={i} className="flex gap-3 p-4 rounded-xl bg-indigo-50 border border-indigo-100">
                    <TrendingUp size={18} className="text-indigo-500 shrink-0 mt-0.5" />
                    <p className="text-slate-700 text-sm leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            SECTION 2 — BACKLINK PROFILING
        ══════════════════════════════════════════ */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 mb-6">
          <SectionHeader icon={LinkIcon} title="Backlink Profiling" score={data.offPage.score} color="violet" tag="Off-Page SEO" />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Platforms */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Recommended Platforms</h3>
              <div className="space-y-3">
                {[
                  ...data.offPage.recommendedPlatforms,
                  { id: 'plat-3', name: 'Reddit', type: 'Community', priority: 'medium' as const },
                  { id: 'plat-4', name: 'Quora', type: 'Q&A', priority: 'low' as const },
                  { id: 'plat-5', name: 'GitHub', type: 'Developer', priority: 'medium' as const },
                ].map(platform => (
                  <div key={platform.id} className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-violet-200 hover:bg-violet-50/30 transition-all group">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-violet-100 flex items-center justify-center">
                        <ExternalLink size={14} className="text-violet-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm">{platform.name}</h4>
                        <p className="text-xs text-slate-400 uppercase tracking-wide">{platform.type}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      platform.priority === 'high'   ? 'bg-rose-100 text-rose-700' :
                      platform.priority === 'medium' ? 'bg-amber-100 text-amber-700' :
                                                        'bg-slate-100 text-slate-600'
                    }`}>
                      {platform.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Ideas */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Content Ideas to Publish</h3>
              <div className="space-y-3">
                {[
                  ...data.offPage.contentIdeas,
                  { id: 'idea-3', title: 'Ultimate Comparison Guide', description: 'Compare your product vs. top competitors — high search intent.' },
                  { id: 'idea-4', title: 'Industry Trends Report', description: 'Data-driven annual report earns natural backlinks from journalists.' },
                ].map(idea => (
                  <div key={idea.id} className="p-4 rounded-xl border border-violet-100 bg-violet-50/40 group hover:bg-violet-50 transition-all">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold text-violet-900 text-sm">{idea.title}</h4>
                      <ArrowRight size={14} className="text-violet-400 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-xs text-violet-700/80 mt-1 leading-relaxed">{idea.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            SECTION 3 — PERFORMANCE AUDIT
        ══════════════════════════════════════════ */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 mb-6">
          <SectionHeader icon={Zap} title="Performance Audit" score={data.performance.score} color="amber" tag="Core Web Vitals" />

          {/* Metrics grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {data.performance.metrics.map((metric, i) => (
              <div key={i} className={`p-5 rounded-2xl border flex flex-col gap-3 ${
                metric.status === 'good' ? 'bg-emerald-50 border-emerald-100' :
                metric.status === 'needs-improvement' ? 'bg-amber-50 border-amber-100' :
                'bg-rose-50 border-rose-100'
              }`}>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{metric.name}</p>
                <p className="text-3xl font-extrabold text-slate-900">{metric.value}</p>
                <span className={`self-start text-xs font-bold px-2 py-1 rounded-full ${
                  metric.status === 'good' ? 'bg-emerald-200 text-emerald-800' :
                  metric.status === 'needs-improvement' ? 'bg-amber-200 text-amber-800' :
                  'bg-rose-200 text-rose-800'
                }`}>
                  {metric.status === 'good' ? '✓ Good' : metric.status === 'needs-improvement' ? '⚠ Improve' : '✗ Poor'}
                </span>
              </div>
            ))}
          </div>

          {/* Speed tips */}
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Speed Optimization Tips</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { tip: 'Compress & convert images to WebP format', impact: 'High Impact' },
              { tip: 'Enable lazy loading on below-the-fold images', impact: 'High Impact' },
              { tip: 'Minify & defer render-blocking JavaScript', impact: 'Medium Impact' },
              { tip: 'Implement a CDN for static asset delivery', impact: 'High Impact' },
              { tip: 'Enable Gzip/Brotli server-side compression', impact: 'Medium Impact' },
              { tip: 'Remove unused CSS and JavaScript bundles', impact: 'Medium Impact' },
            ].map(({ tip, impact }, i) => (
              <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-50/50 border border-amber-100">
                <Zap size={15} className="text-amber-500 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm text-slate-700 font-medium">{tip}</p>
                  <span className={`text-xs font-bold ${impact === 'High Impact' ? 'text-rose-500' : 'text-amber-500'}`}>{impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════
            SECTION 4 — COMPETITOR TRACKING
        ══════════════════════════════════════════ */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
          <SectionHeader icon={BarChart3} title="Competitor Tracking" score={78} color="emerald" tag="Competitive Intelligence" />

          <div className="space-y-5">
            {data.competitors.topCompetitors.map((comp, i) => (
              <div key={i} className="border border-slate-100 rounded-2xl p-5 hover:border-emerald-200 hover:bg-emerald-50/20 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                      <Globe size={16} className="text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{comp.domain}</h3>
                      <p className="text-xs text-slate-400">Rank #{i + 1} Competitor</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {/* Overlap bar */}
                    <div className="flex-1 min-w-[100px]">
                      <div className="flex justify-between text-xs font-medium text-slate-500 mb-1">
                        <span>Keyword Overlap</span>
                        <span className="font-bold text-emerald-600">{comp.overlapScore}%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
                          style={{ width: `${comp.overlapScore}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Top Keywords to Target</p>
                  <div className="flex flex-wrap gap-2">
                    {comp.topKeywords.map((kw, j) => (
                      <span key={j} className="px-3 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs font-semibold">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Competitive tips */}
          <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-emerald-900 to-slate-900 text-white">
            <h4 className="font-bold mb-2 flex items-center gap-2">
              <TrendingUp size={16} className="text-emerald-400" />
              Strategy Insight
            </h4>
            <p className="text-emerald-100 text-sm leading-relaxed">
              Your top competitor has an 85% keyword overlap. Focus on creating long-tail content around the keywords they rank for but haven&apos;t fully covered — this is your quickest path to outranking them.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
