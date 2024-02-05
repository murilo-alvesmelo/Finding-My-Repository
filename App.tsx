import { StatusBar } from "expo-status-bar";
import Nagivation from "./src/Navigation";
import { LogBox } from "react-native";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab);

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
