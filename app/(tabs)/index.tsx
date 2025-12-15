import { View, Text, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-6">
        <Text className="text-2xl font-bold mb-4">首页</Text>
        <View className="bg-blue-50 p-4 rounded-lg">
          <Text className="text-lg font-semibold mb-2">欢迎使用 NFC 数字名片</Text>
          <Text className="text-gray-600">这是 React Native + Expo 版本</Text>
        </View>
      </View>
    </ScrollView>
  );
}
