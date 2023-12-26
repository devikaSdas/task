// App.js
import React from 'react';


import Nav from './src/navigation/Nav';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/store/AuthContext';
import LoginScreen from './src/screens/Login/LoginPage';


const App = () => {
  const isLoggedIn = true; // Replace this with your authentication logic

  return (
    <AuthProvider>
      <NavigationContainer>
        {isLoggedIn ? <Nav /> : <LoginScreen />}
        {/* Other components/screens */}
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;