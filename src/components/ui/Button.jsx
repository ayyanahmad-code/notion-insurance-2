import React from 'react';
import { Loader2 } from 'lucide-react';

const Button = ({
  // Variants
  variant = 'primary',
  size = 'md',
  
  // Content
  children,
  icon: Icon,
  iconPosition = 'left',
  
  // States
  loading = false,
  disabled = false,
  fullWidth = false,
  
  // Actions
  onClick,
  type = 'button',
  
  // Styling
  className = '',
  
  // Accessibility
  ariaLabel,
}) => {
  
  // Variant configurations
  const variants = {
    // Solid variants
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm hover:shadow',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 active:bg-gray-800 shadow-sm hover:shadow',
    success: 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800 shadow-sm hover:shadow',
    danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 shadow-sm hover:shadow',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700 shadow-sm hover:shadow',
    
    // Outline variants
    outlinePrimary: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100',
    outlineSecondary: 'border-2 border-gray-600 text-gray-600 hover:bg-gray-50 active:bg-gray-100',
    outlineSuccess: 'border-2 border-green-600 text-green-600 hover:bg-green-50 active:bg-green-100',
    outlineDanger: 'border-2 border-red-600 text-red-600 hover:bg-red-50 active:bg-red-100',
    outlineWarning: 'border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50 active:bg-yellow-100',
    
    // Ghost variants
    ghostPrimary: 'text-blue-600 hover:bg-blue-50 active:bg-blue-100',
    ghostSecondary: 'text-gray-600 hover:bg-gray-50 active:bg-gray-100',
    ghostSuccess: 'text-green-600 hover:bg-green-50 active:bg-green-100',
    ghostDanger: 'text-red-600 hover:bg-red-50 active:bg-red-100',
    ghostWarning: 'text-yellow-600 hover:bg-yellow-50 active:bg-yellow-100',
    
    // Special variants
    gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg',
    link: 'text-blue-600 hover:text-blue-800 underline-offset-2 hover:underline',
  };
  
  // Size configurations
  const sizes = {
    xs: 'px-2.5 py-1.5 text-xs rounded gap-1.5',
    sm: 'px-3 py-2 text-sm rounded-lg gap-2',
    md: 'px-5 py-2.5 text-base rounded-lg gap-2',
    lg: 'px-6 py-3 text-lg rounded-xl gap-2.5',
    xl: 'px-8 py-4 text-xl rounded-xl gap-3',
  };
  
  // Icon size mapping
  const iconSizes = {
    xs: 14,
    sm: 16,
    md: 18,
    lg: 20,
    xl: 22,
  };
  
  // Base classes
  const baseClasses = `
    inline-flex items-center justify-center
    font-semibold
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
    ${fullWidth ? 'w-full' : ''}
    ${variants[variant] || variants.primary}
    ${sizes[size] || sizes.md}
    ${className}
  `;
  
  // Focus ring configurations
  const focusRings = {
    primary: 'focus:ring-blue-500',
    secondary: 'focus:ring-gray-500',
    success: 'focus:ring-green-500',
    danger: 'focus:ring-red-500',
    warning: 'focus:ring-yellow-500',
    outlinePrimary: 'focus:ring-blue-500',
    outlineSecondary: 'focus:ring-gray-500',
    outlineSuccess: 'focus:ring-green-500',
    outlineDanger: 'focus:ring-red-500',
    outlineWarning: 'focus:ring-yellow-500',
    ghostPrimary: 'focus:ring-blue-500',
    ghostSecondary: 'focus:ring-gray-500',
    gradient: 'focus:ring-purple-500',
    link: 'focus:ring-blue-500',
  };
  
  const focusRingClass = focusRings[variant] || 'focus:ring-blue-500';
  
  // Loading spinner component
  const LoadingSpinner = () => (
    <Loader2 
      className="animate-spin" 
      size={iconSizes[size]} 
      strokeWidth={2.5}
    />
  );
  
  // Handle click with loading state
  const handleClick = (e) => {
    if (loading || disabled) return;
    if (onClick) onClick(e);
  };
  
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled || loading}
      aria-label={ariaLabel || (typeof children === 'string' ? children : 'button')}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      className={`${baseClasses} ${focusRingClass}`}
    >
      {/* Left Icon */}
      {!loading && Icon && iconPosition === 'left' && (
        <Icon size={iconSizes[size]} strokeWidth={1.8} />
      )}
      
      {/* Loading Spinner */}
      {loading && <LoadingSpinner />}
      
      {/* Button Text */}
      {children && (
        <span className={loading ? 'opacity-80' : ''}>
          {children}
        </span>
      )}
      
      {/* Right Icon */}
      {!loading && Icon && iconPosition === 'right' && (
        <Icon size={iconSizes[size]} strokeWidth={1.8} />
      )}
    </button>
  );
};

export default Button;