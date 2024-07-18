// NonAuthCoreActionFlow.js
import React from 'react';
import { View, Dimensions, useWindowDimensions, Text, StyleSheet } from 'react-native';
import SmallLogo from '../Components/smallLogo';
import ButtonComponent from '../Components/buttonComponent';
import BackNavButton from '../Components/backNavButton';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const {width} = Dimensions.get('window');

const NonAuthFlowLayout= ({children}) => {
    const handleButtonPress = () => {
        console.log('Button pressed!');
      };

  return (
    <View style={styles.container}>
        <BackNavButton />
        <View styles={styles.centerContainer}>
             <SmallLogo />
        </View>


    { children }
    <View style={styles.footer}>
    <ButtonComponent text="Scan" onPress={()=> navigation.navigate('NonAuthFlow')} />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 55,},
header: {
    justifyContent: 'center',
    height: 100,
    width: width},
centerContainer: {
    alignItems: 'center',  // Center items horizontally
  },
  footer: {
      position: 'absolute',  // Position the footer absolutely
      bottom: 90,  // Adjust this value as per your requirement
      left: 0,
      right: 0,
      alignItems: 'center',  // Center items horizontally
    },
});

export default NonAuthFlowLayout;