import mockData from '@/data/mockData.json';
import { HeroData, Service, Banner, AuditResult, PricingTier, BlogPost } from '@/types';

// For now, these functions synchronously return data from the mock JSON.
// Later, they can be refactored to async fetch calls without changing their signature shape.

export async function getHeroData(): Promise<HeroData> {
  return mockData.hero as HeroData;
}

export async function getServices(): Promise<Service[]> {
  return mockData.services as Service[];
}

export async function getBanners(): Promise<Banner[]> {
  return mockData.banners as Banner[];
}

export async function getAuditResult(): Promise<AuditResult> {
  return mockData.auditResult as AuditResult;
}

export async function getLinks(): Promise<{ label: string; url: string }[]> {
  return mockData.links;
}

export async function getPricing(): Promise<PricingTier[]> {
  return mockData.pricing as PricingTier[];
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return mockData.blog as BlogPost[];
}
