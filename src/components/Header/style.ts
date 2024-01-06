import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerFind: {
    marginTop: Platform.OS == "ios" ? 50 : 40,
    height: 150,
    width: "90%",
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: "#9400d3",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  inputIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    textAlign: "center",
    marginTop: 10,
    height: 30,
    width: 150,
    borderWidth: 1,
    borderRadius: 10,
  },
  icon: {
    flexDirection: "row",
    marginHorizontal: 5,
    marginTop: 5,
  },
});

export default styles;
