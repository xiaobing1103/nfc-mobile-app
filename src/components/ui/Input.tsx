import React, { useState } from 'react';
import { View, Text, TextInput, TextInputProps, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  onRightIconPress?: () => void;
  containerClassName?: string;
}

export function Input({
  label,
  error,
  leftIcon,
  rightIcon,
  onRightIconPress,
  containerClassName = '',
  secureTextEntry,
  ...props
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const shouldShowPassword = secureTextEntry && !isPasswordVisible;
  const actualRightIcon = secureTextEntry
    ? (isPasswordVisible ? 'eye-off' : 'eye')
    : rightIcon;

  const handleRightIconPress = () => {
    if (secureTextEntry) {
      setIsPasswordVisible(!isPasswordVisible);
    } else if (onRightIconPress) {
      onRightIconPress();
    }
  };

  return (
    <View className={containerClassName}>
      {label && (
        <Text className="text-sm font-medium mb-2 text-gray-700">
          {label}
        </Text>
      )}

      <View
        className={`
          flex-row items-center border rounded-lg px-4 py-3
          ${error ? 'border-red-500' : isFocused ? 'border-blue-500' : 'border-gray-300'}
          ${props.editable === false ? 'bg-gray-100' : 'bg-white'}
        `}
      >
        {leftIcon && (
          <Ionicons
            name={leftIcon}
            size={20}
            color="#6B7280"
            style={{ marginRight: 8 }}
          />
        )}

        <TextInput
          className="flex-1 text-base text-gray-900"
          placeholderTextColor="#9CA3AF"
          secureTextEntry={shouldShowPassword}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />

        {actualRightIcon && (
          <Pressable
            onPress={handleRightIconPress}
            className="p-1 active:opacity-70"
          >
            <Ionicons
              name={actualRightIcon}
              size={20}
              color="#6B7280"
            />
          </Pressable>
        )}
      </View>

      {error && (
        <Text className="text-red-500 text-xs mt-1">
          {error}
        </Text>
      )}
    </View>
  );
}
