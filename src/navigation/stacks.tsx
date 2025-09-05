import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { withSplashGate } from './guards';
import { Screens } from './registry';
import type { AccountType } from './session';

const Root = createNativeStackNavigator();
const Auth = createNativeStackNavigator();
const Feed = createNativeStackNavigator();
const Contracts = createNativeStackNavigator();
const TrackList = createNativeStackNavigator();
const Stats = createNativeStackNavigator();
const Notifications = createNativeStackNavigator();
const Settings = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function AuthStack() {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name="SplashScreen" component={withSplashGate(Screens.SplashScreen)} />
      <Auth.Screen name="LoginPage" component={Screens.LoginPage} />
      <Auth.Screen name="AccountTypeChoicePage" component={Screens.AccountTypeChoicePage} />
      <Auth.Screen name="InterestPage" component={Screens.InterestPage} />
    </Auth.Navigator>
  );
}

function FeedStack() {
  return (
    <Feed.Navigator>
      <Feed.Screen name="FeedPage" component={Screens.FeedPage} />
      <Feed.Screen name="UserPostPage" component={Screens.UserPostPage} />
      <Feed.Screen name="UserProfilePage" component={Screens.UserProfilePage} />
      <Feed.Screen name="EditProfilePage" component={Screens.EditProfilePage} />
      <Feed.Screen name="SavedPage" component={Screens.SavedPage} />
      <Feed.Screen name="HelpsPage" component={Screens.HelpsPage} />
      <Feed.Screen name="HelpReviewPage" component={Screens.HelpReviewPage} />
      <Feed.Screen name="MessagePage" component={Screens.MessagePage} />
      <Feed.Screen name="ThirdPartyProfilePage" component={Screens.ThirdPartyProfilePage} />
      <Feed.Screen name="ThirdPartyBusinessProfilePage" component={Screens.ThirdPartyBusinessProfilePage} />
      <Feed.Screen name="ContactPage" component={Screens.ContactPage} />
    </Feed.Navigator>
  );
}

function ContractsStack() {
  return (
    <Contracts.Navigator>
      <Contracts.Screen name="ContractsPool" component={Screens.ContractsPool} />
      <Contracts.Screen name="MiniContractCardPage" component={Screens.MiniContractCardPage} />
      <Contracts.Screen name="MegaContractCardPage" component={Screens.MegaContractCardPage} />
      <Contracts.Screen name="MiniContractNegotiationPage" component={Screens.MiniContractNegotiationPage} />
      <Contracts.Screen name="MiniContractNegotiationPage_Contractee" component={Screens.MiniContractNegotiationPage_Contractee} />
      <Contracts.Screen name="UserContractPage" component={Screens.UserContractPage} />
      <Contracts.Screen name="UserMiniContracteePage" component={Screens.UserMiniContracteePage} />
      <Contracts.Screen name="UserMiniContractorPage" component={Screens.UserMiniContractorPage} />
      <Contracts.Screen name="UserListOfMegaContracts" component={Screens.UserListOfMegaContracts} />
      <Contracts.Screen name="UserListOfCompetitions" component={Screens.UserListOfCompetitions} />
      <Contracts.Screen name="UserMegaContractReview" component={Screens.UserMegaContractReview} />
      <Contracts.Screen name="UserAchievementListPage" component={Screens.UserAchievementListPage} />
      <Contracts.Screen name="BusinessContractsPage" component={Screens.BusinessContractsPage} />
      <Contracts.Screen name="BusinessMiniContractsPage" component={Screens.BusinessMiniContractsPage} />
      <Contracts.Screen name="BusinessMegaContractsPage" component={Screens.BusinessMegaContractsPage} />
      <Contracts.Screen name="BusinessMegaContractListPage" component={Screens.BusinessMegaContractListPage} />
      <Contracts.Screen name="BusinessPendingMegaContractPage" component={Screens.BusinessPendingMegaContractPage} />
      <Contracts.Screen name="BusinessMegaContractNegotiationPage" component={Screens.BusinessMegaContractNegotiationPage} />
      <Contracts.Screen name="BusinessCreateMegaContractPage" component={Screens.BusinessCreateMegaContractPage} />
      <Contracts.Screen name="BusinessCompetitionPage" component={Screens.BusinessCompetitionPage} />
      <Contracts.Screen name="BusinessCompetitionList" component={Screens.BusinessCompetitionList} />
      <Contracts.Screen name="BusinessCompetitionReviewPage" component={Screens.BusinessCompetitionReviewPage} />
      <Contracts.Screen name="BusinessContractsPool" component={Screens.BusinessContractsPool} />
    </Contracts.Navigator>
  );
}

