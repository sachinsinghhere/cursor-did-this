import { motion } from 'framer-motion';
import { useScrollAnimation, animationVariants } from '../hooks/useAnimations';
import type { SectionProps } from '../types';

const Section: React.FC<SectionProps> = ({ 
  title, 
  children, 
  className = '',
  id,
  ...props 
}) => {
  const [ref, isInView] = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`section ${className}`}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={animationVariants.staggerContainer}
      {...props}
    >
      <div className="container">
        {title && (
          <motion.h2 
            className="section-title"
            variants={animationVariants.fadeInUp}
          >
            {title}
          </motion.h2>
        )}
        <motion.div variants={animationVariants.staggerContainer}>
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Section;