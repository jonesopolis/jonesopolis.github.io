import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID || 'demo',
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || 'demo',
});

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
  },
];

const mockFooter = {
  copyright: '© 2024 Learning AI',
  tagline: 'exploring intelligence, one token at a time',
};

const isDemo = !import.meta.env.VITE_CONTENTFUL_SPACE_ID || import.meta.env.VITE_CONTENTFUL_SPACE_ID === 'demo';

// Helper to extract image URL from Contentful asset
function getImageUrl(asset) {
  if (!asset?.fields?.file?.url) return null;
  return `https:${asset.fields.file.url}`;
}

// Helper to extract tags from linked entries
function extractTags(tags, includes) {
  if (!tags || !Array.isArray(tags)) return [];

  return tags.map((tag) => {
    // If it's a linked entry, resolve it
    if (tag.sys?.type === 'Link' && includes?.Entry) {
      const resolved = includes.Entry.find((e) => e.sys.id === tag.sys.id);
      if (resolved) {
        return {
          name: resolved.fields.name,
          slug: resolved.fields.slug,
        };
      }
    }
    // If already resolved
    if (tag.fields) {
      return {
        name: tag.fields.name,
        slug: tag.fields.slug,
      };
    }
    // Fallback for string tags (backwards compatibility)
    if (typeof tag === 'string') {
      return { name: tag, slug: tag.toLowerCase().replace(/\s+/g, '-') };
    }
    return null;
  }).filter(Boolean);
}

export async function getHero() {
  if (isDemo) return mockHero;

  const entries = await client.getEntries({
    content_type: 'heroSection',
    limit: 1,
    include: 1,
  });

  if (entries.items.length === 0) return mockHero;

  const item = entries.items[0].fields;
  return {
    title: item.title,
    subtitle: item.subtitle,
    siteTitle: item.siteTitle,
    siteDescription: item.siteDescription,
    socialImage: getImageUrl(item.socialImage),
  };
}

export async function getPosts() {
  if (isDemo) return mockPosts;

  const entries = await client.getEntries({
    content_type: 'blogPost',
    order: '-fields.publishDate',
    include: 2,
  });

  return entries.items.map((item) => ({
    slug: item.fields.slug,
    title: item.fields.title,
    excerpt: item.fields.excerpt,
    content: item.fields.content,
    publishDate: item.fields.publishDate,
    tags: extractTags(item.fields.tags, entries.includes),
    mainImage: getImageUrl(item.fields.mainImage),
    metaTitle: item.fields.metaTitle,
    metaDescription: item.fields.metaDescription,
  }));
}

export async function getPostBySlug(slug) {
  if (isDemo) {
    return mockPosts.find((p) => p.slug === slug) || null;
  }

  const entries = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
    include: 2,
  });

  if (entries.items.length === 0) return null;

  const item = entries.items[0].fields;
  return {
    slug: item.slug,
    title: item.title,
    excerpt: item.excerpt,
    content: item.content,
    publishDate: item.publishDate,
    tags: extractTags(item.tags, entries.includes),
    mainImage: getImageUrl(item.mainImage),
    metaTitle: item.metaTitle,
    metaDescription: item.metaDescription,
  };
}

export async function getFooter() {
  if (isDemo) return mockFooter;

  const entries = await client.getEntries({
    content_type: 'footer',
    limit: 1,
  });

  if (entries.items.length === 0) return mockFooter;

  const item = entries.items[0].fields;
  return {
    copyright: item.copyright,
    tagline: item.tagline,
  };
}

export async function getRelatedPosts(currentSlug, tags, limit = 2) {
  if (isDemo) {
    // For demo, return posts that share at least one tag
    const currentTagSlugs = tags.map((t) => t.slug);
    return mockPosts
      .filter((p) => p.slug !== currentSlug)
      .filter((p) => p.tags.some((t) => currentTagSlugs.includes(t.slug)))
      .slice(0, limit);
  }

  // Get all posts first (we need to filter by common tags)
  const entries = await client.getEntries({
    content_type: 'blogPost',
    order: '-fields.publishDate',
    include: 2,
    limit: 20,
  });

  const currentTagSlugs = tags.map((t) => t.slug);

  // Find posts with common tags, excluding the current post
  const relatedPosts = entries.items
    .filter((item) => item.fields.slug !== currentSlug)
    .map((item) => {
      const postTags = extractTags(item.fields.tags, entries.includes);
      const commonTags = postTags.filter((t) => currentTagSlugs.includes(t.slug));
      return {
        slug: item.fields.slug,
        title: item.fields.title,
        excerpt: item.fields.excerpt,
        publishDate: item.fields.publishDate,
        tags: postTags,
        mainImage: getImageUrl(item.fields.mainImage),
        commonTagCount: commonTags.length,
      };
    })
    .filter((post) => post.commonTagCount > 0)
    .sort((a, b) => b.commonTagCount - a.commonTagCount || new Date(b.publishDate) - new Date(a.publishDate))
    .slice(0, limit);

  return relatedPosts;
}
