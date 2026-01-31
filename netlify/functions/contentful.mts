const jsonResponse = (payload, status = 200) =>
  new Response(JSON.stringify(payload), {
    status,
    headers: { "content-type": "application/json" },
  });

const getImageUrl = (asset) => {
  if (!asset?.fields?.file?.url) return null;
  return `https:${asset.fields.file.url}`;
};

const extractTags = (tags, includes) => {
  if (!tags || !Array.isArray(tags)) return [];

  return tags
    .map((tag) => {
      if (tag.sys?.type === "Link" && includes?.Entry) {
        const resolved = includes.Entry.find((entry) => entry.sys.id === tag.sys.id);
        if (resolved) {
          return { name: resolved.fields.name, slug: resolved.fields.slug };
        }
      }

      if (tag.fields) {
        return { name: tag.fields.name, slug: tag.fields.slug };
      }

      if (typeof tag === "string") {
        return { name: tag, slug: tag.toLowerCase().replace(/\s+/g, "-") };
      }

      return null;
    })
    .filter(Boolean);
};

const fetchEntries = async (spaceId, accessToken, query) => {
  const url = new URL(`https://cdn.contentful.com/spaces/${spaceId}/entries`);
  const searchParams = new URLSearchParams({
    access_token: accessToken,
    ...query,
  });
  url.search = searchParams.toString();

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Contentful request failed with status ${response.status}`);
  }

  return response.json();
};

export default async (req) => {
  const url = new URL(req.url);
  const type = url.searchParams.get("type");

  if (!type) {
    return jsonResponse({ error: "Missing type parameter." }, 400);
  }

  const spaceId = Netlify.env.CONTENTFUL_SPACE_ID;
  const accessToken = Netlify.env.CONTENTFUL_ACCESS_TOKEN;

  if (!spaceId || !accessToken) {
    return jsonResponse({ error: "Missing Contentful environment variables." }, 500);
  }

  try {
    if (type === "hero") {
      const entries = await fetchEntries(spaceId, accessToken, {
        content_type: "heroSection",
        limit: "1",
        include: "1",
      });

      if (!entries.items.length) return jsonResponse({ data: null });

      const item = entries.items[0].fields;
      return jsonResponse({
        data: {
          title: item.title,
          subtitle: item.subtitle,
          siteTitle: item.siteTitle,
          siteDescription: item.siteDescription,
          socialImage: getImageUrl(item.socialImage),
        },
      });
    }

    if (type === "posts") {
      const entries = await fetchEntries(spaceId, accessToken, {
        content_type: "blogPost",
        order: "-fields.publishDate",
        include: "2",
      });

      const data = entries.items.map((item) => ({
        slug: item.fields.slug,
        title: item.fields.title,
        excerpt: item.fields.excerpt,
        content: item.fields.content,
        publishDate: item.fields.publishDate,
        tags: extractTags(item.fields.tags, entries.includes),
        mainImage: getImageUrl(item.fields.mainImage),
        thumbnailImage: getImageUrl(item.fields.thumbnailImage),
        metaTitle: item.fields.metaTitle,
        metaDescription: item.fields.metaDescription,
      }));

      return jsonResponse({ data });
    }

    if (type === "postBySlug") {
      const slug = url.searchParams.get("slug");
      if (!slug) return jsonResponse({ error: "Missing slug parameter." }, 400);

      const entries = await fetchEntries(spaceId, accessToken, {
        content_type: "blogPost",
        "fields.slug": slug,
        limit: "1",
        include: "2",
      });

      if (!entries.items.length) return jsonResponse({ data: null });

      const item = entries.items[0].fields;
      return jsonResponse({
        data: {
          slug: item.slug,
          title: item.title,
          excerpt: item.excerpt,
          content: item.content,
          publishDate: item.publishDate,
          tags: extractTags(item.tags, entries.includes),
          mainImage: getImageUrl(item.mainImage),
          thumbnailImage: getImageUrl(item.thumbnailImage),
          metaTitle: item.metaTitle,
          metaDescription: item.metaDescription,
        },
      });
    }

    if (type === "footer") {
      const entries = await fetchEntries(spaceId, accessToken, {
        content_type: "footer",
        limit: "1",
      });

      if (!entries.items.length) return jsonResponse({ data: null });

      const item = entries.items[0].fields;
      return jsonResponse({
        data: {
          copyright: item.copyright,
          tagline: item.tagline,
        },
      });
    }

    if (type === "siteSettings") {
      const entries = await fetchEntries(spaceId, accessToken, {
        content_type: "siteSettings",
        limit: "1",
      });

      if (!entries.items.length) return jsonResponse({ data: null });

      const item = entries.items[0].fields;
      return jsonResponse({
        data: {
          logoText: item.logoText,
          heroBadgeText: item.heroBadgeText,
          backToPostsText: item.backToPostsText,
          backToHomeText: item.backToHomeText,
          notFoundTitle: item.notFoundTitle,
          notFoundMessage: item.notFoundMessage,
          loadingText: item.loadingText,
          defaultSiteTitle: item.defaultSiteTitle,
          defaultSiteDescription: item.defaultSiteDescription,
          contactEmail: item.contactEmail,
          githubUrl: item.githubUrl,
          linkedinUrl: item.linkedinUrl,
          twitterUrl: item.twitterUrl,
        },
      });
    }

    if (type === "resumePage") {
      const entries = await fetchEntries(spaceId, accessToken, {
        content_type: "resumePage",
        limit: "1",
      });

      if (!entries.items.length) return jsonResponse({ data: null });

      const item = entries.items[0].fields;
      return jsonResponse({
        data: {
          fullName: item.fullName,
          location: item.location,
          phone: item.phone,
          email: item.email,
          linkedinUrl: item.linkedinUrl,
          portfolioUrl: item.portfolioUrl,
          professionalSummary: item.professionalSummary,
          keyAchievements: item.keyAchievements,
          experience: item.experience,
          technicalSkills: item.technicalSkills,
          education: item.education,
          certifications: item.certifications,
          pdfUrl: item.pdfUrl,
          seoTitle: item.seoTitle,
          seoDescription: item.seoDescription,
        },
      });
    }

    if (type === "contactPage") {
      const entries = await fetchEntries(spaceId, accessToken, {
        content_type: "contactPage",
        limit: "1",
      });

      if (!entries.items.length) return jsonResponse({ data: null });

      const item = entries.items[0].fields;
      return jsonResponse({
        data: {
          pageTitle: item.pageTitle,
          pageSubtitle: item.pageSubtitle,
          seoTitle: item.seoTitle,
          seoDescription: item.seoDescription,
          introText: item.introText,
        },
      });
    }

    if (type === "relatedPosts") {
      const currentSlug = url.searchParams.get("currentSlug");
      if (!currentSlug) return jsonResponse({ error: "Missing currentSlug parameter." }, 400);

      const limit = Number(url.searchParams.get("limit") || 2);
      const tagsParam = url.searchParams.get("tags") || "[]";
      let tags = [];

      try {
        tags = JSON.parse(tagsParam);
      } catch (error) {
        tags = [];
      }

      const entries = await fetchEntries(spaceId, accessToken, {
        content_type: "blogPost",
        order: "-fields.publishDate",
        include: "2",
        limit: "20",
      });

      const currentTagSlugs = tags.map((tag) => tag.slug).filter(Boolean);

      const relatedPosts = entries.items
        .filter((item) => item.fields.slug !== currentSlug)
        .map((item) => {
          const postTags = extractTags(item.fields.tags, entries.includes);
          const commonTags = postTags.filter((tag) => currentTagSlugs.includes(tag.slug));

          return {
            slug: item.fields.slug,
            title: item.fields.title,
            excerpt: item.fields.excerpt,
            publishDate: item.fields.publishDate,
            tags: postTags,
            mainImage: getImageUrl(item.fields.mainImage),
            thumbnailImage: getImageUrl(item.fields.thumbnailImage),
            commonTagCount: commonTags.length,
          };
        })
        .filter((post) => post.commonTagCount > 0)
        .sort((a, b) => b.commonTagCount - a.commonTagCount || new Date(b.publishDate) - new Date(a.publishDate))
        .slice(0, limit);

      return jsonResponse({ data: relatedPosts });
    }

    return jsonResponse({ error: "Unsupported type parameter." }, 400);
  } catch (error) {
    return jsonResponse({ error: "Failed to fetch Contentful data." }, 500);
  }
};

export const config = {
  path: "/api/contentful",
};
