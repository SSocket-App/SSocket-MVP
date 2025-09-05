import React from 'react';

/* ========= Auth & shell ========= */
// @ts-ignore
import SplashPage from '../../Splash Page';
// @ts-ignore
import LoginPage from '../../Login page';
// @ts-ignore
import AccountTypeChoicePage from '../../Account type page';
// @ts-ignore
import InterestPage from '../../Interest page';

/* ========= Feed & core ========= */
// @ts-ignore
import FeedPage from '../../Feed Page';
// @ts-ignore
import UserPostPage from "../../User's Post Page";
// @ts-ignore
import UserProfilePage from "../../User's Profile Page";
// @ts-ignore
import EditProfilePage from '../../Edit Profile Page';
// @ts-ignore
import SavedPage from '../../Saved Page';
// @ts-ignore
import SettingsPage from '../../Settings Page';
// @ts-ignore
import PrivacyPolicyPage from '../../Privacy Policy Page';
// @ts-ignore
import CustomerSupportPage from '../../Customer Support Page';
// @ts-ignore
import NotificationPage from '../../Notification Page';
// @ts-ignore
import MessagePage from '../../Message Page';
// @ts-ignore
import HelpsPage from '../../Helps Page';
// @ts-ignore
import HelpReviewPage from '../../Help Review Page';
// @ts-ignore
import ContactPage from '../../Contact Page';

/* ========= Track list & 3rd-party ========= */
// @ts-ignore
import TrackListPage from '../../Track List Page';
// @ts-ignore
import ThirdPartyProfilePage from "../../3rd Party's Profile Page";
// @ts-ignore
import ThirdPartyBusinessProfilePage from "../../3rd Party's Business profile page";

/* ========= User contracts ========= */
// @ts-ignore
import ContractsPool from '../../Contracts Pool';
// @ts-ignore
import MiniContractCardPage from '../../Mini Contract List Page';
// @ts-ignore
import MegaContractCardPage from "../../User's list of mega contract";
// @ts-ignore
import MiniContractNegotiationPage from '../../Mini contract negotiation page';
// @ts-ignore
import MiniContractNegotiationPage_Contractee from '../../Mini contractor negotiation page';
// @ts-ignore
import UserContractPage from "../../User's Contract Page";
// @ts-ignore
import UserMiniContracteePage from "../../User's Mini Contractee Page";
// @ts-ignore
import UserMiniContractorPage from "../../User's Mini Contractor Page";
// @ts-ignore
import UserListOfMegaContracts from "../../User's list of mega contract";
// @ts-ignore
import UserListOfCompetitions from "../../User's competition page";
// @ts-ignore
import UserMegaContractReview from '../../User Mega Contract Review';
// @ts-ignore
import UserAchievementListPage from "../../User's achievement list page";

/* ========= Business side ========= */
// @ts-ignore
import BusinessProfilePage from '../../Business profile page';
// @ts-ignore
import BusinessContractsPage from '../../Business Contracts Page';
// @ts-ignore
import BusinessMiniContractsPage from '../../Business mini Contract Page';
// @ts-ignore
import BusinessMegaContractsPage from '../../Business Mega Contract';
// @ts-ignore
import BusinessMegaContractListPage from '../../Business list of mega contracts';
// @ts-ignore
import BusinessPendingMegaContractPage from '../../Business Pending mega contract page';
// @ts-ignore
import BusinessMegaContractNegotiationPage from '../../Business mega contract negotiation page';
// @ts-ignore
import BusinessCreateMegaContractPage from '../../Business Create Mega Contract Page';
// @ts-ignore
import BusinessCompetitionPage from '../../Business Competition Page';
// @ts-ignore
import BusinessCompetitionList from '../../Business competition list';
// @ts-ignore
import BusinessCompetitionReviewPage from '../../Business competition review page';
// @ts-ignore
import BusinessContractsPool from '../../Business contracts pool';

