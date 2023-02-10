import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import  { View, Text, StyleSheet, ScrollView, Linking } from 'react-native'
import Markdown from "react-native-markdown-package";

export default function InfoRepos(props){

    const[readme, setReadme] = useState()

    useEffect(() => {
        axios.get(`https://raw.githubusercontent.com/${props.route.params.owner.login}/${props.route.params.name}/main/README.md`)
            .then(res => setReadme(res.data))
            .catch(err => console.log(err))
    })

    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>{props.route.params.name}</Text>
                <View style={{flexDirection: 'row',}}>
                    <View style={styles.commit}>
                        <Text>Commits: {(props.route.params.commits_url).length}</Text>
                    </View>
                    <View style={styles.commit}>
                        <Text>Forks: {(props.route.params.forks)}</Text>
                    </View>
                </View>
                <Text style={styles.subtitle}>Criado em: {moment(props.route.params.created_at).format('DD/MM/YYYY')}</Text>
                <Text style={styles.subtitle}>Ultima atualização: {moment(props.route.params.created_at).fromNow()}</Text>
                <Text style={styles.subtitle}>{props.route.params.description ? props.route.params.description : "Sem descrição"}</Text>
                <Markdown
                    styles={markdownStyle.singleLineMd}
                    >
                    {readme ? readme : 'Readme não encontrado.'}
                </Markdown>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: "bold"
    },
    subtitle: {
        marginTop: 10,
        fontSize: 16,
        marginBottom: 10,
    },
    commit: {
        borderWidth: 1,
        borderRadius: 10,
        margin: 5,
        width: 95,
        height: 20,
        backgroundColor: '#9400d3',
        justifyContent: 'center',
        alignItems: 'center',
    }

})

const markdownStyle = {
    singleLineMd: {
      heading1: {
        textAlign: 'center',
      },
      text: {
        textAlign: "left",
      },
      view: {
        alignSelf: 'stretch',
      },
      link: {
        color: 'black',
        fontWeight: 'bold'
      }
    },
};