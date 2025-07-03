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
        padding: 'var(--space-xl)',
        position: 'relative',
        overflow: 'hidden'
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
            fontSize: '3rem',
            marginBottom: 'var(--space-md)',
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))'
          }}
        >
          {game.icon}
        </div>
        <h3
          style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            marginBottom: 'var(--space-sm)',
            color: 'var(--text-primary)'
          }}
        >
          {game.name}
        </h3>
        <div
          style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            background: getRankColor(game.rank),
            borderRadius: 'var(--radius-md)',
            fontSize: '0.9rem',
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
            padding: 'var(--space-md)',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 'var(--radius-md)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Clock size={18} style={{ color: 'var(--primary)' }} />
            <span style={{ color: 'var(--text-secondary)' }}>Hours Played</span>
          </div>
          <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
            {game.hours.toLocaleString()}
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 'var(--space-md)',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 'var(--radius-md)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <TrendingUp size={18} style={{ color: 'var(--success)' }} />
            <span style={{ color: 'var(--text-secondary)' }}>Win Rate</span>
          </div>
          <span
            style={{
              fontWeight: '600',
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
        className="grid grid-2"
        variants={animationVariants.staggerContainer}
        style={{ gap: 'var(--space-xl)' }}
      >
        {games.map((game, index) => (
          <GameCard key={game.id} game={game} index={index} />
        ))}
      </motion.div>

      {/* Games Stats Summary */}
      <motion.div
        variants={animationVariants.fadeInUp}
        style={{
          marginTop: 'var(--space-2xl)',
          padding: 'var(--space-xl)',
          background: 'var(--bg-glass)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: 'var(--radius-lg)',
          textAlign: 'center'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: 'var(--space-lg)',
            marginBottom: 'var(--space-lg)'
          }}
        >
          <div>
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
              {games.length}
            </div>
            <div style={{ color: 'var(--text-secondary)' }}>Games Mastered</div>
          </div>
          <div>
            <div
              style={{
                fontSize: '2rem',
                fontWeight: '700',
                background: 'var(--gradient-accent)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {games.reduce((total, game) => total + game.hours, 0).toLocaleString()}
            </div>
            <div style={{ color: 'var(--text-secondary)' }}>Total Hours</div>
          </div>
          <div>
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
              {Math.round(games.reduce((total, game) => total + game.winRate, 0) / games.length)}%
            </div>
            <div style={{ color: 'var(--text-secondary)' }}>Avg Win Rate</div>
          </div>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <Trophy size={20} style={{ color: 'var(--accent)' }} />
          <span style={{ color: 'var(--text-secondary)' }}>
            Consistently ranking in top tiers across multiple competitive games
          </span>
        </div>
      </motion.div>
    </Section>
  );
};

export default Games;