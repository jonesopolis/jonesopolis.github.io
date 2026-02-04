import { notFound } from 'next/navigation';
import { getDraftPosts, getDraftPostBySlug, getSiteSettings, getFooter } from '../../../lib/contentful';
import DraftDetailClient from '../../../src/components/DraftDetailClient';
import Footer from '../../../src/components/Footer';

export async function generateStaticParams() {
  const posts = await getDraftPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getDraftPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `[Unpublished] ${post.title}`,
    description: post.hook,
  };
}

export default async function DraftDetailPage({ params }) {
  const { slug } = await params;
  const [post, settings, footer] = await Promise.all([
    getDraftPostBySlug(slug),
    getSiteSettings(),
    getFooter(),
  ]);

  if (!post) {
    notFound();
  }

  return (
    <>
      <DraftDetailClient post={post} settings={settings} />
      <Footer footer={footer} />
    </>
  );
}
