import React, { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import theme from './BUOI2/theme';
import LoginScreen from './BUOI2/LoginScreen';
import SignupScreen from './BUOI2/SignupScreen';
import ResetPasswordScreen from './BUOI2/ResetPasswordScreen';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Login');

  // Simple navigation function
  const navigate = (screenName) => {
    setCurrentScreen(screenName);
  };

  // Render the current screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'Login':
        return <LoginScreen navigation={{ navigate }} />;
      case 'Signup':
        return <SignupScreen navigation={{ navigate }} />;
      case 'ResetPassword':
        return <ResetPasswordScreen navigation={{ navigate }} />;
      default:
        return <LoginScreen navigation={{ navigate }} />;
    }
  };

  return (
    <PaperProvider theme={theme}>
      {renderScreen()}
    </PaperProvider>
  );
};

export default App;