import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
} from "react-native";
import styles from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function Header({ isName, isSearch, isClear, name }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerFind}>
        <FontAwesomeIcon icon={["fab", "github"]} size={35} />
        <Text style={styles.headerText}>Finding My Repository</Text>
        <View style={styles.inputIcon}>
          <TextInput style={styles.input} value={name} onChangeText={isName} />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => (isSearch(name), Keyboard.dismiss())}
          >
            <FontAwesomeIcon icon={["fas", "magnifying-glass"]} size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={isClear}>
            <FontAwesomeIcon icon={["fas", "trash-can"]} size={25} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
