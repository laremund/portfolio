import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const variantClasses = {
  primary: 'text-white focus:ring-blue-500',
  secondary: 'text-white focus:ring-gray-500',
  outline: 'border-2 text-white focus:ring-white',
  ghost: 'focus:ring-blue-500'
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-3 text-lg'
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  target,
  rel,
  disabled = false,
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClass = variantClasses[variant];
  const sizeClass = sizeClasses[size];
  
  const buttonClasses = `${baseClasses} ${variantClass} ${sizeClass} ${className}`;

  // Define VS Code-style button styles
  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: '#0969da',
          color: '#ffffff',
          border: '1px solid #0969da'
        };
      case 'secondary':
        return {
          backgroundColor: '#21262d',
          color: '#ffffff',
          border: '1px solid #21262d'
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: '#ffffff',
          border: '2px solid #ffffff'
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: '#4fc1ff',
          border: 'none'
        };
      default:
        return {};
    }
  };

  const getHoverStyle = () => {
    switch (variant) {
      case 'primary':
        return { backgroundColor: '#0550ae' };
      case 'secondary':
        return { backgroundColor: '#30363d' };
      case 'outline':
        return { backgroundColor: '#ffffff', color: '#1e1e1e' };
      case 'ghost':
        return { color: '#6bb6ff' };
      default:
        return {};
    }
  };

  const buttonStyle = getButtonStyle();
  const hoverStyle = getHoverStyle();

  // If href is provided, render as anchor tag
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={buttonClasses}
        style={buttonStyle}
        onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
        onMouseLeave={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      style={buttonStyle}
      onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
      onMouseLeave={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
    >
      {children}
    </button>
  );
}
