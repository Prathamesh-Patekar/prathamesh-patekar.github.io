import type { LucideIcon } from 'lucide-react';
import {
  HeartPulse,
  Package,
  Users,
  Building2,
  Watch,
  ShoppingBag,
  ShoppingCart,
  Home,
  Sparkles,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  swasthaone: HeartPulse,
  'bharat-emart': Package,
  'd2c-insider': Users,
  techsevin: Building2,
  'rose-watch-bar': Watch,
  'harvey-nichols-riyadh': ShoppingBag,
  peacoy: Home,
  'avias-world': ShoppingCart,
  'rks-aroma': Sparkles,
};

export function getProjectIcon(slug: string): LucideIcon {
  return iconMap[slug] ?? Package;
}
