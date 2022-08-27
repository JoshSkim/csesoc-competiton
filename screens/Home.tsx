import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CourseTile from "../components/courseTile";
const Home = () => {
  return (
    <SafeAreaView>
      {/* the banner will be here */}
      <Text style={styles.title}>title</Text>
      <CourseTile
        id={"1"}
        courseCode={"COMP2521"}
        courseName={"Data Structures and Algorithms"}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: {
    fontSize: 100,
    color: "white",
  },
});
