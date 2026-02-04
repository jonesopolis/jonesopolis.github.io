import '../src/styles/main.css';
import Header from '../src/components/Header';

export const metadata = {
  title: {
    default: 'please recompile',
    template: '%s | please recompile',
  },
  description: 'A blog about learning AI, machine learning, and the journey of a developer exploring artificial intelligence. Please recompile.',
  openGraph: {
    type: 'website',
    siteName: 'please recompile',
    locale: 'en_US',
    url: 'https://please-recompile.vercel.app',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Please Recompile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  metadataBase: new URL('https://please-recompile.vercel.app'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark-mode');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
