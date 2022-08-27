import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
export type courseTileProp = {
  id: string;
  courseName: string;
  courseCode: string;
};
const CourseTile = (props: courseTileProp) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImg}
        source={{
          uri: "https://www.theglobeandmail.com/resizer/PPqCfbg6dR5yMrA_sAslmWB6ffs=/arc-anglerfish-tgam-prod-tgam/public/N6BYYJH7JNF4BO4QB327X5ONXE",
        }}
      >
        <Text style={styles.courseCode}>{props.courseCode}</Text>
        <Text style={styles.courseTitle}>{props.courseName}</Text>
      </ImageBackground>
    </View>
  );
};

export default CourseTile;
