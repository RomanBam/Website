import React, { useState, useEffect } from 'react';
import './App.css';
import { FaRegEnvelope, FaLinkedin, FaGithub, FaPencilRuler, FaCode, FaServer, FaRobot, FaBook, FaDownload, FaBriefcase, FaTools } from 'react-icons/fa';
import { LuCake, LuMapPin } from 'react-icons/lu';

const socialLinks = [
  { href: 'https://www.linkedin.com/in/roman-bamrah', label: 'LinkedIn', icon: <FaLinkedin /> },
  { href: 'https://github.com/RomanBam', label: 'GitHub', icon: <FaGithub /> },
];

const tabs = [
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];

function MobileProfileCard() {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div className={`mobile-profile-card${expanded ? ' expanded' : ' collapsed'}`}> 
      <div className="mobile-profile-header">
        <div className="mobile-profile-avatar-bg">
          <img src="/selfie.jpg" alt="Profile" className="mobile-profile-avatar" />
        </div>
        <div className="mobile-profile-info">
          <div className="mobile-profile-name">Roman Bamrah</div>
          <div className="mobile-profile-role">Software Engineer</div>
        </div>
        <button
          className="mobile-profile-chevron"
          aria-label="Toggle profile card"
          onClick={() => setExpanded(e => !e)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffd600" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s'}}><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
      </div>
      {expanded && (
        <div className="mobile-profile-details">
          <div className="mobile-profile-details-inner">
            <hr className="mobile-profile-divider" />
            <div className="mobile-profile-contact-list">
              <div className="mobile-profile-contact-item"><span className="mobile-profile-contact-icon"><FaRegEnvelope color="#ffd600" /></span><span className="mobile-profile-contact-label">EMAIL</span><span className="mobile-profile-contact-value">romanbamrah@gmail.com</span></div>
              <div className="mobile-profile-contact-item"><span className="mobile-profile-contact-icon"><LuCake color="#ffd600" /></span><span className="mobile-profile-contact-label">BIRTHDATE</span><span className="mobile-profile-contact-value">July 9th, 2002</span></div>
              <div className="mobile-profile-contact-item"><span className="mobile-profile-contact-icon"><LuMapPin color="#ffd600" /></span><span className="mobile-profile-contact-label">LOCATION</span><span className="mobile-profile-contact-value">Toronto, ON</span></div>
            </div>
            <hr className="mobile-profile-divider" />
            <div className="mobile-profile-socials">
              <a href="https://www.linkedin.com/in/roman-bamrah" aria-label="LinkedIn" className="mobile-profile-social-icon" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/RomanBam" aria-label="GitHub" className="mobile-profile-social-icon" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function WebSidebar() {
  return (
    <aside className="sidebar-card">
      <div className="profile-pic">
        <div className="avatar-bg">
          <div className="avatar"><img src="/selfie.jpg" alt="Profile" /></div>
        </div>
      </div>
      <h2 className="profile-name">Roman Bamrah</h2>
      <div className="profile-role">Software Engineer</div>
      <hr className="divider" />
      <div className="contact-list">
        <div className="contact-item"><span className="contact-icon"><FaRegEnvelope color="#ffd600" /></span> <span>romanbamrah@gmail.com</span></div>
        <div className="contact-item"><span className="contact-icon"><LuCake color="#ffd600" /></span> <span>July 9th, 2002</span></div>
        <div className="contact-item"><span className="contact-icon"><LuMapPin color="#ffd600" /></span> <span>Toronto, ON</span></div>
      </div>
      <div className="sidebar-socials">
        {socialLinks.map((s, i) => (
          <a key={i} href={s.href} aria-label={s.label} className="sidebar-social-link" target="_blank" rel="noopener noreferrer">{s.icon}</a>
        ))}
      </div>
    </aside>
  );
}

function ContactSectionStyled() {
  return (
    <section className="contact-section" style={{ fontFamily: 'Segoe UI, Arial, sans-serif' }}>
      <h2 className="contact-title custom-title" style={{ marginBottom: '1.1rem', color: '#fff', fontWeight: 700, fontFamily: 'Segoe UI, Arial, sans-serif', fontSize: '1.1rem' }}>Contact Me</h2>
      <div style={{ marginBottom: '0.3rem', color: '#fff', fontWeight: 600, fontSize: '1rem', fontFamily: 'Segoe UI, Arial, sans-serif' }}>Socials</div>
      <div className="contact-socials" style={{ display: 'flex', gap: '1.1rem', marginBottom: '1.1rem' }}>
        <a href="https://www.linkedin.com/in/roman-bamrah" aria-label="LinkedIn" className="contact-social-icon" target="_blank" rel="noopener noreferrer" style={{ color: '#b0b0b0', fontSize: '2rem' }}><FaLinkedin /></a>
        <a href="https://github.com/RomanBam" aria-label="GitHub" className="contact-social-icon" target="_blank" rel="noopener noreferrer" style={{ color: '#b0b0b0', fontSize: '2rem' }}><FaGithub /></a>
      </div>
      <form className="contact-form" action="https://formspree.io/f/meozqonz" method="POST" autoComplete="off" style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', fontFamily: 'Segoe UI, Arial, sans-serif' }}>
        <input type="text" name="name" placeholder="Your Name" required style={{ background: 'rgb(40,40,43)', color: '#fff', border: '1px solid #333', borderRadius: '8px', padding: '0.6rem 0.9rem', fontSize: '1rem', fontFamily: 'Segoe UI, Arial, sans-serif' }} />
        <input type="email" name="email" placeholder="Your Email" required style={{ background: 'rgb(40,40,43)', color: '#fff', border: '1px solid #333', borderRadius: '8px', padding: '0.6rem 0.9rem', fontSize: '1rem', fontFamily: 'Segoe UI, Arial, sans-serif' }} />
        <textarea name="message" placeholder="Your Message" required rows={4} style={{ background: 'rgb(40,40,43)', color: '#fff', border: '1px solid #333', borderRadius: '8px', padding: '0.6rem 0.9rem', fontSize: '1rem', fontFamily: 'Segoe UI, Arial, sans-serif', resize: 'none' }} />
        <button type="submit" style={{ background: '#ffd600', color: '#18191e', border: 'none', borderRadius: '8px', padding: '0.7rem 0', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', marginTop: '0.3rem', fontFamily: 'Segoe UI, Arial, sans-serif' }}>Send</button>
      </form>
    </section>
  );
}

function ContactSectionWeb() {
  return (
    <section className="contact-section" style={{ fontFamily: 'Segoe UI, Arial, sans-serif' }}>
      <h2 className="contact-title custom-title" style={{ marginBottom: '1.1rem', color: '#fff', fontWeight: 700, fontFamily: 'Segoe UI, Arial, sans-serif', fontSize: '1.1rem' }}>Contact Me</h2>
      <div style={{ marginBottom: '0.3rem', color: '#fff', fontWeight: 600, fontSize: '1rem', fontFamily: 'Segoe UI, Arial, sans-serif' }}>Socials</div>
      <div className="contact-socials" style={{ display: 'flex', gap: '1.1rem', marginBottom: '1.1rem' }}>
        <a href="https://www.linkedin.com/in/roman-bamrah" aria-label="LinkedIn" className="contact-social-icon" target="_blank" rel="noopener noreferrer" style={{ color: '#b0b0b0', fontSize: '2rem' }}><FaLinkedin /></a>
        <a href="https://github.com/RomanBam" aria-label="GitHub" className="contact-social-icon" target="_blank" rel="noopener noreferrer" style={{ color: '#b0b0b0', fontSize: '2rem' }}><FaGithub /></a>
      </div>
      <form className="contact-form" action="https://formspree.io/f/meozqonz" method="POST" autoComplete="off" style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', fontFamily: 'Segoe UI, Arial, sans-serif' }}>
        <input type="text" name="name" placeholder="Your Name" required style={{ background: 'rgb(40,40,43)', color: '#fff', border: '1px solid #333', borderRadius: '8px', padding: '0.6rem 0.9rem', fontSize: '1rem', fontFamily: 'Segoe UI, Arial, sans-serif' }} />
        <input type="email" name="email" placeholder="Your Email" required style={{ background: 'rgb(40,40,43)', color: '#fff', border: '1px solid #333', borderRadius: '8px', padding: '0.6rem 0.9rem', fontSize: '1rem', fontFamily: 'Segoe UI, Arial, sans-serif' }} />
        <textarea name="message" placeholder="Your Message" required rows={4} style={{ background: 'rgb(40,40,43)', color: '#fff', border: '1px solid #333', borderRadius: '8px', padding: '0.6rem 0.9rem', fontSize: '1rem', fontFamily: 'Segoe UI, Arial, sans-serif', resize: 'none' }} />
        <button type="submit" style={{ background: '#ffd600', color: '#18191e', border: 'none', borderRadius: '8px', padding: '0.7rem 0', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', marginTop: '0.3rem', fontFamily: 'Segoe UI, Arial, sans-serif' }}>Send</button>
      </form>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="education-section" style={{ fontFamily: 'Segoe UI, Arial, sans-serif', marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.2rem' }}>
        <FaBook color="#ffd600" style={{ fontSize: '2.1rem', marginRight: '0.7rem' }} />
        <h2 className="education-title custom-title" style={{ color: '#fff', fontWeight: 700, fontSize: '1.4rem', margin: 0 }}>Education</h2>
      </div>
      <div className="edu-timeline" style={{ position: 'relative', marginLeft: '1.5rem', paddingLeft: '1.5rem', borderLeft: '2.5px solid #333', maxWidth: 700 }}>
        <div className="edu-item" style={{ position: 'relative', marginBottom: '1.1rem' }}>
          <span style={{ position: 'absolute', left: '-1.5rem', top: '0.65rem', width: '1.2rem', height: '2px', background: '#ffd600', borderRadius: '1px', zIndex: 2, boxSizing: 'border-box' }}></span>
          <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.13rem', marginBottom: '0.1rem', position: 'relative', top: '-0.05rem' }}>Bachelor of Science, Computer Science <span style={{ color: '#ffd600', fontWeight: 400, fontSize: '1rem' }}>(2021 - 2025)</span></div>
          <div style={{ color: '#fff', fontWeight: 600, fontSize: '1rem', marginBottom: '0.2rem' }}>Trent University, Peterborough, ON</div>
          <div style={{ color: '#e0e0e0', fontSize: '1rem', marginBottom: '0.2rem' }}><b>Relevant Coursework:</b> Front-End Web Development, CyberSecurity, Software Design & Modelling, Applied AI & Machine Learning, Database Management Systems</div>
          <div style={{ color: '#e0e0e0', fontSize: '1rem', marginBottom: '0.2rem' }}><b>Projects:</b>
            <ul style={{ margin: '0.2rem 0 0.2rem 1.2rem', color: '#e0e0e0', fontSize: '1rem' }}>
              <li>Developed a puzzle-based game prototype (digital & analog versions).</li>
              <li>Designed a MySQL database system for managing library inventory at Trent Durham.</li>
            </ul>
          </div>
          <div style={{ color: '#e0e0e0', fontSize: '1rem' }}><b>Leadership:</b> Orientation Leader (2021-2023), led student engagement events.</div>
        </div>
      </div>
      <div style={{ background: '#29292b', borderRadius: '14px', padding: '1.1rem 1.5rem', marginTop: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)', maxWidth: 600 }}>
        <div>
          <div style={{ color: '#fff', fontWeight: 600, fontSize: '1.18rem' }}>Paper Resume</div>
          <div style={{ color: '#b0b0b0', fontSize: '1rem', marginTop: '0.2rem' }}>Download In A Pdf Format</div>
        </div>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#ffd600', fontWeight: 500, fontSize: '1.08rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.2s' }}
        >
          <FaDownload style={{ fontSize: '1.2rem' }} />
          Download
        </a>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="experience-section" style={{ fontFamily: 'Segoe UI, Arial, sans-serif', marginBottom: '1.5rem', marginTop: '1.1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.2rem' }}>
        <FaBriefcase color="#ffd600" style={{ fontSize: '2.1rem', marginRight: '0.7rem' }} />
        <h2 className="experience-title custom-title" style={{ color: '#fff', fontWeight: 700, fontSize: '1.4rem', margin: 0 }}>Experience</h2>
      </div>
      <div className="exp-timeline" style={{ position: 'relative', marginLeft: '1.5rem', paddingLeft: '1.5rem', borderLeft: '2.5px solid #333', maxWidth: 700 }}>
        <div className="exp-item" style={{ position: 'relative', marginBottom: 0 }}>
          <span style={{ position: 'absolute', left: '-1.5rem', top: '0.65rem', width: '1.2rem', height: '2px', background: '#ffd600', borderRadius: '1px', zIndex: 2, boxSizing: 'border-box' }}></span>
          <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.13rem', marginBottom: '0.1rem', position: 'relative', top: '-0.05rem' }}>Sales & Technical Support Specialist <span style={{ color: '#ffd600', fontWeight: 400, fontSize: '1rem' }}>(May 2021 – Oct. 2024)</span></div>
          <div style={{ color: '#ffd600', fontWeight: 600, fontSize: '1rem', marginBottom: '0.2rem' }}>Super Choice Kitchen Inc, Burlington, ON</div>
          <div style={{ color: '#e0e0e0', fontSize: '1rem', marginBottom: '0.2rem' }}>
            <ul style={{ margin: '0.2rem 0 0.2rem 1.2rem', color: '#e0e0e0', fontSize: '1rem' }}>
              <li>Created and presented 100+ interactive 3D renovation models annually using digital modelling tools, improving customer engagement and technical communication.</li>
              <li>Increased customer satisfaction scores by 25% through data-informed recommendations and consistent post-project follow-ups.</li>
              <li>Delivered IT support for internal systems, resolving hardware/software issues and improving uptime for daily operations.</li>
              <li>Automated and streamlined project update workflows, improving client retention and team communication.</li>
              <li>Collaborated cross-functionally with design and operations teams to translate customer needs into technical requirements and solutions.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  return (
    <section className="techstack-section" style={{ fontFamily: 'Segoe UI, Arial, sans-serif', marginBottom: '1.5rem', marginTop: '1.1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.2rem' }}>
        <FaTools color="#ffd600" style={{ fontSize: '2.1rem', marginRight: '0.7rem' }} />
        <h2 className="techstack-title custom-title" style={{ color: '#fff', fontWeight: 700, fontSize: '1.4rem', margin: 0 }}>Tech Stack</h2>
      </div>
      <div className="tech-timeline" style={{ position: 'relative', marginLeft: '1.5rem', paddingLeft: '1.5rem', borderLeft: '2.5px solid #333', maxWidth: 700 }}>
        {/* Programming */}
        <div className="tech-item" style={{ position: 'relative', marginBottom: '1.1rem' }}>
          <span style={{ position: 'absolute', left: '-1.5rem', top: '0.65rem', width: '1.2rem', height: '2px', background: '#ffd600', borderRadius: '1px', zIndex: 2, boxSizing: 'border-box' }}></span>
          <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.13rem', marginBottom: '0.1rem' }}>Programming</div>
          <ul style={{ color: '#e0e0e0', fontSize: '1rem', marginLeft: '1.2rem', marginBottom: 0 }}>
            <li>C#, Python, C++</li>
          </ul>
        </div>
        {/* Artificial Intelligence */}
        <div className="tech-item" style={{ position: 'relative', marginBottom: '1.1rem' }}>
          <span style={{ position: 'absolute', left: '-1.5rem', top: '0.65rem', width: '1.2rem', height: '2px', background: '#ffd600', borderRadius: '1px', zIndex: 2, boxSizing: 'border-box' }}></span>
          <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.13rem', marginBottom: '0.1rem' }}>Artificial Intelligence</div>
          <ul style={{ color: '#e0e0e0', fontSize: '1rem', marginLeft: '1.2rem', marginBottom: 0 }}>
            <li>TensorFlow</li>
            <li>ML Libraries: Scikit-learn, Pandas, NumPy, Matplotlib, Graphviz, Vega-Altair</li>
            <li>ChatGPT API, LangChain</li>
          </ul>
        </div>
        {/* Frontend Development */}
        <div className="tech-item" style={{ position: 'relative', marginBottom: '1.1rem' }}>
          <span style={{ position: 'absolute', left: '-1.5rem', top: '0.65rem', width: '1.2rem', height: '2px', background: '#ffd600', borderRadius: '1px', zIndex: 2, boxSizing: 'border-box' }}></span>
          <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.13rem', marginBottom: '0.1rem' }}>Frontend Development</div>
          <ul style={{ color: '#e0e0e0', fontSize: '1rem', marginLeft: '1.2rem', marginBottom: 0 }}>
            <li>JavaScript, HTML, CSS</li>
            <li>React.js, Next.js</li>
          </ul>
        </div>
        {/* Backend & APIs */}
        <div className="tech-item" style={{ position: 'relative', marginBottom: '1.1rem' }}>
          <span style={{ position: 'absolute', left: '-1.5rem', top: '0.65rem', width: '1.2rem', height: '2px', background: '#ffd600', borderRadius: '1px', zIndex: 2, boxSizing: 'border-box' }}></span>
          <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.13rem', marginBottom: '0.1rem' }}>Backend & APIs</div>
          <ul style={{ color: '#e0e0e0', fontSize: '1rem', marginLeft: '1.2rem', marginBottom: 0 }}>
            <li>Python (Flask)</li>
            <li>SQL</li>
          </ul>
        </div>
        {/* UI/UX & Design Tools */}
        <div className="tech-item" style={{ position: 'relative', marginBottom: '1.1rem' }}>
          <span style={{ position: 'absolute', left: '-1.5rem', top: '0.65rem', width: '1.2rem', height: '2px', background: '#ffd600', borderRadius: '1px', zIndex: 2, boxSizing: 'border-box' }}></span>
          <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.13rem', marginBottom: '0.1rem' }}>UI/UX & Design Tools</div>
          <ul style={{ color: '#e0e0e0', fontSize: '1rem', marginLeft: '1.2rem', marginBottom: 0 }}>
            <li>Figma</li>
          </ul>
        </div>
        {/* Version Control & Collaboration */}
        <div className="tech-item" style={{ position: 'relative', marginBottom: 0 }}>
          <span style={{ position: 'absolute', left: '-1.5rem', top: '0.65rem', width: '1.2rem', height: '2px', background: '#ffd600', borderRadius: '1px', zIndex: 2, boxSizing: 'border-box' }}></span>
          <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.13rem', marginBottom: '0.1rem' }}>Version Control & Collaboration</div>
          <ul style={{ color: '#e0e0e0', fontSize: '1rem', marginLeft: '1.2rem', marginBottom: 0 }}>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    title: 'Cheese Fat Prediction Model',
    description: 'A data science and machine learning project that predicts the fat percentage in cheese samples using regression models. The workflow covers data cleaning, exploratory data analysis (EDA), feature engineering, model selection, and results interpretation. Ideal for applications in food quality control and nutritional analysis.',
    tech: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    code: 'https://github.com/RomanBam/CheeseFatPrediction',
    live: null
  },
  {
    title: 'AI-Assistant',
    description: 'A Python-based AI assistant that leverages the power of LangChain and OpenAI to provide conversational and computational capabilities through a command-line interface. The project demonstrates prompt engineering, API integration, and modular tool extension. Ideal for exploring natural language processing, building custom chatbots, and experimenting with AI-driven automation.',
    tech: ['Python', 'LangChain', 'OpenAI API', 'LangGraph', 'python-dotenv', 'uv'],
    code: 'https://github.com/RomanBam/AI-Assistant',
    live: null
  },
  // Add more projects here as needed
];

function MobileView({ activeTab, setActiveTab }) {
  return (
    <div className="dark-app">
      <MobileProfileCard />
      <main className="main-content-card">
        {activeTab === 'about' && (
          <>
            <section className="about-section">
              <h1 className="about-title custom-title">About Me</h1>
              <p className="about-desc">
                Hi! I’m Roman, a Bachelor of Computer Science student at Trent University, ON. I have a strong passion for AI and software development, with hands-on experience in machine learning and full‑stack web development. I love applying my skills to creative projects that make a meaningful and positive impact on the world.<br /><br />
                Through my academic coursework and research, I’ve worked extensively with deep learning frameworks such as TensorFlow and various machine learning libraries, including Scikit-learn, Pandas, NumPy, Matplotlib, Graphviz, and Vega-Altair. My most notable project was a cheese fat prediction model, which could be used for many notable advantages, ranging from health implications to product development.<br /><br />
                On the front-end side, I’ve built several interactive projects using HTML, CSS, JavaScript, and React.js. My focus has been on designing responsive, user-friendly interfaces and applying modern development practices. I enjoy bridging the gap between clean design and functional code to create digital experiences that are both intuitive and impactful.
              </p>
            </section>
            <section className="doing-section">
              <h2 className="doing-title custom-title">What I'm Doing</h2>
              <div className="doing-cards">
                <div className="doing-card">
                  <div className="doing-icon"><FaPencilRuler color="#ffd600" style={{ fontSize: '2.2rem' }} /></div>
                  <div>
                    <h3>UI/UX Design</h3>
                    <p>Striving for modern, high-quality design built with attention to detail and a focus on user experience.</p>
                  </div>
                </div>
                <div className="doing-card">
                  <div className="doing-icon"><FaCode color="#ffd600" style={{ fontSize: '2.2rem' }} /></div>
                  <div>
                    <h3>Frontend Development</h3>
                    <p>High-quality frontend development of sites at a skillful level.</p>
                  </div>
                </div>
                <div className="doing-card">
                  <div className="doing-icon"><FaServer color="#ffd600" style={{ fontSize: '2.2rem' }} /></div>
                  <div>
                    <h3>Backend Development</h3>
                    <p>Learning backend development of applications in JavaScript.</p>
                  </div>
                </div>
                <div className="doing-card">
                  <div className="doing-icon"><FaRobot color="#ffd600" style={{ fontSize: '2.2rem' }} /></div>
                  <div>
                    <h3>Machine Learning</h3>
                    <p>Obsessed in developing high-quality machine learning applications.</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
        {activeTab === 'resume' && (
          <>
            <EducationSection />
            <ExperienceSection />
            <TechStackSection />
          </>
        )}
        {activeTab === 'portfolio' && (
          <section className="portfolio-section">
            <h2 className="portfolio-title custom-title">Portfolio</h2>
            <div className="portfolio-grid">
              {projects.map((proj, idx) => (
                <div className="portfolio-card" key={idx}>
                  <h3 className="portfolio-title" style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>{proj.title}</h3>
                  <p style={{ color: '#e0e0e0', fontSize: '1rem', marginBottom: '1.1rem' }}>{proj.description}</p>
                  <div style={{ marginBottom: '1.1rem' }}>
                    <span style={{ color: '#fff', fontWeight: 600, fontSize: '1rem' }}>Tech Stack:</span>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.4rem' }}>
                      {proj.tech.map((t, i) => (
                        <span key={i} className="portfolio-badge">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', marginTop: 'auto' }}>
                    <a href={proj.code} target="_blank" rel="noopener noreferrer" className="portfolio-link" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <FaGithub style={{ fontSize: '1.2rem' }} /> Code
                    </a>
                    {proj.live && (
                      <a href={proj.live} target="_blank" rel="noopener noreferrer" className="portfolio-link" style={{ color: '#00ffae', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span style={{ fontSize: '1.1rem' }}>Live</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        {activeTab === 'contact' && (
          <ContactSectionStyled />
        )}
      </main>
      <nav className="main-tabs main-tabs-bottom">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`main-tab${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}

function WebView({ activeTab, setActiveTab }) {
  return (
    <div className="dark-app">
      <div className="container">
        <WebSidebar />
        <main className="main-content-card">
          <nav className="main-tabs main-tabs-right">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`main-tab${activeTab === tab.id ? ' active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </nav>
          {activeTab === 'about' && (
            <>
              <section className="about-section">
                <h1 className="about-title custom-title">About Me</h1>
                <p className="about-desc">
                  Hi! I’m Roman, a Bachelor of Computer Science student at Trent University, ON. I have a strong passion for AI and software development, with hands-on experience in machine learning and full‑stack web development. I love applying my skills to creative projects that make a meaningful and positive impact on the world.<br /><br />
                  Through my academic coursework and research, I’ve worked extensively with deep learning frameworks such as TensorFlow and various machine learning libraries, including Scikit-learn, Pandas, NumPy, Matplotlib, Graphviz, and Vega-Altair. My most notable project was a cheese fat prediction model, which could be used for many notable advantages, ranging from health implications to product development.<br /><br />
                  On the front-end side, I’ve built several interactive projects using HTML, CSS, JavaScript, and React.js. My focus has been on designing responsive, user-friendly interfaces and applying modern development practices. I enjoy bridging the gap between clean design and functional code to create digital experiences that are both intuitive and impactful.
                </p>
              </section>
              <section className="doing-section">
                <h2 className="doing-title custom-title">What I'm Doing</h2>
                <div className="doing-cards">
                  <div className="doing-card">
                    <div className="doing-icon"><FaPencilRuler color="#ffd600" style={{ fontSize: '2.2rem' }} /></div>
                    <div>
                      <h3>UI/UX Design</h3>
                      <p>Striving for modern, high-quality design built with attention to detail and a focus on user experience.</p>
                    </div>
                  </div>
                  <div className="doing-card">
                    <div className="doing-icon"><FaCode color="#ffd600" style={{ fontSize: '2.2rem' }} /></div>
                    <div>
                      <h3>Frontend Development</h3>
                      <p>High-quality frontend development of sites at a skillful level.</p>
                    </div>
                  </div>
                  <div className="doing-card">
                    <div className="doing-icon"><FaServer color="#ffd600" style={{ fontSize: '2.2rem' }} /></div>
                    <div>
                      <h3>Backend Development</h3>
                      <p>Learning backend development of applications in JavaScript.</p>
                    </div>
                  </div>
                  <div className="doing-card">
                    <div className="doing-icon"><FaRobot color="#ffd600" style={{ fontSize: '2.2rem' }} /></div>
                    <div>
                      <h3>Machine Learning</h3>
                      <p>Obsessed in developing high-quality machine learning applications.</p>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
          {activeTab === 'resume' && (
            <>
              <EducationSection />
              <ExperienceSection />
              <TechStackSection />
            </>
          )}
          {activeTab === 'portfolio' && (
            <section className="portfolio-section">
              <h2 className="portfolio-title custom-title">Portfolio</h2>
              <div className="portfolio-grid">
                {projects.map((proj, idx) => (
                  <div className="portfolio-card" key={idx}>
                    <h3 className="portfolio-title" style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>{proj.title}</h3>
                    <p style={{ color: '#e0e0e0', fontSize: '1rem', marginBottom: '1.1rem' }}>{proj.description}</p>
                    <div style={{ marginBottom: '1.1rem' }}>
                      <span style={{ color: '#fff', fontWeight: 600, fontSize: '1rem' }}>Tech Stack:</span>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.4rem' }}>
                        {proj.tech.map((t, i) => (
                          <span key={i} className="portfolio-badge">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', marginTop: 'auto' }}>
                      <a href={proj.code} target="_blank" rel="noopener noreferrer" className="portfolio-link" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <FaGithub style={{ fontSize: '1.2rem' }} /> Code
                      </a>
                      {proj.live && (
                        <a href={proj.live} target="_blank" rel="noopener noreferrer" className="portfolio-link" style={{ color: '#00ffae', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <span style={{ fontSize: '1.1rem' }}>Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          {activeTab === 'contact' && (
            <ContactSectionWeb />
          )}
        </main>
      </div>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? (
    <MobileView activeTab={activeTab} setActiveTab={setActiveTab} />
  ) : (
    <WebView activeTab={activeTab} setActiveTab={setActiveTab} />
  );
}

export default App;
