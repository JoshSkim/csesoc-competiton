import { SafeAreaView, StyleSheet, ScrollView, TextInput } from 'react-native';
import React, { FC, useState } from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Dropdown from '../components/Dropdown';

const AddCourse = () => {

  const [selected, setSelected] = useState(undefined);
  const data = [
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
    { label: 'Five', value: '5' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} 
    style={styles.scrollView}>
    <SafeAreaView>

    <Text style={styles.title}>Course Code</Text>
      <TextInput
        style={styles.input1}
        placeholder="Course Code"
        keyboardType="default"
        autoCapitalize='characters'
        maxLength= '8'
      />
    <Text style={styles.title}>Course Name</Text>
      <TextInput
        style={styles.input2}
        placeholder="Course Name"
        keyboardType="default"
        autoCapitalize='characters'
        maxLength= '100'
      />
    <Text style={styles.title}>Term Taken</Text>
      <Dropdown 
        label="Term Taken" 
        data={data} 
        onSelect={setSelected} 
        />
      <TextInput
        style={styles.input4}
        placeholder="Mark"
        keyboardType="default"
        autoCapitalize='characters'
        maxLength= '8'
      />
    </SafeAreaView>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    margin: 10,
    fontSize: 20,
    color: "white",
  },
  scrollView: {
    marginHorizontal: 0,
  },
  input1: {
    color: "white",
    height: 15,
    margin: 15,
    borderWidth: 1,
    padding: 0,
  },
  input2: {
    color: "white",
    height: 15,
    margin: 0,
    borderWidth: 1,
    padding: 0,
    textAlign: 'center',
  },
  input3: {
    color: "white",
    height: 180,
    margin: 0,
    borderWidth: 1,
    padding: 0,
    textAlign: 'center',
  },
  input4: {
    color: "white",
    height: 300,
    margin: 0,
    borderWidth: 1,
    padding: 0,
    textAlign: 'center',
  },
  scrollView: {
    marginHorizontal: 0,
  },
});

export default AddCourse;