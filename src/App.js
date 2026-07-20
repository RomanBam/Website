import React, { useState, useEffect, useCallback, memo, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import { FaRegEnvelope, FaLinkedin, FaGithub, FaPencilRuler, FaCode, FaServer, FaRobot, FaBook, FaDownload, FaBriefcase, FaTools, FaPython, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaLink, FaCloud, FaJava, FaNodeJs, FaLock, FaCheckCircle, FaEye, FaAws, FaRecycle } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';
import { SiJavascript, SiTensorflow, SiNextdotjs, SiFlask, SiVercel, SiFigma, SiJupyter, SiOpenai, SiNumpy, SiDocker, SiPhp, SiTypescript, SiScikitlearn, SiPandas, SiOpencv, SiStreamlit, SiRedux, SiTailwindcss, SiGraphql, SiWebpack, SiGithub, SiExpress, SiLangchain, SiPlotly } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

// Performance constants
const TWO_PI = 2 * Math.PI;
const STAR_INTERVALS = {
  MIN: 1500,
  MAX: 3000,
  RANGE: 1500
};
const STAR_COUNTS = {
  BURST_MIN: 1,
  BURST_MAX: 2
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
        return combinedStars.length > 15 ? combinedStars.slice(combinedStars.length - 15) : combinedStars;
      });
    }, STAR_INTERVALS.MIN + Math.random() * STAR_INTERVALS.RANGE);
    
    // Create initial stars immediately for instant visual feedback
    const timeouts = [];
    
    // First burst - immediate
    const starCount1 = Math.floor(Math.random() * 2) + 1;
    const initialStars = Array.from({ length: starCount1 }, () => createShootingStar());
    setStars(initialStars);
    
    // Second burst - quick follow-up
    timeouts.push(setTimeout(() => {
      const starCount = Math.floor(Math.random() * 2) + 1;
      const moreStars = Array.from({ length: starCount }, () => createShootingStar());
      setStars(prev => [...prev, ...moreStars]);
    }, 500));
    
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

// Security: Sanitize and validate external URLs
const sanitizeUrl = (url) => {
  try {
    const urlObj = new URL(url);
    // Only allow https protocol for security
    if (urlObj.protocol !== 'https:') {
      return '#';
    }
    return url;
  } catch {
    return '#';
  }
};

const socialLinks = [
  { href: sanitizeUrl('https://www.linkedin.com/in/roman-bamrah'), label: 'LinkedIn', icon: <FaLinkedin /> },
  { href: sanitizeUrl('https://github.com/RomanBam'), label: 'GitHub', icon: <FaGithub /> },
];

