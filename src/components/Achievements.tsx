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
        padding: 'clamp(var(--space-lg), 4vw, var(--space-xl))',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100%'
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

      <div style={{ 
        display: 'flex', 
        gap: 'clamp(var(--space-md), 3vw, var(--space-lg))', 
        alignItems: 'flex-start',
        flexDirection: 'row'
      }}>
        {/* Icon */}
        <div
          style={{
            flexShrink: 0,
            width: 'clamp(50px, 8vw, 60px)',
            height: 'clamp(50px, 8vw, 60px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: getTypeColor(achievement.type),
            borderRadius: '50%',
            fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)'
          }}
        >
          {achievement.icon}
        </div>

        {/* Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            justifyContent: 'space-between', 
            marginBottom: 'var(--space-sm)',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}>
            <h3
              style={{
                fontSize: 'clamp(1.125rem, 3vw, 1.25rem)',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '0.25rem',
                wordBreak: 'break-word',
                flex: '1',
                minWidth: '0'
              }}
            >
              {achievement.title}
            </h3>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.25rem',
              flexShrink: 0
            }}>
              {getTypeIcon(achievement.type)}
            </div>
          </div>

          <p
            style={{
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-md)',
              lineHeight: '1.6',
              fontSize: 'clamp(0.875rem, 2vw, 1rem)'
            }}
          >
            {achievement.description}
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: 'clamp(0.375rem, 1.5vw, 0.5rem) clamp(0.5rem, 2vw, 0.75rem)',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 'var(--radius-md)',
              width: 'fit-content',
              maxWidth: '100%'
            }}
          >
            <Calendar size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
            <span
              style={{
                fontSize: 'clamp(0.8rem, 1.8vw, 0.875rem)',
                color: 'var(--text-muted)',
                fontWeight: '500',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 'clamp(var(--space-md), 3vw, var(--space-lg))',
          marginBottom: 'clamp(var(--space-xl), 6vw, var(--space-2xl))',
          width: '100%'
        }}
      >
        <div
          style={{
            padding: 'clamp(var(--space-lg), 4vw, var(--space-xl))',
            background: 'var(--bg-glass)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center',
            width: '100%'
          }}
        >
          <Trophy 
            size={32} 
            style={{ 
              color: 'var(--accent)', 
              marginBottom: 'var(--space-md)',
              width: 'clamp(24px, 5vw, 32px)',
              height: 'clamp(24px, 5vw, 32px)'
            }} 
          />
          <div
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              fontWeight: '700',
              background: 'var(--gradient-secondary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {tournamentWins}
          </div>
          <div style={{ 
            color: 'var(--text-secondary)',
            fontSize: 'clamp(0.875rem, 2vw, 1rem)'
          }}>
            Tournament Wins
          </div>
        </div>

        <div
          style={{
            padding: 'clamp(var(--space-lg), 4vw, var(--space-xl))',
            background: 'var(--bg-glass)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center',
            width: '100%'
          }}
        >
          <Award 
            size={32} 
            style={{ 
              color: 'var(--primary)', 
              marginBottom: 'var(--space-md)',
              width: 'clamp(24px, 5vw, 32px)',
              height: 'clamp(24px, 5vw, 32px)'
            }} 
          />
          <div
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              fontWeight: '700',
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {awards}
          </div>
          <div style={{ 
            color: 'var(--text-secondary)',
            fontSize: 'clamp(0.875rem, 2vw, 1rem)'
          }}>
            Awards
          </div>
        </div>

        <div
          style={{
            padding: 'clamp(var(--space-lg), 4vw, var(--space-xl))',
            background: 'var(--bg-glass)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center',
            width: '100%'
          }}
        >
          <Target 
            size={32} 
            style={{ 
              color: 'var(--success)', 
              marginBottom: 'var(--space-md)',
              width: 'clamp(24px, 5vw, 32px)',
              height: 'clamp(24px, 5vw, 32px)'
            }} 
          />
          <div
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              fontWeight: '700',
              background: 'var(--gradient-success)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {milestones}
          </div>
          <div style={{ 
            color: 'var(--text-secondary)',
            fontSize: 'clamp(0.875rem, 2vw, 1rem)'
          }}>
            Milestones
          </div>
        </div>
      </motion.div>

      {/* Achievements Grid */}
      <motion.div
        className="grid"
        variants={animationVariants.staggerContainer}
        style={{ 
          gap: 'clamp(var(--space-lg), 4vw, var(--space-xl))',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          width: '100%'
        }}
      >
        {achievements.map((achievement, index) => (
          <AchievementCard key={achievement.id} achievement={achievement} index={index} />
        ))}
      </motion.div>
    </Section>
  );
};

export default Achievements;