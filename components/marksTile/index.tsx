import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
export type marksTile = {
  name: string;
  marks: string;
};
const MarksTile = (props: { data: marksTile }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.data.name}</Text>
      <Text style={styles.title}>{props.data.marks}</Text>
    </View>
  );
};

export default MarksTile;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'space-between',
    borderRadius: 20,
  },

  title: {
    color: 'black',
    fontSize: 20,
  },
});
