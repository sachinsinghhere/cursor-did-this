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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Handle scroll state for navigation styling
      setScrolled(window.scrollY > 50);

      // Handle active section detection
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
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`nav-enhanced ${scrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: scrolled 
          ? 'rgba(10, 10, 15, 0.95)' 
          : 'rgba(10, 10, 15, 0.8)',
        backdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: `1px solid ${scrolled 
          ? 'rgba(103, 232, 249, 0.3)' 
          : 'rgba(103, 232, 249, 0.1)'}`,
        boxShadow: scrolled 
          ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
          : '0 4px 16px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        padding: `${scrolled ? '0.75rem' : '1rem'} 0`,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        width: '100vw'
      }}
    >
      <div className="container">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          {/* Enhanced Logo */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="nav-logo"
            style={{
              fontSize: scrolled ? '1.3rem' : '1.5rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
              backgroundSize: '200% 200%',
              animation: 'gradient-shift 3s ease infinite',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              transition: 'font-size 0.3s ease',
              cursor: 'pointer'
            }}
            onClick={() => scrollToSection('#hero')}
          >
            Phoenix_Rising
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center'
            }}
            className="hidden-mobile"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                onClick={() => scrollToSection(item.href)}
                className={`nav-item ${activeSection === item.href.slice(1) ? 'nav-item-active' : ''}`}
                style={{
                  background: activeSection === item.href.slice(1) 
                    ? 'linear-gradient(135deg, rgba(103, 232, 249, 0.15) 0%, rgba(147, 51, 234, 0.15) 100%)'
                    : 'transparent',
                  border: 'none',
                  color: activeSection === item.href.slice(1) ? '#67e8f9' : 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: activeSection === item.href.slice(1) 
                    ? '0 0 20px rgba(103, 232, 249, 0.3)'
                    : 'none'
                }}
                whileHover={{ 
                  color: '#67e8f9',
                  scale: 1.05
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeIndicator"
                    style={{
                      position: 'absolute',
                      bottom: '4px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '60%',
                      height: '2px',
                      background: 'linear-gradient(90deg, #67e8f9, #a855f7)',
                      borderRadius: '2px'
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'none',
              background: isOpen 
                ? 'linear-gradient(135deg, rgba(103, 232, 249, 0.2) 0%, rgba(147, 51, 234, 0.2) 100%)'
                : 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(103, 232, 249, 0.3)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              padding: '0.75rem',
              borderRadius: '12px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              backdropFilter: 'blur(10px)'
            }}
            className="mobile-menu-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isOpen ? 'auto' : 0, 
            opacity: isOpen ? 1 : 0 
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{
            overflow: 'hidden',
            marginTop: isOpen ? '1rem' : 0
          }}
          className="mobile-menu"
        >
          <motion.div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              padding: '1rem 0',
              borderTop: '1px solid rgba(103, 232, 249, 0.2)',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)'
            }}
            initial={{ y: -20 }}
            animate={{ y: isOpen ? 0 : -20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ x: -50, opacity: 0 }}
                animate={{ 
                  x: isOpen ? 0 : -50, 
                  opacity: isOpen ? 1 : 0 
                }}
                transition={{ duration: 0.3, delay: isOpen ? index * 0.1 : 0 }}
                onClick={() => scrollToSection(item.href)}
                style={{
                  background: activeSection === item.href.slice(1) 
                    ? 'linear-gradient(135deg, rgba(103, 232, 249, 0.2) 0%, rgba(147, 51, 234, 0.2) 100%)'
                    : 'transparent',
                  border: 'none',
                  color: activeSection === item.href.slice(1) ? '#67e8f9' : 'var(--text-secondary)',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  padding: '1rem 1.5rem',
                  textAlign: 'left',
                  borderRadius: '8px',
                  margin: '0 0.5rem'
                }}
                whileHover={{ 
                  backgroundColor: 'rgba(103, 232, 249, 0.1)',
                  x: 10
                }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
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