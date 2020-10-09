import React, { useContext, useEffect, useState } from 'react';
import {SafeAreaView, Text, View, TouchableOpacity, TouchableHighlight, Image } from 'react-native';

import DrawerTest from './src/Test/Drawer/Test1'

//  AsyncStorage Test
//import UserData from './src/Test/AsyncStorage'


// import {UserContext, UserContextProvider} from './src/SNSapp/Context/User';
// import {RandomUserDataContext, RandomUserDataProvider} from './src/SNSapp/Context/RandomUserData';
// import Login from './src/SNSapp/Screens/Login'

//import SNSapp from './src/SNSapp/SNSapp';



const App = ()=>{
    return(
        
            <DrawerTest />
            
    )

    // return(
    //     <View style={{flex:1}}>
    //         <Login/>
    //     </View>
    // )
        
    // return(
    //     <SafeAreaView>
    //         <SNSapp />
            
    //     </SafeAreaView>
    // )

}

export default App;