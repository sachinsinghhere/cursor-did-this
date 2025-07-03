import { motion } from 'framer-motion';
import { Clock, TrendingUp, Trophy } from 'lucide-react';
import { animationVariants, useCardAnimation } from '../hooks/useAnimations';
import { games } from '../data/portfolioData';
import Section from './Section';
import type { Game } from '../types';

interface GameCardProps {
  game: Game;
  index: number;
}

const GameCard: React.FC<GameCardProps> = ({ game, index }) => {
  const cardAnimation = useCardAnimation();

  const getRankColor = (rank: string) => {
    const lowerRank = rank.toLowerCase();
    if (lowerRank.includes('radiant') || lowerRank.includes('challenger') || lowerRank.includes('global')) {
      return 'var(--gradient-primary)';
    }
    if (lowerRank.includes('predator') || lowerRank.includes('immortal')) {
      return 'var(--gradient-secondary)';
    }
    return 'var(--gradient-accent)';
  };

  return (
    <motion.div
      className="glass-card"
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
      {/* Background Gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: getRankColor(game.rank)
        }}
      />

      <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
        <div
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            marginBottom: 'var(--space-md)',
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))'
          }}
        >
          {game.icon}
        </div>
        <h3
          style={{
            fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
            fontWeight: '700',
            marginBottom: 'var(--space-sm)',
            color: 'var(--text-primary)',
            wordBreak: 'break-word'
          }}
        >
          {game.name}
        </h3>
        <div
          style={{
            display: 'inline-block',
            padding: 'clamp(0.375rem, 1.5vw, 0.5rem) clamp(0.75rem, 2.5vw, 1rem)',
            background: getRankColor(game.rank),
            borderRadius: 'var(--radius-md)',
            fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
            fontWeight: '600',
            color: 'white',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}
        >
          {game.rank}
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 'clamp(var(--space-sm), 3vw, var(--space-md))',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 'var(--radius-md)',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}
        >
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            minWidth: 'fit-content'
          }}>
            <Clock size={18} style={{ color: 'var(--primary)' }} />
            <span style={{ 
              color: 'var(--text-secondary)',
              fontSize: 'clamp(0.875rem, 2vw, 1rem)'
            }}>
              Hours Played
            </span>
          </div>
          <span style={{ 
            fontWeight: '600', 
            color: 'var(--text-primary)',
            fontSize: 'clamp(0.875rem, 2vw, 1rem)'
          }}>
            {game.hours.toLocaleString()}
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 'clamp(var(--space-sm), 3vw, var(--space-md))',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 'var(--radius-md)',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}
        >
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            minWidth: 'fit-content'
          }}>
            <TrendingUp size={18} style={{ color: 'var(--success)' }} />
            <span style={{ 
              color: 'var(--text-secondary)',
              fontSize: 'clamp(0.875rem, 2vw, 1rem)'
            }}>
              Win Rate
            </span>
          </div>
          <span
            style={{
              fontWeight: '600',
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              color: game.winRate >= 80 ? 'var(--success)' : 
                     game.winRate >= 70 ? 'var(--warning)' : 'var(--text-primary)'
            }}
          >
            {game.winRate}%
          </span>
        </div>

        {/* Progress bar for win rate */}
        <div
          style={{
            width: '100%',
            height: '8px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '4px',
            overflow: 'hidden'
          }}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${game.winRate}%` }}
            transition={{ duration: 1, delay: index * 0.1 }}
            style={{
              height: '100%',
              background: game.winRate >= 80 ? 'var(--gradient-success)' : 
                         game.winRate >= 70 ? 'var(--gradient-accent)' : 'var(--gradient-primary)',
              borderRadius: '4px'
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Games: React.FC = () => {
  return (
    <Section title="My Games" className="" id="games">
      <motion.div
        className="grid"
        variants={animationVariants.staggerContainer}
        style={{ 
          gap: 'clamp(var(--space-lg), 4vw, var(--space-xl))',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          width: '100%'
        }}
      >
        {games.map((game, index) => (
          <GameCard key={game.id} game={game} index={index} />
        ))}
      </motion.div>

      {/* Games Stats Summary */}
      <motion.div
        variants={animationVariants.fadeInUp}
        style={{
          marginTop: 'clamp(var(--space-xl), 6vw, var(--space-2xl))',
          padding: 'clamp(var(--space-lg), 4vw, var(--space-xl))',
          background: 'var(--bg-glass)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: 'var(--radius-lg)',
          textAlign: 'center',
          width: '100%',
          maxWidth: '100%'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: 'clamp(var(--space-md), 3vw, var(--space-lg))',
            marginBottom: 'var(--space-lg)',
            width: '100%'
          }}
        >
          <div style={{ padding: '0 var(--space-sm)' }}>
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
              {games.length}
            </div>
            <div style={{ 
              color: 'var(--text-secondary)',
              fontSize: 'clamp(0.875rem, 2vw, 1rem)'
            }}>
              Games Mastered
            </div>
          </div>
          <div style={{ padding: '0 var(--space-sm)' }}>
            <div
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: '700',
                background: 'var(--gradient-accent)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {games.reduce((total, game) => total + game.hours, 0).toLocaleString()}
            </div>
            <div style={{ 
              color: 'var(--text-secondary)',
              fontSize: 'clamp(0.875rem, 2vw, 1rem)'
            }}>
              Total Hours
            </div>
          </div>
          <div style={{ padding: '0 var(--space-sm)' }}>
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
              {Math.round(games.reduce((total, game) => total + game.winRate, 0) / games.length)}%
            </div>
            <div style={{ 
              color: 'var(--text-secondary)',
              fontSize: 'clamp(0.875rem, 2vw, 1rem)'
            }}>
              Avg Win Rate
            </div>
          </div>
        </div>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '0.5rem',
          flexWrap: 'wrap',
          textAlign: 'center'
        }}>
          <Trophy size={20} style={{ color: 'var(--accent)' }} />
          <span style={{ 
            color: 'var(--text-secondary)',
            fontSize: 'clamp(0.875rem, 2vw, 1rem)',
            lineHeight: '1.4'
          }}>
            Consistently ranking in top tiers across multiple competitive games
          </span>
        </div>
      </motion.div>
    </Section>
  );
};

export default Games;