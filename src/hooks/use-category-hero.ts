import { useMemo } from "react";

interface CategoryHeroData {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  ctaText?: string;
  ctaLink?: string;
}

const CATEGORY_HERO_DATA: Record<string, CategoryHeroData> = {
  toys: {
    title: "Toys",
    description: "Discover amazing toys that spark imagination and endless fun for kids of all ages",
    imageUrl: "/images/toys-hero.svg",
    altText: "Shop premium toys and games for children",
    ctaText: "Shop Now",
    ctaLink: "/category/toys"
  },
  "gym-sports": {
    title: "Gym & Sports",
    description: "Transform your fitness journey with professional gym equipment and sports gear",
    imageUrl: "/images/gym-sports-hero.svg",
    altText: "Shop premium gym and sports equipment",
    ctaText: "Shop Now",
    ctaLink: "/category/gym-sports"
  },
  cosmetics: {
    title: "Cosmetics",
    description: "Enhance your natural beauty with premium makeup and skincare products",
    imageUrl: "/images/cosmetics-hero.svg",
    altText: "Shop luxury cosmetics and beauty products",
    ctaText: "Shop Now",
    ctaLink: "/category/cosmetics"
  },
  "garden-outdoor": {
    title: "Garden & Outdoor",
    description: "Create your perfect outdoor oasis with garden essentials and patio furniture",
    imageUrl: "/images/garden-outdoor-hero.svg",
    altText: "Shop garden and outdoor living essentials",
    ctaText: "Shop Now",
    ctaLink: "/category/garden-outdoor"
  },
  "home-kitchen": {
    title: "Home & Kitchen",
    description: "Elevate your living space with stylish home decor and kitchen essentials",
    imageUrl: "/images/home-kitchen-hero.svg",
    altText: "Shop home and kitchen essentials",
    ctaText: "Shop Now",
    ctaLink: "/category/home-kitchen"
  },
  hardware: {
    title: "Tools & Hardware",
    description: "Tackle any project with professional-grade tools and equipment",
    imageUrl: "/images/tools-hero.svg",
    altText: "Shop professional tools and equipment",
    ctaText: "Shop Now",
    ctaLink: "/category/hardware"
  },
  tools: {
    title: "Tools",
    description: "Tackle any project with professional-grade tools and equipment",
    imageUrl: "/images/tools-hero.svg",
    altText: "Shop professional tools and equipment",
    ctaText: "Shop Now",
    ctaLink: "/category/tools"
  },
  "electronics-tech": {
    title: "Electronics & Tech",
    description: "Stay connected and productive with cutting-edge electronics and tech gadgets",
    imageUrl: "/images/electronics-hero.svg",
    altText: "Shop electronics and tech gadgets",
    ctaText: "Shop Now",
    ctaLink: "/category/electronics-tech"
  },
  electronics: {
    title: "Electronic & Tech",
    description: "Make your life easy with smart technology",
    imageUrl: "/images/electronics-hero.svg",
    altText: "Shop electronics and tech gadgets",
    ctaText: "Shop Now",
    ctaLink: "/category/electronics"
  },
  beddings: {
    title: "Beddings",
    description: "Create your sanctuary with luxurious bedding and comfortable sleep essentials",
    imageUrl: "/images/beddings-hero.svg",
    altText: "Shop premium bedding and sleep essentials",
    ctaText: "Shop Now",
    ctaLink: "/category/beddings"
  },
  linean: {
    title: "Beddings",
    description: "Create your sanctuary with luxurious bedding and comfortable sleep essentials",
    imageUrl: "/images/beddings-hero.svg",
    altText: "Shop premium bedding and sleep essentials",
    ctaText: "Shop Now",
    ctaLink: "/category/linean"
  },
  clothing: {
    title: "Clothing",
    description: "Express your style with trendy fashion apparel for every occasion",
    imageUrl: "/images/clothing-hero.svg",
    altText: "Shop fashionable clothing and apparel",
    ctaText: "Shop Now",
    ctaLink: "/category/clothing"
  },
  kapre: {
    title: "Clothing",
    description: "Express your style with trendy fashion apparel for every occasion",
    imageUrl: "/images/clothing-hero.svg",
    altText: "Shop fashionable clothing and apparel",
    ctaText: "Shop Now",
    ctaLink: "/category/kapre"
  },
  crockery: {
    title: "Crockery",
    description: "Discover utensils and crockery and decorations",
    imageUrl: "/images/home-kitchen-hero.svg",
    altText: "Shop home and kitchen essentials",
    ctaText: "Shop Now",
    ctaLink: "/category/crockery"
  }
};

const FALLBACK_HERO_DATA: CategoryHeroData = {
  title: "Category",
  description: "Discover amazing products in this category",
  imageUrl: "/images/hero-banner.svg",
  altText: "Shop products in this category",
  ctaText: "Shop Now",
  ctaLink: "/shop"
};

export function useCategoryHero(categoryName?: string, categorySlug?: string) {
  return useMemo(() => {
    if (!categoryName && !categorySlug) {
      return FALLBACK_HERO_DATA;
    }

    // Normalize inputs for matching
    const slugKey = categorySlug?.toLowerCase().replace(/[^a-z0-9-]/g, '-');
    const nameKey = categoryName?.toLowerCase().replace(/[^a-z0-9-]/g, '-');
    
    // Try slug first, then name
    return CATEGORY_HERO_DATA[slugKey] || 
           CATEGORY_HERO_DATA[nameKey] || 
           FALLBACK_HERO_DATA;
  }, [categoryName, categorySlug]);
}

// Helper function to add new categories
export function addCategoryHeroData(key: string, data: CategoryHeroData) {
  (CATEGORY_HERO_DATA as Record<string, CategoryHeroData>)[key] = data;
}
