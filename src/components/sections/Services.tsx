import React from 'react';
import Link from 'next/link';
import { Service } from '@/types';
import { Card } from '@/components/ui/Card';
import { Search, Link as LinkIcon, Zap, BarChart } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search size={24} className="text-indigo-600" />,
  Link: <LinkIcon size={24} className="text-violet-600" />,
  Zap: <Zap size={24} className="text-amber-500" />,
  BarChart: <BarChart size={24} className="text-emerald-500" />
};

export function Services({ data }: { data: Service[] }) {
  return (
    <section className="py-20 bg-slate-50" id="features">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Complete SEO Toolset</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Everything you need to analyze, optimize, and dominate search engine rankings in one powerful platform.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((service) => (
            <Card key={service.id} className="group hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-6 group-hover:bg-white group-hover:shadow-md transition-all">
                {iconMap[service.icon] || <Search size={24} />}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link href={service.link} className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700">
                Learn more
                <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
