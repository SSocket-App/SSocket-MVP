export type AccountType = 'personal' | 'business';
export type Session =
  | null
  | {
      userId: string;
      accountType: AccountType;
    };

// In-memory session for MVP shell (no new libs).
// Real app can swap to AsyncStorage/secure store later without changing nav.
let _session: Session = null;

export const SessionAPI = {
  get: () => _session,
  set: (s: Session) => {
    _session = s;
  },
  clear: () => {
    _session = null;
  },
};
