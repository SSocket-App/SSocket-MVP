import React, { createContext, useContext, useState } from 'react';

// A simple context to hold session and account type information for navigation guards.
export const SessionContext = createContext({
  accountType: null,
  setAccountType: () => {},
  session: null,
  setSession: () => {},
});

export const SessionProvider = ({ children }) => {
  const [accountType, setAccountType] = useState(null);
  const [session, setSession] = useState(null);
  return (
    <SessionContext.Provider value={{ accountType, setAccountType, session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
};

// Hook for consuming session context.
export function useSession() {
  return useContext(SessionContext);
}
