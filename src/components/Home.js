import React, { useState } from "react";
import { StyleSheet, View, Text, Platform, TouchableOpacity, TextInput, FlatList, Image, Keyboard} from "react-native";
import Cards from "./Cards";
import axios from "axios";
import * as Animatable from 'react-native-animatable';
import Header from "./Header";


export default function Home(props){
    const [name, setName] = useState('murilo-alvesmelo')
    const [repos, setRepos] = useState([])

    const searchGithub = (n) =>{
        axios.get(`https://api.github.com/users/${n}/repos`)
            .then((res) =>setRepos(res.data))
            .catch((err) => setRepos(null))
    }

    function clear(){
        setName('')
        setRepos([])
    }

    return(
        <>    
            <Header
                name={name}
                isName={valor => setName(valor)}
                isSearch={valor => searchGithub(valor)}
                isClear={clear}
            />
            {
                repos ?
                <FlatList
                    data={repos}
                    renderItem={({ item }) => <Cards {...item} {...props}/>}
                    keyExtractor={ item => item.id}
                /> :
                <Animatable.Image 
                    animation="bounceInDown"
                    duration={1500}
                    style={styles.image}
                    source={require('../../assets/pagenotfound.png')}
                />
            }
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})