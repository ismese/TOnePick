import React from 'react';
import { View } from 'react-native';
import ProfilePage from './src/screens/profile/profile_page/ProfilePage';
import ListPage from './src/screens/profile/list_page/ListPage';

export default function App() {
  return (
    <View>
      <ProfilePage />
      <ListPage />
    </View>
  );
}
