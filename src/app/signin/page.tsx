'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, ArrowRight, Mail, Lock, User, ChevronLeft, CheckCircle } from 'lucide-react';

type View = 'login' | 'register' | 'forgot' | 'forgot-success';

export default function AuthPage() {
  const [view, setView] = useState<View>('login');

  return (
    <div className="min-h-screen flex">
      {/* Left Panel — Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-900 via-indigo-800 to-violet-900 relative overflow-hidden flex-col justify-between p-12">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-500/20 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-400/10 rounded-full -translate-x-1/2 -translate-y-1/2" />

        {/* Logo */}
        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12h4l3-9 5 18 3-9h5" />
              </svg>
            </div>
            <span className="text-white font-bold text-xl">SEO Hero</span>
          </Link>
        </div>

        {/* Center content */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-indigo-200 text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            Trusted by 12,000+ professionals
          </div>
          <h2 className="text-4xl font-extrabold text-white leading-tight mb-6">
            Your entire SEO workflow,<br />
            <span className="text-indigo-300">in one place.</span>
          </h2>
          <p className="text-indigo-200 text-lg leading-relaxed mb-12">
            Access your audit history, saved reports, competitor tracking dashboards, and performance analytics — all from your personal account.
          </p>

          {/* Feature bullets */}
          <div className="space-y-4">
            {[
              'Full audit history & saved reports',
              'Automated weekly SEO monitoring',
              'Competitor keyword gap alerts',
              'White-label PDF export',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-5 h-5 bg-emerald-400/20 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle size={13} className="text-emerald-400" />
                </div>
                <span className="text-indigo-100 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>


      </div>

      {/* Right Panel — Form */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 bg-white">
        {/* Mobile logo */}
        <div className="lg:hidden mb-10">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-slate-900">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12h4l3-9 5 18 3-9h5" />
              </svg>
            </div>
            SEO Hero
          </Link>
        </div>

        <div className="w-full max-w-md">
          {view === 'login' && <LoginForm onForgot={() => setView('forgot')} onRegister={() => setView('register')} />}
          {view === 'register' && <RegisterForm onLogin={() => setView('login')} />}
          {view === 'forgot' && <ForgotForm onBack={() => setView('login')} onSuccess={() => setView('forgot-success')} />}
          {view === 'forgot-success' && <ForgotSuccess onBack={() => setView('login')} />}
        </div>
      </div>
    </div>
  );
}

/* ── Login Form ── */
function LoginForm({ onForgot, onRegister }: { onForgot: () => void; onRegister: () => void }) {
  const [showPw, setShowPw] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div>
      <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Welcome back</h1>
      <p className="text-slate-500 mb-8">Sign in to your SEO Hero account to continue.</p>

      {/* OAuth buttons */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button className="flex items-center justify-center gap-2 border border-slate-200 rounded-xl py-2.5 px-4 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
          Google
        </button>
        <button className="flex items-center justify-center gap-2 border border-slate-200 rounded-xl py-2.5 px-4 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
          GitHub
        </button>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-px bg-slate-200" />
        <span className="text-xs text-slate-400 font-medium">or continue with email</span>
        <div className="flex-1 h-px bg-slate-200" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="login-email">Email address</label>
          <div className="relative">
            <Mail size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="login-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-sm font-semibold text-slate-700" htmlFor="login-password">Password</label>
            <button type="button" onClick={onForgot} className="text-xs text-indigo-600 hover:text-indigo-800 font-medium">
              Forgot password?
            </button>
          </div>
          <div className="relative">
            <Lock size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="login-password"
              type={showPw ? 'text' : 'password'}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full pl-10 pr-11 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
            <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
              {showPw ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input id="remember" type="checkbox" className="w-4 h-4 accent-indigo-600 rounded" />
          <label htmlFor="remember" className="text-sm text-slate-600">Remember me for 30 days</label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-all shadow-md shadow-indigo-200 text-sm"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>Sign In <ArrowRight size={16} /></>
          )}
        </button>
      </form>

      <p className="text-center text-sm text-slate-500 mt-6">
        Don&apos;t have an account?{' '}
        <button onClick={onRegister} className="text-indigo-600 font-semibold hover:text-indigo-800">
          Create one free
        </button>
      </p>
    </div>
  );
}

/* ── Register Form ── */
function RegisterForm({ onLogin }: { onLogin: () => void }) {
  const [showPw, setShowPw] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const strength = password.length === 0 ? 0 : password.length < 6 ? 1 : password.length < 10 ? 2 : 3;
  const strengthLabel = ['', 'Weak', 'Good', 'Strong'];
  const strengthColor = ['', 'bg-rose-400', 'bg-amber-400', 'bg-emerald-400'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div>
      <button onClick={onLogin} className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800 mb-6 transition-colors">
        <ChevronLeft size={16} /> Back to sign in
      </button>

      <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Create your account</h1>
      <p className="text-slate-500 mb-8">Start your free SEO audit — no credit card required.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="reg-name">Full name</label>
          <div className="relative">
            <User size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="reg-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Smith"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="reg-email">Work email</label>
          <div className="relative">
            <Mail size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="reg-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="reg-password">Password</label>
          <div className="relative">
            <Lock size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="reg-password"
              type={showPw ? 'text' : 'password'}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Min. 8 characters"
              className="w-full pl-10 pr-11 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
            <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
              {showPw ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>
          {/* Strength meter */}
          {password.length > 0 && (
            <div className="mt-2 flex items-center gap-2">
              <div className="flex-1 flex gap-1">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`h-1.5 flex-1 rounded-full transition-all ${strength >= i ? strengthColor[strength] : 'bg-slate-200'}`} />
                ))}
              </div>
              <span className={`text-xs font-medium ${strength === 1 ? 'text-rose-500' : strength === 2 ? 'text-amber-500' : 'text-emerald-600'}`}>
                {strengthLabel[strength]}
              </span>
            </div>
          )}
        </div>

        <div className="flex items-start gap-2 pt-1">
          <input id="terms" type="checkbox" required className="w-4 h-4 accent-indigo-600 rounded mt-0.5" />
          <label htmlFor="terms" className="text-sm text-slate-600">
            I agree to the{' '}
            <span className="text-indigo-600 font-medium cursor-pointer hover:underline">Terms of Service</span>
            {' '}and{' '}
            <span className="text-indigo-600 font-medium cursor-pointer hover:underline">Privacy Policy</span>
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-all shadow-md shadow-indigo-200 text-sm"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>Create Account <ArrowRight size={16} /></>
          )}
        </button>
      </form>

      <p className="text-center text-sm text-slate-500 mt-6">
        Already have an account?{' '}
        <button onClick={onLogin} className="text-indigo-600 font-semibold hover:text-indigo-800">
          Sign in
        </button>
      </p>
    </div>
  );
}

