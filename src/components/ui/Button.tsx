import React from 'react';
import { Pressable, Text, ActivityIndicator, View } from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export function Button({
  children,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  className = '',
}: ButtonProps) {
  const variantStyles = {
    primary: 'bg-blue-500 active:bg-blue-600',
    secondary: 'bg-gray-500 active:bg-gray-600',
    outline: 'border-2 border-blue-500 bg-transparent active:bg-blue-50',
    ghost: 'bg-transparent active:bg-gray-100',
  };

  const sizeStyles = {
    sm: 'py-2 px-4',
    md: 'py-3 px-6',
    lg: 'py-4 px-8',
  };

  const textVariantStyles = {
    primary: 'text-white',
    secondary: 'text-white',
    outline: 'text-blue-500',
    ghost: 'text-gray-700',
  };

  const textSizeStyles = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const disabledStyle = disabled || loading ? 'opacity-50' : '';
  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      className={`
        rounded-lg items-center justify-center
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${disabledStyle}
        ${widthStyle}
        ${className}
      `}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' || variant === 'ghost' ? '#3B82F6' : '#FFFFFF'} />
      ) : (
        <Text
          className={`
            font-semibold text-center
            ${textVariantStyles[variant]}
            ${textSizeStyles[size]}
          `}
        >
          {children}
        </Text>
      )}
    </Pressable>
  );
}
