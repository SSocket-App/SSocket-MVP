import React, { useEffect } from 'react';
import { Alert, Platform } from 'react-native';
import { SessionAPI } from './session';
import { useNavigation } from '@react-navigation/native';
import type { AccountType } from './session';

// Splash gate: after ~3s, route based on session
export function withSplashGate<P>(Inner: React.ComponentType<P>) {
  return (props: P) => {
    const nav = useNavigation<any>();
    useEffect(() => {
      const t = setTimeout(() => {
        const session = SessionAPI.get();
        if (!session) {
          nav.reset({ index: 0, routes: [{ name: 'LoginPage' }] });
          return;
        }
        if (session.accountType === 'personal') {
          nav.reset({ index: 0, routes: [{ name: 'AppTabs', params: { accountType: 'personal' as AccountType } }] });
        } else {
          nav.reset({ index: 0, routes: [{ name: 'AppTabs', params: { accountType: 'business' as AccountType } }] });
        }
      }, 3000);
      return () => clearTimeout(t);
    }, [nav]);
    return <Inner {...props} />;
  };
}

// Verification stub gate: never blocks; shows a visible Continue button overlay is handled inside login/account choice screens.
// For DEV auto-advance ~1s after the screen mounts to the next step (Interest for personal; Feed for business).
export function useDevAutoAdvance(nextRoute: string, params?: any) {
  const nav = useNavigation<any>();
  useEffect(() => {
    const t = setTimeout(() => {
      nav.navigate(nextRoute as never, params as never);
    }, 1000);
    return () => clearTimeout(t);
  }, [nav, nextRoute, params]);
}

// ContractsPool restriction helper
export function enforceCompetitionRestriction(accountType: AccountType, attemptJoin: () => void) {
  if (accountType === 'business') {
    Alert.alert('Not Eligible', 'Business accounts cannot join competitions.');
  } else {
    attemptJoin();
  }
}
