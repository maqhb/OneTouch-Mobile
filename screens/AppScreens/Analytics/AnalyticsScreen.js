import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import AppText from '../../../components/AppTexts/AppText';

import Header from '../../../components/Header';
import Screen from '../../../components/Screen';

export default function AnalyticsScreen({navigation}) {
  const screenWidth = Dimensions.get('window').width;

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 56],
        color: (opacity = 1) => `rgba(49, 71, 107, ${opacity})`, // optional
        strokeWidth: 8, // optional
      },
    ],
    legend: ['Downlaod'], // optional
  };

  const chartConfig = {
    //backgroundGradientFrom: '#000',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(76, 196, 242, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  // pie chart data
  const pieChartData = [
    {
      name: 'Likes',
      population: 1000,
      color: '#26ABFF',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Shares',
      population: 2000,
      color: '#26AB',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Comments',
      population: 3000,
      color: '#31476B',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  return (
    <>
      <Header screenName="Analytics" hasBack={false} navigation={navigation} />
      <Screen feedBack={false}>
        <View style={{marginTop: 30, marginLeft: 20}}>
          <AppText style={styles.dashBoardText}>Dashboard</AppText>
        </View>
        <View style={styles.container}>
          <View style={styles.graphContainer}>
            <LineChart
              data={data}
              width={screenWidth - 40}
              height={256}
              chartConfig={chartConfig}
              withInnerLines={false}
              bezier
              withHorizontalLines={false}
              withVerticalLines={false}
              withHorizontalLabels={false}
            />
          </View>
          <View style={styles.pieChartContainer}>
            <PieChart
              data={pieChartData}
              width={screenWidth - 50}
              height={220}
              chartConfig={chartConfig}
              accessor={'population'}
              backgroundColor={'transparent'}
              paddingLeft={'15'}
              absolute
            />
          </View>
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  dashBoardText: {
    fontSize: 30,
  },

  container: {
    marginTop: 20,
    width: '100%',
    height: 600,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    //elevation: 2,
  },
  graphContainer: {
    width: '95%',
    marginTop: 30,
    height: 300,
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 5,
  },
  pieChartContainer: {
    width: '95%',
    marginTop: 30,
    height: 200,
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
