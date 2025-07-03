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
    <div style={{ position: 'relative' }}>
      {/* Aurora Borealis Background */}
      <div className="aurora-bg" />
      
      <section className="section hero-section" style={{ minHeight: '100vh', background: 'none' }}>
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
                
                {/* Floating Elements */}
                <motion.div
                  className="floating-element"
                  animate={{
                    rotate: 360,
                    transition: { duration: 20, repeat: Infinity, ease: 'linear' }
                  }}
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
                    fontSize: 'clamp(1rem, 2.5vw, 1.5rem)'
                  }}
                >
                  🎮
                </motion.div>

                <motion.div
                  className="floating-element"
                  animate={{
                    rotate: -360,
                    transition: { duration: 15, repeat: Infinity, ease: 'linear' }
                  }}
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
                    fontSize: 'clamp(1.2rem, 3vw, 2rem)'
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