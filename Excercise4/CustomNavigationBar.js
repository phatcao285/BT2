import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';

const CustomNavigationBar = ({ navigation, back, options }) => {
  const title = options.title !== undefined ? options.title : useRoute().name;

  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : (
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
      )}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default CustomNavigationBar;