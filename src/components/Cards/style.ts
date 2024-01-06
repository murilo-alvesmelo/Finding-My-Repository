import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  Cards: {
    marginTop: Platform.OS == "ios" ? 30 : 40,
    marginBottom: 10,
    height: Platform.OS == "ios" ? 180 : 180,
    width: "90%",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#9400d3",
    justifyContent: "center",
  },
  CardsInside: {
    alignItems: "center",
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  CardsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  language: {
    backgroundColor: "#d3d3d3",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 5,
    width: 90,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#9400d3",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    height: 40,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
