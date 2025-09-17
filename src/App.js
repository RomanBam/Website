import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { FaRegEnvelope, FaLinkedin, FaGithub, FaPencilRuler, FaCode, FaServer, FaRobot, FaBook, FaDownload, FaBriefcase, FaTools, FaPython, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaDatabase, FaLink, FaCoffee, FaCloud } from 'react-icons/fa';
import { LuCake, LuMapPin } from 'react-icons/lu';
import { SiJavascript, SiCplusplus, SiTensorflow, SiNextdotjs, SiFlask, SiVercel, SiFigma, SiJupyter, SiOpenai, SiNumpy, SiDocker } from 'react-icons/si';

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

function Constellation() {
  // Define multiple constellation patterns positioned in blank areas
  
  // Big Dipper (top-left area)
  const bigDipper = {
    stars: [
      { id: 'bd1', x: 8, y: 12 },   // Dubhe
      { id: 'bd2', x: 15, y: 15 },  // Merak
      { id: 'bd3', x: 22, y: 18 },  // Phecda
      { id: 'bd4', x: 28, y: 15 },  // Megrez
      { id: 'bd5', x: 34, y: 8 },   // Alioth
      { id: 'bd6', x: 40, y: 5 },   // Mizar
      { id: 'bd7', x: 44, y: 3 }    // Alkaid
    ],
    connections: [
      { from: 'bd1', to: 'bd2' },
      { from: 'bd2', to: 'bd3' },
      { from: 'bd3', to: 'bd4' },
      { from: 'bd4', to: 'bd5' },
      { from: 'bd5', to: 'bd6' },
      { from: 'bd6', to: 'bd7' }
    ]
  };

  // Cassiopeia (top-right area)
  const cassiopeia = {
    stars: [
      { id: 'cas1', x: 75, y: 8 },
      { id: 'cas2', x: 82, y: 12 },
      { id: 'cas3', x: 88, y: 6 },
      { id: 'cas4', x: 93, y: 10 },
      { id: 'cas5', x: 96, y: 5 }
    ],
    connections: [
      { from: 'cas1', to: 'cas2' },
      { from: 'cas2', to: 'cas3' },
      { from: 'cas3', to: 'cas4' },
      { from: 'cas4', to: 'cas5' }
    ]
  };

  // Orion's Belt (bottom-right area)
  const orionsBelt = {
    stars: [
      { id: 'or1', x: 78, y: 85 },  // Alnitak
      { id: 'or2', x: 82, y: 88 },  // Alnilam
      { id: 'or3', x: 86, y: 91 },  // Mintaka
      { id: 'or4', x: 75, y: 80 },  // Betelgeuse
      { id: 'or5', x: 89, y: 96 }   // Rigel
    ],
    connections: [
      { from: 'or1', to: 'or2' },
      { from: 'or2', to: 'or3' },
      { from: 'or4', to: 'or1' },
      { from: 'or3', to: 'or5' }
    ]
  };

  // Southern Cross (bottom-left area)
  const southernCross = {
    stars: [
      { id: 'sc1', x: 12, y: 88 },
      { id: 'sc2', x: 8, y: 92 },
      { id: 'sc3', x: 4, y: 96 },
      { id: 'sc4', x: 16, y: 92 },
      { id: 'sc5', x: 10, y: 85 }
    ],
    connections: [
      { from: 'sc1', to: 'sc2' },
      { from: 'sc2', to: 'sc3' },
      { from: 'sc4', to: 'sc2' },
      { from: 'sc5', to: 'sc1' }
    ]
  };

  // Gemini (middle-right area)
  const gemini = {
    stars: [
      // Left part of Gemini
      { id: 'gem1', x: 85, y: 52 },  // Top star left branch
      { id: 'gem2', x: 87, y: 54 },  // Middle-top of left branch
      { id: 'gem3', x: 89, y: 56 },  // Junction point
      { id: 'gem4', x: 86, y: 57 },  // Left branch lower point
      { id: 'gem5', x: 83, y: 58 },  // Bottom-left end point
      // Right part of Gemini
      { id: 'gem6', x: 93, y: 52 },  // Top-right end point
      { id: 'gem7', x: 91, y: 54 },  // Upper right connection
      { id: 'gem8', x: 93, y: 58 },  // Lower right connection 
      { id: 'gem9', x: 95, y: 60 },  // Right bottom
      { id: 'gem10', x: 97, y: 61 }, // Right-most point
      { id: 'gem11', x: 92, y: 62 }, // Lower end point
      { id: 'gem12', x: 89, y: 64 }  // Bottom-most point
    ],
    connections: [
      // Left part connections
      { from: 'gem1', to: 'gem2' },
      { from: 'gem2', to: 'gem3' },
      { from: 'gem3', to: 'gem4' },
      { from: 'gem4', to: 'gem5' },
      // Right part connections
      { from: 'gem6', to: 'gem7' },
      { from: 'gem7', to: 'gem3' }, // Connection to junction
      { from: 'gem3', to: 'gem8' },
      { from: 'gem8', to: 'gem9' },
      { from: 'gem9', to: 'gem10' },
      { from: 'gem8', to: 'gem11' },
      { from: 'gem11', to: 'gem12' }
    ]
  };

  // Leo (middle-left area)
  const leo = {
    stars: [
      { id: 'leo1', x: 5, y: 45 },
      { id: 'leo2', x: 10, y: 42 },
      { id: 'leo3', x: 15, y: 48 },
      { id: 'leo4', x: 12, y: 55 },
      { id: 'leo5', x: 8, y: 60 }
    ],
    connections: [
      { from: 'leo1', to: 'leo2' },
      { from: 'leo2', to: 'leo3' },
      { from: 'leo3', to: 'leo4' },
      { from: 'leo4', to: 'leo5' }
    ]
  };

  // Cygnus (upper-middle area)
  const cygnus = {
    stars: [
      { id: 'cyg1', x: 50, y: 8 },
      { id: 'cyg2', x: 53, y: 12 },
      { id: 'cyg3', x: 56, y: 16 },
      { id: 'cyg4', x: 48, y: 14 },
      { id: 'cyg5', x: 60, y: 14 }
    ],
    connections: [
      { from: 'cyg1', to: 'cyg2' },
      { from: 'cyg2', to: 'cyg3' },
      { from: 'cyg4', to: 'cyg2' },
      { from: 'cyg2', to: 'cyg5' }
    ]
  };

  // Lyra (top-center area)
  const lyra = {
    stars: [
      { id: 'lyr1', x: 58, y: 25 },
      { id: 'lyr2', x: 62, y: 22 },
      { id: 'lyr3', x: 65, y: 28 },
      { id: 'lyr4', x: 60, y: 30 }
    ],
    connections: [
      { from: 'lyr1', to: 'lyr2' },
      { from: 'lyr2', to: 'lyr3' },
      { from: 'lyr3', to: 'lyr4' },
      { from: 'lyr4', to: 'lyr1' }
    ]
  };

  // Draco (wrapping around top)
  const draco = {
    stars: [
      { id: 'dra1', x: 25, y: 5 },
      { id: 'dra2', x: 30, y: 3 },
      { id: 'dra3', x: 35, y: 6 },
      { id: 'dra4', x: 42, y: 8 },
      { id: 'dra5', x: 48, y: 5 },
      { id: 'dra6', x: 55, y: 7 }
    ],
    connections: [
      { from: 'dra1', to: 'dra2' },
      { from: 'dra2', to: 'dra3' },
      { from: 'dra3', to: 'dra4' },
      { from: 'dra4', to: 'dra5' },
      { from: 'dra5', to: 'dra6' }
    ]
  };

  // Centaurus (bottom-center area)
  const centaurus = {
    stars: [
      { id: 'cen1', x: 45, y: 90 },
      { id: 'cen2', x: 50, y: 87 },
      { id: 'cen3', x: 55, y: 92 },
      { id: 'cen4', x: 48, y: 95 },
      { id: 'cen5', x: 52, y: 97 }
    ],
    connections: [
      { from: 'cen1', to: 'cen2' },
      { from: 'cen2', to: 'cen3' },
      { from: 'cen3', to: 'cen4' },
      { from: 'cen4', to: 'cen5' }
    ]
  };

  // Pegasus (middle-right upper)
  const pegasus = {
    stars: [
      { id: 'peg1', x: 82, y: 30 },
      { id: 'peg2', x: 88, y: 32 },
      { id: 'peg3', x: 90, y: 38 },
      { id: 'peg4', x: 85, y: 40 }
    ],
    connections: [
      { from: 'peg1', to: 'peg2' },
      { from: 'peg2', to: 'peg3' },
      { from: 'peg3', to: 'peg4' },
      { from: 'peg4', to: 'peg1' }
    ]
  };

  // Boötes (left-center)
  const bootes = {
    stars: [
      { id: 'boo1', x: 18, y: 35 },
      { id: 'boo2', x: 22, y: 38 },
      { id: 'boo3', x: 25, y: 42 },
      { id: 'boo4', x: 20, y: 45 }
    ],
    connections: [
      { from: 'boo1', to: 'boo2' },
      { from: 'boo2', to: 'boo3' },
      { from: 'boo3', to: 'boo4' }
    ]
  };

  // Cancer (under sidebar content card)
  const cancer = {
    stars: [
      { id: 'cnc1', x: 27, y: 72 },  // Top star
      { id: 'cnc2', x: 26.75, y: 78 },  // Middle star (pronounced offset left)
      { id: 'cnc3', x: 26, y: 82 },  // Triangle apex star
      { id: 'cnc4', x: 24, y: 86 },  // Bottom left star (closer to center)
      { id: 'cnc5', x: 29, y: 88 }   // Bottom right star (closer to center)
    ],
    connections: [
      { from: 'cnc1', to: 'cnc2' },  // Top to middle (pronounced angle left)
      { from: 'cnc2', to: 'cnc3' },  // Middle to triangle apex
      { from: 'cnc3', to: 'cnc4' },  // Triangle apex to left (shorter)
      { from: 'cnc3', to: 'cnc5' }   // Triangle apex to right (longer)
    ]
  };

  const allConstellations = [bigDipper, cassiopeia, orionsBelt, southernCross, gemini, leo, cygnus, lyra, draco, centaurus, pegasus, bootes, cancer];

  return (
    <div className="constellation">
      <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
        {/* Draw lines for all constellations */}
        {allConstellations.map((constellation, constIndex) =>
          constellation.connections.map((connection, lineIndex) => {
            const fromStar = constellation.stars.find(s => s.id === connection.from);
            const toStar = constellation.stars.find(s => s.id === connection.to);
            return (
              <line
                key={`${constIndex}-${lineIndex}`}
                className="constellation-line"
                x1={`${fromStar.x}%`}
                y1={`${fromStar.y}%`}
                x2={`${toStar.x}%`}
                y2={`${toStar.y}%`}
                style={{ animationDelay: `${3 + lineIndex * 0.2}s` }}
              />
            );
          })
        )}
      </svg>
      
      {/* Render all constellation stars */}
      {allConstellations.map((constellation, constIndex) =>
        constellation.stars.map((star, starIndex) => (
          <div
            key={star.id}
            className="constellation-star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDelay: `3s` /* All stars appear at the same time, 3s delay to match line animations */
            }}
          />
        ))
      )}
      
    </div>
  );
}

