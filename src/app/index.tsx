import React, { useState, useEffect } from ´react´;
import { Text, View, StyleSheet} from "react-native";
import {useAudioPlayer} from ´expo-audio´;

export default function Index(){
  const [pokemon,setPokemon] = useState([]);
  const audioSrc = 
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
    .then(res => res.json())
    .then(data => setPokemon(data.results))
  },[]);
  
  const PlayAudio = (audioSrc);
  return (
    <View style={{ paddingTop:50 }}>
      <FlatList 
        data={pokemon}
        renderItem = {{{ item,index }} => < Text style={{ padding: 10 }}>{item.name}</Text>}
        const id = index + 1;
        const imageUrl = ;
        const audioSrc = ;
        const PLayAudio = ;
      />
      <Button onPress={audioSrc}></Button>
    </View>
  )
}

