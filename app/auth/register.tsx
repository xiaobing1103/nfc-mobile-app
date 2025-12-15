import { View, Text } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

export default function RegisterScreen() {
  return (
    <View className="flex-1 bg-white px-6 pt-16">
      <Pressable onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </Pressable>
      <View className="flex-1 items-center justify-center">
        <Text className="text-xl font-semibold">注册页面</Text>
      </View>
    </View>
  );
}
