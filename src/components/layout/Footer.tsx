import React from 'react';

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 py-12 mt-20">
      <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} SEO Hero. All rights reserved.</p>
        <p className="mt-2">Mock data prototype for SEO Audit Tool.</p>
      </div>
    </footer>
  );
}
