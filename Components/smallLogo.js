import React from 'react';
import { Image, Dimensions, StyleSheet } from 'react-native';

function SmallLogo() {
  return (
    <Image source={require('../assets/foxIcon.png')} style={styles.foxIcon} />
  );
};

const styles = StyleSheet.create({
  foxIcon: {
  resizeMode: 'contain',
  height: 100,
  width: 200,
  }
});

export default SmallLogo;