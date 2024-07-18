//Slider
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Slider as RSlider } from "@rneui/themed"; // Ensure you have this package installed

const SliderComp = ({
  min = 0, 
  max = 2000, 
  onValueChange, 
  initialValue = 0 
}) => {
  const [priceRangeValue, setPriceRangeValue] = useState(initialValue);

  const getBoxStyle = (min, max) => {
    return {
      ...styles.box,
      backgroundColor: priceRangeValue >= min && priceRangeValue <= max ? "#64B1B1" : "#b3b3b3",
    };
  };

  const handleValueChange = (value) => {
    setPriceRangeValue(value);
    if (onValueChange) {
      onValueChange(value);
    }
  };

  return (
    <View style={styles.sliderContainer}>
      <Text style={styles.marketCapText}>
        <Text style={styles.boldText}>Market Cap</Text> (in cr)
      </Text>
      <Text style={styles.startingPrice}>{min}</Text>
      <RSlider
        style={styles.priceRange}
        minimumValue={min}
        maximumValue={max}
        step={1}
        value={priceRangeValue}
        onValueChange={handleValueChange}
        thumbStyle={styles.priceRangets}
        thumbTintColor="#64B1B1" // Sky blue color for the slider thumb
        minimumTrackTintColor="#64B1B1" // Sky blue color for the minimum track
        maximumTrackTintColor="#b3b3b3"
      />
      <Text style={[styles.priceValue, { left: priceRangeValue === min ? '8%' : `${(priceRangeValue / max) * 100}%` }]}>
        {priceRangeValue.toLocaleString()}
      </Text>
      <View style={styles.boxContainer}>
        <View style={getBoxStyle(0, 500)}>
          <Text style={styles.boxText}>Small</Text>
        </View>
        <View style={getBoxStyle(501, 1000)}>
          <Text style={styles.boxText}>Med</Text>
        </View>
        <View style={getBoxStyle(1001, max)}>
          <Text style={styles.boxText}>Large</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    height: 200,
  },
  priceRangets: {
    height: 25,
    width: 25,
  },
  priceRange: {
    width: '100%',
  },
  marketCapText: {
    position: 'absolute',
    top: -30,
    left: 0,
    fontSize: 19,
    color: '#333',
  },
  boldText: {
    fontWeight: 'bold',
  },
  startingPrice: {
    position: 'absolute',
    left: 0,
    bottom: 150,
    fontSize: 16,
    color: '#333',
  },
  priceValue: {
    position: 'absolute',
    bottom: 135,
    fontSize: 16,
    color: '#333',
    transform: [{ translateX: -20 }],
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  box: {
    flex: 1,
    padding: 10,
    margin: 2,
    alignItems: 'center',
    borderRadius: 5,
  },
  boxText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SliderComp;
