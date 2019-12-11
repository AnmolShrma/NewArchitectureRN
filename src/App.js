import React from 'react';
import AppNavigation from './framework/AppNavigation';
import 'react-native-gesture-handler';
import {AuthProvider} from './context/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
};

export default App;
