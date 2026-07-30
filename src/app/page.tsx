import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { HomepageSections } from '@/components/sections/HomepageSections';
import { getHeroData } from '@/lib/getData';

export default async function Home() {
  const heroData = await getHeroData();

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero data={heroData} />
        <HomepageSections />
      </main>
      <Footer />
    </div>
  );
}
