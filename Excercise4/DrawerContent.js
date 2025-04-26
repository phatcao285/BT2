import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Drawer, Text, Avatar, Title, Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image 
            source={{
              uri: 'https://via.placeholder.com/150'
            }}
            size={50}
          />
          <Title style={styles.title}>John Doe</Title>
          <Caption style={styles.caption}>@johndoe</Caption>
        </View>

        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem 
            icon={({color, size}) => (
              <Icon name="home-outline" color={color} size={size} />
            )}
            label="Home"
            onPress={() => props.navigation.navigate('HomeStack')}
          />
          <DrawerItem 
            icon={({color, size}) => (
              <Icon name="account-outline" color={color} size={size} />
            )}
            label="Profile"
            onPress={() => props.navigation.navigate('Profile')}
          />
          <DrawerItem 
            icon={({color, size}) => (
              <Icon name="cog-outline" color={color} size={size} />
            )}
            label="Settings"
            onPress={() => props.navigation.navigate('Settings')}
          />
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    paddingTop: 20,
  },
  title: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  drawerSection: {
    marginTop: 15,
  },
});