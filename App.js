import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigator from './AppNavigator';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <AppNavigator />
    </>
  );
}
