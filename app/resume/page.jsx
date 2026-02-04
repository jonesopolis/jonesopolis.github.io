import { getFooter } from '../../lib/contentful';
import ResumeClient from '../../src/components/ResumeClient';
import Footer from '../../src/components/Footer';

export const metadata = {
  title: 'resume | david rector',
  description: 'Software Architect and Technical Leader with 14+ years architecting enterprise-scale .NET solutions in Azure cloud environments.',
};

export default async function ResumePage() {
  const footer = await getFooter();

  return (
    <>
      <ResumeClient />
      <Footer footer={footer} />
    </>
  );
}
