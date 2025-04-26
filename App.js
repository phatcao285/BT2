// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Excercise4/Home';
import ProfileScreen from './Excercise4/Profile';
import SettingScreen from './Excercise4/Setting';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen name="Settings" component={SettingScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;