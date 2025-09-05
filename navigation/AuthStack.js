import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Attempt to import screens; if not found they will be undefined and fallback to Noop.
import SplashScreen from '../SplashScreen';
import LoginPage from '../LoginPage';
import AccountTypeChoicePage from '../AccountTypeChoicePage';
import InterestPage from '../InterestPage';

const Stack = createNativeStackNavigator();
const Noop = () => null;

/**
 * Authentication stack handles splash and login/signup flows.
 * Screens are stubbed to avoid import errors if the pages are missing.
 */
export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen || Noop} />
      <Stack.Screen name="LoginPage" component={LoginPage || Noop} />
      <Stack.Screen
        name="AccountTypeChoicePage"
        component={AccountTypeChoicePage || Noop}
      />
      <Stack.Screen name="InterestPage" component={InterestPage || Noop} />
    </Stack.Navigator>
  );
}
