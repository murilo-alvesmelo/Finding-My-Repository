import React from "react";
import  { View, Text, StyleSheet } from 'react-native'

export default function InfoRepos(props){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.route.params.name}</Text>
            <Text>Commits: {(props.route.params.commits_url).length}</Text>
            <Text style={styles.subtitle}>{props.route.params.description ? props.route.params.description : "Sem descrição"}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: "bold"
    },

})
