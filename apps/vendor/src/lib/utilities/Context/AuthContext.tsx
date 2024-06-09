import { useCookies } from 'next-client-cookies';
import { createContext, type ReactNode, useEffect, useState } from 'react';



export const AuthContext = createContext<any>(null);
export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<any>();
  const Cookies = useCookies();
  const loggedInUser = Cookies.get('chit-user');

  useEffect(() => {
    if (loggedInUser !== undefined) {
      const user = JSON.parse(loggedInUser);
      setCurrentUser({
        uid: user?.id,
        displayName: user?.firstName,
        photoURL: user?.profilePicture,
      });
    }
  }, [loggedInUser]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValue = { currentUser, setCurrentUser };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
