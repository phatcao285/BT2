import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './Home';
import Profile from './Profile';
import Setting from './Setting';
import { DrawerContent } from './DrawerContent';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator 
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="HomeStack" component={HomeStack} options={{ title: 'Home' }} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Setting} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;