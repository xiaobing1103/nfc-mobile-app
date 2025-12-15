import { View, Text, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function IndexScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <View className="items-center mb-12">
        <Text className="text-4xl font-bold mb-2">NFC 数字名片</Text>
        <Text className="text-gray-600">React Native + Expo 版本</Text>
      </View>

      <View className="w-full max-w-sm gap-4">
        <Pressable
          className="bg-blue-500 py-4 rounded-lg active:bg-blue-600"
          onPress={() => router.push('/(tabs)')}
        >
          <Text className="text-white text-center font-semibold text-base">
            进入应用
          </Text>
        </Pressable>

        <Pressable
          className="border border-gray-300 py-4 rounded-lg active:bg-gray-50"
          onPress={() => router.push('/auth/login')}
        >
          <Text className="text-gray-700 text-center font-semibold text-base">
            登录
          </Text>
        </Pressable>

        <Pressable
          className="border border-blue-500 py-4 rounded-lg active:bg-blue-50"
          onPress={() => router.push('/components-demo')}
        >
          <Text className="text-blue-500 text-center font-semibold text-base">
            组件展示
          </Text>
        </Pressable>
      </View>

      <View className="absolute bottom-10">
        <Text className="text-gray-400 text-sm">版本 1.0.0</Text>
      </View>
    </View>
  );
}
