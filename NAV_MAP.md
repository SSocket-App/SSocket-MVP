# NAV_MAP — SSocket MVP

## Template Rule
Any list or grid of similar items uses one screen route with an `{ id }` param
(and `mode` if needed). Example: every profile tap → `ThirdPartyProfilePage`
with `{ userId, mode:'thirdParty' }`.

## Routes (screens)

# Auth & Shell
SplashScreen
LoginPage
AccountTypeChoicePage
InterestPage   # PERSONAL ONLY (after email verification)

# Feed & Core
FeedPage
UserPostPage
UserProfilePage (own)
EditProfilePage
SavedPage
SettingsPage
PrivacyPolicyPage
CustomerSupportPage
NotificationPage
MessagePage
HelpsPage
HelpReviewPage
ContactPage

# Track List
TrackListPage
ThirdPartyProfilePage (mode=thirdParty-user)
ThirdPartyBusinessProfilePage (mode=thirdParty-business)

# Contracts (user-side)
ContractsPool
MiniContractCardPage
MegaContractCardPage           # star opt-in removed (keep non-tappable)
MiniContractNegotiationPage (role=contractor)
MiniContractNegotiationPage_Contractee (role=contractee)
UserContractPage
UserMiniContracteePage
UserMiniContractorPage
UserListOfMegaContracts
UserListOfCompetitions
UserMegaContractReview
UserAchievementListPage

# Business (employer-side)
BusinessProfilePage (own)
BusinessContractsPage
BusinessMiniContractsPage
BusinessMegaContractsPage
BusinessMegaContractListPage
BusinessPendingMegaContractPage
BusinessMegaContractNegotiationPage
BusinessCreateMegaContractPage
BusinessCompetitionPage
BusinessCompetitionList
BusinessCompetitionReviewPage
BusinessContractsPool

# Stats (both have stats, but different focus)
StatsHub
MyMiniContractorStatsPage
MyMiniContracteeStatsPage
MyMegaContractorStatsPage
MyCompetitionStatsPage
MyHelpStatsPage
BusinessContractStatsPage
BusinessCompetitionStatsPage
ThirdPartyStatsPage
ThirdPartyBusinessContractStatsPage

## Stacks & Tabs

RootStack:
  - AuthStack (headerShown: false)
    - SplashScreen
    - LoginPage
    - AccountTypeChoicePage
    - InterestPage (personal only)
  - AppTabs (headerShown: false)  # requires session

AppTabs:
  - FeedStack (initialRoute: FeedPage)
  - ContractsStack (initialRoute: ContractsPool)
  - TrackListStack (initialRoute: TrackListPage)
  - StatsStack (initialRoute: StatsHub)
  - NotificationsStack (initialRoute: NotificationPage)
  - SettingsStack (initialRoute: SettingsPage)

Per-stack:
- FeedStack → FeedPage, UserPostPage, UserProfilePage, EditProfilePage, SavedPage,
              HelpsPage, HelpReviewPage, MessagePage,
              ThirdPartyProfilePage, ThirdPartyBusinessProfilePage, ContactPage

- ContractsStack → ContractsPool, MiniContractCardPage, MegaContractCardPage,
                   MiniContractNegotiationPage, MiniContractNegotiationPage_Contractee,
                   UserContractPage, UserMiniContracteePage, UserMiniContractorPage,
                   UserListOfMegaContracts, UserListOfCompetitions, UserMegaContractReview,
                   UserAchievementListPage,
                   BusinessContractsPage, BusinessMiniContractsPage, BusinessMegaContractsPage,
                   BusinessMegaContractListPage, BusinessPendingMegaContractPage,
                   BusinessMegaContractNegotiationPage, BusinessCreateMegaContractPage,
                   BusinessCompetitionPage, BusinessCompetitionList, BusinessCompetitionReviewPage,
                   BusinessContractsPool

- TrackListStack → TrackListPage, ThirdPartyProfilePage, ThirdPartyBusinessProfilePage

- StatsStack → StatsHub, MyMiniContractorStatsPage, MyMiniContracteeStatsPage,
               MyMegaContractorStatsPage, MyCompetitionStatsPage, MyHelpStatsPage,
               BusinessContractStatsPage, BusinessCompetitionStatsPage,
               ThirdPartyStatsPage, ThirdPartyBusinessContractStatsPage

- NotificationsStack → NotificationPage

- SettingsStack → SettingsPage, PrivacyPolicyPage, CustomerSupportPage

## Guards / Conditions
- SplashScreen → after 3s:
  - if !session → LoginPage
  - if session.accountType === 'personal' → AppTabs (personal context)
  - if session.accountType === 'business' → AppTabs (business context)

- Post-verification (stub, never blocking):
  - Personal: Verification → InterestPage → Feed
  - Business: Verification → Feed (skip Interest)
  - Add visible "Continue to Feed" button; in dev auto-advance ~1s.

- ContractsPool restrictions:
  - personal: competition join visible
  - business: competition join hidden/disabled + “Not Eligible” dialog

## Route Params
- ThirdPartyProfilePage: { userId: string, mode: 'thirdParty' }
- ThirdPartyBusinessProfilePage: { businessId: string, mode: 'thirdParty' }
- UserPostPage: { postId: string }
- MiniContractCardPage: { contractId: string }
- MegaContractCardPage: { contractId: string }
- MiniContractNegotiationPage: { contractId: string, role: 'contractor' }
- MiniContractNegotiationPage_Contractee: { contractId: string, role: 'contractee' }
- UserAchievementListPage: { ownerId: string, scope: 'personal'|'business' }

## IGNORE
- Any files not listed above.
