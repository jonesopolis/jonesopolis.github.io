import { notFound } from 'next/navigation';
import { getPosts, getPostBySlug, getSiteSettings, getFooter, getRelatedPosts } from '../../lib/contentful';
import PostDetailClient from '../../src/components/PostDetailClient';
import Footer from '../../src/components/Footer';

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.hook,
    openGraph: {
      title: post.title,
      description: post.hook,
      type: 'article',
      images: post.image ? [{ url: post.image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.hook,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const [post, settings, footer] = await Promise.all([
    getPostBySlug(slug),
    getSiteSettings(),
    getFooter(),
  ]);

  if (!post) {
    notFound();
  }

  const relatedPosts = post.tags?.length > 0
    ? await getRelatedPosts(slug, post.tags, 2)
    : [];

  return (
    <>
      <PostDetailClient post={post} settings={settings} relatedPosts={relatedPosts} />
      <Footer footer={footer} />
    </>
  );
}
