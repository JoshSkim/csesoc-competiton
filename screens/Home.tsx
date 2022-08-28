import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CourseTile from "../components/courseTile";
import CourseRow from "../components/courseRow";

const data = {
  id: "1",
  title: "Current Courses",
  courses: [
    {
      id: "1",
      courseName: "Data Structure and Algorithm",
      courseCode: "COMP2521",
    },
    {
      id: "2",
      courseName: "Data Structure and Algorithm",
      courseCode: "COMP2521",
    },
    {
      id: "3",
      courseName: "Data Structure and Algorithm",
      courseCode: "COMP2521",
    },
    {
      id: "4",
      courseName: "Data Structure and Algorithm",
      courseCode: "COMP2521",
    },
    {
      id: "5",
      courseName: "Data Structure and Algorithm",
      courseCode: "COMP2521",
    },
    {
      id: "6",
      courseName: "Data Structure and Algorithm",
      courseCode: "COMP2521",
    },
    {
      id: "7",
      courseName: "Data Structure and Algorithm",
      courseCode: "COMP2521",
    },
  ],
};
const Home = () => {
  return (
    <SafeAreaView>
      {/* the banner will be here */}
      <Text style={styles.title}>title</Text>
      <CourseRow title={data.title} courses={data.courses} />
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
