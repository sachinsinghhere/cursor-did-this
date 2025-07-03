import { useInView } from 'framer-motion';
import { useRef } from 'react';
import type { MotionConfig } from '../types';

// Animation variants for reusability (DRY principle)
export const animationVariants = {
  fadeInUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  
  fadeInLeft: {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  
  fadeInRight: {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  
  slideInDown: {
    initial: { opacity: 0, y: -60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },
  
  hoverScale: {
    whileHover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    whileTap: { scale: 0.95 }
  },
  
  hoverGlow: {
    whileHover: {
      boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)',
      transition: { duration: 0.3 }
    }
  }
};

// Hook for scroll-triggered animations
export const useScrollAnimation = (threshold = 0.1): [React.RefObject<HTMLDivElement | null>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: threshold 
  });
  
  return [ref, isInView];
};

// Hook for staggered animations
export const useStaggeredAnimation = (delay = 0.1) => {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: 0.5,
      delay: delay,
      ease: 'easeOut'
    }
  };
};

// Hook for card hover animations
export const useCardAnimation = (): MotionConfig => {
  return {
    whileHover: { 
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    whileTap: { scale: 0.98 }
  };
};

// Hook for floating animations
export const useFloatingAnimation = (duration = 3) => {
  return {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration,
        repeat: Infinity,
        ease: [0.4, 0, 0.6, 1] as [number, number, number, number]
      }
    }
  };
};