import { getFooter } from '../../lib/contentful';
import IterateClient from '../../src/components/IterateClient';
import Footer from '../../src/components/Footer';

export const metadata = {
  title: 'Post Header Iterations | Please Recompile',
  description: 'Exploring post header tag layouts',
};

export default async function IteratePage() {
  const footer = await getFooter();

  return (
    <>
      <IterateClient />
      <Footer footer={footer} />
    </>
  );
}
