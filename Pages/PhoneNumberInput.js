// PhoneNumberInput.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import NonAuthFlowLayout from '../Layouts/nonAuthFlowLayout';

const PhoneNumberInput = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNext = async () => {
    if (phoneNumber) {
      try {
        const response = await axios.post('http://10.0.2.2:3000/get-otp/', {
                  "PhoneNumber": phoneNumber,
                },);

        if (response.status === 200) {
          console.log(response.data);
          // Navigate to OTP Entry screen and pass the phoneNumber
          navigation.navigate('OtpScreen', { phoneNumber });
        } else {
          alert('Failed to send phone number. Please try again.');
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred. Please try again.');
      }
    } else {
      alert('Please enter a valid phone number');
    }
  };

  return (
  <NonAuthFlowLayout>
    <View style={styles.container}>
      <Text style={styles.label}>Enter your phone number</Text>
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Button title="Next" onPress={handleNext} />
    </View>
    </ NonAuthFlowLayout>
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

export default PhoneNumberInput;
