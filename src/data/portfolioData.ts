import type { Player, Game, Achievement, Tournament, GameStats, SocialLink, TeamMember } from '../types';

export const playerData: Player = {
  id: '1',
  name: 'Alex "Phoenix" Chen',
  gamertag: 'Phoenix_Rising',
  title: 'Professional Esports Player',
  bio: 'Competitive gamer with 5+ years in professional esports. Specializing in FPS and MOBA games with multiple tournament victories and a passion for strategic gameplay.',
  avatar: '/api/placeholder/300/300',
  location: 'Los Angeles, CA',
  joinDate: '2019-03-15'
};

export const games: Game[] = [
  {
    id: '1',
    name: 'Valorant',
    icon: '🎮',
    rank: 'Radiant',
    hours: 2847,
    winRate: 87.3
  },
  {
    id: '2',
    name: 'League of Legends',
    icon: '⚔️',
    rank: 'Challenger',
    hours: 3251,
    winRate: 82.1
  },
  {
    id: '3',
    name: 'CS:GO',
    icon: '🔫',
    rank: 'Global Elite',
    hours: 1956,
    winRate: 79.4
  },
  {
    id: '4',
    name: 'Apex Legends',
    icon: '🏆',
    rank: 'Predator',
    hours: 1432,
    winRate: 75.8
  }
];

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'VCT Champions Winner',
    description: 'First place at Valorant Champions Tournament 2023',
    date: '2023-08-27',
    type: 'tournament',
    icon: '🏆'
  },
  {
    id: '2',
    title: 'MVP of the Season',
    description: 'Most Valuable Player award for outstanding performance',
    date: '2023-12-15',
    type: 'award',
    icon: '⭐'
  },
  {
    id: '3',
    title: '1000 Competitive Wins',
    description: 'Reached 1000 competitive match victories',
    date: '2023-06-10',
    type: 'milestone',
    icon: '🎯'
  },
  {
    id: '4',
    title: 'ESL Pro League Champion',
    description: 'Champion of ESL Pro League Season 18',
    date: '2023-04-20',
    type: 'tournament',
    icon: '🥇'
  }
];

export const tournaments: Tournament[] = [
  {
    id: '1',
    name: 'Valorant Champions 2023',
    game: 'Valorant',
    placement: 1,
    totalTeams: 16,
    prize: '$50,000',
    date: '2023-08-27',
    status: 'won'
  },
  {
    id: '2',
    name: 'ESL Pro League S18',
    game: 'CS:GO',
    placement: 1,
    totalTeams: 24,
    prize: '$30,000',
    date: '2023-04-20',
    status: 'won'
  },
  {
    id: '3',
    name: 'LCS Summer Split',
    game: 'League of Legends',
    placement: 2,
    totalTeams: 10,
    prize: '$15,000',
    date: '2023-09-10',
    status: 'runner-up'
  },
  {
    id: '4',
    name: 'ALGS Championship',
    game: 'Apex Legends',
    placement: 3,
    totalTeams: 20,
    prize: '$10,000',
    date: '2023-07-15',
    status: 'top-3'
  }
];

export const gameStats: GameStats[] = [
  {
    game: 'Valorant',
    kd: 1.47,
    winRate: 87.3,
    avgScore: 267,
    totalMatches: 1247
  },
  {
    game: 'League of Legends',
    kd: 2.13,
    winRate: 82.1,
    avgScore: 8.2,
    totalMatches: 892
  },
  {
    game: 'CS:GO',
    kd: 1.32,
    winRate: 79.4,
    avgScore: 85,
    totalMatches: 756
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'Twitch',
    url: 'https://twitch.tv/phoenix_rising',
    username: '@phoenix_rising',
    icon: 'twitch'
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/phoenix_esports',
    username: '@phoenix_esports',
    icon: 'twitter'
  },
  {
    platform: 'YouTube',
    url: 'https://youtube.com/phoenixgaming',
    username: 'Phoenix Gaming',
    icon: 'youtube'
  },
  {
    platform: 'Discord',
    url: 'https://discord.gg/phoenixteam',
    username: 'Phoenix#1337',
    icon: 'discord'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Marcus "Storm" Rodriguez',
    role: 'Entry Fragger',
    avatar: '/api/placeholder/150/150'
  },
  {
    id: '2',
    name: 'Sarah "Viper" Kim',
    role: 'Support',
    avatar: '/api/placeholder/150/150'
  },
  {
    id: '3',
    name: 'David "Phantom" Johnson',
    role: 'AWPer',
    avatar: '/api/placeholder/150/150'
  },
  {
    id: '4',
    name: 'Emily "Nova" Zhang',
    role: 'IGL',
    avatar: '/api/placeholder/150/150'
  }
];