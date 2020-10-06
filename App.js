import React, { useContext, useEffect, useState } from 'react';

import {SafeAreaView, Text, View, TouchableOpacity, TouchableHighlight, Image } from 'react-native';



//  AsyncStorage Test
//import UserData from './src/Test/AsyncStorage'

import {UserContext, UserContextProvider} from './src/SNSapp/Context/User'


//import SNSapp from './src/SNSapp/SNSapp';

const Cview = ()=>{

    const {userInfo, isLoding} = useContext(UserContext);

    console.log('Cview : ', userInfo);
    console.log('Cview : ', isLoding);

    useEffect( ()=>{
        
    },[])

    return(
        <View>
            <Text>1</Text>
        </View>
    )
}

const App = ()=>{
    useEffect( ()=>{
        console.log('App')
        
    }, [])

        
    return(
        <UserContextProvider>
           <Cview />
        </UserContextProvider>
    )

    // return(
    //     <SafeAreaView>
    //         <SNSapp />
            
    //     </SafeAreaView>
    // )

}

export default App;