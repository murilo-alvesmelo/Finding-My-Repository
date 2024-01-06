import React from "react";
import Animated, { BounceIn } from "react-native-reanimated";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./style";

export default function Cards(props) {
  return (
    <Animated.View
      style={styles.container}
      entering={BounceIn.delay(300 * props.index)}
    >
      <View style={styles.Cards}>
        <View style={styles.CardsInside}>
          <Image
            style={styles.image}
            source={{ uri: props.owner.avatar_url }}
          />
          <Text style={styles.CardsTitle}>{props.name}</Text>
          <View style={styles.language}>
            <Text>{props.language ? props.language : "---"}</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate("InfoRepos", { ...props })}
          >
            <Text>Visualizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
}
