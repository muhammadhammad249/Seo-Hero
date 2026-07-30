'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';

interface NavbarClientProps {
  links: { label: string; url: string }[];
}

export function NavbarClient({ links }: NavbarClientProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-slate-900 tracking-tight" onClick={() => setIsOpen(false)}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-9 5 18 3-9h5"/></svg>
          </div>
          SEO Hero
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.label} href={link.url} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/signin" className="text-sm font-medium text-slate-600 hover:text-slate-900">
            Sign In
          </Link>
          <Link href="/analyze">
            <Button variant="primary" className="py-2 px-4 text-sm">
              Start Free Audit
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center gap-4">
          <Link href="/analyze" className="sm:hidden">
            <Button variant="primary" className="py-1.5 px-3 text-xs">
              Audit
            </Button>
          </Link>
          <button 
            className="text-slate-600 hover:text-slate-900 p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-100 shadow-xl py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {links.map((link) => (
            <Link 
              key={link.label} 
              href={link.url} 
              className="text-base font-medium text-slate-700 py-2 border-b border-slate-50 hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <Link 
              href="/signin" 
              className="text-base font-medium text-center text-slate-700 py-2 border border-slate-200 rounded-xl hover:bg-slate-50"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
            <Link 
              href="/analyze" 
              className="flex justify-center"
              onClick={() => setIsOpen(false)}
            >
              <Button variant="primary" className="w-full py-3 text-base">
                Start Free Audit
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
