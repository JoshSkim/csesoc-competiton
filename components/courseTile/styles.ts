import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    margin: 10,
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
  },
  bgImg: {
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
  },
  courseCode: {
    fontWeight: "bold",

    fontSize: 23,
    color: "white",
  },
  courseTitle: {
    color: "white",
  },
});

export default styles;
