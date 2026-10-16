import React from "react";

/**
 * Dessert decorative illustrations for "Code & Cupcakes" theme:
 * - CupcakeIcon
 * - MacaronIcon
 * - DonutIcon
 * - FrostingSwirl
 * - CodeBracketsDecor
 */

export const CupcakeIcon = ({ size = 28, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Base liner */}
    <path
      d="M12 24L14 34C14.5 35 15.5 35.5 20 35.5C24.5 35.5 25.5 35 26 34L28 24"
      fill="#A78BFA"
      stroke="#C4B5FD"
      strokeWidth="1.2"
    />
    <path d="M16 24.5L17.5 34.5M20 24.5V35M24 24.5L22.5 34.5" stroke="#DDD6FE" strokeWidth="0.8" />
    
    {/* Cake layer */}
    <ellipse cx="20" cy="24" rx="9" ry="2.8" fill="#F59E0B" />
    
    {/* Frosting layers */}
    <path
      d="M10 24C9 21.5 13 18.5 16 19.5C18 17 22 17 24 19.5C27 18.5 31 21.5 30 24C28 26.5 12 26.5 10 24Z"
      fill="#FF8FAB"
    />
    <path
      d="M12.5 20C12 17 16 14.5 18 15.5C19.5 13 22.5 13 24 15.5C26 14.5 28.5 17 27.5 20C26 21.5 14 21.5 12.5 20Z"
      fill="#FFB3C6"
    />
    <path
      d="M15.5 16C15 13 18 10.5 20 10.5C22 10.5 25 13 24.5 16C23 17.5 17 17.5 15.5 16Z"
      fill="#FFE4E6"
    />
    
    {/* Cherry on top */}
    <circle cx="20" cy="8.5" r="2.6" fill="#F43F5E" />
    <path d="M20.5 6.5C22 4 24 4.5 25 5" stroke="#4ADE80" strokeWidth="1" strokeLinecap="round" />
    
    {/* Tiny Sprinkles */}
    <circle cx="15" cy="19" r="0.8" fill="#67E8F9" />
    <circle cx="25" cy="18.5" r="0.8" fill="#FDE047" />
    <circle cx="20" cy="14" r="0.8" fill="#A78BFA" />
  </svg>
);

export const MacaronIcon = ({ size = 28, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Top shell */}
    <path
      d="M9 19C9 13.5 14 11 20 11C26 11 31 13.5 31 19C31 20.2 30 21 28.5 21C27 21 26 20.2 25 20.2C24 20.2 23 21 21.5 21C20 21 19 20.2 18 20.2C17 20.2 16 21 14.5 21C13 21 12 20.2 11 20.2C9.8 20.2 9 20.2 9 19Z"
      fill="#C4B5FD"
    />
    {/* Cream filling */}
    <rect x="9.5" y="20.5" width="21" height="3" rx="1.5" fill="#FFF1F2" />
    {/* Bottom shell */}
    <path
      d="M9 25C9 23.8 10 23 11.5 23C13 23 14 23.8 15 23.8C16 23.8 17 23 18.5 23C20 23 21 23.8 22 23.8C23 23.8 24 23 25.5 23C27 23 28 23.8 29 23.8C30.2 23.8 31 23.8 31 25C31 29 26 31 20 31C14 31 9 29 9 25Z"
      fill="#A78BFA"
    />
    {/* Subtle gloss */}
    <path
      d="M13 14.5C15 13 18 12.5 21 12.5"
      stroke="#FFFFFF"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.6"
    />
  </svg>
);

export const DonutIcon = ({ size = 28, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Dough */}
    <ellipse cx="20" cy="20" rx="14" ry="14" fill="#F59E0B" />
    {/* Frosting */}
    <path
      d="M20 6.5C27 6.5 33.5 12 33.5 19C33.5 22 31 22.5 30 25C29 27.5 26.5 27 25 29C23.5 31 21 33.5 19 33.5C16.5 33.5 16 31 14 30C12 29 9.5 30.5 8 28C6.5 25.5 6.5 22 6.5 19C6.5 12 13 6.5 20 6.5Z"
      fill="#FF8FAB"
    />
    {/* Center hole */}
    <circle cx="20" cy="20" r="4.5" fill="#0D0F14" />
    
    {/* Sprinkles */}
    <rect x="13" y="12" width="3" height="1.2" rx="0.6" transform="rotate(30 13 12)" fill="#67E8F9" />
    <rect x="23" y="10" width="3" height="1.2" rx="0.6" transform="rotate(-20 23 10)" fill="#FDE047" />
    <rect x="27" y="17" width="3" height="1.2" rx="0.6" transform="rotate(45 27 17)" fill="#C4B5FD" />
    <rect x="12" y="24" width="3" height="1.2" rx="0.6" transform="rotate(-40 12 24)" fill="#FFFFFF" />
    <rect x="23" y="26" width="3" height="1.2" rx="0.6" transform="rotate(15 23 26)" fill="#67E8F9" />
  </svg>
);

export const FrostingSwirl = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 3C8 3 5 6.5 5 10C5 13 7.5 15.5 11 15.5C14.5 15.5 17 13.5 17 10.5C17 8 15 6 12.5 6C10.5 6 9 7.5 9 9.5C9 11 10 12 11.5 12"
      stroke="#FF8FAB"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <circle cx="12" cy="2" r="1.5" fill="#F43F5E" />
  </svg>
);
