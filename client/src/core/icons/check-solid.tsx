import React from 'react';
import { IconProps } from '../types/icon.type';
 
const CheckSolidIcon: React.FC<IconProps> = ({ color = 'black', width = '20px', height = '20px', styleClass = '' }) => {
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
    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
    </svg>
  );
};

export default CheckSolidIcon;
