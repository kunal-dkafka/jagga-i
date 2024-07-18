import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import DropDownComponent from '../Components/dropDownComponent';
import SmallLogo from '../Components/smallLogo';
import Heading2Text from '../Components/heading2Text';
import EmptySpace from '../Components/emptySpace';
import SliderComp from '../Components/Slider';
import NonAuthFlowLayout from '../Layouts/nonAuthFlowLayout';

const { width } = Dimensions.get('window');

export default function OpportunityScanPage({ navigation }) {



  return (
    <NonAuthFlowLayout>

    </NonAuthFlowLayout>
  );
}

const styles = StyleSheet.create({
  container: {
//    alignItems: 'center',
  },
  headerSpace: {
    height: 100,
  },
  text1: {
    fontStyle: 'italic',
    textAlign: 'right',
  },
  foxIcon: {
    height: 99,
    width: width * 0.3, // 70% of screen width
    height: undefined, // Maintain aspect ratio
    aspectRatio: 1, // Adjust this based on your logo's aspect ratio
    padding: 10,
    marginTop: 81,
  },

    button: {
        position: 'absolute',
        marginTop: 720,
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

    dropdown: {
      height: 50,
      width: 300,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
});