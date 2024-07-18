import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './Pages/homeScreen';
import NonAuthFlowLayout from './Layouts/nonAuthFlowLayout';
import StrategyScanner from './Pages/strategyScannerPage';
import OpportunityScanPage from './Pages/opportunityScanPage';


const NonAuthStack = createStackNavigator();
const AuthStack = createStackNavigator();

function NonAuthNavigator() {
  return (
    <NonAuthStack.Navigator screenOptions={{headerShown: false}}>
      <NonAuthStack.Screen name="StrategyScanner" component={StrategyScanner} />
      <NonAuthStack.Screen name="OpportunityScanPage" component={OpportunityScanPage} />
    </NonAuthStack.Navigator>
  );
}

const Stack = createStackNavigator();

const App = () => {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="NonAuthFlow" component={NonAuthNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }


export default App;
