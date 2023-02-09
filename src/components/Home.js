import React, { useState } from "react";
import { StyleSheet, View, Text, Platform, TouchableOpacity, TextInput, FlatList} from "react-native";
import  Icon  from "react-native-vector-icons/Feather";
import Cards from "./Cards";
import axios from "axios";


export default function Home(){
    const [name, setName] = useState('murilo-alvesmelo')
    const [repos, setRepos] = useState([])

    const searchGithub = (n) =>{
        axios.get(`https://api.github.com/users/${n}/repos`).then((res) =>{
            setRepos(res.data)
        })
    }

    function clear(){
        setName('')
        setRepos([])
    }
    return(
        <>    
            <View style={styles.container}>
                <View style={styles.containerFind}>
                    <Icon name="github" size={35}/>
                    <Text style={styles.headerText}>Finding My Repository</Text>
                    <View style={styles.inputIcon}>
                        <TextInput
                            onFocus={false}
                            style={styles.input}
                            value={name}
                            onChangeText={setName}
                            />
                        <TouchableOpacity
                            style={styles.icon}
                            onPress={() => searchGithub(name)}
                            >
                            <Icon name="search" size={30}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.icon}
                            onPress={clear}
                            >
                            <Icon name="trash" size={30}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <FlatList
                data={repos}
                renderItem={({ item }) => <Cards name={item.name}/>}
                keyExtractor={ item => item.id}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerFind: {
        marginTop: Platform.OS == 'ios' ? 40 : 40,
        height: 150,
        width: '90%',
        borderRadius: 20,
        backgroundColor: '#9400d3',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText :{
        fontSize: 20,
        fontWeight: 'bold'
    },
    inputIcon: {
        flexDirection: "row",
        alignItems: 'center',
    },
    input: {
        textAlign: 'center',
        marginTop: 10,
        height: 30,
        width: 150,
        borderWidth: 1,
        borderRadius: 20,
        
    },
    icon: {
        flexDirection: 'row',
        marginHorizontal: 5, 
        marginTop: 5
    }
})