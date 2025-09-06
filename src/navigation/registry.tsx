import React from 'react';

type ScreenMap = Record<string, React.ComponentType<any>>;
const Screens: ScreenMap = {};

/* ========= Auth & Onboarding ========= */
// @ts-ignore
import Splash_Screen from '../../Splash Screen';
// @ts-ignore
import Login_Page from '../../Login Page';
// @ts-ignore
import Account_Type_Page from '../../Account type page';
// @ts-ignore
import Email_Verification_Page from '../../Email verification page';
// @ts-ignore
import Interest_Page from '../../Interest Page';

/* ========= Feed & Profiles ========= */
// @ts-ignore
import Feed_Page from '../../Feed Page';
// @ts-ignore
import Users_Post_Page from "../../User’s Post Page";
// @ts-ignore
import Users_Profile_Page from "../../User’s Profile Page";
// @ts-ignore
import Edit_Profile_Page from '../../Edit Profile Page';
// @ts-ignore
import Saved_Page from '../../Saved Page';
// @ts-ignore
import Message_Chat_Page from '../../Message / Chat Page';
// @ts-ignore
import Contact_Page from '../../Contact Page';
// @ts-ignore
import Third_Party_Profile_Page from "../../3rd Party’s Profile Page";
// @ts-ignore
import Third_Party_Interest_Page from "../../3rd Party’s Interest Page";
// @ts-ignore
import Business_Profile_Page from '../../Business Profile Page';

/* ========= Contracts ========= */
// @ts-ignore
import Contracts_Pool from '../../Contracts Pool';
// @ts-ignore
import Users_Contract_Page from "../../User’s Contract Page";
// @ts-ignore
import Users_Mini_Contractor_Page from "../../User’s Mini Contractor Page";
// @ts-ignore
import Users_Mini_Contractee_Page from "../../User’s Mini Contractee Page";
// @ts-ignore
import Mini_Contract_Negotiation_Page from '../../Mini Contract Negotiation Page';
// @ts-ignore
import Users_List_of_Mega_Contracts from "../../User’s List of Mega Contracts";
// @ts-ignore
import Users_Achievement_List_Page from "../../User’s Achievement List Page";
// @ts-ignore
import User_Mega_Contract_Review from '../../User Mega Contract Review';
// @ts-ignore
import Competitions_Page from '../../Competitions Page';
// @ts-ignore
import Users_Competition_Stat_Page from "../../User’s Competition Stat Page";
// @ts-ignore
import Business_Contracts_Page from '../../Business Contracts Page';
// @ts-ignore
import Business_Create_Mega_Contract_Page from '../../Business Create Mega Contract Page';
// @ts-ignore
import Business_Pending_Mega_Contract_Page from '../../Business Pending Mega Contract Page';
// @ts-ignore
import Business_List_of_Mega_Contracts from '../../Business List of Mega Contracts';
// @ts-ignore
import Business_Mega_Contract_Negotiation_Page from '../../Business Mega Contract Negotiation Page';
// @ts-ignore
import Business_Competition_Page from '../../Business Competition Page';
// @ts-ignore
import Business_Competition_Review_Page from '../../Business Competition Review Page';
// @ts-ignore
import Third_Party_Contract_Page from "../../3rd Party’s Contract Page";
// @ts-ignore
import Third_Party_Mini_Contract_Page from "../../3rd Party’s Mini Contract Page";
// @ts-ignore
import Third_Party_List_of_Mega_Contracts from '../../3rd party list of mega contract';
// @ts-ignore
import Third_Party_Achievement_List from '../../3rd party achievement list';

/* ========= Stats (from Profile) ========= */
// @ts-ignore
import User_Stat_Page_Pathway from '../../User Stat Page Pathway';
// @ts-ignore
import Help_Stat_Page from '../../Help Stat Page';
// @ts-ignore
import My_Mini_Contractor_Stat_Page from '../../My Mini-Contractor Stat Page';
// @ts-ignore
import My_Mini_Contractee_Stats_Page from '../../My Mini Contractee Stats Page';
// @ts-ignore
import My_Mega_Contractor_Stats_Page from '../../My Mega Contractor Stats Page';
// @ts-ignore
import Business_Contract_Stat_Page from '../../Business Contract Stat Page';
// @ts-ignore
import Third_Party_Track_List from '../../3rd Party Track List';
// @ts-ignore
import Third_Party_Stat_Page from '../../3rd party stat page';
// @ts-ignore
import Third_Party_Business_Contract_Stat_Page from '../../3rd party business contract stat page';

