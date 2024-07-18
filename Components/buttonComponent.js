//import React from 'react';
//import { TouchableOpacity, StyleSheet, Dimensions, View, Text } from 'react-native';
//
//const { width } = Dimensions.get('window');
//
//function ButtonComponent(text) {
//
//    return(
//    <TouchableOpacity style={styles.button}>
//                  <Text style={styles.buttonText}>{text}</Text>
//                </TouchableOpacity>
//    )
//}
//
//const styles = StyleSheet.create({
//    button: {
//            position: 'absolute',
//            marginTop: 720,
//            width: width * 0.8, // 80% of screen width
//            backgroundColor: '#64B1B1',
//            padding: 15,
//            borderRadius: 10,
//            alignItems: 'center', // Center text horizontally
//          },
//          buttonText: {
//            color: 'white',
//            fontSize: 16,
//            fontWeight: 'bold',
//          },
//});
//
//export default ButtonComponent;

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ButtonComponent = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
            position: 'absolute',
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

export default ButtonComponent;