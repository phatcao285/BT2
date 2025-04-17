import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const ResetPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    console.log('Reset password for:', email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSpacer} />
      
      <Text style={styles.headerText}>Reset your password</Text>

      <TextInput
        label="Enter email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
        left={<TextInput.Icon icon="email" />}
      />

      <Button
        mode="contained"
        onPress={handleResetPassword}
        style={styles.button}
        labelStyle={styles.buttonLabel}
      >
        Send Reset Email
      </Button>

      <TouchableOpacity 
        onPress={() => navigation.navigate('Login')}
        style={styles.linkContainer}
      >
        <Text style={styles.linkText}>Go back to Login</Text>
      </TouchableOpacity>
      
      {/* Add a larger spacer at the bottom to push everything up */}
      <View style={styles.bottomSpacer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // Remove justifyContent: 'center' to allow manual positioning
    backgroundColor: '#fff',
  },
  topSpacer: {
    height: 100, // Adjust this value to position the form as needed
  },
  bottomSpacer: {
    flex: 1, // This will push everything above it upward
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    paddingVertical: 8,
    backgroundColor: '#FF8C00',
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  linkText: {
    color: '#1976D2',
    fontSize: 16,
  },
});

export default ResetPasswordScreen;