const tabs = [
  { id: 'about', label: 'About', path: '/' },
  { id: 'resume', label: 'Resume', path: '/resume' },
  { id: 'portfolio', label: 'Portfolio', path: '/portfolio' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

// Memoize constellation data - create once, never recreate
const constellationData = {
  bigDipper: {
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
  },
  cassiopeia: {
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
  },
  orionsBelt: {
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
  },
  southernCross: {
    stars: [
      { id: 'sc1', x: 27, y: 88 },
      { id: 'sc2', x: 23, y: 92 },
      { id: 'sc3', x: 19, y: 96 },
      { id: 'sc4', x: 31, y: 92 },
      { id: 'sc5', x: 25, y: 85 }
    ],
    connections: [
      { from: 'sc1', to: 'sc2' },
      { from: 'sc2', to: 'sc3' },
      { from: 'sc4', to: 'sc2' },
      { from: 'sc5', to: 'sc1' }
    ]
  },
  gemini: {
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
  },
  leo: {
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
  },
  cygnus: {
    stars: [
      { id: 'cyg1', x: 57, y: 50 },
      { id: 'cyg2', x: 60, y: 54 },
      { id: 'cyg3', x: 63, y: 58 },
      { id: 'cyg4', x: 55, y: 56 },
      { id: 'cyg5', x: 67, y: 56 }
    ],
    connections: [
      { from: 'cyg1', to: 'cyg2' },
      { from: 'cyg2', to: 'cyg3' },
      { from: 'cyg4', to: 'cyg2' },
      { from: 'cyg2', to: 'cyg5' }
    ]
  },
  lyra: {
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
  },
  draco: {
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
  },
  centaurus: {
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
  },
  pegasus: {
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
  },
  bootes: {
    stars: [
      { id: 'boo1', x: 40, y: 35 },
      { id: 'boo2', x: 36, y: 38 },
      { id: 'boo3', x: 33, y: 42 },
      { id: 'boo4', x: 38, y: 45 }
    ],
    connections: [
      { from: 'boo1', to: 'boo2' },
      { from: 'boo2', to: 'boo3' },
      { from: 'boo3', to: 'boo4' }
    ]
  },
  cancer: {
    stars: [
      { id: 'cnc1', x: 12, y: 72 },
      { id: 'cnc2', x: 11.75, y: 78 },
      { id: 'cnc3', x: 11, y: 82 },
      { id: 'cnc4', x: 9, y: 86 },
      { id: 'cnc5', x: 14, y: 88 }
    ],
    connections: [
      { from: 'cnc1', to: 'cnc2' },
      { from: 'cnc2', to: 'cnc3' },
      { from: 'cnc3', to: 'cnc4' },
      { from: 'cnc3', to: 'cnc5' }
    ]
  }
};

const allConstellations = Object.values(constellationData);

// Memoize constellation component to prevent re-renders
const Constellation = memo(function Constellation() {
  // Pre-calculate all star properties once
  const starProperties = useMemo(() => {
    const props = new Map();
    allConstellations.forEach((constellation) => {
      constellation.stars.forEach((star) => {
        const glimmerDuration = 2 + Math.random() * 5;
        const glimmerDelay = Math.random() * 3;
        const minOpacity = 0.5 + Math.random() * 0.3;
        const maxOpacity = 0.9 + Math.random() * 0.1;
        const minBrightness = 0.7 + Math.random() * 0.2;
        const maxBrightness = 1.0 + Math.random() * 0.6;
        const starSize = Math.random() < 0.15 ? 
                        3 + Math.random() * 2 :
                        2 + Math.random() * 2;
        
        props.set(star.id, {
          glimmerDuration,
          glimmerDelay,
          minOpacity,
          maxOpacity,
          minBrightness,
          maxBrightness,
          starSize
        });
      });
    });
    return props;
  }, []); // Empty deps - calculate once on mount

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
      
      {allConstellations.map((constellation) =>
        constellation.stars.map((star) => {
          const props = starProperties.get(star.id);
          return (
            <div
              key={star.id}
              className="constellation-star"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${props.starSize}px`,
                height: `${props.starSize}px`,
                animationDelay: `3s`,
                '--glimmer-duration': `${props.glimmerDuration}s`,
                '--glimmer-delay': `${3 + props.glimmerDelay}s`,
                '--star-min-opacity': props.minOpacity,
                '--star-max-opacity': props.maxOpacity,
                '--star-min-brightness': props.minBrightness,
                '--star-max-brightness': props.maxBrightness
              }}
            />
          );
        })
      )}
      
    </div>
  );
});

function MobileProfileCard() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={`mobile-profile-card${expanded ? ' expanded' : ' collapsed'}`}> 
      <div className="mobile-profile-header">
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
              <div className="mobile-profile-contact-item"><span className="mobile-profile-contact-icon"><LuMapPin color="#ffd600" /></span><span className="mobile-profile-contact-label">LOCATION</span><span className="mobile-profile-contact-value">Toronto, ON</span></div>
            </div>
            <hr className="mobile-profile-divider" />
            <div className="mobile-profile-socials">
              {socialLinks.map((s, i) => (
                <a key={i} href={s.href} aria-label={s.label} className="mobile-profile-social-icon" target="_blank" rel="noopener noreferrer">{s.icon}</a>
              ))}
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
      <h2 className="profile-name">Roman Bamrah</h2>
      <div className="profile-role">Software Engineer</div>
      <hr className="divider" />
      <div className="contact-list">
        <div className="contact-item"><span className="contact-icon"><FaRegEnvelope color="#ffd600" /></span> <span>romanbamrah@gmail.com</span></div>
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
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Security: Input validation and sanitization
  const sanitizeInput = (input, maxLength) => {
    if (!input) return '';
    // Remove any HTML tags and script content
    let sanitized = input.replace(/<[^>]*>/g, '');
    // Remove any potentially dangerous characters
    sanitized = sanitized.replace(/[<>'"\\]/g, '');
    // Trim and limit length
    return sanitized.trim().slice(0, maxLength);
  };
  
  const validateEmail = (email) => {
    // RFC 5322 compliant email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 254;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Rate limiting: Prevent spam submissions (max 1 per 10 seconds)
    const now = Date.now();
    if (now - lastSubmitTime < 10000) {
      setFormErrors({ general: 'Please wait before submitting again.' });
      return;
    }
    
    const formData = new FormData(e.target);
    const name = sanitizeInput(formData.get('name'), 100);
    const email = formData.get('email')?.trim().toLowerCase();
    const message = sanitizeInput(formData.get('message'), 5000);
    const honeypot = formData.get('_gotcha'); // Honeypot field
    
    // Security: Check honeypot (bot detection)
    if (honeypot) {
      // Silent fail - likely a bot
      setFormErrors({ general: 'Submission failed. Please try again.' });
      return;
    }
    
    // Validation
    const errors = {};
    
    if (!name || name.length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }
    
    if (!email || !validateEmail(email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!message || message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    if (message.length > 5000) {
      errors.message = 'Message is too long (max 5000 characters)';
    }
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Clear errors and submit
    setFormErrors({});
    setIsSubmitting(true);
    setLastSubmitTime(now);
    
    // Submit form using fetch API instead of direct submit
    // This allows us to handle the response and reset the form
    fetch('https://formspree.io/f/meozqonz', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        // Success - reset form and show success message
        setSubmitSuccess(true);
        e.target.reset();
        setIsSubmitting(false);
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        // Error response from Formspree
        return response.json().then(data => {
          throw new Error(data.error || 'Submission failed');
        });
      }
    })
    .catch(error => {
      // Network error or Formspree error
      setFormErrors({ general: 'Failed to send message. Please try again.' });
      setIsSubmitting(false);
      console.error('Form submission error:', error);
    });
  };
  
  return (
    <section className="contact-section" style={{ fontFamily: 'Segoe UI, Arial, sans-serif' }}>
      <h2 className="contact-title custom-title" style={{ marginBottom: '1.2rem', color: '#fff', fontWeight: 700, fontFamily: 'Segoe UI, Arial, sans-serif', fontSize: '2.1rem' }}>Contact Me</h2>
      <div style={{ marginBottom: '0.3rem', color: '#fff', fontWeight: 600, fontSize: '1rem', fontFamily: 'Segoe UI, Arial, sans-serif' }}>Socials</div>
      <div className="contact-socials" style={{ display: 'flex', gap: '1.1rem', marginBottom: '1.1rem' }}>
        {socialLinks.map((s, i) => (
          <a key={i} href={s.href} aria-label={s.label} className="contact-social-icon" target="_blank" rel="noopener noreferrer" style={{ fontSize: '2rem' }}>{s.icon}</a>
        ))}
      </div>
      
      {formErrors.general && (
        <div style={{ color: '#ff6b6b', background: 'rgba(255,107,107,0.1)', padding: '0.8rem', borderRadius: '8px', marginBottom: '1rem', fontSize: '0.9rem' }}>
          {formErrors.general}
        </div>
      )}
      
      {submitSuccess && (
        <div style={{ color: '#4caf50', background: 'rgba(76,175,80,0.1)', padding: '0.8rem', borderRadius: '8px', marginBottom: '1rem', fontSize: '0.9rem', border: '1px solid rgba(76,175,80,0.3)' }}>
          ✓ Message sent successfully! I'll get back to you soon.
        </div>
      )}
      
      <form 
        className="contact-form" 
        action="https://formspree.io/f/meozqonz" 
        method="POST" 
        autoComplete="off"
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', fontFamily: 'Segoe UI, Arial, sans-serif' }}
      >
        {/* Honeypot field - hidden from users, catches bots */}
        <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
        
        <div>
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            required 
            maxLength="100"
            minLength="2"
            pattern="[A-Za-z\s\-']+"
            title="Name should only contain letters, spaces, hyphens, and apostrophes"
            disabled={isSubmitting}
            style={{ 
              background: 'rgb(40,40,43)', 
              color: '#fff', 
              border: formErrors.name ? '1px solid #ff6b6b' : '1px solid #333', 
              borderRadius: '8px', 
              padding: '0.6rem 0.9rem', 
              fontSize: '1rem', 
              fontFamily: 'Segoe UI, Arial, sans-serif',
              width: '100%',
              boxSizing: 'border-box'
            }} 
          />
          {formErrors.name && (
            <div style={{ color: '#ff6b6b', fontSize: '0.85rem', marginTop: '0.3rem' }}>{formErrors.name}</div>
          )}
        </div>
        
        <div>
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            required 
            maxLength="254"
            disabled={isSubmitting}
            style={{ 
              background: 'rgb(40,40,43)', 
              color: '#fff', 
              border: formErrors.email ? '1px solid #ff6b6b' : '1px solid #333', 
              borderRadius: '8px', 
              padding: '0.6rem 0.9rem', 
              fontSize: '1rem', 
              fontFamily: 'Segoe UI, Arial, sans-serif',
              width: '100%',
              boxSizing: 'border-box'
            }} 
          />
          {formErrors.email && (
            <div style={{ color: '#ff6b6b', fontSize: '0.85rem', marginTop: '0.3rem' }}>{formErrors.email}</div>
          )}
        </div>
        
        <div>
          <textarea 
            name="message" 
            placeholder="Message" 
            required 
            rows={4}
            maxLength="5000"
            minLength="10"
            disabled={isSubmitting}
            style={{ 
              background: 'rgb(40,40,43)', 
              color: '#fff', 
              border: formErrors.message ? '1px solid #ff6b6b' : '1px solid #333', 
              borderRadius: '8px', 
              padding: '0.6rem 0.9rem', 
              fontSize: '1rem', 
              fontFamily: 'Segoe UI, Arial, sans-serif', 
              resize: 'none',
              width: '100%',
              boxSizing: 'border-box'
            }} 
          />
          {formErrors.message && (
            <div style={{ color: '#ff6b6b', fontSize: '0.85rem', marginTop: '0.3rem' }}>{formErrors.message}</div>
          )}
        </div>
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          style={{ 
            background: isSubmitting ? '#999' : '#ffd600', 
            color: '#18191e', 
            border: 'none', 
            borderRadius: '8px', 
            padding: '0.7rem 0', 
            fontSize: '1rem', 
            fontWeight: 600, 
            cursor: isSubmitting ? 'not-allowed' : 'pointer', 
            marginTop: '0.3rem', 
            fontFamily: 'Segoe UI, Arial, sans-serif',
            opacity: isSubmitting ? 0.6 : 1,
            transition: 'all 0.2s'
          }}
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </form>
    </section>
  );
}

function ResumeDownload() {
  return (
    <div className="resume-download-wrapper">
      <div className="resume-download-card">
        <div>
          <div style={{ color: '#fff', fontWeight: 600, fontSize: '1.18rem' }}>Paper Resume</div>
          <div style={{ color: '#b0b0b0', fontSize: '1rem', marginTop: '0.2rem' }}>Download In a PDF Format</div>
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
    </div>
  );
}

function EducationSection() {
  return (
    <section className="education-section" style={{ fontFamily: 'Segoe UI, Arial, sans-serif', marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.2rem' }}>
        <FaBook color="#ffd600" style={{ fontSize: '2.1rem', marginRight: '0.7rem' }} />
        <h2 className="education-title custom-title" style={{ color: '#fff', fontWeight: 700, fontSize: '1.4rem', margin: 0 }}>Education</h2>
      </div>
      <div className="edu-timeline" style={{ position: 'relative', marginLeft: '1.5rem', paddingLeft: '1.5rem', maxWidth: 700 }}>
        <div className="edu-item" style={{ position: 'relative', marginBottom: '1.1rem' }}>
          <span style={{ position: 'absolute', left: '-1.5rem', top: '0.65rem', width: '1.2rem', height: '2px', background: '#ffd600', borderRadius: '1px', zIndex: 2, boxSizing: 'border-box' }}></span>
          <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.13rem', marginBottom: '0.1rem', position: 'relative', top: '-0.05rem' }}>B.Sc. (Hons), Computer Science (Data Analytics) <span style={{ color: '#ffd600', fontWeight: 400, fontSize: '1rem' }}>(2021 - 2026)</span></div>
          <div style={{ color: '#ffd600', fontWeight: 600, fontSize: '1rem', marginBottom: '0.2rem' }}>Trent University, Peterborough, ON</div>
          <div style={{ color: '#e0e0e0', fontSize: '1rem', marginBottom: '0.2rem' }}><b>Relevant Coursework:</b> Front-End Web Development, Back-End Web Development, Cybersecurity, Software Design & Modelling, Applied AI & Machine Learning, Data Visualization, Database Management Systems, Data Structures & Algorithms I & II, Modelling & Simulation, Systems Analysis and Design</div>
          <div style={{ color: '#e0e0e0', fontSize: '1rem', marginBottom: '0.2rem' }}><b>Projects:</b>
            <ul style={{ margin: '0.2rem 0 0.2rem 1.2rem', color: '#e0e0e0', fontSize: '1rem' }}>
              <li style={{ marginBottom: '0.4rem' }}>Developed a puzzle-based game prototype (digital & analog versions).</li>
              <li>Designed a MySQL database system for managing library inventory at Trent Durham.</li>
            </ul>
          </div>
          <div style={{ color: '#e0e0e0', fontSize: '1rem' }}><b>Leadership:</b> Orientation Leader (2021-2023), led student engagement events.</div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="experience-section" style={{ fontFamily: 'Segoe UI, Arial, sans-serif', marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.2rem' }}>
        <FaBriefcase color="#ffd600" style={{ fontSize: '2.1rem', marginRight: '0.7rem' }} />
        <h2 className="experience-title custom-title" style={{ color: '#fff', fontWeight: 700, fontSize: '1.4rem', margin: 0 }}>Experience</h2>
      </div>
      <div className="exp-timeline" style={{ position: 'relative', marginLeft: '1.5rem', paddingLeft: '1.5rem', maxWidth: 700 }}>
        <div className="exp-item" style={{ position: 'relative', marginBottom: '1.1rem' }}>
          <span style={{ position: 'absolute', left: '-1.5rem', top: '0.65rem', width: '1.2rem', height: '2px', background: '#ffd600', borderRadius: '1px', zIndex: 2, boxSizing: 'border-box' }}></span>
          <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.13rem', marginBottom: '0.1rem', position: 'relative', top: '-0.05rem' }}>MOR Engineering Analyst Intern <span style={{ color: '#ffd600', fontWeight: 400, fontSize: '1rem' }}>(January 2026 – August 2026)</span></div>
          <div style={{ color: '#ffd600', fontWeight: 600, fontSize: '1rem', marginBottom: '0.2rem' }}>Bank of Montreal (BMO), Toronto, Ontario</div>
          <div style={{ color: '#e0e0e0', fontSize: '1rem', marginBottom: '0.2rem' }}>
            <ul style={{ margin: '0.2rem 0 0.2rem 1.2rem', color: '#e0e0e0', fontSize: '1rem' }}>
              <li style={{ marginBottom: '0.4rem' }}>Architected an auto-population engine for the Mandatory Operational Requirements (MOR) Go-Live Framework fields, eliminating manual re-entry and saving ~520 hrs/yr across the platform.</li>
              <li style={{ marginBottom: '0.4rem' }}>Collaborated with multiple teams across BMO to build ServiceNow to MOR app integrations to automate intake verification, replacing manual email workflows and saving ~360 hrs/yr.</li>
              <li style={{ marginBottom: '0.4rem' }}>Developed data integration to auto-pull Technology Environment &amp; Locations from AppCAT into the MOR App, eliminating manual field entry and saving ~170 hrs/yr for users.</li>
              <li style={{ marginBottom: '0.4rem' }}>Gathered requirements from users to design navigational features such as Back, Save &amp; Exit, and unsaved-changes warnings across MOR App screens, improving UX and introducing safeguard prompts to reduce loss of work and save ~100 hrs/yr in user workflow efficiency.</li>
              <li>Identified and delivered an additional 7 process and platform initiatives including role-based access control, recording linking, and operational governance, bringing total impact to ~1145+ hrs/yr reclaimed, equivalent to over half a full-time employee's annual capacity.</li>
            </ul>
          </div>
        </div>
        <div className="exp-item" style={{ position: 'relative', marginBottom: '1.1rem' }}>
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

const TechStackSection = memo(() => {
  const techCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode />,
      technologies: [
        { name: "Python", icon: <FaPython />, description: "Primary, AI & backend" },
        { name: "Java", icon: <FaJava />, description: "Enterprise apps" },
        { name: "JavaScript", icon: <SiJavascript />, description: "Frontend & Node.js" },
        { name: "C#", icon: <TbBrandCSharp />, description: "OOP & .NET" },
        { name: "PHP", icon: <SiPhp />, description: "Server-side scripting" },
        { name: "TypeScript", icon: <SiTypescript />, description: "Type-safe JS" }
      ]
    },
    {
      title: "AI/ML & Data Science",
      icon: <FaRobot />,
      technologies: [
        { name: "TensorFlow", icon: <SiTensorflow />, description: "Deep learning" },
        { name: "MobileNetV2", icon: <FaEye />, description: "Image classification" },
        { name: "Scikit-learn", icon: <SiScikitlearn />, description: "ML models" },
        { name: "Pandas", icon: <SiPandas />, description: "Data manipulation" },
        { name: "NumPy", icon: <SiNumpy />, description: "Numerical computing" },
        { name: "Matplotlib", icon: <SiPlotly />, description: "Data visualization" },
        { name: "OpenCV", icon: <SiOpencv />, description: "Computer vision" },
        { name: "Streamlit", icon: <SiStreamlit />, description: "ML web apps" },
        { name: "ChatGPT API", icon: <SiOpenai />, description: "LLM integration" },
        { name: "LangChain", icon: <SiLangchain />, description: "LLM workflows" },
        { name: "Jupyter Notebooks", icon: <SiJupyter />, description: "Interactive analysis" }
      ]
    },
    {
      title: "Web & Application Development",
      icon: <FaServer />,
      technologies: [
        { name: "React.js", icon: <FaReact />, description: "Component-based UI" },
        { name: "Next.js", icon: <SiNextdotjs />, description: "SSR & SSG" },
        { name: "Redux", icon: <SiRedux />, description: "State management" },
        { name: "React Router", icon: <FaReact />, description: "Client routing" },
        { name: "React Hook Form", icon: <FaReact />, description: "Form handling" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, description: "Utility CSS" },
        { name: "HTML", icon: <FaHtml5 />, description: "Semantic markup" },
        { name: "CSS", icon: <FaCss3Alt />, description: "Responsive styling" },
        { name: "Flask", icon: <SiFlask />, description: "Python web framework" },
        { name: "Node.js", icon: <FaNodeJs />, description: "JavaScript runtime" },
        { name: "Express.js", icon: <SiExpress />, description: "Node.js framework" }
      ]
    },
    {
      title: "API Development",
      icon: <FaLink />,
      technologies: [
        { name: "REST APIs", icon: <FaServer />, description: "RESTful services" },
        { name: "GraphQL", icon: <SiGraphql />, description: "Query language" },
        { name: "Authentication", icon: <FaLock />, description: "Auth & security" }
      ]
    },
    {
      title: "Security, Testing & CI/CD",
      icon: <FaTools />,
      technologies: [
        { name: "Web Security", icon: <FaLock />, description: "Best practices" },
        { name: "Automated Testing", icon: <FaCheckCircle />, description: "Test automation" },
        { name: "CI/CD Pipelines", icon: <FaTools />, description: "Continuous deployment" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <FaCloud />,
      technologies: [
        { name: "AWS", icon: <FaAws />, description: "Cloud infrastructure" },
        { name: "Docker", icon: <SiDocker />, description: "Containerization" },
        { name: "Vercel", icon: <SiVercel />, description: "Web hosting" },
        { name: "Git", icon: <FaGitAlt />, description: "Version control" },
        { name: "GitHub", icon: <SiGithub />, description: "Code collaboration" },
        { name: "Figma", icon: <SiFigma />, description: "UI/UX design" },
        { name: "Webpack", icon: <SiWebpack />, description: "Build tooling" },
        { name: "Agile/Scrum", icon: <FaRecycle />, description: "Project methodology" }
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
            background: 'rgba(40,40,41,0.7)',
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
});

const projects = [
  {
    title: 'Cheese Fat Prediction Model',
    description: 'A data science and machine learning project that predicts the fat percentage in cheese samples using regression models. The workflow covers data cleaning, exploratory data analysis (EDA), feature engineering, model selection, and results interpretation. Ideal for applications in food quality control and nutritional analysis.',
    tech: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    code: sanitizeUrl('https://github.com/RomanBam/CheeseFatPrediction'),
    live: null
  },
  {
    title: 'AI-Assistant',
    description: 'A Python-based AI assistant that leverages the power of LangChain and OpenAI to provide conversational and computational capabilities through a command-line interface. The project demonstrates prompt engineering, API integration, and modular tool extension. Ideal for exploring natural language processing, building custom chatbots, and experimenting with AI-driven automation.',
    tech: ['Python', 'LangChain', 'OpenAI API', 'LangGraph', 'python-dotenv', 'uv'],
    code: sanitizeUrl('https://github.com/RomanBam/AI-Assistant'),
    live: null
  },
  {
    title: 'AI Resume Critiquer',
    description: 'A web-based AI application that provides intelligent resume analysis and feedback using OpenAI\'s GPT models. Users can upload their resumes in PDF or TXT format and receive detailed critiques covering content clarity, skills presentation, experience descriptions, and targeted improvements for specific job roles. The application features a clean Streamlit interface with real-time analysis and structured feedback recommendations. Ideal for job seekers looking to optimize their resumes and improve their chances of landing interviews.',
    tech: ['Python', 'Streamlit', 'OpenAI API', 'PyPDF2', 'python-dotenv', 'uv'],
    code: sanitizeUrl('https://github.com/RomanBam/AI-Resume-Critiquer'),
    live: null
  },
  {
    title: 'AI Image Classifier',
    description: 'A web-based AI application that provides intelligent image classification and analysis using TensorFlow\'s MobileNetV2 model. Users can upload images in JPG or PNG format and receive instant predictions with confidence scores across 1000+ categories from the ImageNet dataset. The application features a clean Streamlit interface with real-time analysis and structured prediction results. Ideal for developers, researchers, and anyone looking to explore AI-powered image recognition capabilities.',
    tech: ['Python', 'TensorFlow', 'Streamlit', 'OpenCV', 'MobileNetV2', 'uv'],
    code: sanitizeUrl('https://github.com/RomanBam/AI-Image-Classifier'),
    live: null
  },
  {
    title: 'Programming Mini-Projects Collection',
    description: 'A diverse collection of small programming projects created to practice coding fundamentals and explore new concepts. Includes applications like a Random Quote Generator (PHP/CSS), Rock Paper Scissors game, Caesar Cipher implementation, Solar System calculator, and more. Each project focuses on specific programming techniques and problem-solving approaches, demonstrating versatility across multiple languages and domains.',
    tech: ['Python', 'PHP', 'CSS', 'HTML', 'JavaScript', 'Math Libraries', 'Random Algorithms'],
    code: sanitizeUrl('https://github.com/RomanBam/MiniProjects-Practice'),
    live: null
  }
];

// Memoized tab components for better performance
const AboutTab = memo(() => (
  <>
    <section className="about-section">
      <h1 className="about-title custom-title">About Me</h1>
      <p className="about-desc">
        Software Engineer with a strong foundation in Full-Stack Development, AI/ML, and Data Analytics. Proficient in building scalable applications using Python, Java, React, HTML, CSS, PHP and more with experience in database integration, API development, and model deployment. Proficient with modern development tools and practices, including software security, automated testing, and CI/CD pipelines. Familiar with the Software Development Life Cycle in Agile environments and the Scrum framework. Passionate about designing robust systems, optimizing algorithms, and contributing to innovative, production-ready software projects.
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
    <section id="section-resume" className="resume-section">
      <h1 className="resume-title custom-title">Resume</h1>
    </section>
    <ResumeDownload />
    <div className="resume-sections-wrapper">
      <ExperienceSection />
      <EducationSection />
    </div>
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

// Mobile versions
const MobileAboutTab = memo(() => (
  <>
    <section className="about-section">
      <h1 className="about-title custom-title">About Me</h1>
      <p className="about-desc">
        Software Engineer with a strong foundation in Full-Stack Development, AI/ML, and Data Analytics. Proficient in building scalable applications using Python, Java, React, HTML, CSS, PHP and more with experience in database integration, API development, and model deployment. Proficient with modern development tools and practices, including software security, automated testing, and CI/CD pipelines. Familiar with the Software Development Life Cycle in Agile environments and the Scrum framework. Passionate about designing robust systems, optimizing algorithms, and contributing to innovative, production-ready software projects.
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
    <section className="resume-section">
      <h1 className="resume-title custom-title">Resume</h1>
    </section>
    <ResumeDownload />
    <div className="resume-sections-wrapper">
      <EducationSection />
      <ExperienceSection />
    </div>
    <TechStackSection />
  </>
));

// Portfolio and Contact are identical for both mobile and desktop
const MobilePortfolioTab = PortfolioTab;
const MobileContactTab = ContactTab;

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
              
              // Get the scroll container and target section
              const scrollContainer = document.querySelector('.main-content-card');
              const targetSection = document.getElementById(`section-${tab.id}`);
              
              if (scrollContainer && targetSection) {
                // For About tab, always scroll to top
                if (tab.id === 'about') {
                  scrollContainer.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                } else {
                  // Calculate the position of the target section relative to the scroll container
                  const containerRect = scrollContainer.getBoundingClientRect();
                  const targetRect = targetSection.getBoundingClientRect();
                  const scrollOffset = targetRect.top - containerRect.top + scrollContainer.scrollTop;
                  
                  // Smooth scroll within the container
                  scrollContainer.scrollTo({
                    top: scrollOffset,
                    behavior: 'smooth'
                  });
                }
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
        <div className="main-content-wrapper">
          <nav className="main-tabs main-tabs-sticky">
            {tabs.map(tab => (
              <Link
                key={tab.id}
                to={tab.path}
                className={`main-tab${activeTab === tab.id ? ' active' : ''}`}
                onClick={() => {
                  setActiveTab(tab.id);
                  if (tab.id === 'about') {
                    // Scroll to top for About tab
                    window.scrollTo({ 
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
          <main className="main-content-card">
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
    </div>
  );
});

// Pre-generate static starfields once - will be the same on every page load
const generateStaticStarLayer = (starCount, minSize, maxSize, tileWidth, tileHeight, seed) => {
  const stars = [];
  // Use a seeded random function for consistent star positions
  let random = seed;
  const seededRandom = () => {
    random = (random * 9301 + 49297) % 233280;
    return random / 233280;
  };
  
  for (let i = 0; i < starCount; i++) {
    const size = (seededRandom() * (maxSize - minSize) + minSize).toFixed(1);
    const x = Math.floor(seededRandom() * tileWidth);
    const y = Math.floor(seededRandom() * tileHeight);
    const opacity = (seededRandom() * 0.5 + 0.5).toFixed(2);
    stars.push(`radial-gradient(${size}px ${size}px at ${x}px ${y}px, rgba(255,255,255,${opacity}), transparent)`);
  }
  return stars.join(', ');
};

// Generate static starfields with fixed seeds for consistency
const STATIC_STARFIELD_1 = generateStaticStarLayer(60, 1, 3, 800, 600, 12345);
const STATIC_STARFIELD_2 = generateStaticStarLayer(80, 0.5, 2, 600, 450, 67890);
const STATIC_STARFIELD_3 = generateStaticStarLayer(70, 1, 2.5, 700, 500, 54321);
const STATIC_STARFIELD_4 = generateStaticStarLayer(100, 0.5, 1.5, 900, 650, 98765);

// Pre-calculate static animation values
const STATIC_TWINKLE_DURATION = '4.5s';
const STATIC_SLOW_TWINKLE_DURATION = '8.2s';
const STATIC_RANDOM_TWINKLE_DURATION = '6.1s';
const STATIC_TWINKLE_EASING = 'ease-in-out';
const STATIC_RANDOM_EASING = 'cubic-bezier(0.4, 0, 0.2, 1)';

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
  const [isManualTabClick, setIsManualTabClick] = useState(false);

  // Update active tab when URL changes
  useEffect(() => {
    const newActiveTab = getActiveTabFromPath(location.pathname);
    setActiveTab(newActiveTab);
    // Scroll to section when URL changes (for direct navigation)
    setTimeout(() => {
      if (isMobile) {
        // Mobile: Scroll within the content container
        const scrollContainer = document.querySelector('.main-content-card');
        const targetSection = document.getElementById(`section-${newActiveTab}`);
        
        if (scrollContainer && targetSection) {
          if (newActiveTab === 'about') {
            // For About tab, scroll to top of container
            scrollContainer.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          } else {
            // Calculate position within container and scroll
            const containerRect = scrollContainer.getBoundingClientRect();
            const targetRect = targetSection.getBoundingClientRect();
            const scrollOffset = targetRect.top - containerRect.top + scrollContainer.scrollTop;
            
            scrollContainer.scrollTo({
              top: scrollOffset,
              behavior: 'smooth'
            });
          }
        }
      } else {
        // Desktop: Use normal window scroll
        if (newActiveTab === 'about') {
          window.scrollTo({ 
            top: 0,
            behavior: 'smooth'
          });
        } else {
          document.getElementById(`section-${newActiveTab}`)?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }
    }, 100);
  }, [location.pathname, getActiveTabFromPath, isMobile]);

  // Scroll listener to update active tab based on visible section
  useEffect(() => {
    let ticking = false;
    let lastScrollTime = 0;
    const throttleDelay = 100; // Throttle to max once per 100ms
    
    const handleScroll = () => {
      const now = Date.now();
      
      // Throttle scroll events
      if (now - lastScrollTime < throttleDelay) {
        return;
      }
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          lastScrollTime = now;
          
          // Don't update tab if user just manually clicked a tab
          if (isManualTabClick) {
            ticking = false;
            return;
          }
          
          const sections = ['about', 'resume', 'portfolio', 'contact'];
          let scrollPosition;
          let scrollContainer;
          
          // Determine scroll container and position based on mobile/desktop
          if (isMobile) {
            scrollContainer = document.querySelector('.main-content-card');
            scrollPosition = scrollContainer ? scrollContainer.scrollTop + 100 : 0;
          } else {
            scrollContainer = window;
            scrollPosition = window.scrollY + 200; // Offset for sticky tabs
          }
          
          // Check if we're at the bottom of the page/container
          let isAtBottom;
          if (isMobile && scrollContainer && scrollContainer !== window) {
            isAtBottom = scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - 10;
          } else {
            isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
          }
          
          // If at bottom, highlight contact tab
          if (isAtBottom) {
            if (activeTab !== 'contact') {
              setActiveTab('contact');
              const tab = tabs.find(t => t.id === 'contact');
              if (tab) {
                window.history.replaceState(null, '', tab.path);
              }
            }
            ticking = false;
            return;
          }
          
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
          
          ticking = false;
        });
        
        ticking = true;
      }
    };

    // Add scroll listener to appropriate container with passive flag for better performance
    if (isMobile) {
      const mobileContainer = document.querySelector('.main-content-card');
      if (mobileContainer) {
        mobileContainer.addEventListener('scroll', handleScroll, { passive: true });
        // Initial call to set correct tab on load
        setTimeout(handleScroll, 100);
        return () => mobileContainer.removeEventListener('scroll', handleScroll);
      }
    } else {
      window.addEventListener('scroll', handleScroll, { passive: true });
      // Initial call to set correct tab on load
      setTimeout(handleScroll, 100);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [activeTab, isMobile, isManualTabClick]);

  // Memoized tab change handler that updates URL and scrolls
  const handleTabChange = useCallback((tabId) => {
    const tab = tabs.find(tab => tab.id === tabId);
    if (tab) {
      // Set manual click flag to prevent scroll handler interference
      setIsManualTabClick(true);
      navigate(tab.path);
      setActiveTab(tabId);
      
      // Clear the flag immediately after navigation
      setTimeout(() => setIsManualTabClick(false), 100);
    }
  }, [navigate]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Apply static starfields - same positions every time
    document.documentElement.style.setProperty('--dynamic-starfield-1', STATIC_STARFIELD_1);
    document.documentElement.style.setProperty('--dynamic-starfield-2', STATIC_STARFIELD_2);
    document.documentElement.style.setProperty('--dynamic-starfield-3', STATIC_STARFIELD_3);
    document.documentElement.style.setProperty('--dynamic-starfield-4', STATIC_STARFIELD_4);

    // Apply static animation values
    document.documentElement.style.setProperty('--twinkle-duration', STATIC_TWINKLE_DURATION);
    document.documentElement.style.setProperty('--slow-twinkle-duration', STATIC_SLOW_TWINKLE_DURATION);
    document.documentElement.style.setProperty('--random-twinkle-duration', STATIC_RANDOM_TWINKLE_DURATION);
    document.documentElement.style.setProperty('--twinkle-easing', STATIC_TWINKLE_EASING);
    document.documentElement.style.setProperty('--random-easing', STATIC_RANDOM_EASING);
  }, []); // Empty dependency array - only run once on mount

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
