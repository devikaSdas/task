import React, { createContext, useContext, useState } from 'react';

// Create a context for authentication
const AuthContext = createContext();

// Custom hook to use the authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider to manage authentication state
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle user sign in
  const signIn = () => {
    // You can perform your authentication logic here
    // For example, setting isAuthenticated to true on successful login
    setIsAuthenticated(true);
  };

  // Function to handle user sign out
  const signOut = () => {
    // Perform logout logic - set isAuthenticated to false, clear tokens, etc.
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};