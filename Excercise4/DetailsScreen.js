import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details Screen</Text>
      <Button
        mode="contained"
        onPress={() => navigation.goBack()}
        style={styles.button}
      >
        Go back to Home
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

export default DetailsScreen;