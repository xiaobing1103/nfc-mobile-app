import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

const instance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL || 'http://192.168.1.4:3100/api',
  timeout: 10000,
});

// 请求拦截器
instance.interceptors.request.use(
  async (config) => {
    // 添加 token
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // 添加语言设置
    const lang = await AsyncStorage.getItem('language') || 'zh';
    config.headers['Accept-Language'] = lang;

    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 401:
          await AsyncStorage.removeItem('token');
          Toast.show({ type: 'error', text1: '登录已过期' });
          break;
        case 403:
          Toast.show({ type: 'error', text1: '没有权限' });
          break;
        case 500:
          Toast.show({ type: 'error', text1: '服务器错误' });
          break;
        default:
          Toast.show({ type: 'error', text1: data.message || '请求失败' });
      }
    } else {
      Toast.show({ type: 'error', text1: '网络错误' });
    }

    return Promise.reject(error);
  }
);

export default instance;
