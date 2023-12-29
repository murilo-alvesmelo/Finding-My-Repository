import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import styles from "./style";

export default function Header(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerFind}>
        <Icon name="github" size={40} />
        <Text style={styles.headerText}>Finding My Repository</Text>
        <View style={styles.inputIcon}>
          <TextInput
            style={styles.input}
            value={props.name}
            onChangeText={props.isName}
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => (props.isSearch(props.name), Keyboard.dismiss())}
          >
            <Icon name="search" size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={props.isClear}>
            <Icon name="trash" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
