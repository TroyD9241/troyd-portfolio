export const services = [
  {
    id: 1,
    title: "Business Website",
    subtitle: "Get online fast",
    description:
      "A polished, professional website for your local business. Perfect for restaurants, shops, or service providers who need to establish an online presence quickly.",
    features: [
      "Up to 7 custom pages",
      "Mobile-responsive design",
      "Contact forms & Google Maps",
      "SEO-optimized",
      "Lightning-fast performance",
    ],
    price: "$2,000 - $3,500",
    timeline: "5-7 days",
    bestFor: "Local businesses, service providers, restaurants",
    hosting: {
      estimate: "$15-40/month",
      description:
        "Managed hosting on Vercel or Netlify with SSL & CDN included",
    },
    lts: {
      price: "$100/month",
      includes: [
        "Hosting & domain management",
        "Content & image updates (up to 2 hours/month)",
        "Security & performance monitoring",
        "Monthly backups",
        "Priority email support",
      ],
      terms: "3, 6, or 12-month contract. Extra hours at $90/hour.",
    },
  },
  {
    id: 2,
    title: "Web Application",
    subtitle: "For growing businesses",
    description:
      "Custom web applications with advanced features. User authentication, databases, payment processing, dashboards—everything you need to run your business online.",
    features: [
      "Custom functionality & workflows",
      "User authentication & roles",
      "Database & API integration",
      "Admin dashboard & analytics",
      "Modern, maintainable codebase",
    ],
    price: "$8,000 - $20,000",
    timeline: "2-3 weeks",
    bestFor: "Startups, SaaS MVPs, online platforms",
    hosting: {
      estimate: "$75-250/month",
      description:
        "Scalable cloud hosting (Railway, DigitalOcean, AWS) with database, CDN & monitoring",
    },
    lts: {
      price: "$300-500/month",
      includes: [
        "Managed hosting & infrastructure",
        "Feature updates & bug fixes (up to 5 hours/month)",
        "Security patches & optimization",
        "Automated backups",
        "Priority email support",
      ],
      terms: "6 or 12-month contract. Extra hours at $120/hour.",
    },
  },
  {
    id: 3,
    title: "Development Partner",
    subtitle: "Flexible support",
    description:
      "Augment your team with experienced development support. Perfect for feature development, bug fixes, code reviews, or technical guidance on an as-needed basis.",
    features: [
      "Feature implementation",
      "Bug fixes & troubleshooting",
      "Code review & refactoring",
      "Architecture consulting",
      "Flexible engagement (hourly or retainer)",
    ],
    price: "$90 - $140/hour",
    timeline: "Start immediately",
    bestFor: "Teams needing temporary development support",
    hosting: null,
    lts: {
      price: "$1,500 - $3,000/month",
      includes: [
        "20-40 hours/month retainer",
        "Predictable monthly billing",
        "Priority scheduling",
        "Ongoing codebase familiarity",
        "No hourly tracking overhead",
      ],
      terms: "3, 6, or 12-month contract. Unused hours don't roll over.",
    },
  },
];
