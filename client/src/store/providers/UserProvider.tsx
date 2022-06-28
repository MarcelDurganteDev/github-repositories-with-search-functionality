import { FC, PropsWithChildren, useState } from 'react';
import { UserContext } from '../contexts/UserContext';

interface UserProviderProps { };

export const UserProvider: FC<PropsWithChildren<UserProviderProps>> = ( { children } ) => {

  const [isLoggedIn, setLoggedIn] = useState( false );
  
  const performLogin = () => setLoggedIn( true );
  const performLogout = () => setLoggedIn( false );

  return (

    <UserContext.Provider value={{isLoggedIn, performLogin, performLogout }}>
      {children}
    </UserContext.Provider>

  );
}