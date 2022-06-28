import { createContext } from "react";

interface IUser {
  isLoggedIn: boolean;
  performLogin: () => void;
  performLogout: () => void;
}

export const UserContext = createContext<IUser>( {
  isLoggedIn: false,
  performLogin: () => { },
  performLogout: () => { }
} );