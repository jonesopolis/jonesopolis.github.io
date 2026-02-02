async function fetchContentful(type, params = {}) {
  const searchParams = new URLSearchParams({ type, ...params });
  const response = await fetch(`/api/contentful?${searchParams.toString()}`);

  if (!response.ok) {
    throw new Error(`Contentful request failed with status ${response.status}`);
  }

  const payload = await response.json();
  return payload.data;
}

// Fallback data
// hero.subtitle also serves as the default site SEO description
const hero = {
  title: 'Welcome to Please Recompile',
  subtitle: "Software architecture is evolving. AI is making code cheaper and faster to write—the real value now is in vision, planning, and building systems that last. I'm here for it, join me as I recompile.",
};

const posts = [
  {
    slug: 'getting-started-with-llms',
    title: 'Getting Started with LLMs',
    excerpt: 'How LLMs actually work, explained in terms I wish someone had told me earlier.',
    content: {
      nodeType: 'document',
      data: {},
      content: [
        {
          nodeType: 'paragraph',
          data: {},
          content: [{ nodeType: 'text', value: 'Large Language Models have revolutionized how we think about AI. In this post, I share my journey from skeptic to enthusiast, and the key concepts that helped me understand these powerful tools.', marks: [], data: {} }],
        },
      ],
    },
    publishDate: '2024-12-15',
    tags: [{ name: 'AI', slug: 'ai' }, { name: 'LLMs', slug: 'llms' }],
    mainImage: null,
    thumbnailImage: null,
  },
  {
    slug: 'building-with-ai-agents',
    title: 'Building with AI Agents',
    excerpt: 'From concept to working prototype, and the mistakes I made along the way.',
    content: {
      nodeType: 'document',
      data: {},
      content: [
        {
          nodeType: 'paragraph',
          data: {},
          content: [{ nodeType: 'text', value: 'AI agents represent the next frontier in automation. Learn how I built my first agent and the lessons learned from the process.', marks: [], data: {} }],
        },
      ],
    },
    publishDate: '2024-12-08',
    tags: [{ name: 'AI', slug: 'ai' }, { name: 'Agents', slug: 'agents' }],
    mainImage: null,
    thumbnailImage: null,
  },
  {
    slug: 'prompt-engineering-basics',
    title: 'Prompt Engineering Basics',
    excerpt: 'What I\'ve learned about crafting prompts that consistently get great results.',
    content: {
      nodeType: 'document',
      data: {},
      content: [
        {
          nodeType: 'paragraph',
          data: {},
          content: [{ nodeType: 'text', value: 'Good prompts are the key to getting great results from AI. Here\'s what I\'ve learned about writing prompts that work.', marks: [], data: {} }],
        },
      ],
    },
    publishDate: '2024-11-30',
    tags: [{ name: 'AI', slug: 'ai' }, { name: 'Prompts', slug: 'prompts' }],
    mainImage: null,
    thumbnailImage: null,
  },
  {
    slug: 'rag-explained',
    title: 'RAG Explained Simply',
    excerpt: 'How I implemented RAG to combine LLM power with my own documents.',
    content: {
      nodeType: 'document',
      data: {},
      content: [
        {
          nodeType: 'paragraph',
          data: {},
          content: [{ nodeType: 'text', value: 'RAG combines the power of retrieval systems with generative AI. This post breaks down the concept in simple terms.', marks: [], data: {} }],
        },
      ],
    },
    publishDate: '2024-11-20',
    tags: [{ name: 'AI', slug: 'ai' }, { name: 'RAG', slug: 'rag' }],
    mainImage: null,
    thumbnailImage: null,
  },
];

const footer = {
  copyright: '© 2026 Please Recompile',
  tagline: 'rebuilding how I build',
};

export async function getHero() {
  try {
    const data = await fetchContentful('hero');
    if (!data) return hero;
    return data;
  } catch (error) {
    return hero;
  }
}