/* ── Forgot Password Form ── */
function ForgotForm({ onBack, onSuccess }: { onBack: () => void; onSuccess: () => void }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); onSuccess(); }, 1500);
  };

  return (
    <div>
      <button onClick={onBack} className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800 mb-6 transition-colors">
        <ChevronLeft size={16} /> Back to sign in
      </button>

      <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
        <Mail size={22} className="text-indigo-600" />
      </div>

      <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Forgot your password?</h1>
      <p className="text-slate-500 mb-8">
        No worries! Enter your email address and we&apos;ll send you a link to reset your password.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="forgot-email">Email address</label>
          <div className="relative">
            <Mail size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="forgot-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-all shadow-md shadow-indigo-200 text-sm"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>Send Reset Link <ArrowRight size={16} /></>
          )}
        </button>
      </form>
    </div>
  );
}

/* ── Forgot Success ── */
function ForgotSuccess({ onBack }: { onBack: () => void }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
        <CheckCircle size={30} className="text-emerald-600" />
      </div>
      <h1 className="text-3xl font-extrabold text-slate-900 mb-3">Check your inbox</h1>
      <p className="text-slate-500 mb-8 max-w-sm mx-auto">
        We&apos;ve sent a password reset link to your email. It may take a minute or two to arrive.
      </p>
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors text-sm"
      >
        <ChevronLeft size={16} /> Back to sign in
      </button>
    </div>
  );
}
