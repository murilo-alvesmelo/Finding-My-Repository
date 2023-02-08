import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Cards(props){
    console.log(props)
    return(
        <View style={styles.container}>
            <View style={styles.containerFind}>
                <Text>{props.name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerFind: {
        marginTop: Platform.OS == 'ios' ? 30 : 40,
        height: 150,
        width: '90%',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#9400d3',
        justifyContent: 'center',
        alignItems: 'center',
    },
})