export async function getPosts() {
  try {
    const data = await fetchContentful('posts');
    return data || posts;
  } catch (error) {
    return posts;
  }
}

export async function getPostBySlug(slug) {
  try {
    const data = await fetchContentful('postBySlug', { slug });
    if (!data) return null;
    return data;
  } catch (error) {
    return posts.find((p) => p.slug === slug) || null;
  }
}

export async function getFooter() {
  try {
    const data = await fetchContentful('footer');
    if (!data) return footer;
    return data;
  } catch (error) {
    return footer;
  }
}

// Site settings fallback
const siteSettings = {
  // Branding
  logoText: '// please recompile',
  heroBadgeText: 'Currently recompiling',

  // Navigation
  navBlogLabel: 'Blog',
  navResumeLabel: 'Resume',
  navContactLabel: 'Contact',

  // Post navigation
  backToPostsText: 'Back',
  relatedPostsTitle: 'Related',

  // 404 error page
  notFoundTitle: 'Page Not Found',
  notFoundMessage: "The page you're looking for doesn't exist.",

  // 500 error page
  errorTitle: 'Something Went Wrong',
  errorMessage: "An error occurred! Try going back <a href='/'>home</a>.",
  errorBackgroundText: 'oops',

  // Loading states
  loadingText: 'Loading...',

  // Social links
  contactEmail: 'davidarector@gmail.com',
  githubUrl: 'https://github.com/jonesopolis',
  linkedinUrl: 'https://linkedin.com/in/davidarector',
};

const resumePage = {
  fullName: 'David Rector',
  location: 'Castle Rock, Colorado',
  phone: '859-396-5280',
  email: 'davidarector@gmail.com',
  linkedinUrl: 'https://linkedin.com/in/davidrector',
  websiteUrl: 'https://jonesopolis.github.io',
  professionalSummary: 'Software Architect and Technical Leader with 14+ years architecting enterprise-scale .NET solutions in Azure cloud environments.',
  keyAchievements: 'Led $1.9M project portfolio (2023)\n4x Microsoft Certified Developer\nArchitected solutions serving 500K+ concurrent users',
  experience: '[]',
  technicalSkills: '[]',
  education: 'University of Kentucky | Bachelor of Science in Computer Science | Graduated May 2012',
  certifications: 'Microsoft Certified Developer – C#\nMicrosoft Certified Developer – Azure',
  pdfUrl: '/ATS_Resume.pdf',
  seoTitle: 'david rector | please recompile',
  seoDescription: 'Software Architect with 14+ years building enterprise .NET solutions in Azure.',
};

const contactPage = {
  pageTitle: 'Contact',
  pageSubtitle: "Let's connect",
  seoTitle: 'contact | please recompile',
  introText: "Still recompiling. Happy to talk about it. Whether it's AI, architecture, or just swapping ideas—reach out.",
};

export async function getSiteSettings() {
  try {
    const data = await fetchContentful('siteSettings');
    return data || siteSettings;
  } catch (error) {
    return siteSettings;
  }
}

export async function getResumePage() {
  try {
    const data = await fetchContentful('resumePage');
    return data || resumePage;
  } catch (error) {
    return resumePage;
  }
}

export async function getContactPage() {
  try {
    const data = await fetchContentful('contactPage');
    return data || contactPage;
  } catch (error) {
    return contactPage;
  }
}

export async function getRelatedPosts(currentSlug, tags, limit = 2) {
  try {
    const data = await fetchContentful('relatedPosts', {
      currentSlug,
      tags: JSON.stringify(tags),
      limit: String(limit),
    });
    return data || [];
  } catch (error) {
    // Fallback for demo
    const currentTagSlugs = tags.map((t) => t.slug);
    return posts
      .filter((p) => p.slug !== currentSlug)
      .filter((p) => p.tags.some((t) => currentTagSlugs.includes(t.slug)))
      .slice(0, limit);
  }
}
