import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Menu, Provider, Surface, TextInput } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
const AddCourse = () => {
  //states
  const [showDropDown, setShowDropDown] = useState(false);
  const [term, setTerm] = useState("");
  const termList = [
    {
      label: "T1",
      value: "T1",
    },
    {
      label: "T2",
      value: "T2",
    },
    {
      label: "T3",
      value: "T3",
    },
  ];
  return (
    <Provider>
      <SafeAreaView style={styles.container}>
        <Text style={[styles.title, { marginTop: 50 }]}>Enter Course Code</Text>
        <TextInput
          style={styles.textInput}
          mode="outlined"
          maxLength={8}
          placeholder="Enter Course Name"
          right={<TextInput.Affix text="/8" />}
        />
        <Text style={styles.title}>Enter Course Name</Text>
        <TextInput
          style={styles.textInput}
          mode="outlined"
          placeholder="Enter Course Name"
        />
        <View style={{ margin: 10 }}>
          <DropDown
            dropDownStyle={{ marginTop: -34 }}
            label={"Term"}
            mode={"outlined"}
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            value={term}
            setValue={setTerm}
            list={termList}
          />
        </View>
      </SafeAreaView>
    </Provider>
  );
};
export default AddCourse;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    margin: 10,

    color: "white",
    fontSize: 25,
  },
  textInput: {
    margin: 10,
  },
});
