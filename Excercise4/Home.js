import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Profile')}
        style={styles.button}
      >
        Go to Profile
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
  },
});

export default HomeScreen;