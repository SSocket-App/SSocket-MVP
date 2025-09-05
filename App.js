/*
 * Entry point for the SSocket MVP React Native app.
 *
 * This file sets up a simple stack navigator on top of a bottom tab
 * navigator using React Navigation.  Screens are imported from the
 * existing page files in the repository.  No files were renamed when
 * wiring up navigation – instead we import them by their original
 * names (spaces and apostrophes included).
 *
 * The navigation theme uses the project’s black/white/yellow colour
 * palette.  Primary actions are highlighted in yellow, backgrounds are
 * black and text is white.  The root stack includes routes for the
 * bottom tab navigator plus detail views for user profiles, editing
 * profiles and mini/mega contract screens.
 */

import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Pull in existing screens from the repository.  These imports use
// double‑quoted strings because some file names contain single quotes.
import FeedScreen from "./Feed Page1";
import ContactsScreen from "./Contact Page";
import OtherUserProfileScreen from "./User's Profile Page";
import TrackListScreen from "./Track List Page";
import EditProfileScreen from "./Edit Profile Page";
import HelpStatsScreen from "./Help Stat Page";
import MiniContracteeScreen from "./User's Mini Contractee Page";
import MiniContractorScreen from "./User's Mini Contractor Page";
import MegaContractCreateScreen from "./Business Create Mega Contract Page";
import MegaContractNegotiationScreen from "./Business mega contract negotiation page";

// Define our colour palette
const YELLOW = "#FFD54A";
const BLACK = "#000";
const WHITE = "#FFF";

// Custom theme based on React Navigation’s default theme
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: YELLOW,
    background: BLACK,
    card: BLACK,
    text: WHITE,
    border: YELLOW,
    notification: YELLOW,
  },
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

/**
 * Bottom tab navigator configuration.
 *
 * Each tab is associated with one of the key application areas.  Icons
 * from Ionicons are used to give users visual cues for each tab.  The
 * tabBarActiveTintColor is set to our yellow to highlight the active
 * route and the inactive tint is white to maintain contrast against
 * the black background.
 */
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: BLACK },
        tabBarActiveTintColor: YELLOW,
        tabBarInactiveTintColor: WHITE,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case "Feed":
              iconName = "home-outline";
              break;
            case "Contacts":
              iconName = "people-outline";
              break;
            case "TrackList":
              iconName = "list-outline";
              break;
            case "HelpStats":
              iconName = "stats-chart-outline";
              break;
            default:
              iconName = "ellipse-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="TrackList" component={TrackListScreen} />
      <Tab.Screen name="HelpStats" component={HelpStatsScreen} />
    </Tab.Navigator>
  );
}

/**
 * Root stack navigator configuration.
 *
 * The first screen is the tab navigator itself.  Subsequent screens
 * represent deeper routes that can be pushed onto the stack.  Keeping
 * headerShown false for the tabs ensures we don’t render two headers
 * simultaneously.
 */
export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeTabs"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OtherUserProfile"
          component={OtherUserProfileScreen}
          options={{ title: "Profile" }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{ title: "Edit Profile" }}
        />
        <Stack.Screen
          name="MiniContractee"
          component={MiniContracteeScreen}
          options={{ title: "Mini Contract (Contractee)" }}
        />
        <Stack.Screen
          name="MiniContractor"
          component={MiniContractorScreen}
          options={{ title: "Mini Contract (Contractor)" }}
        />
        <Stack.Screen
          name="MegaContractCreate"
          component={MegaContractCreateScreen}
          options={{ title: "Create Mega Contract" }}
        />
        <Stack.Screen
          name="MegaContractNegotiation"
          component={MegaContractNegotiationScreen}
          options={{ title: "Mega Contract Negotiation" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}