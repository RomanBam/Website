import React, { useState, useEffect, useCallback, memo } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import { FaRegEnvelope, FaLinkedin, FaGithub, FaPencilRuler, FaCode, FaServer, FaRobot, FaBook, FaDownload, FaBriefcase, FaTools, FaPython, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaDatabase, FaLink, FaCoffee, FaCloud } from 'react-icons/fa';
import { LuCake, LuMapPin } from 'react-icons/lu';
import { SiJavascript, SiTensorflow, SiNextdotjs, SiFlask, SiVercel, SiFigma, SiJupyter, SiOpenai, SiNumpy, SiDocker, SiPhp } from 'react-icons/si';

// Performance constants
const TWO_PI = 2 * Math.PI;
const STAR_INTERVALS = {
  MIN: 800,
  MAX: 2000,
  RANGE: 1200
};
const STAR_COUNTS = {
  BURST_MIN: 2,
  BURST_MAX: 4
};

function ShootingStar() {
  const [stars, setStars] = useState([]);
  
  const createShootingStar = useCallback(() => {
    const id = Math.random().toString(36).substring(2, 9);
    
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    
    const distance = 100 + Math.random() * 300;
    const angle = Math.random() * TWO_PI;
    
    const travelX = Math.cos(angle) * distance;
    const travelY = Math.sin(angle) * distance;
    
    const duration = 0.5 + Math.random() * 2.5;
    
    const size = Math.random() < 0.15 ? 
                3 + Math.random() * 1 :
                1 + Math.random() * 2;
    
    const brightness = Math.random() < 0.2 ? 
                      0.9 + Math.random() * 0.1 :
                      0.6 + Math.random() * 0.3;
    
    return {
      id,
      startX,
      startY,
      travelX,
      travelY,
      duration,
      size,
      brightness
    };
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStars(prevStars => {
        const newStarsCount = Math.floor(Math.random() * STAR_COUNTS.BURST_MAX) + STAR_COUNTS.BURST_MIN;
        const newStars = Array.from({ length: newStarsCount }, () => createShootingStar());
        
        const combinedStars = [...prevStars, ...newStars];
        return combinedStars.length > 25 ? combinedStars.slice(combinedStars.length - 25) : combinedStars;
      });
    }, STAR_INTERVALS.MIN + Math.random() * STAR_INTERVALS.RANGE);
    
    const timeouts = [];
    
    timeouts.push(setTimeout(() => {
      const starCount = Math.floor(Math.random() * 3) + 2;
      const initialStars = Array.from({ length: starCount }, () => createShootingStar());
      setStars(prev => [...prev, ...initialStars]);
    }, 500));
    
    timeouts.push(setTimeout(() => {
      const starCount = Math.floor(Math.random() * 4) + 3;
      const moreStars = Array.from({ length: starCount }, () => createShootingStar());
      setStars(prev => [...prev, ...moreStars]);
    }, 1200));
    
    timeouts.push(setTimeout(() => {
      const starCount = Math.floor(Math.random() * 4) + 2;
      const finalBurst = Array.from({ length: starCount }, () => createShootingStar());
      setStars(prev => [...prev, ...finalBurst]);
    }, 2000));
    
    timeouts.push(setTimeout(() => {
      const starCount = Math.floor(Math.random() * 3) + 3;
      const extraBurst = Array.from({ length: starCount }, () => createShootingStar());
      setStars(prev => [...prev, ...extraBurst]);
    }, 3000));
    
    return () => {
      clearInterval(interval);
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [createShootingStar]);
  
  return (
    <>
      {stars.map(star => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            left: `${star.startX}%`,
            top: `${star.startY}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            filter: `drop-shadow(0 0 1px white) drop-shadow(0 0 ${star.size * 2}px rgba(255, 255, 255, ${star.brightness}))`,
            '--travel-x': `${star.travelX}px`,
            '--travel-y': `${star.travelY}px`,
            animation: `shootingStar ${star.duration}s linear forwards`
          }}
        />
      ))}
    </>
  );
}

const socialLinks = [
  { href: 'https://www.linkedin.com/in/roman-bamrah', label: 'LinkedIn', icon: <FaLinkedin /> },
  { href: 'https://github.com/RomanBam', label: 'GitHub', icon: <FaGithub /> },
];

const tabs = [
  { id: 'about', label: 'About', path: '/' },
  { id: 'resume', label: 'Resume', path: '/resume' },
  { id: 'portfolio', label: 'Portfolio', path: '/portfolio' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

function Constellation() {
  
  const bigDipper = {
    stars: [
      { id: 'bd1', x: 8, y: 12 },
      { id: 'bd2', x: 15, y: 15 },
      { id: 'bd3', x: 22, y: 18 },
      { id: 'bd4', x: 28, y: 15 },
      { id: 'bd5', x: 34, y: 8 },
      { id: 'bd6', x: 40, y: 5 },
      { id: 'bd7', x: 44, y: 3 }
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

  const orionsBelt = {
    stars: [
      { id: 'or1', x: 78, y: 85 },
      { id: 'or2', x: 82, y: 88 },
      { id: 'or3', x: 86, y: 91 },
      { id: 'or4', x: 75, y: 80 },
      { id: 'or5', x: 89, y: 96 }
    ],
    connections: [
      { from: 'or1', to: 'or2' },
      { from: 'or2', to: 'or3' },
      { from: 'or4', to: 'or1' },
      { from: 'or3', to: 'or5' }
    ]
  };

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

  const gemini = {
    stars: [
      { id: 'gem1', x: 85, y: 52 },
      { id: 'gem2', x: 87, y: 54 },
      { id: 'gem3', x: 89, y: 56 },
      { id: 'gem4', x: 86, y: 57 },
      { id: 'gem5', x: 83, y: 58 },
      { id: 'gem6', x: 93, y: 52 },
      { id: 'gem7', x: 91, y: 54 },
      { id: 'gem8', x: 93, y: 58 },
      { id: 'gem9', x: 95, y: 60 },
      { id: 'gem10', x: 97, y: 61 },
      { id: 'gem11', x: 92, y: 62 },
      { id: 'gem12', x: 89, y: 64 }
    ],
    connections: [
      { from: 'gem1', to: 'gem2' },
      { from: 'gem2', to: 'gem3' },
      { from: 'gem3', to: 'gem4' },
      { from: 'gem4', to: 'gem5' },
      { from: 'gem6', to: 'gem7' },
      { from: 'gem7', to: 'gem3' },
      { from: 'gem3', to: 'gem8' },
      { from: 'gem8', to: 'gem9' },
      { from: 'gem9', to: 'gem10' },
      { from: 'gem8', to: 'gem11' },
      { from: 'gem11', to: 'gem12' }
    ]
  };

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

  const cancer = {
    stars: [
      { id: 'cnc1', x: 27, y: 72 },
      { id: 'cnc2', x: 26.75, y: 78 },
      { id: 'cnc3', x: 26, y: 82 },
      { id: 'cnc4', x: 24, y: 86 },
      { id: 'cnc5', x: 29, y: 88 }
    ],
    connections: [
      { from: 'cnc1', to: 'cnc2' },
      { from: 'cnc2', to: 'cnc3' },
      { from: 'cnc3', to: 'cnc4' },
      { from: 'cnc3', to: 'cnc5' }
    ]
  };

  const allConstellations = [bigDipper, cassiopeia, orionsBelt, southernCross, gemini, leo, cygnus, lyra, draco, centaurus, pegasus, bootes, cancer];

  return (
    <div className="constellation">
      <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
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
      
      {allConstellations.map((constellation, constIndex) =>
        constellation.stars.map((star, starIndex) => {
          const glimmerDuration = 2 + Math.random() * 5;
          const glimmerDelay = Math.random() * 3;
          const minOpacity = 0.5 + Math.random() * 0.3;
          const maxOpacity = 0.9 + Math.random() * 0.1;
          const minBrightness = 0.7 + Math.random() * 0.2;
          const maxBrightness = 1.0 + Math.random() * 0.6;
          const starSize = Math.random() < 0.15 ? 
                          3 + Math.random() * 2 :
                          2 + Math.random() * 2;
          
          return (
            <div
              key={star.id}
              className="constellation-star"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${starSize}px`,
                height: `${starSize}px`,
                animationDelay: `3s`,
                '--glimmer-duration': `${glimmerDuration}s`,
                '--glimmer-delay': `${3 + glimmerDelay}s`,
                '--star-min-opacity': minOpacity,
                '--star-max-opacity': maxOpacity,
                '--star-min-brightness': minBrightness,
                '--star-max-brightness': maxBrightness
              }}
            />
          );
        })
      )}
      
    </div>
  );
}

