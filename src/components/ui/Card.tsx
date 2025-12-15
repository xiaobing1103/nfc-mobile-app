import React from 'react';
import { View, Pressable, ViewStyle } from 'react-native';

interface CardProps {
  children: React.ReactNode;
  onPress?: () => void;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: boolean;
}

export function Card({
  children,
  onPress,
  className = '',
  padding = 'md',
  shadow = true,
}: CardProps) {
  const paddingStyles = {
    none: '',
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-6',
  };

  const baseClassName = `
    bg-white rounded-lg
    ${paddingStyles[padding]}
    ${shadow ? 'shadow-sm' : ''}
    ${className}
  `;

  // 如果有 onPress，使用 Pressable
  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        className={`${baseClassName} active:bg-gray-50`}
      >
        {children}
      </Pressable>
    );
  }

  // 否则使用普通 View
  return (
    <View className={baseClassName}>
      {children}
    </View>
  );
}

// Card 子组件
export function CardHeader({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <View className={`mb-3 ${className}`}>
      {children}
    </View>
  );
}

export function CardContent({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <View className={className}>
      {children}
    </View>
  );
}

export function CardFooter({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <View className={`mt-3 pt-3 border-t border-gray-200 ${className}`}>
      {children}
    </View>
  );
}

// 组合导出
Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;
