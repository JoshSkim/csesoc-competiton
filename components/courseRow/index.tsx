import { View, Text, FlatList } from "react-native";
import React from "react";
import { course } from "../../types";
import CourseTile from "../courseTile";
import styles from "./styles";
export type courseRowProps = {
  title: string;
  courses: Array<course>;
};
const CourseRow = (props: courseRowProps) => {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        data={props.courses}
        renderItem={({ item }) => (
          <CourseTile
            courseCode={item.courseCode}
            courseName={item.courseName}
            id={item.id}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CourseRow;
