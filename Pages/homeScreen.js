import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import ButtonComponent from '../Components/buttonComponent.js';
import NonAuthFlowLayout from '../Layouts/nonAuthFlowLayout';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/foxIcon.png')} style={styles.foxIcon} />
      <Text style={styles.text1}>Jagga Bhau</Text>
      <Text style={styles.text2}>Find today’s best trading opportunities</Text>
      <Text style={styles.text3}>with Jagga</Text>
<View style={styles.footer}>
 <ButtonComponent text="Let's Go" onPress={()=> navigation.navigate('NonAuthFlow')} />
    </View>
</View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyItems: 'center,'
  },
  foxIcon: {
    height: 205,
    width: 219, // 70% of screen width
    height: undefined, // Maintain aspect ratio
    aspectRatio: 1, // Adjust this based on your logo's aspect ratio
    padding: 10,
    marginTop: 55,
  },
  text1: {
    position: 'absolute',
    marginTop: 275, // Position the text at Y-axis 297
    fontSize: 20,
    color: '#666666',
    textAlign: 'center', // Center the text horizontally
  },
  text2: {
      position: 'absolute',
      marginTop: 345, // Position the text at Y-axis 297
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

footer: {
      position: 'absolute',  // Position the footer absolutely
      bottom: 90,  // Adjust this value as per your requirement
      left: 0,
      right: 0,
      alignItems: 'center',  // Center items horizontally
    },
});
