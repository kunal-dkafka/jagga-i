import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import NonAuthFlowLayout from '../Layouts/nonAuthFlowLayout';

const OtpScreen = ({ navigation, route }) => {
  const { phoneNumber } = route.params;
  const [otp, setOtp] = useState('');

  const handleVerify = async () => {
    if (otp) {
      try {
        const response = await axios.post('http://10.0.2.2:3000/validate-otp/', {
                  "otp": otp,
                },);

        if (response.status === 200) {
          console.log(response.data);
          // Handle successful OTP verification (e.g., navigate to a dashboard)
          alert('OTP Verified Successfully!');
        } else {
          alert('Failed to verify OTP. Please try again.');
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred. Please try again.');
      }
    } else {
      alert('Please enter the OTP');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter the OTP sent to {phoneNumber}</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        placeholder="OTP"
        value={otp}
        onChangeText={setOtp}
      />
      <Button title="Verify" onPress={handleVerify} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    width: '80%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 16,
  },
});

export default OtpScreen;
