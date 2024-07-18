// AppNavigator.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StrategyScanner from './strategyScannerPage'
import HomeScreen from './homeScreen';
import ScatterPlot from './scatterPlot';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="homeScreen" screenOptions={{headerShown: false}}>
        <Stack.Screen name="homeScreen" component={HomeScreen} />
        <Stack.Screen name="strategyScanner" component={StrategyScanner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
