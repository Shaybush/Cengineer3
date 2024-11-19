
import React from 'react';
import { IconProps } from '../types/icon.type';
 
const LockSolidIcon: React.FC<IconProps> = ({ color = 'black', width = '20px', height = '20px', styleClass = '' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`transition duration-75 ${styleClass}`}
      width={width}
      height={height}
      fill={color}  
      viewBox="0 0 448 512" 
    >
    <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"/>
    </svg>
  );
};

export default LockSolidIcon;
