import React from 'react';
import { Banner } from '@/types';
import { Button } from '@/components/ui/Button';

export function Banners({ data }: { data: Banner[] }) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8">
          {data.map((banner, i) => (
            <div 
              key={banner.id} 
              className={`relative overflow-hidden rounded-3xl p-8 md:p-10 ${
                i === 0 
                  ? 'bg-gradient-to-br from-indigo-900 to-slate-900 text-white' 
                  : 'bg-gradient-to-br from-violet-100 to-fuchsia-50 text-slate-900 ring-1 ring-inset ring-slate-200/50'
              }`}
            >
              <div className="relative z-10 max-w-sm">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
                  i === 0 ? 'bg-indigo-500/30 text-indigo-200' : 'bg-white text-violet-700 shadow-sm'
                }`}>
                  {banner.type === 'onpage' ? 'On-Page SEO' : 'Off-Page SEO'}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">{banner.title}</h3>
                <p className={`mb-8 ${i === 0 ? 'text-indigo-200' : 'text-slate-600'}`}>
                  {banner.description}
                </p>
                <Button 
                  variant={i === 0 ? 'primary' : 'outline'} 
                  className={i === 0 ? 'bg-indigo-500 hover:bg-indigo-400 text-white shadow-none' : 'border-violet-300 text-violet-700 hover:bg-violet-100 focus:ring-violet-500'}
                >
                  Read Guide
                </Button>
              </div>
              
              {/* Decorative background elements based on banner index */}
              {i === 0 ? (
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
              ) : (
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-fuchsia-200 rounded-full blur-2xl opacity-40"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
