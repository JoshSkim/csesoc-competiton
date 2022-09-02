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
