import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Dimensions } from 'react-native';
import React, {useState} from 'react';
import Slider from '@react-native-community/slider';

const { width } = Dimensions.get('window');

const SliderComp = ({ maxValue }) => {
const [value, setValue] = useState(0);

  const onChange = (newValue) => {
    setValue(newValue);
  };



  return (
  <View style={styles.container}>
      <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={maxValue}
              value={value}
              onSlidingComplete={onChange}
            />
  </View>
  );
};

const styles = StyleSheet.create({
container: {
alignItems: 'center'
},
  slider: {
    width: width*0.8,
    height: 40,
  },
});

export default SliderComp;