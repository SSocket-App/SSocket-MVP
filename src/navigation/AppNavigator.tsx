import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screens from './registry';

// Define session type for stub
 type SessionType = 'none' | 'personal' | 'business';

function useSessionStub(): [SessionType, React.Dispatch<React.SetStateAction<SessionType>>] {
  const [session, setSession] = useState<SessionType>('none');
  return [session, setSession];
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Feed stack
function FeedStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Feed Page" component={Screens['Feed Page']} />
      <Stack.Screen name="User’s Post Page" component={Screens["User’s Post Page"]} />
      <Stack.Screen name="User’s Profile Page" component={Screens["User’s Profile Page"]} />
      <Stack.Screen name="3rd Party’s Profile Page" component={Screens["3rd Party’s Profile Page"]} />
      <Stack.Screen name="Business Profile Page" component={Screens["Business Profile Page"]} />
      <Stack.Screen name="3rd Party’s Interest Page" component={Screens["3rd Party’s Interest Page"]} />
      <Stack.Screen name="Message / Chat Page" component={Screens["Message / Chat Page"]} />
      <Stack.Screen name="Contact Page" component={Screens["Contact Page"]} />
      <Stack.Screen name="Saved Page" component={Screens["Saved Page"]} />
      <Stack.Screen name="Create Help Page" component={Screens["Create Help Page"]} />
      <Stack.Screen name="Help Review Page" component={Screens["Help Review Page"]} />
      <Stack.Screen name="Helps Page" component={Screens["Helps Page"]} />
      <Stack.Screen name="Volunteer Page" component={Screens["Volunteer Page"]} />
    </Stack.Navigator>
  );
}

// Contracts stack
function ContractsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Contracts Pool" component={Screens["Contracts Pool"]} />
      <Stack.Screen name="User’s Contract Page" component={Screens["User’s Contract Page"]} />
      <Stack.Screen name="User’s Mini Contractor Page" component={Screens["User’s Mini Contractor Page"]} />
      <Stack.Screen name="User’s Mini Contractee Page" component={Screens["User’s Mini Contractee Page"]} />
      <Stack.Screen name="Mini Contract Negotiation Page" component={Screens["Mini Contract Negotiation Page"]} />
      <Stack.Screen name="User’s List of Mega Contracts" component={Screens["User’s List of Mega Contracts"]} />
      <Stack.Screen name="User’s Achievement List Page" component={Screens["User’s Achievement List Page"]} />
      <Stack.Screen name="User Mega Contract Review" component={Screens["User Mega Contract Review"]} />
      <Stack.Screen name="Competitions Page" component={Screens["Competitions Page"]} />
      <Stack.Screen name="User’s Competition Stat Page" component={Screens["User’s Competition Stat Page"]} />
      <Stack.Screen name="Business Contracts Page" component={Screens["Business Contracts Page"]} />
      <Stack.Screen name="Business Create Mega Contract Page" component={Screens["Business Create Mega Contract Page"]} />
      <Stack.Screen name="Business Pending Mega Contract Page" component={Screens["Business Pending Mega Contract Page"]} />
      <Stack.Screen name="Business List of Mega Contracts" component={Screens["Business List of Mega Contracts"]} />
      <Stack.Screen name="Business Mega Contract Negotiation Page" component={Screens["Business Mega Contract Negotiation Page"]} />
      <Stack.Screen name="Business Competition Page" component={Screens["Business Competition Page"]} />
      <Stack.Screen name="Business Competition Review Page" component={Screens["Business Competition Review Page"]} />
      <Stack.Screen name="3rd Party’s Contract Page" component={Screens["3rd Party’s Contract Page"]} />
      <Stack.Screen name="3rd Party’s Mini Contract Page" component={Screens["3rd Party’s Mini Contract Page"]} />
      <Stack.Screen name="3rd Party List of Mega Contracts" component={Screens["3rd Party List of Mega Contracts"]} />
      <Stack.Screen name="3rd Party Achievement List" component={Screens["3rd Party Achievement List"]} />
    </Stack.Navigator>
  );
}

// Track List stack
function TrackListStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Track List Page" component={Screens["Track List Page"]} />
      <Stack.Screen name="3rd Party’s Profile Page" component={Screens["3rd Party’s Profile Page"]} />
      <Stack.Screen name="3rd Party Stat Page" component={Screens["3rd Party Stat Page"]} />
      <Stack.Screen name="3rd Party Track List" component={Screens["3rd Party Track List"]} />
      <Stack.Screen name="3rd Party Business Contract Stat Page" component={Screens["3rd Party Business Contract Stat Page"]} />
      <Stack.Screen name="Business Profile Page" component={Screens["Business Profile Page"]} />
      <Stack.Screen name="Message / Chat Page" component={Screens["Message / Chat Page"]} />
      <Stack.Screen name="Contact Page" component={Screens["Contact Page"]} />
    </Stack.Navigator>
  );
}

// Notification stack
function NotificationStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Notification Page" component={Screens["Notification Page"]} />
    </Stack.Navigator>
  );
}

// Profile stack
function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="User’s Profile Page" component={Screens["User’s Profile Page"]} />
      <Stack.Screen name="Edit Profile Page" component={Screens["Edit Profile Page"]} />
      <Stack.Screen name="Saved Page" component={Screens["Saved Page"]} />
      <Stack.Screen name="Settings Page" component={Screens["Settings Page"]} />
      <Stack.Screen name="Privacy Policy Page" component={Screens["Privacy Policy Page"]} />
      <Stack.Screen name="Customer Support Page" component={Screens["Customer Support Page"]} />
      <Stack.Screen name="User Stat Page Pathway" component={Screens["User Stat Page Pathway"]} />
      <Stack.Screen name="Help Stat Page" component={Screens["Help Stat Page"]} />
      <Stack.Screen name="My Mini-Contractor Stat Page" component={Screens["My Mini-Contractor Stat Page"]} />
      <Stack.Screen name="My Mini Contractee Stats Page" component={Screens["My Mini Contractee Stats Page"]} />
      <Stack.Screen name="My Mega Contractor Stats Page" component={Screens["My Mega Contractor Stats Page"]} />
      <Stack.Screen name="Business Contract Stat Page" component={Screens["Business Contract Stat Page"]} />
    </Stack.Navigator>
  );
}

function AppTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Feed Page" component={FeedStack} />
      <Tab.Screen name="Contracts Pool" component={ContractsStack} />
      <Tab.Screen name="Track List Page" component={TrackListStack} />
      <Tab.Screen name="Notification Page" component={NotificationStack} />
      <Tab.Screen
        name="User’s Profile Page (Tab)"
        component={ProfileStack}
        options={{ tabBarLabel: "User’s Profile Page" }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const [session] = useSessionStub();
  const [routeState, setRouteState] = useState<'splash' | 'auth' | 'app'>('splash');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (session === 'none') {
        setRouteState('auth');
      } else {
        setRouteState('app');
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [session]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {routeState === 'splash' ? (
          <Stack.Screen name="Splash Screen" component={Screens["Splash Screen"]} />
        ) : routeState === 'auth' ? (
          <>
            <Stack.Screen name="Login Page" component={Screens["Login Page"]} />
            <Stack.Screen name="Account Type Page" component={Screens["Account Type Page"]} />
            <Stack.Screen name="Email Verification Page" component={Screens["Email Verification Page"]} />
            <Stack.Screen name="Interest Page" component={Screens["Interest Page"]} />
          </>
        ) : (
          <Stack.Screen name="AppTabs" component={AppTabs} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
