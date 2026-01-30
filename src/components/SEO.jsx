import { useEffect } from 'react';

export default function SEO({ title, description, image, type = 'website' }) {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta tags
    const updateMeta = (selector, content) => {
      const element = document.querySelector(selector);
      if (element && content) {
        element.setAttribute('content', content);
      }
    };

    updateMeta('meta[name="description"]', description);
    updateMeta('meta[property="og:title"]', title);
    updateMeta('meta[property="og:description"]', description);
    updateMeta('meta[property="og:type"]', type);
    updateMeta('meta[name="twitter:title"]', title);
    updateMeta('meta[name="twitter:description"]', description);

    if (image) {
      updateMeta('meta[property="og:image"]', image);
      updateMeta('meta[name="twitter:image"]', image);
    }
  }, [title, description, image, type]);

  return null;
}
