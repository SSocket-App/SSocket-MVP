import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { RootStack } from './stacks';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#000', // matches SSocket black/white/yellow styling
  },
};

export default function AppNavigator() {
  return (
    <NavigationContainer theme={theme}>
      <RootStack />
    </NavigationContainer>
  );
}
