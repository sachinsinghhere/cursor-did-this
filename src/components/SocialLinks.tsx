import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaTwitch, FaTwitter, FaYoutube, FaDiscord } from 'react-icons/fa';
import { animationVariants } from '../hooks/useAnimations';
import type { SocialLink } from '../types';

interface SocialLinksProps {
  links: SocialLink[];
}

const iconMap = {
  twitch: FaTwitch,
  twitter: FaTwitter,
  youtube: FaYoutube,
  discord: FaDiscord,
};

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <motion.div
      style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap'
      }}
      variants={animationVariants.staggerContainer}
    >
      {links.map((link, index) => {
        const IconComponent = iconMap[link.icon as keyof typeof iconMap] || ExternalLink;
        
        return (
          <motion.a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={animationVariants.scaleIn}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1rem',
              background: 'var(--bg-glass)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: '500',
              transition: 'all var(--transition-normal)'
            }}
          >
            <IconComponent size={18} />
            <span>{link.username}</span>
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default SocialLinks;