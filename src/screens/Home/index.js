import React, { useState } from "react";
import { FlatList } from "react-native";
import axios from "axios";
import * as Animatable from "react-native-animatable";
import Header from "../../components/Header";
import styles from "./style";
import Cards from "../../components/Cards";

export default function Home(props) {
  const [name, setName] = useState("murilo-alvesmelo");
  const [repos, setRepos] = useState([]);

  const searchGithub = (n) => {
    axios
      .get(`https://api.github.com/users/${n}/repos`)
      .then((res) => setRepos(res.data))
      .catch((err) => setRepos(null));
  };

  function clear() {
    setName("");
    setRepos([]);
  }

  return (
    <>
      <Header
        name={name}
        isName={(valor) => setName(valor)}
        isSearch={(valor) => searchGithub(valor)}
        isClear={clear}
      />
      {repos ? (
        <FlatList
          data={repos}
          renderItem={({ item, index }) => (
            <Cards {...item} {...props} index={index} />
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Animatable.Image
          animation="bounceInDown"
          duration={1500}
          style={styles.image}
          source={require("../../../assets/pagenotfound.png")}
        />
      )}
    </>
  );
}
