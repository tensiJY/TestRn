import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect } from 'react';
import {SafeAreaView, Text, View} from 'react-native';

//  AsyncStorage Test
import UserData from './src/Test/AsyncStorage'



//import SNSapp from './src/SNSapp/SNSapp';

const App = ()=>{
    useEffect( ()=>{
        console.log('App')
        
    }, [])


    return(
        <View>
            <UserData />
        </View>
    )
  

    // return(
    //     <SafeAreaView>
    //         <SNSapp />
            
    //     </SafeAreaView>
    // )

}

export default App;