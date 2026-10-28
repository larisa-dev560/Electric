export interface ServiceItem {
  id: 'residential' | 'commercial' | 'industrial';
  title: string;
  shortDesc: string;
  image: string;
  bulletPoints: string[];
  detailedOverview: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Industrial';
  description: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  service: string;
  rating: number;
  quote: string;
}

export interface QuoteFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  smsConsent: boolean;
}
