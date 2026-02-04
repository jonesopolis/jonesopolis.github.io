import { getFooter } from '../../../lib/contentful';
import BitIterateClient from '../../../src/components/BitIterateClient';
import Footer from '../../../src/components/Footer';

export const metadata = {
  title: 'Sad Bit Iteration | Please Recompile',
  description: 'Iterating on the sad robot design',
};

export default async function BitIteratePage() {
  const footer = await getFooter();

  return (
    <>
      <BitIterateClient />
      <Footer footer={footer} />
    </>
  );
}
