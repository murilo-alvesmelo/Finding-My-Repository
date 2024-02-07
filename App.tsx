import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";
import Nagivation from "./src/routes/Navigation";
import "./src/utils/Fontawesome";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
  "fontFamily",
]);

export default function App() {
  return (
    <>
      <StatusBar hidden={true} />
      <Nagivation />
    </>
  );
}
