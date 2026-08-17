import type { Project } from '../types';

export const projects: Project[] = [
  {
    slug: 'swasthaone',
    title: 'SwasthaOne Healthcare Ecosystem',
    category: 'Healthcare Platform',
    platform: 'Laravel, React',
    summary:
      'Primary healthcare ecosystem with partner integration, medical document management, ABHA integration, and review & recommendation modules.',
    tags: ['Laravel', 'React', 'REST APIs', 'PostgreSQL', 'Healthcare'],
    featured: true,
    image: '/images/projects/swasthaone.webp',
    caseStudy: {
      overview:
        'SwasthaOne is a comprehensive healthcare ecosystem connecting patients, partners, and healthcare providers through integrated digital services including ABHA (Ayushman Bharat Health Account) workflows, medical document management, and partner onboarding.',
      problem:
        'Healthcare platforms require secure document handling, standardized health ID integration (ABHA), multi-party partner workflows, and reliable recommendation systems — all while maintaining compliance and data privacy.',
      architecture:
        'Multi-tier architecture with React frontend components communicating with Laravel REST APIs, backed by PostgreSQL/MySQL databases. External integrations connect to ABHA services, partner systems, and document storage layers.',
      contribution:
        'Contributed to Laravel backend modules, REST API development, React UI components, partner integration workflows, medical document management features, and ABHA integration flows within the SwasthaOne ecosystem.',
      technology: [
        'Laravel',
        'PHP',
        'React.js',
        'REST APIs',
        'PostgreSQL',
        'MySQL',
        'JWT/Sanctum',
      ],
      challenges: [
        'Integrating ABHA authentication and health ID creation workflows with third-party health APIs.',
        'Managing secure medical document upload, storage, and retrieval across partner systems.',
        'Building scalable partner onboarding and integration modules with varying data formats.',
      ],
      solutions: [
        'Implemented structured API layers with authentication middleware for ABHA and partner endpoints.',
        'Designed document management modules with validation, access control, and organized storage patterns.',
        'Built modular partner integration architecture allowing configurable workflows per partner type.',
      ],
      outcome:
        'Delivered a unified healthcare platform supporting partner integrations, ABHA workflows, document management, and review systems — enabling scalable digital health services.',
    },
  },
  {
    slug: 'bharat-emart',
    title: 'Bharat eMart — Order Management System',
    category: 'Business Application',
    platform: 'Laravel',
    summary:
      'Internal order management system with dual authentication (credentials + OTP), admin workflows, and business operations.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'REST APIs'],
    featured: true,
    image: '/images/projects/bharat-emart.webp',
    caseStudy: {
      overview:
        'Bharat eMart OMS is a business-focused order management application providing secure login, order tracking, and administrative workflows for internal business operations.',
      problem:
        'Business teams needed a reliable OMS with flexible authentication (username/password and phone OTP), role-based access, and streamlined order management workflows.',
      architecture:
        'Laravel application with Vite-built frontend assets, Bootstrap UI, session-based and OTP authentication flows, and MySQL database for order and user management.',
      contribution:
        'Developed Laravel backend modules for authentication (credential and OTP login), order management workflows, admin operations, and API endpoints supporting business processes.',
      technology: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'Vite', 'REST APIs'],
      challenges: [
        'Implementing dual authentication paths — traditional login and OTP-based phone verification with countdown/resend logic.',
        'Designing order management workflows that align with business operations and admin requirements.',
      ],
      solutions: [
        'Built separate auth flows with shared session management and CSRF protection.',
        'Structured order modules with clear status transitions and admin oversight capabilities.',
      ],
      outcome:
        'Delivered a functional OMS with secure dual authentication and order management capabilities supporting daily business operations.',
    },
  },
  {
    slug: 'd2c-insider',
    title: 'D2C Insider',
    category: 'Community Platform',
    platform: 'CMS (Microweber)',
    summary:
      'D2C founder and CXO community platform with member ecosystem, events, testimonials, video library, and contact workflows.',
    tags: ['WordPress', 'CMS', 'Responsive', 'Community'],
    featured: false,
    image: '/images/projects/d2c-insider.webp',
    caseStudy: {
      overview:
        'D2C Insider is a community platform for Direct-to-Consumer brand founders, enablers, and investors — featuring member showcases, events, testimonials, and engagement content.',
      problem:
        'The platform needed to present a large founder network credibly, highlight community stats, showcase events and testimonials, and provide an accessible contact channel.',
      architecture:
        'CMS-driven marketing site with Bootstrap layout, custom theme assets, content sections for founders, events, and member testimonials, plus validated contact forms.',
      contribution:
        'Contributed to responsive frontend development, content section implementation, community showcase layouts, events and testimonial sections, and contact form integration.',
      technology: ['CMS', 'Bootstrap', 'HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      challenges: [
        'Presenting large-scale community data (7000+ brands, 2000+ enablers) in an engaging, scannable format.',
        'Building responsive layouts for diverse content types — founder grids, events, video library, and forms.',
      ],
      solutions: [
        'Designed stat-driven hero sections and organized founder/testimonial grids for social proof.',
        'Implemented responsive section layouts with consistent spacing and mobile-first breakpoints.',
      ],
      outcome:
        'Delivered a professional community platform that effectively showcases the D2C Insider network, events, and member engagement content.',
    },
  },
  {
    slug: 'techsevin',
    title: 'TechSevin Corporate Website',
    category: 'Corporate Website',
    platform: 'WordPress',
    summary:
      'Corporate digital engineering website presenting services, case studies, client testimonials, insights, and contact/career workflows.',
    tags: ['WordPress', 'PHP', 'Responsive', 'Corporate'],
    featured: false,
    image: '/images/projects/techsevin.webp',
    caseStudy: {
      overview:
        'TechSevin corporate website presents the company as an AI-powered digital engineering and commerce partner — covering ecommerce, mobile, full-stack, AI/ML, cloud, and digital transformation services.',
      problem:
        'A technology company website must communicate diverse service offerings, build trust through testimonials and partnerships, and drive contact/career conversions.',
      architecture:
        'WordPress site with custom theme, service card sections, testimonial blocks, blog/insights feed, partnership logos, and contact/career page workflows.',
      contribution:
        'Contributed to WordPress theme development, responsive service section layouts, case study presentation, client testimonial integration, and frontend performance optimization.',
      technology: ['WordPress', 'PHP', 'HTML', 'CSS', 'JavaScript', 'jQuery'],
      challenges: [
        'Organizing multiple service categories (Ecommerce, Mobile, AI/ML, Cloud, etc.) in a clear, navigable structure.',
        'Balancing rich content (testimonials, blogs, partnerships) with page performance.',
      ],
      solutions: [
        'Built expandable service card components with consistent visual hierarchy.',
        'Optimized asset loading and implemented responsive image handling for faster page loads.',
      ],
      outcome:
        'Delivered a professional corporate website that effectively presents TechSevin services, client trust signals, and conversion pathways.',
    },
  },
  {
    slug: 'rose-watch-bar',
    title: 'Rose: The Watch Bar',
    category: 'Luxury E-commerce',
    platform: 'WordPress',
    summary:
      'Luxury watch e-commerce built on WordPress — brand catalogue, product details, request-an-offer workflow, and editorial content.',
    tags: ['WordPress', 'E-commerce', 'Luxury Retail', 'PHP'],
    featured: false,
    image: '/images/projects/rose-watch-bar.webp',
    caseStudy: {
      overview:
        'Rose: The Watch Bar is a luxury watch e-commerce platform featuring premium brands, detailed product catalogues, and a concierge-style request-an-offer purchase flow.',
      problem:
        'Luxury watch retail requires brand-first navigation, high-value product presentation, and a personalized purchase flow rather than standard cart checkout for premium items.',
      architecture:
        'WordPress site with custom theme, brand navigation, product catalogue pages, modal-based request-an-offer forms with validation, and editorial blog content.',
      contribution:
        'Contributed to WordPress theme development, product catalogue UX, brand navigation structure, request-an-offer workflow implementation, and responsive layout development.',
      technology: ['WordPress', 'PHP', 'HTML', 'CSS', 'JavaScript'],
      challenges: [
        'Implementing a request-an-offer flow with product context, international phone support, and form validation for high-value items.',
        'Creating a premium brand experience with editorial product presentation across multiple luxury watch brands.',
      ],
      solutions: [
        'Built modal-based offer request forms pre-populated with product details and reCAPTCHA verification.',
        'Designed brand-organized catalogue navigation with consistent product detail templates.',
      ],
      outcome:
        'Delivered a premium e-commerce experience that reflects luxury watch retail standards with concierge-style purchasing workflows.',
    },
  },
  {
    slug: 'harvey-nichols-riyadh',
    title: 'Harvey Nichols Riyadh',
    category: 'Luxury Fashion E-commerce',
    platform: 'Magento 2',
    summary:
      'Luxury fashion and beauty e-commerce with product catalogue, checkout, rewards, and collect-in-store services.',
    tags: ['Magento', 'E-commerce', 'Fashion Retail'],
    featured: false,
    image: '/images/projects/harvey-nichols-riyadh.webp',
    caseStudy: {
      overview:
        'Harvey Nichols Riyadh is a luxury fashion and beauty e-commerce storefront offering new arrivals, category/brand navigation, customer accounts, checkout, rewards, and collect-in-store services.',
      problem:
        'High-end retail e-commerce requires sophisticated category navigation, editorial campaign presentation, seamless checkout, loyalty rewards, and omnichannel services like collect-in-store.',
      architecture:
        'Magento 2 platform with custom Ambab/alfa theme, RequireJS modules, product grid layouts, customer account system, shopping bag/checkout flow, and rewards integration.',
      contribution:
        'Contributed to Magento theme development, product catalogue and category navigation, checkout flow optimization, customer account features, and responsive e-commerce UX implementation.',
      technology: ['Magento 2', 'PHP', 'RequireJS', 'MySQL', 'HTML', 'CSS'],
      challenges: [
        'Implementing complex category and brand navigation for a multi-department luxury retail catalogue.',
        'Ensuring checkout, rewards, and collect-in-store services work seamlessly across devices.',
      ],
      solutions: [
        'Structured category/brand filter navigation with search integration for large product catalogues.',
        'Optimized checkout UX and responsive product grid layouts for mobile and desktop shoppers.',
      ],
      outcome:
        'Delivered a polished luxury e-commerce storefront supporting full shopping, rewards, and omnichannel retail experiences.',
    },
  },
  {
    slug: 'peacoy',
    title: 'Peacoy',
    category: 'Home Décor E-commerce',
    platform: 'Shopify',
    summary:
      'Premium home décor and lifestyle Shopify store — bed & furnishing, tableware, copperware, decor, bags, and sustainable toys with worldwide shipping.',
    tags: ['Shopify', 'E-commerce', 'Home Décor', 'Lifestyle'],
    featured: false,
    image: '/images/projects/peacoy.webp',
    caseStudy: {
      overview:
        'Peacoy is a premium home décor and lifestyle e-commerce brand offering bedsheets, tableware, copperware, decor, bags, pouches, and sustainable crochet toys — inspired by Indian color contrasts and traditional craftsmanship.',
      problem:
        'The brand needed a visually rich Shopify storefront that showcases diverse product categories, supports international shipping, promotional offers, and a premium shopping experience across mobile and desktop.',
      architecture:
        'Shopify storefront with custom theme, multi-level category navigation, product grids with sale pricing, cart/checkout flows, wishlist, and customer account features.',
      contribution:
        'Contributed to Shopify store development, theme customization, category and collection setup, product catalogue UX, promotional offer sections, and responsive e-commerce layout implementation.',
      technology: ['Shopify', 'Liquid', 'HTML', 'CSS', 'JavaScript'],
      challenges: [
        'Organizing a wide product range — bed & furnishing, tableware, copperware, decor, bags, and toys — into intuitive navigation.',
        'Implementing promotional tiers, sale pricing display, and smooth cart/checkout across devices.',
      ],
      solutions: [
        'Built structured collection pages and category menus for each product line with consistent card layouts.',
        'Configured Shopify theme sections for offers, testimonials, and Instagram-style content blocks.',
      ],
      outcome:
        'Delivered a polished lifestyle e-commerce store supporting premium home décor sales with COD, worldwide shipping, and a cohesive brand experience.',
    },
  },
  {
    slug: 'avias-world',
    title: 'Avias World',
    category: 'Kitchenware E-commerce',
    platform: 'Shopify',
    summary:
      'D2C Shopify store for Avias stainless steel kitchenware — triply cookware, cast iron, casseroles, spice boxes, OTP login, and gift sets.',
    tags: ['Shopify', 'E-commerce', 'Kitchenware', 'D2C'],
    featured: false,
    caseStudy: {
      overview:
        'Avias World is the direct-to-consumer e-commerce storefront for Avias — India\'s lifestyle kitchenware brand — offering triply cookware, pressure cookers, cast iron range, casseroles, spice boxes, kitchen gifts, and bulk orders with nationwide shipping.',
      problem:
        'The brand needed a scalable Shopify store to sell premium stainless steel and cast iron kitchenware online with category navigation, promotional offers, OTP-based login, cart/checkout, and content-driven SEO through blogs and recipes.',
      architecture:
        'Shopify storefront with multi-category navigation, product variant selectors (sizes), sale pricing, wishlist, OTP/email/WhatsApp login, cart with UPI checkout, customer reviews, FAQ, and blog/recipe sections.',
      contribution:
        'Contributed to Shopify store development, theme customization, product collection setup, category and bestseller layouts, OTP login integration, promotional banner sections, and responsive e-commerce UX.',
      technology: ['Shopify', 'Liquid', 'HTML', 'CSS', 'JavaScript'],
      challenges: [
        'Organizing a wide product catalogue — triply, cast iron, casserole, spice box, pressure cooker — with variant sizes and combo offers.',
        'Implementing OTP-based authentication and a smooth cart-to-checkout flow with promotional codes and free-shipping rules.',
      ],
      solutions: [
        'Built structured Shopify collections and shop-by-category sections with bestseller and trending product blocks.',
        'Configured login, cart, and checkout flows with offer banners, customer testimonials, and FAQ support.',
      ],
      outcome:
        'Delivered a full-featured D2C kitchenware e-commerce store supporting online sales, customer engagement, and brand expansion across India.',
    },
  },
  {
    slug: 'rks-aroma',
    title: "R.K's Aroma",
    category: 'Beauty & Wellness E-commerce',
    platform: 'Shopify',
    summary:
      'Essential oils, skincare, hair care, and aromatherapy Shopify store — shop by concern, facial kits, diffusers, gifting, and customer testimonials.',
    tags: ['Shopify', 'E-commerce', 'Skincare', 'Aromatherapy'],
    featured: false,
    image: '/images/projects/rks-aroma.webp',
    caseStudy: {
      overview:
        "R.K's Aroma is an essential oils, skincare, and spa range e-commerce brand offering 100% natural, vegan, and cruelty-free products — including facial kits, hair care, diffusers, gifting sets, and aromatherapy education content.",
      problem:
        'The brand required a Shopify store that supports complex product taxonomy (shop by category and concern), new arrivals and bestsellers, customer testimonials, blog content, and a premium wellness shopping experience.',
      architecture:
        'Shopify storefront with nested category menus (Skin Care, Essential Oil, Hair Care, Gifting), concern-based collections, product quick-view, cart/checkout, account/wishlist, and newsletter signup.',
      contribution:
        'Contributed to Shopify theme customization, multi-level navigation for category and concern filters, product grid and collection page layouts, testimonial sections, and responsive e-commerce UX.',
      technology: ['Shopify', 'Liquid', 'HTML', 'CSS', 'JavaScript'],
      challenges: [
        'Building nested navigation for shop-by-category and shop-by-concern across skincare, hair care, and essential oils.',
        'Presenting product benefits (100% natural, vegan, toxic-free) alongside bestsellers, new arrivals, and customer reviews.',
      ],
      solutions: [
        'Implemented structured Shopify menus and collection templates for category and concern-based browsing.',
        'Designed homepage sections for new arrivals, bestsellers, shop-by-concern blocks, and customer testimonials.',
      ],
      outcome:
        "Delivered a comprehensive wellness e-commerce storefront supporting natural skincare and aromatherapy product sales with an intuitive shopping experience.",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
