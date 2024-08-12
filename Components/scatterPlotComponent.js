// ScatterPlot.js
import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Text, Line } from 'react-native-svg';

const ScatterPlot = ({ data }) => {
  const width = 300;
  const height = 300;
  const margin = 30;

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

  const getColor = (likelihood) => {
    const red = 255 - (likelihood * 255);
    const green = likelihood * 255;
    return `rgb(${red}, ${green}, 0)`;
  };

  const getX = (profit) => {
    return margin + (profit / maxProfit) * (width - 2 * margin);
  };

  const getY = (risk) => {
    return height - margin - (risk / maxRisk) * (height - 2 * margin);
  };

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
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
    </View>
  );
};

export default ScatterPlot;
