import { motion } from 'framer-motion';
import { Calendar, Award, Target, Trophy } from 'lucide-react';
import { animationVariants, useCardAnimation } from '../hooks/useAnimations';
import { achievements } from '../data/portfolioData';
import Section from './Section';
import type { Achievement } from '../types';

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement, index }) => {
  const cardAnimation = useCardAnimation();

  const getTypeIcon = (type: Achievement['type']) => {
    switch (type) {
      case 'tournament':
        return <Trophy size={24} style={{ color: 'var(--accent)' }} />;
      case 'award':
        return <Award size={24} style={{ color: 'var(--primary)' }} />;
      case 'milestone':
        return <Target size={24} style={{ color: 'var(--success)' }} />;
      default:
        return <Award size={24} style={{ color: 'var(--primary)' }} />;
    }
  };

  const getTypeColor = (type: Achievement['type']) => {
    switch (type) {
      case 'tournament':
        return 'var(--gradient-secondary)';
      case 'award':
        return 'var(--gradient-primary)';
      case 'milestone':
        return 'var(--gradient-success)';
      default:
        return 'var(--gradient-primary)';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.div
      variants={animationVariants.fadeInUp}
      custom={index}
      {...cardAnimation}
      style={{
        background: 'var(--bg-glass)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-xl)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: getTypeColor(achievement.type)
        }}
      />

      <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'flex-start' }}>
        {/* Icon */}
        <div
          style={{
            flexShrink: 0,
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: getTypeColor(achievement.type),
            borderRadius: '50%',
            fontSize: '1.5rem'
          }}
        >
          {achievement.icon}
        </div>

        {/* Content */}
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 'var(--space-sm)' }}>
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '0.25rem'
              }}
            >
              {achievement.title}
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              {getTypeIcon(achievement.type)}
            </div>
          </div>

          <p
            style={{
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-md)',
              lineHeight: '1.6'
            }}
          >
            {achievement.description}
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 0.75rem',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 'var(--radius-md)',
              width: 'fit-content'
            }}
          >
            <Calendar size={16} style={{ color: 'var(--primary)' }} />
            <span
              style={{
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
                fontWeight: '500'
              }}
            >
              {formatDate(achievement.date)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Achievements: React.FC = () => {
  const tournamentWins = achievements.filter(a => a.type === 'tournament').length;
  const awards = achievements.filter(a => a.type === 'award').length;
  const milestones = achievements.filter(a => a.type === 'milestone').length;

  return (
    <Section title="Achievements" className="" id="achievements">
      {/* Stats Overview */}
      <motion.div
        variants={animationVariants.fadeInUp}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'var(--space-lg)',
          marginBottom: 'var(--space-2xl)'
        }}
      >
        <div
          style={{
            padding: 'var(--space-xl)',
            background: 'var(--bg-glass)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center'
          }}
        >
          <Trophy size={32} style={{ color: 'var(--accent)', marginBottom: 'var(--space-md)' }} />
          <div
            style={{
              fontSize: '2rem',
              fontWeight: '700',
              background: 'var(--gradient-secondary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {tournamentWins}
          </div>
          <div style={{ color: 'var(--text-secondary)' }}>Tournament Wins</div>
        </div>

        <div
          style={{
            padding: 'var(--space-xl)',
            background: 'var(--bg-glass)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center'
          }}
        >
          <Award size={32} style={{ color: 'var(--primary)', marginBottom: 'var(--space-md)' }} />
          <div
            style={{
              fontSize: '2rem',
              fontWeight: '700',
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {awards}
          </div>
          <div style={{ color: 'var(--text-secondary)' }}>Awards</div>
        </div>

        <div
          style={{
            padding: 'var(--space-xl)',
            background: 'var(--bg-glass)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center'
          }}
        >
          <Target size={32} style={{ color: 'var(--success)', marginBottom: 'var(--space-md)' }} />
          <div
            style={{
              fontSize: '2rem',
              fontWeight: '700',
              background: 'var(--gradient-success)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {milestones}
          </div>
          <div style={{ color: 'var(--text-secondary)' }}>Milestones</div>
        </div>
      </motion.div>

      {/* Achievements Grid */}
      <motion.div
        className="grid grid-2"
        variants={animationVariants.staggerContainer}
        style={{ gap: 'var(--space-xl)' }}
      >
        {achievements.map((achievement, index) => (
          <AchievementCard key={achievement.id} achievement={achievement} index={index} />
        ))}
      </motion.div>
    </Section>
  );
};

export default Achievements;