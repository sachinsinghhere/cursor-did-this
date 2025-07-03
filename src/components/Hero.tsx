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
    <section className="section" style={{ minHeight: '100vh', background: 'none' }}>
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          {/* Left Content */}
          <motion.div
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
                fontSize: '1.2rem',
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
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
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
                fontSize: '1.25rem',
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                maxWidth: '500px'
              }}
            >
              {playerData.bio}
            </motion.p>

            <motion.div
              variants={animationVariants.fadeInLeft}
              style={{ 
                display: 'flex', 
                gap: '2rem', 
                marginBottom: '2rem',
                flexWrap: 'wrap'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={18} style={{ color: 'var(--primary)' }} />
                <span style={{ color: 'var(--text-secondary)' }}>{playerData.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Calendar size={18} style={{ color: 'var(--primary)' }} />
                <span style={{ color: 'var(--text-secondary)' }}>
                  Since {new Date(playerData.joinDate).getFullYear()}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award size={18} style={{ color: 'var(--primary)' }} />
                <span style={{ color: 'var(--text-secondary)' }}>Pro Player</span>
              </div>
            </motion.div>

            <motion.div
              variants={animationVariants.fadeInLeft}
              style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}
            >
              <button 
                className="btn btn-primary"
                onClick={scrollToAbout}
              >
                View Portfolio
              </button>
              <a 
                href="#contact" 
                className="btn btn-secondary"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div variants={animationVariants.fadeInLeft}>
              <SocialLinks links={socialLinks} />
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar */}
          <motion.div
            variants={animationVariants.fadeInRight}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <motion.div
              style={{
                position: 'relative',
                width: '400px',
                height: '400px',
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
              
              {/* Floating Elements */}
              <motion.div
                animate={{
                  rotate: 360,
                  transition: { duration: 20, repeat: Infinity, ease: 'linear' }
                }}
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '60px',
                  height: '60px',
                  background: 'var(--gradient-accent)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem'
                }}
              >
                🎮
              </motion.div>

              <motion.div
                animate={{
                  rotate: -360,
                  transition: { duration: 15, repeat: Infinity, ease: 'linear' }
                }}
                style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '-30px',
                  width: '80px',
                  height: '80px',
                  background: 'var(--gradient-secondary)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem'
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
            <span style={{ fontSize: '0.9rem' }}>Scroll Down</span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;