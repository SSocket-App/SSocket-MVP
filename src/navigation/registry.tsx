import React from 'react';
import { View } from 'react-native';

// Tiny placeholder if missing (compile-only, no layout change inside real screens)
const Placeholder = () => <View style={{ flex: 1 }} />;

export const Screens: Record<string, React.ComponentType<any>> = {
  // Auth & Shell
  SplashScreen: Placeholder,
  LoginPage: Placeholder,
  AccountTypeChoicePage: Placeholder,
  InterestPage: Placeholder,

  // Feed & Core
  FeedPage: Placeholder,
  UserPostPage: Placeholder,
  UserProfilePage: Placeholder,
  EditProfilePage: Placeholder,
  SavedPage: Placeholder,
  SettingsPage: Placeholder,
  PrivacyPolicyPage: Placeholder,
  CustomerSupportPage: Placeholder,
  NotificationPage: Placeholder,
  MessagePage: Placeholder,
  HelpsPage: Placeholder,
  HelpReviewPage: Placeholder,
  ContactPage: Placeholder,

  // Track List
  TrackListPage: Placeholder,
  ThirdPartyProfilePage: Placeholder,
  ThirdPartyBusinessProfilePage: Placeholder,

  // Contracts (user-side)
  ContractsPool: Placeholder,
  MiniContractCardPage: Placeholder,
  MegaContractCardPage: Placeholder,
  MiniContractNegotiationPage: Placeholder,
  MiniContractNegotiationPage_Contractee: Placeholder,
  UserContractPage: Placeholder,
  UserMiniContracteePage: Placeholder,
  UserMiniContractorPage: Placeholder,
  UserListOfMegaContracts: Placeholder,
  UserListOfCompetitions: Placeholder,
  UserMegaContractReview: Placeholder,
  UserAchievementListPage: Placeholder,

  // Business (employer-side)
  BusinessProfilePage: Placeholder,
  BusinessContractsPage: Placeholder,
  BusinessMiniContractsPage: Placeholder,
  BusinessMegaContractsPage: Placeholder,
  BusinessMegaContractListPage: Placeholder,
  BusinessPendingMegaContractPage: Placeholder,
  BusinessMegaContractNegotiationPage: Placeholder,
  BusinessCreateMegaContractPage: Placeholder,
  BusinessCompetitionPage: Placeholder,
  BusinessCompetitionList: Placeholder,
  BusinessCompetitionReviewPage: Placeholder,
  BusinessContractsPool: Placeholder,

  // Stats
  StatsHub: Placeholder,
  MyMiniContractorStatsPage: Placeholder,
  MyMiniContracteeStatsPage: Placeholder,
  MyMegaContractorStatsPage: Placeholder,
  MyCompetitionStatsPage: Placeholder,
  MyHelpStatsPage: Placeholder,
  BusinessContractStatsPage: Placeholder,
  BusinessCompetitionStatsPage: Placeholder,
  ThirdPartyStatsPage: Placeholder,
  ThirdPartyBusinessContractStatsPage: Placeholder,
};
