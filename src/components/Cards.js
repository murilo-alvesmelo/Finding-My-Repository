import React from "react";
import { StyleSheet, View, Text, FlatList, Button, TouchableOpacity, Image, Platform } from "react-native";

export default function Cards(props){
    return(
        <View style={styles.container}>
            <View style={styles.Cards}>
                <View style={styles.CardsInside}>
                <Image style={styles.image} source={{uri: props.owner.avatar_url}}/>
                    <Text style={styles.CardsTitle}>{props.name}</Text>
                    <View style={styles.language}>
                        <Text>{props.language ? props.language : '---'}</Text>
                    </View>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => props.navigation.navigate('InfoRepos', {...props})}
                >
                    <Text>Visualizar</Text>
                </TouchableOpacity>
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
        height: Platform.OS == 'ios' ? 180: 180,
        width: '90%',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#9400d3',
        justifyContent: 'center',

    },
    CardsInside: {
        alignItems: 'center',
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 20
    },  
    CardsTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 5,
    },
    language: {
        backgroundColor: '#d3d3d3',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 5,
        width: 90,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#9400d3',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 20,
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    }
})