/* ========= Other ========= */
// @ts-ignore
import Notifications_Page from '../../Notifications Page';
// @ts-ignore
import Settings_Page from '../../Settings Page';
// @ts-ignore
import Privacy_Policy_Page from '../../Privacy Policy Page';
// @ts-ignore
import Customer_Support_Page from '../../Customer Support Page';
// @ts-ignore
import Helps_Page from '../../Helps Page';
// @ts-ignore
import Help_Review_Page from '../../Help Review Page';
// @ts-ignore
import Create_Help_Page from '../../Create Help Page';
// @ts-ignore
import Volunteer_Page from '../../Volunteer Page';

Object.assign(Screens, {
  // Auth
  'Splash Screen': Splash_Screen,
  'Login Page': Login_Page,
  'Account Type Page': Account_Type_Page,
  'Email Verification Page': Email_Verification_Page,
  'Interest Page': Interest_Page,

  // Feed & Profiles
  'Feed Page': Feed_Page,
  "User’s Post Page": Users_Post_Page,
  "User’s Profile Page": Users_Profile_Page,
  'Edit Profile Page': Edit_Profile_Page,
  'Saved Page': Saved_Page,
  'Message / Chat Page': Message_Chat_Page,
  'Contact Page': Contact_Page,
  "3rd Party’s Profile Page": Third_Party_Profile_Page,
  "3rd Party’s Interest Page": Third_Party_Interest_Page,
  'Business Profile Page': Business_Profile_Page,

  // Contracts
  'Contracts Pool': Contracts_Pool,
  "User’s Contract Page": Users_Contract_Page,
  "User’s Mini Contractor Page": Users_Mini_Contractor_Page,
  "User’s Mini Contractee Page": Users_Mini_Contractee_Page,
  'Mini Contract Negotiation Page': Mini_Contract_Negotiation_Page,
  "User’s List of Mega Contracts": Users_List_of_Mega_Contracts,
  "User’s Achievement List Page": Users_Achievement_List_Page,
  'User Mega Contract Review': User_Mega_Contract_Review,
  'Competitions Page': Competitions_Page,
  "User’s Competition Stat Page": Users_Competition_Stat_Page,
  'Business Contracts Page': Business_Contracts_Page,
  'Business Create Mega Contract Page': Business_Create_Mega_Contract_Page,
  'Business Pending Mega Contract Page': Business_Pending_Mega_Contract_Page,
  'Business List of Mega Contracts': Business_List_of_Mega_Contracts,
  'Business Mega Contract Negotiation Page': Business_Mega_Contract_Negotiation_Page,
  'Business Competition Page': Business_Competition_Page,
  'Business Competition Review Page': Business_Competition_Review_Page,
  "3rd Party’s Contract Page": Third_Party_Contract_Page,
  "3rd Party’s Mini Contract Page": Third_Party_Mini_Contract_Page,
  '3rd Party List of Mega Contracts': Third_Party_List_of_Mega_Contracts,
  '3rd Party Achievement List': Third_Party_Achievement_List,

  // Stats
  'User Stat Page Pathway': User_Stat_Page_Pathway,
  'Help Stat Page': Help_Stat_Page,
  'My Mini-Contractor Stat Page': My_Mini_Contractor_Stat_Page,
  'My Mini Contractee Stats Page': My_Mini_Contractee_Stats_Page,
  'My Mega Contractor Stats Page': My_Mega_Contractor_Stats_Page,
  'Business Contract Stat Page': Business_Contract_Stat_Page,
  '3rd Party Track List': Third_Party_Track_List,
  '3rd Party Stat Page': Third_Party_Stat_Page,
  '3rd Party Business Contract Stat Page': Third_Party_Business_Contract_Stat_Page,

  // Other
  'Notifications Page': Notifications_Page,
  'Settings Page': Settings_Page,
  'Privacy Policy Page': Privacy_Policy_Page,
  'Customer Support Page': Customer_Support_Page,
  'Helps Page': Helps_Page,
  'Help Review Page': Help_Review_Page,
  'Create Help Page': Create_Help_Page,
  'Volunteer Page': Volunteer_Page,

  // Additional mapping for Tab names
  'Track List Page': Third_Party_Track_List,
  'Notification Page': Notifications_Page
});

export default Screens;
