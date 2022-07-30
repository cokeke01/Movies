import React from 'react';
import { claim } from './auth.models';

const AuthenticationContext = React.createContext<{
  claims: claim[];
  update(claims: claim[]): void;
}>({ claims: [], update: () => {} });

export default AuthenticationContext;

// The update function will allow us to update the claim through the context, therefore making it easy to notify the entire application
// we will distribute our claims through the App component which is the parent component of all components
