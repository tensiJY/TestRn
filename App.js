import React, { useContext, useEffect, useState } from 'react';

import {SafeAreaView, Text, View, TouchableOpacity, TouchableHighlight, Image } from 'react-native';

//  AsyncStorage Test
import UserData from './src/Test/AsyncStorage'
import {UserContext, UserContextProvider} from './src/SNSapp/Context/User'


//import SNSapp from './src/SNSapp/SNSapp';

const Cview = ()=>{

    const {userInfo, isLoding} = useContext(UserContext);

    console.log('Cview : ', userInfo);
    console.log('Cview : ', isLoding)

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

    const textEvt1 = ()=>{
        console.log(1)
    }
    const textEvt2 = ()=>{
        console.log(2)
    }

    // return(
    //     <SafeAreaView style={{flex:1, borderColor:'red', borderWidth : 1, }}>
    //         <View style={{flex:1, flexDirection:'row', borderWidth: 1, borderColor:'blue'}}>
    //             <View style={{flex:1,alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
    //                 <TouchableOpacity onPress={textEvt1} >
    //                     <Image source={require('./src/SNSapp/Assets/Images/app_icon.png')} style={{width:50, height:50}} />
    //                 </TouchableOpacity>
    //             </View>

    //             <View style={{flex:1}}>
    //                 <TouchableOpacity onPress={textEvt2}>
    //                     <Text>2</Text>
    //                 </TouchableOpacity>
    //             </View>
    //         </View>

    //         <View style={{flex:1}}>
    //             <UserData />
    //         </View>
            
    //     </SafeAreaView>
    // )
        
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