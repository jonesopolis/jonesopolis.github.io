import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import Resume from './components/Resume';
import Contact from './components/Contact';
import BitPage from './components/BitPage';
import BitIterate from './components/BitIterate';
import IteratePage from './components/IteratePage';
import Footer from './components/Footer';
import SEO from './components/SEO';
import ErrorPage from './components/ErrorPage';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/main.css';

function HomePage() {
  return (
    <>
      <SEO
        title="Please Recompile"
        description="A blog about learning AI, machine learning, and the journey of a developer exploring artificial intelligence. Please recompile."
      />
      <main>
        <div className="container">
          <Hero />
          <PostList />
        </div>
      </main>
      <Footer />
    </>
  );
}

function NotFoundPage() {
  return (
    <ErrorPage
      code="404"
      title="Page Not Found"
      message="The page you're looking for doesn't exist."
    />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bit" element={<BitPage />} />
          <Route path="/bit/iterate" element={<BitIterate />} />
          <Route path="/iterate" element={<IteratePage />} />
          <Route path="/:slug" element={<PostDetail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
