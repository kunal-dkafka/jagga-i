import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';

const { width } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('D:/DKafka/projects/ReactNativeStuff/Jagga/assets/foxIcon.png')} style={styles.foxIcon} />
      <Text style={styles.text1}>Jagga Bhau</Text>
      <Text style={styles.text2}>Find today’s best trading opportunities</Text>
      <Text style={styles.text3}>with Jagga</Text>
      <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Press Me</Text>
            </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  foxIcon: {
    height: 205,
    width: 219, // 70% of screen width
    height: undefined, // Maintain aspect ratio
    aspectRatio: 1, // Adjust this based on your logo's aspect ratio
    padding: 10,
    marginTop: 81,
  },
  text1: {
    position: 'absolute',
    marginTop: 305, // Position the text at Y-axis 297
    fontSize: 20,
    color: '#666666',
    textAlign: 'center', // Center the text horizontally
  },
  text2: {
      position: 'absolute',
      marginTop: 368, // Position the text at Y-axis 297
      fontSize: 36,
      padding: 15,
      color: '#4B4848',
      fontWeight: 'bold',
      textAlign: 'center', // Center the text horizontally
    },
    text3: {
        position: 'absolute',
        marginTop: 486, // Position the text at Y-axis 297
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#666666',
        textAlign: 'center', // Center the text horizontally
      },
    button: {
        position: 'absolute',
        marginTop: 800,
        width: width * 0.8, // 80% of screen width
        backgroundColor: '#64B1B1',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center', // Center text horizontally
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
});
