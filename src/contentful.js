const shouldUseDemo = import.meta.env.MODE === 'development';

async function fetchContentful(type, params = {}) {
  const searchParams = new URLSearchParams({ type, ...params });
  const response = await fetch(`/api/contentful?${searchParams.toString()}`);

  if (!response.ok) {
    throw new Error(`Contentful request failed with status ${response.status}`);
  }

  const payload = await response.json();
  return payload.data;
}

// Mock data for development without Contentful credentials
const mockHero = {
  title: 'Learning AI',
  subtitle: 'A developer\'s journey through artificial intelligence, machine learning, and the future of code.',
};

const mockPosts = [
  {
    slug: 'getting-started-with-llms',
    title: 'Getting Started with LLMs',
    excerpt: 'My first steps into the world of large language models and what I learned along the way.',
    content: {
      nodeType: 'document',
      content: [
        {
          nodeType: 'paragraph',
          content: [{ nodeType: 'text', value: 'Large Language Models have revolutionized how we think about AI. In this post, I share my journey from skeptic to enthusiast, and the key concepts that helped me understand these powerful tools.' }],
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
    excerpt: 'Exploring the world of autonomous AI agents and how they can transform software development.',
    content: {
      nodeType: 'document',
      content: [
        {
          nodeType: 'paragraph',
          content: [{ nodeType: 'text', value: 'AI agents represent the next frontier in automation. Learn how I built my first agent and the lessons learned from the process.' }],
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
    excerpt: 'The art and science of crafting effective prompts for AI models.',
    content: {
      nodeType: 'document',
      content: [
        {
          nodeType: 'paragraph',
          content: [{ nodeType: 'text', value: 'Good prompts are the key to getting great results from AI. Here\'s what I\'ve learned about writing prompts that work.' }],
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
    excerpt: 'Understanding Retrieval-Augmented Generation and why it matters for AI applications.',
    content: {
      nodeType: 'document',
      content: [
        {
          nodeType: 'paragraph',
          content: [{ nodeType: 'text', value: 'RAG combines the power of retrieval systems with generative AI. This post breaks down the concept in simple terms.' }],
        },
      ],
    },
    publishDate: '2024-11-20',
    tags: [{ name: 'AI', slug: 'ai' }, { name: 'RAG', slug: 'rag' }],
    mainImage: null,
    thumbnailImage: null,
  },
];

const mockFooter = {
  copyright: '© 2024 Learning AI',
  tagline: 'exploring intelligence, one token at a time',
};

export async function getHero() {
  if (shouldUseDemo) return mockHero;

  try {
    const data = await fetchContentful('hero');
    if (!data) return mockHero;
    return data;
  } catch (error) {
    return mockHero;
  }
}

export async function getPosts() {
  if (shouldUseDemo) return mockPosts;

  try {
    const data = await fetchContentful('posts');
    return data || mockPosts;
  } catch (error) {
    return mockPosts;
  }
}

export async function getPostBySlug(slug) {
  if (shouldUseDemo) {
    return mockPosts.find((p) => p.slug === slug) || null;
  }

  try {
    const data = await fetchContentful('postBySlug', { slug });
    if (!data) return null;
    return data;
  } catch (error) {
    return mockPosts.find((p) => p.slug === slug) || null;
  }
}

export async function getFooter() {
  if (shouldUseDemo) return mockFooter;

  try {
    const data = await fetchContentful('footer');
    if (!data) return mockFooter;
    return data;
  } catch (error) {
    return mockFooter;
  }
}

// Mock data for site settings
const mockSiteSettings = {
  logoText: '// learning.ai',
  heroBadgeText: 'Currently exploring AI',
  backToPostsText: 'Back to posts',
  backToHomeText: '← Back to home',
  notFoundTitle: 'Post not found',
  notFoundMessage: "The post you're looking for doesn't exist.",
  loadingText: 'Loading posts...',
  defaultSiteTitle: "Learning AI | A Developer's Journey",
  defaultSiteDescription: 'A blog about learning AI, machine learning, and the journey of a developer exploring artificial intelligence.',
  contactEmail: 'hello@example.com',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com',
  twitterUrl: 'https://twitter.com',
};

const mockResumePage = {
  fullName: 'David Rector',
  location: 'Castle Rock, Colorado',
  phone: '859-396-5280',
  email: 'davidarector@gmail.com',
  linkedinUrl: 'https://linkedin.com/in/davidrector',
  portfolioUrl: 'https://codeinspace.io',
  professionalSummary: 'Software Architect and Technical Leader with 14+ years architecting enterprise-scale .NET solutions in Azure cloud environments.',
  keyAchievements: 'Led $1.9M project portfolio (2023)\n4x Microsoft Certified Developer\nArchitected solutions serving 500K+ concurrent users',
  experience: '[]',
  technicalSkills: '[]',
  education: 'University of Kentucky | Bachelor of Science in Computer Science | Graduated May 2012',
  certifications: 'Microsoft Certified Developer – C#\nMicrosoft Certified Developer – Azure',
  pdfUrl: '/ATS_Resume.pdf',
  seoTitle: 'David Rector | Software Architect',
  seoDescription: 'Software Architect with 14+ years building enterprise .NET solutions in Azure.',
};

const mockContactPage = {
  pageTitle: 'Contact',
  pageSubtitle: "Let's connect",
  seoTitle: 'Contact | Learning AI',
  seoDescription: 'Get in touch to discuss AI, development, or collaboration opportunities.',
  introText: "I'm always interested in discussing AI, machine learning, and software development. Whether you have a question, want to collaborate, or just want to say hi - feel free to reach out.",
};

export async function getSiteSettings() {
  if (shouldUseDemo) return mockSiteSettings;

  try {
    const data = await fetchContentful('siteSettings');
    return data || mockSiteSettings;
  } catch (error) {
    return mockSiteSettings;
  }
}

export async function getResumePage() {
  if (shouldUseDemo) return mockResumePage;

  try {
    const data = await fetchContentful('resumePage');
    return data || mockResumePage;
  } catch (error) {
    return mockResumePage;
  }
}

export async function getContactPage() {
  if (shouldUseDemo) return mockContactPage;

  try {
    const data = await fetchContentful('contactPage');
    return data || mockContactPage;
  } catch (error) {
    return mockContactPage;
  }
}

export async function getRelatedPosts(currentSlug, tags, limit = 2) {
  if (shouldUseDemo) {
    // For demo, return posts that share at least one tag
    const currentTagSlugs = tags.map((t) => t.slug);
    return mockPosts
      .filter((p) => p.slug !== currentSlug)
      .filter((p) => p.tags.some((t) => currentTagSlugs.includes(t.slug)))
      .slice(0, limit);
  }

  try {
    const data = await fetchContentful('relatedPosts', {
      currentSlug,
      tags: JSON.stringify(tags),
      limit: String(limit),
    });
    return data || [];
  } catch (error) {
    return [];
  }
}
