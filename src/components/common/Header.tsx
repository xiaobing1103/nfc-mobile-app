import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  rightElement?: React.ReactNode;
}

export function Header({
  title,
  showBack = true,
  onBack,
  rightElement,
}: HeaderProps) {
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  return (
    <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
      {showBack ? (
        <Pressable
          onPress={handleBack}
          className="p-2 -ml-2 active:opacity-70"
        >
          <Ionicons name="chevron-back" size={24} color="#000" />
        </Pressable>
      ) : (
        <View className="w-8" />
      )}

      <Text className="flex-1 text-lg font-semibold text-center mx-2">
        {title}
      </Text>

      <View className="w-8">
        {rightElement}
      </View>
    </View>
  );
}
