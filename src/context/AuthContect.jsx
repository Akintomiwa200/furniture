import React, { createContext, useState, useContext } from 'react';

// Create AuthContext to hold authentication state and methods
const AuthContext = createContext();

// AuthProvider component to wrap around the components that need access to authentication state
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to log in the user
  const login = (userData) => {
    // Your logic for authenticating the user goes here
    setUser(userData);
  };

  // Function to log out the user
  const logout = () => {
    // Your logic for logging out the user goes here
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
