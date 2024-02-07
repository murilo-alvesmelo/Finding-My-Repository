import React from "react";
import { View, Text, Alert } from "react-native";
import ButtonMore from "../../components/ButtonMore";
import style from "./style";

/**
 * @description Tela de histórico de pesquisas
 * @returns {JSX.Element} Tela de histórico
 */
export default function Historico(): JSX.Element {
  async function clearHistory() {
    return Alert.alert(
      "Limpar histórico",
      "Deseja realmente limpar o histórico?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Limpar",
          style: "destructive",
        },
      ]
    );
  }

  return (
    <View style={style.container}>
      <Text>Historico</Text>
      <ButtonMore onPress={clearHistory} />
    </View>
  );
}
