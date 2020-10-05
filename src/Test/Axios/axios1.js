
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import axios from 'axios'
//  npm install -save axios
const App = ()=>{

  const initData= ()=>{
    // fetch('https://manatoki78.net/comic/5704317')
    // .then((response)=>{
    //   console.log(response._bodyBlob)
    // })
    // .catch((error)=>{
    //   console.log(error)
    // })
    axios.get('https://manatoki78.net/comic/5704317')
    .then((response)=>{
      console.log(response)
    })
  }

  useEffect(()=>{
    initData()
  },[])

  return(
    <View style={styles.containerView}>
      <Text style={styles.text1}> test </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerView : {
    flex : 1
  },
  text1 : {
    padding : (5, 6)
  }
});

export default App;