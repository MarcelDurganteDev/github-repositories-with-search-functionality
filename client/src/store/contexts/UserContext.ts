import { createContext } from 'react';


export const UserContext = createContext({
  isLoggedIn: false,
  performLogin: () => {
    return window.localStorage.setItem('isLoggedIn', 'true');
  },
  performLogout: () => {
    return window.localStorage.setItem('isLoggedIn', 'false');
  }
});
