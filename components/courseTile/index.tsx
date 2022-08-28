import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import { course } from "../../types";

const CourseTile = (props: course) => {
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
