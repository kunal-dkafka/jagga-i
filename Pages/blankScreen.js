import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import ScatterPlot from '../Components/scatterPlotComponent';
import NonAuthFlowLayout from '../Layouts/nonAuthFlowLayout';

const { width } = Dimensions.get('window');
const data = [
               {
                 "strategy": "strategy1",
                 "stocks": [
                   {
                     "symbol": "stock1",
                     "profit%": 14.366369269759304,
                     "risk%": 6.93078266403507,
                     "likelihood": 0.877221940360214
                   },
                   {
                     "symbol": "stock2",
                     "profit%": 18.573765046711728,
                     "risk%": 5.666835864264193,
                     "likelihood": 0.8597974168580131
                   },
                   {
                     "symbol": "stock3",
                     "profit%": 9.836958614838782,
                     "risk%": 5.297631140565075,
                     "likelihood": 0.7493641096905403
                   },
                   {
                     "symbol": "stock4",
                     "profit%": 9.883000535862765,
                     "risk%": 9.768214522253718,
                     "likelihood": 0.8991241712797688
                   },
                   {
                     "symbol": "stock5",
                     "profit%": 15.407629193039325,
                     "risk%": 8.676618009517801,
                     "likelihood": 0.7699256310286627
                   }
                 ]
               },
               {
                 "strategy": "strategy2",
                 "stocks": [
                   {
                     "symbol": "stock1",
                     "profit%": 12.91323579033266,
                     "risk%": 10.020784206126129,
                     "likelihood": 0.752804118743436
                   },
                   {
                     "symbol": "stock2",
                     "profit%": 16.74770688667794,
                     "risk%": 10.648765518817378,
                     "likelihood": 0.8643682467207252
                   },
                   {
                     "symbol": "symbol",
                     "profit%": 10.58384068930653,
                     "risk%": 8.888737446702319,
                     "likelihood": 0.6099915243687664
                   },
                   {
                     "symbol": "stock4",
                     "profit%": 12.40928808653221,
                     "risk%": 10.508158884814314,
                     "likelihood": 0.6173275484217131
                   },
                   {
                     "symbol": "stock5",
                     "profit%": 13.269779517954833,
                     "risk%": 6.598901491258273,
                     "likelihood": 0.7014346440093948
                   }
                 ]
               },
               {
                 "strategy": "strategy3",
                 "stocks": [
                   {
                     "symbol": "stock1",
                     "profit%": 11.569,
                     "risk%": 7.234,
                     "likelihood": 0.98
                   },
                   {
                     "symbol": "stock2",
                     "profit%": 13.921,
                     "risk%": 9.187,
                     "likelihood": 0.82
                   },
                   {
                     "symbol": "stock3",
                     "profit%": 10.345,
                     "risk%": 6.572,
                     "likelihood": 0.68
                   },
                   {
                     "symbol": "stock4",
                     "profit%": 14.789,
                     "risk%": 8.321,
                     "likelihood": 0.79
                   },
                   {
                     "symbol": "stock5",
                     "profit%": 12.112,
                     "risk%": 7.956,
                     "likelihood": 0.73
                   }
                 ]
               }
             ]
;



export default function BlankScreen({ navigation }) {



  return (
    <NonAuthFlowLayout>
        <SafeAreaView style={{ flex: 1 }}>
              <ScatterPlot data={data} />
              <Text> Here </Text>
            </SafeAreaView>
    </NonAuthFlowLayout>
  );
}

const styles = StyleSheet.create({
  container: {
//    alignItems: 'center',
  },
  headerSpace: {
    height: 100,
  },
  text1: {
    fontStyle: 'italic',
    textAlign: 'right',
  },
  foxIcon: {
    height: 99,
    width: width * 0.3, // 70% of screen width
    height: undefined, // Maintain aspect ratio
    aspectRatio: 1, // Adjust this based on your logo's aspect ratio
    padding: 10,
    marginTop: 81,
  },

    button: {
        position: 'absolute',
        marginTop: 720,
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

    dropdown: {
      height: 50,
      width: 300,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
});