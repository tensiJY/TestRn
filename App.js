import React, { useContext, useEffect, useState } from 'react';

import {SafeAreaView, Text, View, TouchableOpacity, TouchableHighlight, Image } from 'react-native';



//  AsyncStorage Test
//import UserData from './src/Test/AsyncStorage'

import {UserContext, UserContextProvider} from './src/SNSapp/Context/User';
import {RandomUserDataContext, RandomUserDataProvider} from './src/SNSapp/Context/RandomUserData';


//import SNSapp from './src/SNSapp/SNSapp';

const Cview = ()=>{

    const {userInfo, isLoding} = useContext(UserContext);
    const {getMyFeed, removeItem} = useContext(RandomUserDataContext)

    console.log('Cview : ', userInfo);
    console.log('Cview : ', isLoding);
    

    
    
    return(
        <View>
            <TouchableOpacity onPress={removeItem('ImageList')}>
                <Text>1</Text>
            </TouchableOpacity>
        </View>
    )
}

const App = ()=>{
   
        
    return(
        <UserContextProvider>
           <RandomUserDataProvider>
                <Cview />
            </RandomUserDataProvider>
        </UserContextProvider>
    )

    // return(
    //     <SafeAreaView>
    //         <SNSapp />
            
    //     </SafeAreaView>
    // )

}

export default App;