import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import AppTabs from './AppTabs';

const Root = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Root.Navigator screenOptions={{ headerShown: false }}>
      <Root.Screen name="AuthStack" component={AuthStack} />
      <Root.Screen name="AppTabs" component={AppTabs} />
    </Root.Navigator>
  );
}
