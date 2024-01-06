import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import Markdown from "react-native-markdown-package";
import styles from "./style";
import markdownStyle from "./styleMarkDown";

type Props = {
  route: {
    params: {
      owner: {
        login: string;
      };
      name: string;
      commits_url: string;
      forks: number;
      created_at: string;
      description: string;
    };
  };
};

function MensageError() {
  return <Text style={styles.errorMsg}>Nenhum readme foi encontrado!</Text>;
}

export default function InfoRepos({
  route: {
    params: {
      owner: { login },
      name,
      commits_url,
      forks,
      created_at,
      description,
    },
  },
}: Props): JSX.Element {
  const [readme, setReadme] = useState();

  const getReadme = async () => {
    try {
      axios
        .get(
          `https://raw.githubusercontent.com/${login}/${name}/main/README.md`
        )
        .then((res) => setReadme(res.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getReadme();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.commit}>
            <Text>Commits: {commits_url.length}</Text>
          </View>
          <View style={styles.commit}>
            <Text>Forks: {forks}</Text>
          </View>
        </View>
        <Text style={styles.subtitle}>
          Criado em: {moment(created_at).format("DD/MM/YYYY")}
        </Text>
        <Text style={styles.subtitle}>
          Ultima atualização: {moment(created_at).fromNow()}
        </Text>
        <Text style={styles.subtitle}>
          {description ? description : "Sem descrição"}
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
