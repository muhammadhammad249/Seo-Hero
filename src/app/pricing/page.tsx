import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { getPricing } from '@/lib/getData';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default async function PricingPage() {
  const pricingTiers = await getPricing();

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      <main className="flex-grow py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Simple, transparent pricing</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Choose the perfect plan for your SEO needs. No hidden fees.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <Card 
                key={tier.id} 
                className={`relative flex flex-col ${tier.highlighted ? 'ring-2 ring-indigo-600 shadow-xl scale-105 z-10' : 'ring-1 ring-slate-200'}`}
              >
                {tier.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.tier}</h3>
                  <p className="text-slate-500 text-sm h-10">{tier.description}</p>
                </div>
                
                <div className="mb-8">
                  <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
                  <span className="text-slate-500 font-medium ml-1">/{tier.billingCycle.replace('per ', '')}</span>
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-500 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={tier.highlighted ? 'primary' : 'outline'} 
                  className={`w-full ${tier.highlighted ? 'shadow-none' : ''}`}
                >
                  {tier.ctaText}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
