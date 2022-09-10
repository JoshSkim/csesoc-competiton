import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { ChartData } from 'react-native-chart-kit/dist/HelperTypes';
const AssBarChart = (props: { data: ChartData }) => {
  return (
    <>
      <Text style={styles.header}>Bar Chart</Text>
      <BarChart
        data={props.data}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 5,
          },
        }}
        style={{
          marginVertical: 4,
          borderRadius: 8,
        }}
      />
    </>
  );
};

export default AssBarChart;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
});
