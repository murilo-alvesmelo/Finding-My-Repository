import React from "react";
import { StyleSheet, View, Text, FlatList, Button } from "react-native";

export default function Cards(props){
    console.log(Object.keys(props))
    return(
        <View style={styles.container}>
            <View style={styles.Cards}>
                <View style={styles.CardsInside}>
                    <Text style={styles.CardsTitle}>{props.name}</Text>
                    <Button title="Visualizar" onPress={() => props.navigation.navigate('InfoRepos', {...props})}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    Cards: {
        marginTop: Platform.OS == 'ios' ? 30 : 40,
        marginBottom: 10,
        height: 150,
        width: '90%',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#9400d3',
    },
    CardsInside: {
        alignItems: 'center',
    },
    CardsTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 5,
    }
})