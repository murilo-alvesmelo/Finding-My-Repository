import { StatusBar } from "expo-status-bar";
import Nagivation from "./src/Navigation";
import { LogBox } from "react-native";

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
