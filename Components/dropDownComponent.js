import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';


const { width } = Dimensions.get('window');
const DropDownComponent = ({ items, altText, selectedValue, onValueChange }) => {
  return (
    <View style={styles.container}>
      <Dropdown
        data={items}
        labelField="label"
        valueField="value"
        placeholder={altText}
        value={selectedValue}
        onChange={item => onValueChange(item.value)}
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: 'center',
  },
  altText: {
    fontSize: 16,
    marginBottom: 10,
  },
  dropdown: {
    height: 50,
    width: width*0.8,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 18,
    color: '#666666',
    padding: 6,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
});

export default DropDownComponent;