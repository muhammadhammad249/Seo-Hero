export interface HeroStat {
  label: string;
  value: string;
}

export interface HeroCTA {
  text: string;
  link: string;
}

export interface HeroData {
  badge: string;
  heading: string;
  subheading: string;
  paragraph: string;
  cta: HeroCTA;
  stats: HeroStat[];
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  link: string;
}

export interface Banner {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  type: 'onpage' | 'offpage' | 'general';
}

export interface LinkItem {
  label: string;
  url: string;
}

export interface Issue {
  id: string;
  title: string;
  description: string;
  severity: 'high' | 'medium' | 'low';
}

export interface Suggestion {
  id: string;
  text: string;
}

export interface RecommendedPlatform {
  id: string;
  name: string;
  type: string;
  priority: 'high' | 'medium' | 'low';
}

export interface ContentIdea {
  id: string;
  title: string;
  description: string;
}

export interface OnPageResult {
  score: number;
  issues: Issue[];
  suggestions: Suggestion[];
}

export interface OffPageResult {
  score: number;
  recommendedPlatforms: RecommendedPlatform[];
  contentIdeas: ContentIdea[];
}

export interface PerformanceMetric {
  name: string;
  value: string;
  status: 'good' | 'needs-improvement' | 'poor';
}

export interface PerformanceResult {
  score: number;
  metrics: PerformanceMetric[];
}

export interface Competitor {
  domain: string;
  overlapScore: number;
  topKeywords: string[];
}

export interface CompetitorsResult {
  topCompetitors: Competitor[];
}

export interface AuditResult {
  url: string;
  onPage: OnPageResult;
  offPage: OffPageResult;
  performance: PerformanceResult;
  competitors: CompetitorsResult;
}

export interface PricingTier {
  id: string;
  tier: string;
  price: string;
  billingCycle: string;
  description: string;
  features: string[];
  highlighted: boolean;
  ctaText: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
}

export interface MockData {
  hero: HeroData;
  services: Service[];
  banners: Banner[];
  links: LinkItem[];
  auditResult: AuditResult;
  pricing: PricingTier[];
  blog: BlogPost[];
}
