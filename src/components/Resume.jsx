import SEO from './SEO';

export default function Resume() {
  return (
    <>
      <SEO
        title="Resume | Learning AI"
        description="My professional experience and skills in software development and AI/ML."
      />
      <div className="container">
        <section className="page-section">
          <h1 className="page-title">Resume</h1>
          <p className="page-subtitle">My journey in tech and AI</p>

          <div className="resume-section">
            <h2>Experience</h2>
            <div className="resume-item">
              <div className="resume-header">
                <h3>Software Developer</h3>
                <span className="resume-date">2020 - Present</span>
              </div>
              <p className="resume-company">Building things with code</p>
              <ul className="resume-list">
                <li>Developing web applications and APIs</li>
                <li>Exploring AI/ML integration in production systems</li>
                <li>Learning and implementing new technologies</li>
              </ul>
            </div>
          </div>

          <div className="resume-section">
            <h2>Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Languages</h3>
                <div className="skill-tags">
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">C#</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>AI/ML</h3>
                <div className="skill-tags">
                  <span className="skill-tag">LLMs</span>
                  <span className="skill-tag">Prompt Engineering</span>
                  <span className="skill-tag">RAG</span>
                  <span className="skill-tag">Agents</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Frameworks</h3>
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">.NET</span>
                  <span className="skill-tag">Node.js</span>
                </div>
              </div>
            </div>
          </div>

          <div className="resume-cta">
            <a href="/resume.pdf" className="btn" target="_blank" rel="noopener noreferrer">
              Download PDF
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