function TrackListStack() {
  return (
    <TrackList.Navigator>
      <TrackList.Screen name="TrackListPage" component={Screens.TrackListPage} />
      <TrackList.Screen name="ThirdPartyProfilePage" component={Screens.ThirdPartyProfilePage} />
      <TrackList.Screen name="ThirdPartyBusinessProfilePage" component={Screens.ThirdPartyBusinessProfilePage} />
    </TrackList.Navigator>
  );
}

function StatsStack() {
  return (
    <Stats.Navigator>
      <Stats.Screen name="StatsHub" component={Screens.StatsHub} />
      <Stats.Screen name="MyMiniContractorStatsPage" component={Screens.MyMiniContractorStatsPage} />
      <Stats.Screen name="MyMiniContracteeStatsPage" component={Screens.MyMiniContracteeStatsPage} />
      <Stats.Screen name="MyMegaContractorStatsPage" component={Screens.MyMegaContractorStatsPage} />
      <Stats.Screen name="MyCompetitionStatsPage" component={Screens.MyCompetitionStatsPage} />
      <Stats.Screen name="MyHelpStatsPage" component={Screens.MyHelpStatsPage} />
      <Stats.Screen name="BusinessContractStatsPage" component={Screens.BusinessContractStatsPage} />
      <Stats.Screen name="BusinessCompetitionStatsPage" component={Screens.BusinessCompetitionStatsPage} />
      <Stats.Screen name="ThirdPartyStatsPage" component={Screens.ThirdPartyStatsPage} />
      <Stats.Screen name="ThirdPartyBusinessContractStatsPage" component={Screens.ThirdPartyBusinessContractStatsPage} />
    </Stats.Navigator>
  );
}

function NotificationsStack() {
  return (
    <Notifications.Navigator>
      <Notifications.Screen name="NotificationPage" component={Screens.NotificationPage} />
    </Notifications.Navigator>
  );
}

function SettingsStack() {
  return (
    <Settings.Navigator>
      <Settings.Screen name="SettingsPage" component={Screens.SettingsPage} />
      <Settings.Screen name="PrivacyPolicyPage" component={Screens.PrivacyPolicyPage} />
      <Settings.Screen name="CustomerSupportPage" component={Screens.CustomerSupportPage} />
    </Settings.Navigator>
  );
}

export function AppTabs({ route }: { route: any }) {
  const accountType: AccountType = route?.params?.accountType ?? 'personal';
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="FeedStack"
        component={FeedStack}
        initialParams={{ accountType }}
        options={{ title: 'Feed' }}
      />
      <Tabs.Screen
        name="ContractsStack"
        component={ContractsStack}
        initialParams={{ accountType }}
        options={{ title: 'Contracts' }}
      />
      <Tabs.Screen
        name="TrackListStack"
        component={TrackListStack}
        initialParams={{ accountType }}
        options={{ title: 'Track List' }}
      />
      <Tabs.Screen
        name="StatsStack"
        component={StatsStack}
        initialParams={{ accountType }}
        options={{ title: 'Stats' }}
      />
      <Tabs.Screen
        name="NotificationsStack"
        component={NotificationsStack}
        initialParams={{ accountType }}
        options={{ title: 'Alerts' }}
      />
      <Tabs.Screen
        name="SettingsStack"
        component={SettingsStack}
        initialParams={{ accountType }}
        options={{ title: 'Settings' }}
      />
    </Tabs.Navigator>
  );
}

export function RootStack() {
  return (
    <Root.Navigator screenOptions={{ headerShown: false }}>
      <Root.Screen name="AuthStack" component={AuthStack} />
      <Root.Screen name="AppTabs" component={AppTabs} />
    </Root.Navigator>
  );
}