function MobileProfileCard() {
  const [expanded, setExpanded] = useState(false);
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

function ContactSection() {
  return (
    <section className="contact-section" style={{ fontFamily: 'Segoe UI, Arial, sans-serif' }}>
      <h2 className="contact-title custom-title" style={{ marginBottom: '1.1rem', color: '#fff', fontWeight: 700, fontFamily: 'Segoe UI, Arial, sans-serif', fontSize: '2.1rem' }}>Contact Me</h2>
      <div style={{ marginBottom: '0.3rem', color: '#fff', fontWeight: 600, fontSize: '1rem', fontFamily: 'Segoe UI, Arial, sans-serif' }}>Socials</div>
      <div className="contact-socials" style={{ display: 'flex', gap: '1.1rem', marginBottom: '1.1rem' }}>
        <a href="https://www.linkedin.com/in/roman-bamrah" aria-label="LinkedIn" className="contact-social-icon" target="_blank" rel="noopener noreferrer" style={{ color: '#b0b0b0', fontSize: '2rem' }}><FaLinkedin /></a>
        <a href="https://github.com/RomanBam" aria-label="GitHub" className="contact-social-icon" target="_blank" rel="noopener noreferrer" style={{ color: '#b0b0b0', fontSize: '2rem' }}><FaGithub /></a>
      </div>
      <form className="contact-form" action="https://formspree.io/f/meozqonz" method="POST" autoComplete="off" style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', fontFamily: 'Segoe UI, Arial, sans-serif' }}>
        <input type="text" name="name" placeholder="Name" required style={{ background: 'rgb(40,40,43)', color: '#fff', border: '1px solid #333', borderRadius: '8px', padding: '0.6rem 0.9rem', fontSize: '1rem', fontFamily: 'Segoe UI, Arial, sans-serif' }} />
        <input type="email" name="email" placeholder="Email" required style={{ background: 'rgb(40,40,43)', color: '#fff', border: '1px solid #333', borderRadius: '8px', padding: '0.6rem 0.9rem', fontSize: '1rem', fontFamily: 'Segoe UI, Arial, sans-serif' }} />
        <textarea name="message" placeholder="Message" required rows={4} style={{ background: 'rgb(40,40,43)', color: '#fff', border: '1px solid #333', borderRadius: '8px', padding: '0.6rem 0.9rem', fontSize: '1rem', fontFamily: 'Segoe UI, Arial, sans-serif', resize: 'none' }} />
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
          <div style={{ color: '#e0e0e0', fontSize: '1rem', marginBottom: '0.2rem' }}><b>Relevant Coursework:</b> Front-End Web Development, Back-End Web Development, Cybersecurity, Software Design & Modelling, Applied AI & Machine Learning, Database Management Systems, Data Structures & Algorithms, Modelling & Simulation, Systems Analysis and Design</div>
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
        { name: "Python", icon: <FaPython />, description: "Primary, AI & backend" },
        { name: "JavaScript", icon: <SiJavascript />, description: "Frontend & tooling" },
        { name: "SQL", icon: <FaDatabase />, description: "Relational queries" },
        { name: "C#", icon: <FaCode />, description: "OOP & enterprise" },
        { name: "Java", icon: <FaCoffee />, description: "General purpose" }
      ]
    },
    {
      title: "Web & Application Development",
      icon: <FaServer />,
      technologies: [
        { name: "React.js", icon: <FaReact />, description: "UI development" },
        { name: "Next.js", icon: <SiNextdotjs />, description: "Full-stack SSR" },
        { name: "Flask", icon: <SiFlask />, description: "APIs & microservices" },
  { name: "HTML", icon: <FaHtml5 />, description: "Semantic markup" },
  { name: "CSS", icon: <FaCss3Alt />, description: "Responsive styling" },
        { name: "PHP", icon: <SiPhp />, description: "Server-side scripting" }
      ]
    },
    {
      title: "AI, ML & Data Science",
      icon: <FaRobot />,
      technologies: [
        { name: "TensorFlow", icon: <SiTensorflow />, description: "Deep learning" },
        { name: "Scikit-learn", icon: <FaRobot />, description: "ML models" },
        { name: "Pandas", icon: <FaDatabase />, description: "Data wrangling" },
        { name: "NumPy", icon: <SiNumpy />, description: "Numerics" },
        { name: "Matplotlib", icon: <FaPencilRuler />, description: "Visualization" },
        { name: "OpenCV", icon: <FaCode />, description: "Computer vision" },
        { name: "Streamlit", icon: <FaPencilRuler />, description: "Data apps" },
        { name: "ChatGPT API", icon: <SiOpenai />, description: "LLM integration" },
        { name: "LangChain", icon: <FaLink />, description: "LLM pipelines" },
        { name: "Jupyter Notebooks", icon: <SiJupyter />, description: "Interactive analysis" }
      ]
    },
    {
      title: "Cloud, DevOps & Tools",
      icon: <FaTools />,
      technologies: [
        { name: "AWS", icon: <FaCloud />, description: "Cloud services" },
        { name: "Docker", icon: <SiDocker />, description: "Containers" },
        { name: "Git", icon: <FaGitAlt />, description: "Version control" },
        { name: "GitHub", icon: <FaGitAlt />, description: "Collaboration" },
        { name: "Vercel", icon: <SiVercel />, description: "Deployments" },
        { name: "Figma", icon: <SiFigma />, description: "Design prototyping" }
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
  {
    title: 'Cheese Fat Prediction Model',
    description: 'A data science and machine learning project that predicts the fat percentage in cheese samples using regression models. The workflow covers data cleaning, exploratory data analysis (EDA), feature engineering, model selection, and results interpretation. Ideal for applications in food quality control and nutritional analysis.',
    tech: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    code: 'https://github.com/RomanBam/CheeseFatPrediction',
    live: null
  },
  {
    title: 'Programming Mini-Projects Collection',
    description: 'A diverse collection of small programming projects created to practice coding fundamentals and explore new concepts. Includes applications like a Random Quote Generator (PHP/CSS), Rock Paper Scissors game, Caesar Cipher implementation, Solar System calculator, and more. Each project focuses on specific programming techniques and problem-solving approaches, demonstrating versatility across multiple languages and domains.',
    tech: ['Python', 'PHP', 'CSS', 'HTML', 'JavaScript', 'Math Libraries', 'Random Algorithms'],
    code: 'https://github.com/RomanBam/MiniProjects-Practice',
    live: null
  }
];

// Memoized tab components for better performance
const AboutTab = memo(() => (
  <>
    <section className="about-section">
      <h1 className="about-title custom-title">About Me</h1>
      <p className="about-desc">
        I'm Roman, a software engineer focused on building practical AI and full‑stack solutions. I enjoy combining machine learning (TensorFlow, LangChain, OpenCV) with modern web tools like React, Next.js, Flask, and Streamlit to create useful, clean experiences. Core languages & technologies I work with: Python, JavaScript/TypeScript, Java, C#, PHP, SQL, and HTML/CSS. I've built projects ranging from an AI resume critiquer and image classifier to data science workflows and automation tools. My goal: ship thoughtful, reliable software that turns complex ideas into something people actually use.
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
            <h3>AI & Machine Learning</h3>
            <p>Building intelligent AI/ML applications with a focus on practical impact and model quality.</p>
          </div>
        </div>
      </div>
    </section>
  </>
));

const ResumeTab = memo(() => (
  <>
    <EducationSection />
    <ExperienceSection />
    <TechStackSection />
  </>
));

const PortfolioTab = memo(() => (
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
));

const ContactTab = memo(() => <ContactSection />);

// Mobile versions without scroll animations
const MobileAboutTab = memo(() => (
  <>
    <section className="about-section">
      <h1 className="about-title custom-title">About Me</h1>
      <p className="about-desc">
        I'm Roman, a software engineer focused on building practical AI and full‑stack solutions. I enjoy combining machine learning (TensorFlow, LangChain, OpenCV) with modern web tools like React, Next.js, Flask, and Streamlit to create useful, clean experiences. Core languages & technologies I work with: Python, JavaScript/TypeScript, Java, C#, PHP, SQL, and HTML/CSS. I've built projects ranging from an AI resume critiquer and image classifier to data science workflows and automation tools. My goal: ship thoughtful, reliable software that turns complex ideas into something people actually use.
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
            <h3>AI & Machine Learning</h3>
            <p>Building intelligent AI/ML applications with a focus on practical impact and model quality.</p>
          </div>
        </div>
      </div>
    </section>
  </>
));

const MobileResumeTab = memo(() => (
  <>
    <EducationSection />
    <ExperienceSection />
    <TechStackSection />
  </>
));

const MobilePortfolioTab = memo(() => (
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
));

const MobileContactTab = memo(() => <ContactSection />);

const MobileView = memo(function MobileView({ activeTab, setActiveTab }) {
  return (
    <div className="dark-app">
      <Constellation />
      <ShootingStar />
      <MobileProfileCard />
      <main className="main-content-card">
        <div className="continuous-content">
          <section id="section-about" className="content-section">
            <MobileAboutTab />
          </section>
          <section id="section-resume" className="content-section">
            <MobileResumeTab />
          </section>
          <section id="section-portfolio" className="content-section">
            <MobilePortfolioTab />
          </section>
          <section id="section-contact" className="content-section">
            <MobileContactTab />
          </section>
        </div>
      </main>
      <nav className="main-tabs main-tabs-bottom">
        {tabs.map(tab => (
          <Link
            key={tab.id}
            to={tab.path}
            className={`main-tab${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => {
              setActiveTab(tab.id);
              if (tab.id === 'about') {
                // Scroll to top for About tab
                document.querySelector('.main-content-card')?.scrollTo({ 
                  top: 0,
                  behavior: 'smooth'
                });
              } else {
                // Scroll to specific section for other tabs
                document.getElementById(`section-${tab.id}`)?.scrollIntoView({ 
                  behavior: 'smooth', 
                  block: 'start' 
                });
              }
            }}
          >
            {tab.label}
          </Link>
        ))}
      </nav>
    </div>
  );
});

const WebView = memo(function WebView({ activeTab, setActiveTab }) {
  return (
    <div className="dark-app">
      <Constellation />
      <ShootingStar />
      <div className="container">
        <WebSidebar />
        <main className="main-content-card">
          <nav className="main-tabs main-tabs-right">
            {tabs.map(tab => (
              <Link
                key={tab.id}
                to={tab.path}
                className={`main-tab${activeTab === tab.id ? ' active' : ''}`}
                onClick={() => {
                  setActiveTab(tab.id);
                  if (tab.id === 'about') {
                    // Scroll to top for About tab
                    document.querySelector('.main-content-card')?.scrollTo({ 
                      top: 0,
                      behavior: 'smooth'
                    });
                  } else {
                    // Scroll to specific section for other tabs
                    document.getElementById(`section-${tab.id}`)?.scrollIntoView({ 
                      behavior: 'smooth', 
                      block: 'start' 
                    });
                  }
                }}
              >
                {tab.label}
              </Link>
            ))}
          </nav>
          <div className="continuous-content">
            <section id="section-about" className="content-section">
              <AboutTab />
            </section>
            <section id="section-resume" className="content-section">
              <ResumeTab />
            </section>
            <section id="section-portfolio" className="content-section">
              <PortfolioTab />
            </section>
            <section id="section-contact" className="content-section">
              <ContactTab />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
});

const easingFunctions = ['ease-in-out', 'ease-in', 'ease-out', 'linear', 'cubic-bezier(0.4, 0, 0.2, 1)', 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'];

// Component that handles routing and URL-based tab switching
function PortfolioContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  // Determine active tab based on current path
  const getActiveTabFromPath = useCallback((pathname) => {
    const tab = tabs.find(tab => tab.path === pathname);
    return tab ? tab.id : 'about';
  }, []);

  const [activeTab, setActiveTab] = useState(() => getActiveTabFromPath(location.pathname));

  // Update active tab when URL changes
  useEffect(() => {
    const newActiveTab = getActiveTabFromPath(location.pathname);
    setActiveTab(newActiveTab);
    // Scroll to section when URL changes (for direct navigation)
    setTimeout(() => {
      if (newActiveTab === 'about') {
        // Scroll to top for About tab
        document.querySelector('.main-content-card')?.scrollTo({ 
          top: 0,
          behavior: 'smooth'
        });
      } else {
        // Scroll to specific section for other tabs
        document.getElementById(`section-${newActiveTab}`)?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 100);
  }, [location.pathname, getActiveTabFromPath]);

  // Scroll listener to update active tab based on visible section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'resume', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for header
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(`section-${sections[i]}`);
        if (section && section.offsetTop <= scrollPosition) {
          if (activeTab !== sections[i]) {
            setActiveTab(sections[i]);
            const tab = tabs.find(t => t.id === sections[i]);
            if (tab) {
              window.history.replaceState(null, '', tab.path);
            }
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  // Memoized tab change handler that updates URL and scrolls
  const handleTabChange = useCallback((tabId) => {
    const tab = tabs.find(tab => tab.id === tabId);
    if (tab) {
      navigate(tab.path);
      setActiveTab(tabId);
    }
  }, [navigate]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const generateStarLayer = useCallback((starCount, minSize, maxSize, tileWidth, tileHeight) => {
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      const size = Math.random() * (maxSize - minSize) + minSize;
      const x = Math.random() * tileWidth;
      const y = Math.random() * tileHeight;
      const opacity = Math.random() * 0.5 + 0.5;
      stars.push(`radial-gradient(${size}px ${size}px at ${x}px ${y}px, rgba(255,255,255,${opacity}), transparent)`);
    }
    return stars.join(', ');
  }, []);

  useEffect(() => {
    const generateRandomStarfield = () => {
      const starfield1 = generateStarLayer(80, 1, 3, 800, 600);
      const starfield2 = generateStarLayer(120, 0.5, 2, 600, 450);
      const starfield3 = generateStarLayer(100, 1, 2.5, 700, 500);
      const starfield4 = generateStarLayer(150, 0.5, 1.5, 900, 650);

      document.documentElement.style.setProperty('--dynamic-starfield-1', starfield1);
      document.documentElement.style.setProperty('--dynamic-starfield-2', starfield2);
      document.documentElement.style.setProperty('--dynamic-starfield-3', starfield3);
      document.documentElement.style.setProperty('--dynamic-starfield-4', starfield4);

      const twinkleDuration = (Math.random() * 6 + 2).toFixed(1) + 's';
      const slowTwinkleDuration = (Math.random() * 10 + 5).toFixed(1) + 's';
      const randomTwinkleDuration = (Math.random() * 8 + 3).toFixed(1) + 's';
      
      const twinkleEasing = easingFunctions[Math.floor(Math.random() * easingFunctions.length)];
      const randomEasing = easingFunctions[Math.floor(Math.random() * easingFunctions.length)];
      
      document.documentElement.style.setProperty('--twinkle-duration', twinkleDuration);
      document.documentElement.style.setProperty('--slow-twinkle-duration', slowTwinkleDuration);
      document.documentElement.style.setProperty('--random-twinkle-duration', randomTwinkleDuration);
      document.documentElement.style.setProperty('--twinkle-easing', twinkleEasing);
      document.documentElement.style.setProperty('--random-easing', randomEasing);
    };

    generateRandomStarfield();
  }, [generateStarLayer]);

  return isMobile ? (
    <MobileView activeTab={activeTab} setActiveTab={handleTabChange} />
  ) : (
    <WebView activeTab={activeTab} setActiveTab={handleTabChange} />
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioContent />} />
        <Route path="/resume" element={<PortfolioContent />} />
        <Route path="/portfolio" element={<PortfolioContent />} />
        <Route path="/contact" element={<PortfolioContent />} />
      </Routes>
    </Router>
  );
}

export default App;
