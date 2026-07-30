import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { getBlogPosts } from '@/lib/getData';
import { Card } from '@/components/ui/Card';

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      <main className="flex-grow py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Latest Insights</h1>
            <p className="text-xl text-slate-600">Expert SEO strategies, tips, and news to help you rank higher.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="flex flex-col h-full hover:shadow-lg transition-shadow cursor-pointer">
                <div className="mb-4">
                  <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider">{post.category}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">{post.title}</h2>
                <p className="text-slate-600 mb-6 flex-grow">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-100">
                  <span className="font-medium text-slate-700">{post.author}</span>
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
