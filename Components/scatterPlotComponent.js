import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { VictoryScatter, VictoryChart } from 'victory-native';
import { VictoryTheme } from 'victory-native';

export default function ScatterPlotComponent() {

  return (
      <VictoryChart
        domain={{ x: [0, 5], y: [0, 7] }}
      >
        <VictoryScatter
          size={7}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 }
          ]}
        />
      </VictoryChart>);

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
