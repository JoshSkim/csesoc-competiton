import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
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

const data2 = {
  id: "1",
  title: "Past Courses",
  courses: [
    {
      id: "1",
      courseName: "Programming Fundamentals",
      courseCode: "COMP1511",
    },
    {
      id: "2",
      courseName: "Programming Fundamentals",
      courseCode: "COMP1511",
    },
    {
      id: "3",
      courseName: "Programming Fundamentals",
      courseCode: "COMP1511",
    },
    {
      id: "4",
      courseName: "Programming Fundamentals",
      courseCode: "COMP1511",
    },
    {
      id: "5",
      courseName: "Programming Fundamentals",
      courseCode: "COMP1511",
    },
    {
      id: "6",
      courseName: "Programming Fundamentals",
      courseCode: "COMP1511",
    },
    {
      id: "7",
      courseName: "Programming Fundamentals",
      courseCode: "COMP1511",
    },
  ],
};
const Home = () => {
  return (
    <SafeAreaView>
      {/* the banner will be here */}
      <Image
        source={require("../assets/images/logo.png")}
        style={styles2.bannerStyle}
      />
      <Text style={styles.title}>Course App</Text>
      <CourseRow title={data.title} courses={data.courses} />
      <CourseRow title={data2.title} courses={data2.courses} />
      <Text style={styles2.title}>WAM</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: "white",
  },
});
const styles2 = StyleSheet.create({
  title: {
    margin: 10,
    fontWeight: "bold",
    fontSize: 40,
    color: "white",
  },
  bannerStyle: {
    width: 300,
    height: 100,
    resizeMode: "contain",
  },
});
