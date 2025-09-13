
import React from 'react';
import { cn } from '@/lib/utils';

interface CharacterIllustrationProps {
  type: 'cafe-owner' | 'attendee' | 'coffee-cup' | 'community';
  className?: string;
}

export const CharacterIllustration = ({ type, className }: CharacterIllustrationProps) => {
  const characterMap = {
    'cafe-owner': (
      <svg viewBox="0 0 200 200" className={cn("w-full h-auto", className)}>
        <circle cx="100" cy="60" r="45" fill="#E6CEAC" />
        <circle cx="85" cy="50" r="5" fill="#3A2618" />
        <circle cx="115" cy="50" r="5" fill="#3A2618" />
        <path d="M90 70 Q100 80 110 70" stroke="#3A2618" strokeWidth="3" fill="none" />
        <rect x="70" y="100" width="60" height="70" fill="#8B4513" />
        <rect x="70" y="115" width="60" height="20" fill="#A8E6CF" />
        <circle cx="60" cy="130" r="15" fill="#E6CEAC" />
        <circle cx="140" cy="130" r="15" fill="#E6CEAC" />
        <path d="M70 95 Q100 85 130 95" stroke="#3A2618" strokeWidth="3" fill="none" />
      </svg>
    ),
    'attendee': (
      <svg viewBox="0 0 200 200" className={cn("w-full h-auto", className)}>
        <circle cx="100" cy="60" r="45" fill="#FFF8E1" />
        <circle cx="85" cy="50" r="5" fill="#3A2618" />
        <circle cx="115" cy="50" r="5" fill="#3A2618" />
        <path d="M85 70 Q100 80 115 70" stroke="#3A2618" strokeWidth="3" fill="none" />
        <rect x="70" y="100" width="60" height="70" fill="#7F7EC9" />
        <rect x="65" y="140" width="30" height="40" fill="#FFF8E1" />
        <rect x="105" y="140" width="30" height="40" fill="#FFF8E1" />
        <path d="M70 95 Q100 85 130 95" stroke="#3A2618" strokeWidth="3" fill="none" />
        <path d="M100 130 Q120 140 130 120" stroke="#FF6B6B" strokeWidth="5" fill="none" />
      </svg>
    ),
    'coffee-cup': (
      <svg viewBox="0 0 200 200" className={cn("w-full h-auto", className)}>
        <path d="M60 60 L60 150 Q100 170 140 150 L140 60 Z" fill="#FFF8E1" />
        <path d="M50 60 L150 60 Q150 50 140 50 L60 50 Q50 50 50 60 Z" fill="#8B4513" />
        <path d="M80 50 L80 30 Q100 20 120 30 L120 50" stroke="#8B4513" strokeWidth="8" fill="none" />
        <path d="M70 80 Q100 100 130 80" stroke="#E6CEAC" strokeWidth="5" fill="none" />
        <path d="M80 100 Q100 120 120 100" stroke="#E6CEAC" strokeWidth="5" fill="none" />
      </svg>
    ),
    'community': (
      <svg viewBox="0 0 200 200" className={cn("w-full h-auto", className)}>
        <circle cx="70" cy="80" r="30" fill="#FF9040" />
        <circle cx="130" cy="80" r="30" fill="#7F7EC9" />
        <circle cx="100" cy="130" r="30" fill="#A8E6CF" />
        <circle cx="65" cy="75" r="3" fill="#FFF8E1" />
        <circle cx="75" cy="75" r="3" fill="#FFF8E1" />
        <path d="M65 85 Q70 90 75 85" stroke="#FFF8E1" strokeWidth="2" fill="none" />
        <circle cx="125" cy="75" r="3" fill="#FFF8E1" />
        <circle cx="135" cy="75" r="3" fill="#FFF8E1" />
        <path d="M125 85 Q130 90 135 85" stroke="#FFF8E1" strokeWidth="2" fill="none" />
        <circle cx="95" cy="125" r="3" fill="#FFF8E1" />
        <circle cx="105" cy="125" r="3" fill="#FFF8E1" />
        <path d="M95 135 Q100 140 105 135" stroke="#FFF8E1" strokeWidth="2" fill="none" />
      </svg>
    )
  };

  return characterMap[type] || null;
};

export default CharacterIllustration;
