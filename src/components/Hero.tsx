import { motion } from 'framer-motion';
import { ChevronDown, MapPin, Calendar, Award } from 'lucide-react';
import { animationVariants, useFloatingAnimation } from '../hooks/useAnimations';
import { playerData, socialLinks } from '../data/portfolioData';
import SocialLinks from './SocialLinks';

const Hero: React.FC = () => {
  const floatingAnimation = useFloatingAnimation(4);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'relative', width: '100vw', overflow: 'hidden' }}>
      {/* Enhanced Aurora Borealis Background */}
      <div className="aurora-bg" />
      
      {/* SVG Gaming Background */}
      <div className="gaming-background">
        <svg
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
          style={{ width: '100%', height: '100%' }}
        >
          <defs>
            <linearGradient id="grid1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#67e8f9', stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: '#a855f7', stopOpacity: 0.05 }} />
            </linearGradient>
            <linearGradient id="grid2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 0.08 }} />
              <stop offset="100%" style={{ stopColor: '#f59e0b', stopOpacity: 0.03 }} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Animated Grid Lines */}
          <g opacity="0.3">
            {Array.from({ length: 20 }, (_, i) => (
              <line
                key={`v${i}`}
                x1={96 * i}
                y1="0"
                x2={96 * i}
                y2="1080"
                stroke="url(#grid1)"
                strokeWidth="1"
                opacity="0.4"
              >
                <animate
                  attributeName="opacity"
                  values="0.2;0.6;0.2"
                  dur={`${3 + i * 0.2}s`}
                  repeatCount="indefinite"
                />
              </line>
            ))}
            {Array.from({ length: 12 }, (_, i) => (
              <line
                key={`h${i}`}
                x1="0"
                y1={90 * i}
                x2="1920"
                y2={90 * i}
                stroke="url(#grid2)"
                strokeWidth="1"
                opacity="0.3"
              >
                <animate
                  attributeName="opacity"
                  values="0.1;0.5;0.1"
                  dur={`${4 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </line>
            ))}
          </g>
          
          {/* Floating Particles */}
          {Array.from({ length: 15 }, (_, i) => (
            <circle
              key={`particle${i}`}
              cx={Math.random() * 1920}
              cy={Math.random() * 1080}
              r={Math.random() * 3 + 1}
              fill="#67e8f9"
              opacity="0.4"
              filter="url(#glow)"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values={`0,0; ${Math.random() * 100 - 50},${Math.random() * 100 - 50}; 0,0`}
                dur={`${10 + i * 2}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.2;0.8;0.2"
                dur={`${3 + i * 0.5}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </svg>
      </div>
      
      <section className="section hero-section" style={{ minHeight: '100vh', background: 'none', width: '100vw' }}>
        <div className="container">
          <div className="grid hero-grid" style={{ 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            alignItems: 'center', 
            gap: '4rem'
          }}>
            {/* Left Content */}
            <motion.div
              className="hero-content"
              initial="initial"
              animate="animate"
              variants={animationVariants.staggerContainer}
            >
              <motion.div
                variants={animationVariants.fadeInLeft}
                style={{ marginBottom: '1rem' }}
              >
                <span style={{ 
                  color: 'var(--text-accent)',
                  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  Professional Esports Player
                </span>
              </motion.div>

              <motion.h1
                variants={animationVariants.fadeInLeft}
                style={{
                  fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                  fontWeight: '800',
                  background: 'var(--gradient-primary)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '1.5rem',
                  lineHeight: '1.1'
                }}
              >
                {playerData.name}
              </motion.h1>

              <motion.p
                variants={animationVariants.fadeInLeft}
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                  color: 'var(--text-secondary)',
                  marginBottom: '2rem',
                  maxWidth: '500px',
                  lineHeight: '1.6'
                }}
              >
                {playerData.bio}
              </motion.p>

              <motion.div
                variants={animationVariants.fadeInLeft}
                style={{ 
                  display: 'flex', 
                  gap: 'clamp(1rem, 3vw, 2rem)', 
                  marginBottom: '2rem',
                  flexWrap: 'wrap',
                  justifyContent: 'center'
                }}
                className="hero-stats"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={18} style={{ color: 'var(--primary)' }} />
                  <span style={{ 
                    color: 'var(--text-secondary)',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)'
                  }}>
                    {playerData.location}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Calendar size={18} style={{ color: 'var(--primary)' }} />
                  <span style={{ 
                    color: 'var(--text-secondary)',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)'
                  }}>
                    Since {new Date(playerData.joinDate).getFullYear()}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Award size={18} style={{ color: 'var(--primary)' }} />
                  <span style={{ 
                    color: 'var(--text-secondary)',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)'
                  }}>
                    Pro Player
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={animationVariants.fadeInLeft}
                className="button-group"
                style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  marginBottom: '2rem',
                  justifyContent: 'center',
                  flexWrap: 'wrap'
                }}
              >
                <button 
                  className="btn btn-primary"
                  onClick={scrollToAbout}
                  style={{ minWidth: '150px' }}
                >
                  View Portfolio
                </button>
                <a 
                  href="#contact" 
                  className="btn btn-secondary"
                  style={{ minWidth: '150px', textAlign: 'center' }}
                >
                  Contact Me
                </a>
              </motion.div>

              <motion.div 
                variants={animationVariants.fadeInLeft}
                style={{ textAlign: 'center' }}
              >
                <SocialLinks links={socialLinks} />
              </motion.div>
            </motion.div>

            {/* Right Content - Avatar */}
            <motion.div
              className="hero-avatar"
              variants={animationVariants.fadeInRight}
              style={{ 
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <motion.div
                style={{
                  position: 'relative',
                  width: 'clamp(250px, 40vw, 400px)',
                  height: 'clamp(250px, 40vw, 400px)',
                  maxWidth: '100%'
                }}
                {...floatingAnimation}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: 'var(--gradient-primary)',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div
                    style={{
                      width: 'calc(100% - 8px)',
                      height: 'calc(100% - 8px)',
                      borderRadius: '50%',
                      background: `url(${playerData.avatar}) center/cover`,
                      backgroundColor: 'var(--bg-secondary)'
                    }}
                  />
                </div>
                
                {/* Enhanced Floating Elements - Fixed Flickering */}
                <motion.div
                  className="floating-element"
                  style={{
                    position: 'absolute',
                    top: 'clamp(-15px, -3vw, -20px)',
                    right: 'clamp(-15px, -3vw, -20px)',
                    width: 'clamp(40px, 8vw, 60px)',
                    height: 'clamp(40px, 8vw, 60px)',
                    background: 'var(--gradient-accent)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0)'
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    scale: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  🎮
                </motion.div>

                <motion.div
                  className="floating-element"
                  style={{
                    position: 'absolute',
                    bottom: 'clamp(-8px, -1.5vw, -10px)',
                    left: 'clamp(-20px, -4vw, -30px)',
                    width: 'clamp(50px, 10vw, 80px)',
                    height: 'clamp(50px, 10vw, 80px)',
                    background: 'var(--gradient-secondary)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0)'
                  }}
                  animate={{
                    rotate: [0, -360],
                    scale: [1, 0.9, 1]
                  }}
                  transition={{
                    rotate: {
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    scale: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  🏆
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              cursor: 'pointer'
            }}
            onClick={scrollToAbout}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                color: 'var(--text-muted)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span style={{ 
                fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
                textAlign: 'center'
              }}>
                Scroll Down
              </span>
              <ChevronDown size={24} />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;