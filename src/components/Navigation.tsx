import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { animationVariants } from '../hooks/useAnimations';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Games', href: '#games' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'rgba(10, 10, 15, 0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 1000,
        padding: '1rem 0'
      }}
    >
      <div className="container">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          {/* Logo */}
          <motion.div
            variants={animationVariants.fadeInLeft}
            style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Phoenix_Rising
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            variants={animationVariants.staggerContainer}
            style={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'center'
            }}
            className="hidden-mobile"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                variants={animationVariants.fadeInUp}
                onClick={() => scrollToSection(item.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeSection === item.href.slice(1) ? 'var(--primary)' : 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'color var(--transition-normal)',
                  position: 'relative',
                  padding: '0.5rem 0'
                }}
                whileHover={{ color: 'var(--primary)' }}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeIndicator"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'var(--gradient-primary)',
                      borderRadius: '1px'
                    }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            variants={animationVariants.fadeInRight}
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
            className="mobile-menu-btn"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isOpen ? 'auto' : 0, 
            opacity: isOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          style={{
            overflow: 'hidden',
            marginTop: isOpen ? '1rem' : 0
          }}
          className="mobile-menu"
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            padding: '1rem 0',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeSection === item.href.slice(1) ? 'var(--primary)' : 'var(--text-secondary)',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'color var(--transition-normal)',
                  padding: '0.5rem 0',
                  textAlign: 'left'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navigation;