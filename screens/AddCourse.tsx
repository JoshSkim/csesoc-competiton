import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Menu, Provider, Surface, TextInput } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
const AddCourse = () => {
  //states
  const [showDropDown, setShowDropDown] = useState(false);
  const [term, setTerm] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [courseName, setCourseName] = useState("");
  const termList = [
    {
      label: "16T1",
      value: "16T1",
    },
    {
      label: "16T2",
      value: "16T2",
    },
    {
      label: "17T1",
      value: "17T1",
    },
    {
      label: "17T2",
      value: "17T2",
    },
    {
      label: "18T1",
      value: "18T1",
    },
    {
      label: "18T2",
      value: "18T2",
    },
    {
      label: "19T1",
      value: "19T1",
    },
    {
      label: "19T2",
      value: "19T2",
    },
    {
      label: "19T3",
      value: "19T3",
    },
    {
      label: "20T1",
      value: "20T1",
    },
    {
      label: "20T2",
      value: "20T2",
    },
    {
      label: "20T3",
      value: "20T3",
    },
    {
      label: "21T1",
      value: "21T1",
    },
    {
      label: "21T2",
      value: "21T2",
    },
    {
      label: "21T3",
      value: "21T3",
    },
    {
      label: "22T1",
      value: "22T1",
    },
    {
      label: "22T2",
      value: "22T2",
    },
    {
      label: "22T3",
      value: "22T3",
    },
    {
      label: "23T1",
      value: "23T1",
    },
    {
      label: "23T2",
      value: "23T2",
    },
    {
      label: "23T3",
      value: "23T3",
    },
  ];
  // function after button add course
  const onPress = () => {
    console.log(term);
    console.log(courseCode);
    console.log(courseName);
    Alert.alert(
      `course code ${courseCode} course name ${courseName} course term ${term}`
    );
  };
  return (
    <Provider>
      <SafeAreaView style={styles.container}>
        <Text style={[styles.title, { marginTop: 50 }]}>Enter Course Code</Text>
        <TextInput
          style={styles.textInput}
          mode="outlined"
          maxLength={8}
          onChangeText={(text) => setCourseCode(text)}
          placeholder="Enter Course Name"
          right={<TextInput.Affix text="/8" />}
        />
        <Text style={styles.title}>Enter Course Name</Text>
        <TextInput
          onChangeText={(text) => setCourseName(text)}
          style={styles.textInput}
          mode="outlined"
          placeholder="Enter Course Name"
        />
        <View style={{ width: 350, margin: 10 }}>
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
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
            Add Course
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Provider>
  );
};
export default AddCourse;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 20,
    alignItems: "center",
  },
  title: {
    margin: 10,

    color: "white",
    fontSize: 25,
  },
  textInput: {
    margin: 10,
    width: 350,
  },
  button: {
    margin: 10,
    backgroundColor: "white",
    width: 150,
    padding: 10,
    alignItems: "center",
    borderRadius: 20,
  },
});
