import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import Markdown from "react-native-markdown-package";
import markdownStyle from "./styleMarkDown";
import styles from "./style";

function MensageError() {
  return <Text style={styles.errorMsg}>Nenhum readme foi encontrado!</Text>;
}

export default function InfoRepos(props) {
  const [readme, setReadme] = useState();

  getReadme = async () => {
    axios
      .get(
        `https://raw.githubusercontent.com/${props.route.params.owner.login}/${props.route.params.name}/main/README.md`
      )
      .then((res) => setReadme(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getReadme();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{props.route.params.name}</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.commit}>
            <Text>Commits: {props.route.params.commits_url.length}</Text>
          </View>
          <View style={styles.commit}>
            <Text>Forks: {props.route.params.forks}</Text>
          </View>
        </View>
        <Text style={styles.subtitle}>
          Criado em:{" "}
          {moment(props.route.params.created_at).format("DD/MM/YYYY")}
        </Text>
        <Text style={styles.subtitle}>
          Ultima atualização: {moment(props.route.params.created_at).fromNow()}
        </Text>
        <Text style={styles.subtitle}>
          {props.route.params.description
            ? props.route.params.description
            : "Sem descrição"}
        </Text>
        {readme ? (
          <Markdown styles={markdownStyle.singleLineMd}>{readme}</Markdown>
        ) : (
          <MensageError />
        )}
      </View>
    </ScrollView>
  );
}
