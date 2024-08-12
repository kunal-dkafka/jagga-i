// DraggableZoomableScatterPlot.js
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Svg, { Circle, Text, Line } from 'react-native-svg';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PinchGestureHandler,
  State,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const DraggableZoomableScatterPlot = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [chartDimensions, setChartDimensions] = useState({ width: 300, height: 300 });

  const width = chartDimensions.width;
  const height = chartDimensions.height;
  const margin = 30;

  const scale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const strategies = data.reduce((acc, strategy) => {
    strategy.stocks.forEach(stock => {
      acc.push({
        ...stock,
        strategy: strategy.strategy,
      });
    });
    return acc;
  }, []);

  const maxProfit = Math.max(...strategies.map(stock => stock["profit%"]));
  const maxRisk = Math.max(...strategies.map(stock => stock["risk%"]));
  const minProfit = Math.min(...strategies.map(stock => stock["profit%"]));
  const minRisk = Math.min(...strategies.map(stock => stock["risk%"]));

  const profitRange = maxProfit - minProfit;
  const riskRange = maxRisk - minRisk;

  const getColor = (likelihood) => {
    const red = 255 - (likelihood * 255);
    const green = likelihood * 255;
    return `rgb(${red}, ${green}, 0)`;
  };

  const getX = (profit) => {
    return margin + ((profit - minProfit) / profitRange) * (width - 2 * margin);
  };

  const getY = (risk) => {
    return height - margin - ((risk - minRisk) / riskRange) * (height - 2 * margin);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: scale.value },
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  const handlePinchGestureEvent = (event) => {
    scale.value = event.scale;
  };

  const handlePanGestureEvent = (event) => {
    if (selectedIndex === null) {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    }
  };

  const handlePanHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.state === State.END) {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View
        style={{ alignItems: 'center', justifyContent: 'center', marginTop: 50 }}
        onLayout={(event) => {
          const { width, height } = event.nativeEvent.layout;
          setChartDimensions({ width, height });
        }}
      >
        <PinchGestureHandler onGestureEvent={handlePinchGestureEvent}>
          <PanGestureHandler
            onGestureEvent={handlePanGestureEvent}
            onHandlerStateChange={handlePanHandlerStateChange}
          >
            <Animated.View style={animatedStyle}>
              <Svg width={width} height={height}>
                {/* Axes */}
                <Line
                  x1={margin}
                  y1={height - margin}
                  x2={width - margin}
                  y2={height - margin}
                  stroke="black"
                />
                <Line
                  x1={margin}
                  y1={margin}
                  x2={margin}
                  y2={height - margin}
                  stroke="black"
                />
                {/* Data points */}
                {strategies.map((stock, index) => (
                  <React.Fragment key={index}>
                    <Circle
                      cx={getX(stock["profit%"])}
                      cy={getY(stock["risk%"])}
                      r={5}
                      fill={getColor(stock.likelihood)}
                      onPress={() => setSelectedIndex(index)}
                    />
                    <Text
                      x={getX(stock["profit%"])}
                      y={getY(stock["risk%"])}
                      fontSize={10}
                      fill="black"
                      textAnchor="middle"
                    >
                      {stock.symbol}
                    </Text>
                  </React.Fragment>
                ))}
              </Svg>
            </Animated.View>
          </PanGestureHandler>
        </PinchGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

export default DraggableZoomableScatterPlot;
