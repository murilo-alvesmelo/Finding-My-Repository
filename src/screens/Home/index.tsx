import React, { useState } from "react";
import { FlatList } from "react-native";
import axios from "axios";
import * as Animatable from "react-native-animatable";
import Header from "../../components/Header";
import styles from "./style";
import Cards from "../../components/Cards";
import imagem from "../../../assets/pagenotfound.png";

export default function Home(props) {
  const [name, setName] = useState("murilo-alvesmelo");
  const [repos, setRepos] = useState([]);

  /**
   * @description Função para buscar os repositórios do usuário informado
   * @param {string} username
   */
  const searchGithub = (username) => {
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((res) => setRepos(res.data))
      .catch(() => setRepos(null));
  };

  /**
   * @description Função para limpar os campos de pesquisa
   */
  function clear() {
    setName("");
    setRepos([]);
  }

  return (
    <>
      <Header
        name={name}
        isName={(valor) => setName(valor)}
        isSearch={(username) => searchGithub(username)}
        isClear={clear}
      />
      {repos ? (
        <FlatList
          data={repos}
          renderItem={({ item, index }) => (
            <Cards index={index} {...item} {...props} />
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Animatable.Image
          animation="bounceInDown"
          duration={1500}
          style={styles.image}
          source={imagem}
        />
      )}
    </>
  );
}
