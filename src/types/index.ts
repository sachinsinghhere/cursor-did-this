// Player Types
export interface Player {
  id: string;
  name: string;
  gamertag: string;
  title: string;
  bio: string;
  avatar: string;
  location: string;
  joinDate: string;
}

// Game and Achievement Types
export interface Game {
  id: string;
  name: string;
  icon: string;
  rank: string;
  hours: number;
  winRate: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'tournament' | 'milestone' | 'award';
  icon: string;
}

export interface Tournament {
  id: string;
  name: string;
  game: string;
  placement: number;
  totalTeams: number;
  prize: string;
  date: string;
  status: 'won' | 'runner-up' | 'top-3' | 'participated';
}

// Stats and Social Types
export interface GameStats {
  game: string;
  kd: number;
  winRate: number;
  avgScore: number;
  totalMatches: number;
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

// Component Props Types
export interface MotionConfig {
  initial?: object;
  animate?: object;
  exit?: object;
  transition?: object;
  whileHover?: object;
  whileInView?: object;
  whileTap?: object;
}

export interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}