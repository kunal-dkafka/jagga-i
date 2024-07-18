import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
//import * as Expo from 'expo-core';
import { VictoryScatter, VictoryChart, VictoryTheme } from 'victory-native';

const ScatterPlot = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from data1.json
    fetch('data1.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Scatter Plot from data1.json</Text>
      <VictoryChart
        theme={VictoryTheme.material}
        style={styles.chart}
      >
        <VictoryScatter
          data={data.map(item => ({ x: item.low, y: item.high }))}
          size={8}
          style={{
            data: { fill: '#FF5733' },
          }}
        />
      </VictoryChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chart: {
    width: '90%',
    height: 300,
  },
});

export default ScatterPlot;