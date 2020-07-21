import React, { ComponentType } from 'react';
import { User, UserManagerEvents, UserManager } from 'oidc-client';

export interface OidcContext {
  oidcUser: User | null;
  isEnabled: boolean;
  login: Function;
  loginSilent: Function;
  loginPopup: Function;
  logout: Function;
  events: UserManagerEvents;
  authenticating: ComponentType;
  isLoading: boolean;
  isLoggingOut: boolean;
  userManager: UserManager;
  error: string;
}

export const AuthenticationContext = React.createContext<OidcContext>(null);

export const useReactOidc = () => {
  const { isEnabled, login, loginSilent, loginPopup, logout, oidcUser, events } = React.useContext(
    AuthenticationContext
  );
  return { isEnabled, login, loginSilent, loginPopup, logout, oidcUser, events };
};
