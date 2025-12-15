import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

interface LoadingProps {
  text?: string;
  size?: 'small' | 'large';
  fullScreen?: boolean;
  className?: string;
}

export function Loading({
  text = '加载中...',
  size = 'large',
  fullScreen = false,
  className = '',
}: LoadingProps) {
  const containerClass = fullScreen
    ? 'flex-1 items-center justify-center bg-white'
    : `items-center justify-center py-8 ${className}`;

  return (
    <View className={containerClass}>
      <ActivityIndicator size={size} color="#1A7AE8" />
      {text && (
        <Text className="text-gray-600 mt-3 text-sm">
          {text}
        </Text>
      )}
    </View>
  );
}