function RevealOnScroll({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay, hasAnimated]);

  return (
    <div
      ref={elementRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
      }}
    >
      {children}
    </div>
  );
}

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
      <h2 className="contact-title custom-title" style={{ marginBottom: '1.1rem', color: '#fff', fontWeight: 700, fontFamily: 'Segoe UI, Arial, sans-serif', fontSize: '2.1rem' }}>Contact Me</h2>
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
      <h2 className="contact-title custom-title" style={{ marginBottom: '1.1rem', color: '#fff', fontWeight: 700, fontFamily: 'Segoe UI, Arial, sans-serif', fontSize: '2.1rem' }}>Contact Me</h2>
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
          <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.13rem', marginBottom: '0.1rem', position: 'relative', top: '-0.05rem' }}>Bachelor of Science, Computer Science <span style={{ color: '#ffd600', fontWeight: 400, fontSize: '1rem' }}>(2021 - 2026)</span></div>
          <div style={{ color: '#ffd600', fontWeight: 600, fontSize: '1rem', marginBottom: '0.2rem' }}>Trent University, Peterborough, ON</div>
          <div style={{ color: '#e0e0e0', fontSize: '1rem', marginBottom: '0.2rem' }}><b>Relevant Coursework:</b> Front-End Web Development, Back-End Web Development, Cybersecurity, Software Design & Modelling, Applied AI & Machine Learning, Database Management Systems, Data Structures & Algorithms, Modelling & Simulation</div>
          <div style={{ color: '#e0e0e0', fontSize: '1rem', marginBottom: '0.2rem' }}><b>Projects:</b>
            <ul style={{ margin: '0.2rem 0 0.2rem 1.2rem', color: '#e0e0e0', fontSize: '1rem' }}>
              <li style={{ marginBottom: '0.4rem' }}>Developed a puzzle-based game prototype (digital & analog versions).</li>
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
          <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.13rem', marginBottom: '0.1rem', position: 'relative', top: '-0.05rem' }}>Sales & Technical Support Specialist <span style={{ color: '#ffd600', fontWeight: 400, fontSize: '1rem' }}>(May 2021 – October 2024)</span></div>
          <div style={{ color: '#ffd600', fontWeight: 600, fontSize: '1rem', marginBottom: '0.2rem' }}>Super Choice Kitchen Inc, Burlington, ON</div>
          <div style={{ color: '#e0e0e0', fontSize: '1rem', marginBottom: '0.2rem' }}>
            <ul style={{ margin: '0.2rem 0 0.2rem 1.2rem', color: '#e0e0e0', fontSize: '1rem' }}>
              <li style={{ marginBottom: '0.4rem' }}>Developed and deployed internal software tools and automated workflows using Python, SQL, and database systems, increasing operational efficiency by 25%.</li>
              <li style={{ marginBottom: '0.4rem' }}>Designed and implemented reporting systems with data visualization dashboards, reducing manual reporting time from 2 hours to under 30 minutes.</li>
              <li style={{ marginBottom: '0.4rem' }}>Provided technical support for internal software systems and created technical documentation, improving troubleshooting time by 40%.</li>
              <li style={{ marginBottom: '0.4rem' }}>Created and presented 100+ interactive 3D renovation models annually using digital modelling tools, improving customer engagement and technical communication.</li>
              <li>Increased customer satisfaction scores by 25% through data-informed recommendations and consistent post-project follow-ups.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  const techCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode />,
      technologies: [
        { name: "Python", icon: <FaPython />, description: "AI/ML, automation, APIs" },
        { name: "JavaScript", icon: <SiJavascript />, description: "Full-stack, React, Node.js" },
        { name: "SQL", icon: <FaDatabase />, description: "Database design, queries" },
        { name: "C#", icon: <SiCplusplus />, description: "Enterprise applications" },
        { name: "Java", icon: <FaCoffee />, description: "Spring Boot, enterprise" }
      ]
    },
    {
      title: "AI/ML",
      icon: <FaRobot />,
      technologies: [
        { name: "TensorFlow", icon: <SiTensorflow />, description: "Deep learning models" },
        { name: "Scikit-learn", icon: <FaRobot />, description: "Machine learning" },
        { name: "Pandas", icon: <FaDatabase />, description: "Data manipulation" },
        { name: "NumPy", icon: <SiNumpy />, description: "Numerical computing" },
        { name: "Matplotlib", icon: <FaPencilRuler />, description: "Data visualization" },
        { name: "ChatGPT API", icon: <SiOpenai />, description: "AI integration" },
        { name: "LangChain", icon: <FaLink />, description: "RAG systems, AI agents" },
        { name: "OpenCV", icon: <FaCode />, description: "Computer vision" }
      ]
    },
    {
      title: "Web",
      icon: <FaServer />,
      technologies: [
        { name: "React.js", icon: <FaReact />, description: "Frontend development" },
        { name: "Next.js", icon: <SiNextdotjs />, description: "Full-stack applications" },
        { name: "Flask", icon: <SiFlask />, description: "Lightweight APIs" },
        { name: "Streamlit", icon: <FaPencilRuler />, description: "Data apps" },
        { name: "HTML5", icon: <FaHtml5 />, description: "Web structure" },
        { name: "CSS3", icon: <FaCss3Alt />, description: "Styling & design" }
      ]
    },
    {
      title: "Tools",
      icon: <FaTools />,
      technologies: [
        { name: "AWS", icon: <FaCloud />, description: "Cloud services" },
        { name: "Docker", icon: <SiDocker />, description: "Containerization" },
        { name: "Git/GitHub", icon: <FaGitAlt />, description: "Version control" },
        { name: "Vercel", icon: <SiVercel />, description: "Deployment platform" },
        { name: "Figma", icon: <SiFigma />, description: "UI/UX design" },
        { name: "Jupyter Notebooks", icon: <SiJupyter />, description: "Data analysis" }
      ]
    }
  ];

  return (
    <section className="techstack-section" style={{ fontFamily: 'Segoe UI, Arial, sans-serif', marginBottom: '1.5rem', marginTop: '1.1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.2rem' }}>
        <FaTools color="#ffd600" style={{ fontSize: '2.1rem', marginRight: '0.7rem' }} />
        <h2 className="techstack-title custom-title" style={{ color: '#fff', fontWeight: 700, fontSize: '1.4rem', margin: 0 }}>Tech Stack</h2>
      </div>
      
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: '0.5rem',
        maxWidth: '100%'
      }}>
        {techCategories.map((category, index) => (
          <div key={index} style={{
            background: 'rgb(41,41,43)',
            border: 'none',
            borderRadius: '1rem',
            padding: '1.2rem',
            boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-6px) scale(1.02)';
            e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.22)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 4px 24px rgba(0,0,0,0.15)';
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.6rem', pointerEvents: 'none' }}>
              <span style={{ color: '#ffd600', fontSize: '1.5rem', marginRight: '0.5rem' }}>{category.icon}</span>
              <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', margin: 0 }}>{category.title}</h3>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
              gap: '0.3rem', 
              pointerEvents: 'none' 
            }}>
              {category.technologies.map((tech, techIndex) => (
                <div key={techIndex} style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.2rem 0',
                  background: 'transparent',
                  cursor: 'default',
                  transition: 'none',
                  pointerEvents: 'none'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flex: 1, pointerEvents: 'none' }}>
                    <span style={{ color: '#ffd600', fontSize: '1.1rem' }}>{tech.icon}</span>
                    <div>
                      <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.85rem' }}>{tech.name}</div>
                      <div style={{ color: '#b0b0b0', fontSize: '0.75rem' }}>{tech.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
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
  {
    title: 'AI Resume Critiquer',
    description: 'A web-based AI application that provides intelligent resume analysis and feedback using OpenAI\'s GPT models. Users can upload their resumes in PDF or TXT format and receive detailed critiques covering content clarity, skills presentation, experience descriptions, and targeted improvements for specific job roles. The application features a clean Streamlit interface with real-time analysis and structured feedback recommendations. Ideal for job seekers looking to optimize their resumes and improve their chances of landing interviews.',
    tech: ['Python', 'Streamlit', 'OpenAI API', 'PyPDF2', 'python-dotenv', 'uv'],
    code: 'https://github.com/RomanBam/AI-Resume-Critiquer',
    live: null
  },
  {
    title: 'AI Image Classifier',
    description: 'A web-based AI application that provides intelligent image classification and analysis using TensorFlow\'s MobileNetV2 model. Users can upload images in JPG or PNG format and receive instant predictions with confidence scores across 1000+ categories from the ImageNet dataset. The application features a clean Streamlit interface with real-time analysis and structured prediction results. Ideal for developers, researchers, and anyone looking to explore AI-powered image recognition capabilities.',
    tech: ['Python', 'TensorFlow', 'Streamlit', 'OpenCV', 'MobileNetV2', 'uv'],
    code: 'https://github.com/RomanBam/AI-Image-Classifier',
    live: null
  },
  // Add more projects here as needed
];

function MobileView({ activeTab, setActiveTab }) {
  return (
    <div className="dark-app">
      <Constellation />
      <MobileProfileCard />
      <main className="main-content-card">
        {activeTab === 'about' && (
          <>
            <RevealOnScroll delay={0}>
              <section className="about-section">
                <h1 className="about-title custom-title">About Me</h1>
                <p className="about-desc">
                  Hi! I'm Roman, an aspiring Software Engineer with a strong passion for AI and software development. I specialize in machine learning, full-stack web development, and creating intelligent applications that solve real-world problems. My diverse technical background spans from deep learning frameworks to modern web technologies, allowing me to build comprehensive solutions that make a meaningful impact.<br /><br />
                  My expertise includes working with advanced AI/ML technologies like TensorFlow, MobileNetV2, and LangChain for building intelligent systems. I've developed several notable projects including an AI Resume Critiquer that provides intelligent feedback using NLP techniques, an AI Image Classifier with 1000+ ImageNet categories, and a conversational AI Assistant with modular API integration. My Cheese Fat Prediction Model demonstrates my proficiency in complete data science workflows, from data preprocessing to model deployment.<br /><br />
                  On the development side, I'm skilled in modern web technologies including React.js, Next.js, Flask, and Streamlit for building responsive applications. I work with multiple programming languages (Python, JavaScript, SQL, C#, Java, HTML, CSS5) and leverage tools like AWS, Docker, and Git for deployment and version control. My focus is on creating clean, efficient code and intuitive user experiences that bridge the gap between complex AI capabilities and practical applications.
                </p>
              </section>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
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
            </RevealOnScroll>
          </>
        )}
        {activeTab === 'resume' && (
          <>
            <RevealOnScroll delay={0}>
              <EducationSection />
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <ExperienceSection />
            </RevealOnScroll>
            <RevealOnScroll delay={400}>
              <TechStackSection />
            </RevealOnScroll>
          </>
        )}
        {activeTab === 'portfolio' && (
          <RevealOnScroll delay={0}>
            <section className="portfolio-section">
              <h2 className="portfolio-title custom-title">Portfolio</h2>
              <div className="portfolio-grid">
                {projects.map((proj, idx) => (
                  <RevealOnScroll key={idx} delay={idx * 100}>
                    <div className="portfolio-card">
                      <h3>{proj.title}</h3>
                      <p>{proj.description}</p>
                      <div className="portfolio-tech-section">
                        <span className="portfolio-tech-label">Tech Stack:</span>
                        <div className="portfolio-tech-badges">
                          {proj.tech.map((t, i) => (
                            <span key={i} className="portfolio-badge">{t}</span>
                          ))}
                        </div>
                      </div>
                      <div className="portfolio-links">
                        <a href={proj.code} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                          <FaGithub /> Code
                        </a>
                        {proj.live && (
                          <a href={proj.live} target="_blank" rel="noopener noreferrer" className="portfolio-link portfolio-live-link">
                            <span>Live</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </section>
          </RevealOnScroll>
        )}
        {activeTab === 'contact' && (
          <RevealOnScroll delay={0}>
            <ContactSectionStyled />
          </RevealOnScroll>
        )}
      </main>
      <nav className="main-tabs main-tabs-bottom">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`main-tab${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => {
              setActiveTab(tab.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
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
      <Constellation />
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
                  Hi! I'm Roman, an aspiring Software Engineer with a strong passion for AI and software development. I specialize in machine learning, full-stack web development, and creating intelligent applications that solve real-world problems. My diverse technical background spans from deep learning frameworks to modern web technologies, allowing me to build comprehensive solutions that make a meaningful impact.<br /><br />
                  My expertise includes working with advanced AI/ML technologies like TensorFlow, MobileNetV2, and LangChain for building intelligent systems. I've developed several notable projects including an AI Resume Critiquer that provides intelligent feedback using NLP techniques, an AI Image Classifier with 1000+ ImageNet categories, and a conversational AI Assistant with modular API integration. My Cheese Fat Prediction Model demonstrates my proficiency in complete data science workflows, from data preprocessing to model deployment.<br /><br />
                  On the development side, I'm skilled in modern web technologies including React.js, Next.js, Flask, and Streamlit for building responsive applications. I work with multiple programming languages (Python, JavaScript, SQL, C#, Java, HTML, CSS5) and leverage tools like AWS, Docker, and Git for deployment and version control. My focus is on creating clean, efficient code and intuitive user experiences that bridge the gap between complex AI capabilities and practical applications.
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
                    <h3>{proj.title}</h3>
                    <p>{proj.description}</p>
                    <div className="portfolio-tech-section">
                      <span className="portfolio-tech-label">Tech Stack:</span>
                      <div className="portfolio-tech-badges">
                        {proj.tech.map((t, i) => (
                          <span key={i} className="portfolio-badge">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="portfolio-links">
                      <a href={proj.code} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                        <FaGithub /> Code
                      </a>
                      {proj.live && (
                        <a href={proj.live} target="_blank" rel="noopener noreferrer" className="portfolio-link portfolio-live-link">
                          <span>Live</span>
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

  // Generate random starfield on page load
  useEffect(() => {
    const generateRandomStarfield = () => {
      // Function to generate random star positions
      const generateStarLayer = (starCount, minSize, maxSize, tileWidth, tileHeight) => {
        const stars = [];
        for (let i = 0; i < starCount; i++) {
          const size = Math.random() * (maxSize - minSize) + minSize;
          const x = Math.random() * tileWidth;
          const y = Math.random() * tileHeight;
          const opacity = Math.random() * 0.5 + 0.5; // 0.5 to 1.0
          stars.push(`radial-gradient(${size}px ${size}px at ${x}px ${y}px, rgba(255,255,255,${opacity}), transparent)`);
        }
        return stars.join(', ');
      };

      // Generate 4 different star layers with random positions
      const starfield1 = generateStarLayer(80, 1, 3, 800, 600); // Large stars
      const starfield2 = generateStarLayer(120, 0.5, 2, 600, 450); // Medium stars  
      const starfield3 = generateStarLayer(100, 1, 2.5, 700, 500); // Mixed stars
      const starfield4 = generateStarLayer(150, 0.5, 1.5, 900, 650); // Small stars

      // Set the generated starfields as CSS custom properties
      document.documentElement.style.setProperty('--dynamic-starfield-1', starfield1);
      document.documentElement.style.setProperty('--dynamic-starfield-2', starfield2);
      document.documentElement.style.setProperty('--dynamic-starfield-3', starfield3);
      document.documentElement.style.setProperty('--dynamic-starfield-4', starfield4);

      // Generate random animation durations
      const twinkleDuration = (Math.random() * 6 + 2).toFixed(1) + 's'; // 2-8 seconds
      const slowTwinkleDuration = (Math.random() * 10 + 5).toFixed(1) + 's'; // 5-15 seconds
      const randomTwinkleDuration = (Math.random() * 8 + 3).toFixed(1) + 's'; // 3-11 seconds
      
      // Generate random easing functions
      const easingFunctions = ['ease-in-out', 'ease-in', 'ease-out', 'linear', 'cubic-bezier(0.4, 0, 0.2, 1)', 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'];
      const twinkleEasing = easingFunctions[Math.floor(Math.random() * easingFunctions.length)];
      const randomEasing = easingFunctions[Math.floor(Math.random() * easingFunctions.length)];
      
      // Set CSS custom properties for random durations and easing
      document.documentElement.style.setProperty('--twinkle-duration', twinkleDuration);
      document.documentElement.style.setProperty('--slow-twinkle-duration', slowTwinkleDuration);
      document.documentElement.style.setProperty('--random-twinkle-duration', randomTwinkleDuration);
      document.documentElement.style.setProperty('--twinkle-easing', twinkleEasing);
      document.documentElement.style.setProperty('--random-easing', randomEasing);
    };

    generateRandomStarfield();
  }, []);

  return isMobile ? (
    <MobileView activeTab={activeTab} setActiveTab={setActiveTab} />
  ) : (
    <WebView activeTab={activeTab} setActiveTab={setActiveTab} />
  );
}

export default App;