/* ========= Stats ========= */
// @ts-ignore
import StatsHub from '../../User Stat Page Pathway';
// @ts-ignore
import MyMiniContractorStatsPage from '../../My Mini-Contractor Stat Page';
// @ts-ignore
import MyMiniContracteeStatsPage from '../../My Mini Contractee Stats Page';
// @ts-ignore
import MyMegaContractorStatsPage from '../../My mega contractor stats page';
// @ts-ignore
import MyCompetitionStatsPage from "../../User's Competition stat page";
// @ts-ignore
import MyHelpStatsPage from '../../Help Stat Page';
// @ts-ignore
import BusinessContractStatsPage from '../../Business contract stat page';
// @ts-ignore
import BusinessCompetitionStatsPage from '../../Business competition stat page';
// @ts-ignore
import ThirdPartyStatsPage from '../../3rd party stat page';
// @ts-ignore
import ThirdPartyBusinessContractStatsPage from '../../3rd party business contract stat page';

export const Screens: Record<string, React.ComponentType<any>> = {
  // Auth & shell
  SplashScreen: SplashPage,
  LoginPage: LoginPage,
  AccountTypeChoicePage: AccountTypeChoicePage,
  InterestPage: InterestPage,

  // Feed & core
  FeedPage: FeedPage,
  UserPostPage: UserPostPage,
  UserProfilePage: UserProfilePage,
  EditProfilePage: EditProfilePage,
  SavedPage: SavedPage,
  SettingsPage: SettingsPage,
  PrivacyPolicyPage: PrivacyPolicyPage,
  CustomerSupportPage: CustomerSupportPage,
  NotificationPage: NotificationPage,
  MessagePage: MessagePage,
  HelpsPage: HelpsPage,
  HelpReviewPage: HelpReviewPage,
  ContactPage: ContactPage,

  // Track list & 3rd-party
  TrackListPage: TrackListPage,
  ThirdPartyProfilePage: ThirdPartyProfilePage,
  ThirdPartyBusinessProfilePage: ThirdPartyBusinessProfilePage,

  // User contracts
  ContractsPool: ContractsPool,
  MiniContractCardPage: MiniContractCardPage,
  MegaContractCardPage: MegaContractCardPage,
  MiniContractNegotiationPage: MiniContractNegotiationPage,
  MiniContractNegotiationPage_Contractee: MiniContractNegotiationPage_Contractee,
  UserContractPage: UserContractPage,
  UserMiniContracteePage: UserMiniContracteePage,
  UserMiniContractorPage: UserMiniContractorPage,
  UserListOfMegaContracts: UserListOfMegaContracts,
  UserListOfCompetitions: UserListOfCompetitions,
  UserMegaContractReview: UserMegaContractReview,
  UserAchievementListPage: UserAchievementListPage,

  // Business side
  BusinessProfilePage: BusinessProfilePage,
  BusinessContractsPage: BusinessContractsPage,
  BusinessMiniContractsPage: BusinessMiniContractsPage,
  BusinessMegaContractsPage: BusinessMegaContractsPage,
  BusinessMegaContractListPage: BusinessMegaContractListPage,
  BusinessPendingMegaContractPage: BusinessPendingMegaContractPage,
  BusinessMegaContractNegotiationPage: BusinessMegaContractNegotiationPage,
  BusinessCreateMegaContractPage: BusinessCreateMegaContractPage,
  BusinessCompetitionPage: BusinessCompetitionPage,
  BusinessCompetitionList: BusinessCompetitionList,
  BusinessCompetitionReviewPage: BusinessCompetitionReviewPage,
  BusinessContractsPool: BusinessContractsPool,

  // Stats
  StatsHub: StatsHub,
  MyMiniContractorStatsPage: MyMiniContractorStatsPage,
  MyMiniContracteeStatsPage: MyMiniContracteeStatsPage,
  MyMegaContractorStatsPage: MyMegaContractorStatsPage,
  MyCompetitionStatsPage: MyCompetitionStatsPage,
  MyHelpStatsPage: MyHelpStatsPage,
  BusinessContractStatsPage: BusinessContractStatsPage,
  BusinessCompetitionStatsPage: BusinessCompetitionStatsPage,
  ThirdPartyStatsPage: ThirdPartyStatsPage,
  ThirdPartyBusinessContractStatsPage: ThirdPartyBusinessContractStatsPage,
};
