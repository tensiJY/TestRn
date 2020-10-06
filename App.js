import React, { useContext, useEffect, useState } from 'react';
import {SafeAreaView, Text, View, TouchableOpacity, TouchableHighlight, Image } from 'react-native';

//  AsyncStorage Test
//import UserData from './src/Test/AsyncStorage'

import {UserContext, UserContextProvider} from './src/SNSapp/Context/User';
import {RandomUserDataContext, RandomUserDataProvider} from './src/SNSapp/Context/RandomUserData';

//import SNSapp from './src/SNSapp/SNSapp';


const App = ()=>{
    return(
        <View style={{flex:1}}>
            <Text style={{textAlign : 'center'}}>1</Text>
        </View>
    )
        
    // return(
    //     <SafeAreaView>
    //         <SNSapp />
            
    //     </SafeAreaView>
    // )

}

export default App;