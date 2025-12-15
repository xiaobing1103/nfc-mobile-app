import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '../ui/Button';

interface EmptyStateProps {
  icon?: keyof typeof Ionicons.glyphMap;
  title: string;
  description?: string;
  actionText?: string;
  onAction?: () => void;
  className?: string;
}

export function EmptyState({
  icon = 'file-tray-outline',
  title,
  description,
  actionText,
  onAction,
  className = '',
}: EmptyStateProps) {
  return (
    <View className={`items-center justify-center py-12 px-6 ${className}`}>
      <Ionicons name={icon} size={64} color="#D1D5DB" />

      <Text className="text-xl font-semibold text-gray-900 mt-4">
        {title}
      </Text>

      {description && (
        <Text className="text-gray-600 text-center mt-2">
          {description}
        </Text>
      )}

      {actionText && onAction && (
        <Button
          onPress={onAction}
          variant="primary"
          className="mt-6"
        >
          {actionText}
        </Button>
      )}
    </View>
  );
}
