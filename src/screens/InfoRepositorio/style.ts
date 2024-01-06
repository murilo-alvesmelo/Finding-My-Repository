import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  commit: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    width: 95,
    height: 20,
    backgroundColor: "#9400d3",
    justifyContent: "center",
    alignItems: "center",
  },
  errorMsg: {
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 20,
  },
});

export default styles;
