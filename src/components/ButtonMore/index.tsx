import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import style from "./style";
import Animated from "react-native-reanimated";

type Props = {
  onPress: () => void;
};

/**
 * @description Componente que renderiza um botão com um ícone de lixeira
 * @param {Function} onPress Função que será executada ao pressionar o botão
 */
export default function ButtonMore({ onPress }: Props): JSX.Element {
  return (
    <TouchableOpacity style={style.button} onPress={onPress}>
      <Animated.View>
        <FontAwesomeIcon icon={["fas", "trash-can"]} size={20} color="#fff" />
      </Animated.View>
    </TouchableOpacity>
  );
}
