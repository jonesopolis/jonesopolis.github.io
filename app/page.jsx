import { getHero, getPosts, getSiteSettings, getFooter } from '../lib/contentful';
import Hero from '../src/components/Hero';
import PostList from '../src/components/PostList';
import Footer from '../src/components/Footer';

export default async function HomePage() {
  const [hero, posts, settings, footer] = await Promise.all([
    getHero(),
    getPosts(),
    getSiteSettings(),
    getFooter(),
  ]);

  return (
    <>
      <main>
        <div className="container">
          <Hero hero={hero} settings={settings} />
          <PostList posts={posts} settings={settings} />
        </div>
      </main>
      <Footer footer={footer} />
    </>
  );
}
