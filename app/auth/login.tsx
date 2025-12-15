import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="px-6 pt-16">
        {/* Header */}
        <Pressable
          className="mb-8"
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </Pressable>

        {/* Title */}
        <View className="mb-12">
          <Text className="text-3xl font-bold mb-2">欢迎回来</Text>
          <Text className="text-gray-600">登录您的账号</Text>
        </View>

        {/* Form */}
        <View className="mb-6">
          {/* Email */}
          <View className="mb-4">
            <Text className="text-sm font-medium mb-2 text-gray-700">
              邮箱
            </Text>
            <TextInput
              className="border border-gray-300 rounded-lg px-4 py-3"
              placeholder="请输入邮箱"
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          {/* Password */}
          <View className="mb-6">
            <Text className="text-sm font-medium mb-2 text-gray-700">
              密码
            </Text>
            <TextInput
              className="border border-gray-300 rounded-lg px-4 py-3"
              placeholder="请输入密码"
              secureTextEntry
            />
          </View>

          {/* Login Button */}
          <Pressable
            className="bg-blue-500 py-4 rounded-lg active:bg-blue-600"
            onPress={() => router.replace('/(tabs)')}
          >
            <Text className="text-white text-center font-semibold text-base">
              登录
            </Text>
          </Pressable>
        </View>

        {/* Links */}
        <View className="flex-row justify-between">
          <Pressable onPress={() => {}}>
            <Text className="text-blue-500">忘记密码？</Text>
          </Pressable>
          <Pressable onPress={() => router.push('/auth/register')}>
            <Text className="text-blue-500">注册账号</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
