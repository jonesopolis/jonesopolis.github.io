'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

function DownloadIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );
}

function BackIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"/>
      <polyline points="12 19 5 12 12 5"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}


const resume = {
  fullName: 'David Rector',
  title: 'Software Architect & Technical Leader',
  location: 'castle rock, colorado',
  phone: '859-396-5280',
  email: 'davidarector@gmail.com',
  pdfUrl: '/ATS_Resume.pdf',

  summary: 'Software Architect and Technical Leader with 14+ years architecting enterprise-scale .NET solutions in Azure cloud environments. Expert in microservices architecture, CI/CD automation, and leading cross-functional engineering teams. Proven track record delivering $1.9M+ revenue projects with measurable performance improvements, system scalability, and high availability.',

  achievements: [
    'Led $1.9M project portfolio (2023)',
    '4x Microsoft Certified Developer',
    'Architected solutions serving 500K+ concurrent users',
    'Reduced system latency 90% (2000ms → <200ms)',
    'Led engineering teams up to 8 developers'
  ],

  experience: [
    {
      title: 'Web Development Lead / Solutions Architect',
      company: 'BlueModus',
      dates: '2019–2021, 2023–Present',
      location: 'Denver, CO',
      bullets: [
        'Architected enterprise CMS solutions for Mainfreight.com, RILA.org, ASBMB.org, and Truliant.org serving 500K+ concurrent users with 99.9% uptime using Azure App Services, Redis caching, and CDN optimization',
        'Led technical evaluations and client onboarding for SEO-driven leads, presenting architecture proposals to C-level stakeholders resulting in $3.2M in multi-year contracts',
        'Designed microservices architecture with Azure Functions reducing page load times 90% (2s → <200ms); implemented event-driven processing with Service Bus and asynchronous workflows',
        'Established code review standards, technical documentation, and Architecture Decision Records (ADRs) across 12-person engineering team; mentored 8 junior developers reducing onboarding time by 40%'
      ]
    },
    {
      title: 'Team Lead & Technical Architect',
      company: 'Caroogo.com',
      dates: '2021–2023',
      location: 'Louisville, KY',
      bullets: [
        'Led 5-person backend team architecting online car-buying platform processing 10K+ daily transactions with real-time inventory integration across 15+ third-party APIs (financing, shipping, DMV)',
        'Designed event-driven microservices architecture using Azure Service Bus, Event Grid, and Functions; implemented OAuth 2.0/JWT authentication supporting 50K+ registered users',
        'Balanced hands-on development (50%) with Scrum Master responsibilities running daily standups and sprint planning; maintained 85% sprint completion rate',
        'Established CI/CD pipelines with Azure DevOps automating deployments and reducing release time by 60%; implemented Infrastructure as Code using ARM templates'
      ]
    },
    {
      title: 'Senior Software Engineer',
      company: 'Kindred',
      dates: '2017–2018',
      location: 'Louisville, KY',
      bullets: [
        'Architected Azure-based patron management system for 20+ global casino properties handling 1M+ daily transactions with 99.95% availability',
        'Migrated proof-of-concept to production-grade distributed system with horizontal scaling, implementing CQRS pattern and event sourcing',
        'Established comprehensive testing strategy achieving 85% code coverage with 1,200+ automated tests; reduced production defects by 70%'
      ]
    },
    {
      title: 'Team Lead Developer',
      company: 'Computer Services Inc.',
      dates: '2015–2017',
      location: 'Lexington, KY',
      bullets: [
        'Led development team managing full SDLC across enterprise projects; established agile practices and code quality standards'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Veridocs, Inc.',
      dates: '2012–2015',
      location: 'Lexington, KY',
      bullets: [
        'Developed casino patron management and identification solutions using C#, SQL Server, and WPF for Fortune 500 clients'
      ]
    }
  ],

  skills: [
    {
      category: 'Languages & Frameworks',
      items: ['C#', '.NET Core/.NET 6/7/8', 'ASP.NET MVC', 'Entity Framework Core', 'Node.js', 'TypeScript', 'JavaScript', 'SignalR']
    },
    {
      category: 'Cloud & DevOps',
      items: ['Azure App Services', 'Azure Functions', 'Cosmos DB', 'Service Bus', 'Event Grid', 'Redis Cache', 'Key Vault', 'Application Insights', 'Entra/B2C', 'Azure DevOps', 'CI/CD Pipelines', 'ARM/Bicep', 'Docker']
    },
    {
      category: 'Architecture & Design',
      items: ['Microservices', 'RESTful APIs', 'Event-Driven Architecture', 'CQRS', 'SOLID Principles', 'Design Patterns', 'Domain-Driven Design', 'System Design']
    },
    {
      category: 'Frontend',
      items: ['Angular 12+', 'React 18+', 'Vue.js 3', 'HTML5', 'CSS3/SASS/LESS', 'Responsive Design', 'PWAs']
    },
    {
      category: 'Data & Security',
      items: ['SQL Server', 'Azure SQL', 'Cosmos DB', 'Redis', 'OAuth 2.0', 'JWT', 'Azure AD/Entra ID', 'RBAC', 'OWASP']
    }
  ],

  education: 'University of Kentucky — B.S. Computer Science, May 2012',

  certifications: [
    'Microsoft Certified Developer – C#',
    'Microsoft Certified Developer – Azure',
    'Kentico Xperience 13 Developer',
    'Xperience by Kentico Developer'
  ]
};

export default function ResumeClient() {
  const [showStickyTitle, setShowStickyTitle] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect();
        const header = document.querySelector('header');
        const headerBottom = header ? header.getBoundingClientRect().bottom : 50;
        setShowStickyTitle(titleRect.top <= headerBottom);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Sticky compact title bar - inverted colors */}
      <div className={`sticky-title-bar sticky-title-bar--resume ${showStickyTitle ? 'sticky-title-bar--visible' : ''}`}>
        <div className="sticky-title-content">
          <Link href="/" className="sticky-back-btn sticky-back-btn--resume" aria-label="Back to home">
            <BackIcon />
          </Link>
          <span className="sticky-title-text sticky-title-text--resume">david rector's resume</span>
          <a href={resume.pdfUrl} download className="sticky-download-btn" aria-label="Download PDF">
            <DownloadIcon size={16} />
          </a>
        </div>
      </div>

      <div className="resume-page">
        {/* Header */}
        <header className="resume-header-section">
          <div className="container">
            <div className="resume-header-content">
              <div className="resume-header-main">
                <h1 className="resume-name" ref={titleRef}>{resume.fullName}</h1>
                <p className="resume-title">{resume.title}</p>
              </div>
              <div className="resume-contact-row">
                <a href={`mailto:${resume.email}`} className="resume-contact-item">
                  <EmailIcon />{resume.email}
                </a>
                <a href={`tel:${resume.phone}`} className="resume-contact-item">
                  <PhoneIcon />{resume.phone}
                </a>
                <span className="resume-contact-item">
                  <LocationIcon />{resume.location}
                </span>
                <a href={resume.pdfUrl} download className="resume-download-link">
                  <DownloadIcon />pdf
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="container">
          {/* Summary */}
          <section className="resume-section">
            <p className="resume-summary">{resume.summary}</p>
          </section>

          {/* Key Achievements */}
          <section className="resume-section">
            <h2 className="resume-section-title">Key Achievements</h2>
            <div className="resume-achievements">
              {resume.achievements.map((item, i) => (
                <span key={i} className="resume-achievement">{item}</span>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="resume-section">
            <h2 className="resume-section-title">Experience</h2>
            <div className="resume-jobs">
              {resume.experience.map((job, i) => (
                <div key={i} className="resume-job">
                  <div className="resume-job-header">
                    <div>
                      <h3 className="resume-job-title">{job.title}</h3>
                      <span className="resume-job-company">{job.company}</span>
                    </div>
                    <div className="resume-job-meta">
                      <span className="resume-job-dates">{job.dates}</span>
                      <span className="resume-job-location">{job.location}</span>
                    </div>
                  </div>
                  <ul className="resume-job-bullets">
                    {job.bullets.map((bullet, j) => (
                      <li key={j}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="resume-section">
            <h2 className="resume-section-title">Technical Skills</h2>
            <div className="resume-skills">
              {resume.skills.map((cat, i) => (
                <div key={i} className="resume-skill-row">
                  <span className="resume-skill-category">{cat.category}:</span>
                  <span className="resume-skill-items">{cat.items.join(', ')}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Education & Certifications */}
          <section className="resume-section resume-footer-section">
            <div className="resume-footer-grid">
              <div>
                <h2 className="resume-section-title">Education</h2>
                <p className="resume-education">{resume.education}</p>
              </div>
              <div>
                <h2 className="resume-section-title">Certifications</h2>
                <p className="resume-certifications">{resume.certifications.join(' · ')}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
