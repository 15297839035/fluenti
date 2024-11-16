"use client"
import React from 'react';
import { Button, ConfigProvider, Space, theme } from 'antd';
import RootLayout from './layout'
import {
  red,
  volcano,
  gold,
  yellow,
  lime,
  green,
  cyan,
  blue,
  geekblue,
  purple,
  magenta,
  grey,
} from '@ant-design/colors';
import { preloadModule } from 'react-dom';

const { darkAlgorithm } = theme;

const Home = () => (
  <div style={{padding: '20px', backgroundColor: '#000000'}}>
  <ConfigProvider
  theme={{
    algorithm: darkAlgorithm,
    token: {
      colorPrimary: cyan[3],
      borderRadius: 2,
      colorBgContainer: '#f6ffed',
    }
  }}
  >
  <Space>
    <Button type="primary">Button</Button>
  </Space>
  </ConfigProvider>
  </div>
);

export default Home;

