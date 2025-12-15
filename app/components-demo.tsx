import { ScrollView, View, Text } from 'react-native';
import { useState } from 'react';
import { Header } from '@/components/common/Header';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { Loading } from '@/components/common/Loading';
import { EmptyState } from '@/components/common/EmptyState';

export default function ComponentsDemoScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <View className="flex-1 bg-gray-50">
      <Header title="组件展示" />

      <ScrollView className="flex-1">
        <View className="p-4 gap-6">
          {/* Button 组件示例 */}
          <Card>
            <Card.Header>
              <Text className="text-lg font-bold">Button 按钮</Text>
            </Card.Header>
            <Card.Content>
              <View className="gap-3">
                <Button variant="primary" onPress={() => alert('Primary')}>
                  Primary 按钮
                </Button>
                <Button variant="secondary" onPress={() => alert('Secondary')}>
                  Secondary 按钮
                </Button>
                <Button variant="outline" onPress={() => alert('Outline')}>
                  Outline 按钮
                </Button>
                <Button variant="ghost" onPress={() => alert('Ghost')}>
                  Ghost 按钮
                </Button>
                <Button
                  variant="primary"
                  loading={loading}
                  onPress={() => {
                    setLoading(true);
                    setTimeout(() => setLoading(false), 2000);
                  }}
                >
                  Loading 按钮
                </Button>
                <Button variant="primary" disabled>
                  Disabled 按钮
                </Button>
              </View>
            </Card.Content>
          </Card>

          {/* Input 组件示例 */}
          <Card>
            <Card.Header>
              <Text className="text-lg font-bold">Input 输入框</Text>
            </Card.Header>
            <Card.Content>
              <View className="gap-4">
                <Input
                  label="邮箱"
                  placeholder="请输入邮箱"
                  value={email}
                  onChangeText={setEmail}
                  leftIcon="mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />

                <Input
                  label="密码"
                  placeholder="请输入密码"
                  value={password}
                  onChangeText={setPassword}
                  leftIcon="lock-closed"
                  secureTextEntry
                />

                <Input
                  label="搜索"
                  placeholder="搜索..."
                  leftIcon="search"
                  rightIcon="close-circle"
                  onRightIconPress={() => {}}
                />

                <Input
                  label="禁用状态"
                  placeholder="不可编辑"
                  editable={false}
                  value="禁用的输入框"
                />

                <Input
                  label="错误状态"
                  placeholder="输入内容"
                  error="这是一条错误提示信息"
                />
              </View>
            </Card.Content>
          </Card>

          {/* Card 组件示例 */}
          <Card>
            <Card.Header>
              <Text className="text-lg font-bold">Card 卡片</Text>
            </Card.Header>
            <Card.Content>
              <View className="gap-3">
                <Card padding="sm">
                  <Text className="font-medium">Small Padding</Text>
                  <Text className="text-gray-600 text-sm">这是一个小内边距的卡片</Text>
                </Card>

                <Card padding="md">
                  <Text className="font-medium">Medium Padding (默认)</Text>
                  <Text className="text-gray-600 text-sm">这是一个中等内边距的卡片</Text>
                </Card>

                <Card padding="lg">
                  <Text className="font-medium">Large Padding</Text>
                  <Text className="text-gray-600 text-sm">这是一个大内边距的卡片</Text>
                </Card>

                <Card onPress={() => alert('卡片被点击')}>
                  <Text className="font-medium">可点击卡片</Text>
                  <Text className="text-gray-600 text-sm">点击我试试</Text>
                </Card>

                <Card>
                  <Card.Header>
                    <Text className="text-base font-bold">带分区的卡片</Text>
                  </Card.Header>
                  <Card.Content>
                    <Text className="text-gray-600">这是卡片内容区域</Text>
                  </Card.Content>
                  <Card.Footer>
                    <View className="flex-row gap-2">
                      <Button variant="outline" size="sm">取消</Button>
                      <Button variant="primary" size="sm">确认</Button>
                    </View>
                  </Card.Footer>
                </Card>
              </View>
            </Card.Content>
          </Card>

          {/* Loading 组件示例 */}
          <Card>
            <Card.Header>
              <Text className="text-lg font-bold">Loading 加载</Text>
            </Card.Header>
            <Card.Content>
              <View className="gap-4">
                <Loading text="加载中..." size="large" />
                <Loading text="处理中..." size="small" />
                <Loading text="" size="large" />
              </View>
            </Card.Content>
          </Card>

          {/* EmptyState 组件示例 */}
          <Card>
            <Card.Header>
              <Text className="text-lg font-bold">EmptyState 空状态</Text>
            </Card.Header>
            <Card.Content>
              <EmptyState
                icon="folder-open-outline"
                title="暂无数据"
                description="您还没有添加任何内容"
                actionText="立即添加"
                onAction={() => alert('添加内容')}
              />
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
}
