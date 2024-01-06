import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import styles from "./style";

export default function Header({ isName, isSearch, isClear, name }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerFind}>
        <Icon name="github" size={40} />
        <Text style={styles.headerText}>Finding My Repository</Text>
        <View style={styles.inputIcon}>
          <TextInput style={styles.input} value={name} onChangeText={isName} />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => (isSearch(name), Keyboard.dismiss())}
          >
            <Icon name="search" size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={isClear}>
            <Icon name="trash" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
