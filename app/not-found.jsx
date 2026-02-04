import Link from 'next/link';
import Robot from '../src/components/Robot';
import Footer from '../src/components/Footer';
import { getFooter } from '../lib/contentful';

export const metadata = {
  title: '404 - Page Not Found | Please Recompile',
  description: "The page you're looking for doesn't exist.",
};

export default async function NotFound() {
  const footer = await getFooter();

  return (
    <>
      <main className="error-page">
        <div className="container">
          <div className="error-content">
            <div className="error-background">
              <span className="error-oops">oops</span>
            </div>
            <div className="error-robot">
              <Robot emotion="confused" size={180} />
            </div>
            <div className="error-text">
              <span className="error-code">404</span>
              <h1 className="error-title">Page Not Found</h1>
              <p className="error-message">The page you're looking for doesn't exist.</p>
              <Link href="/" className="error-btn">Go Home</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer footer={footer} />
    </>
  );
}
