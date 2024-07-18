// BackButton.js
import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BackNavButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
      <Image
        source={require('../assets/backArrow.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 2,
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default BackNavButton;
