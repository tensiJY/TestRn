import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


const userData = ( ) => {
    const [userInfo, setUserInfo] = useState(undefined);

    const getUserInfo = async () => {
        try{
            console.log('start getUserInfo')

            const data = await AsyncStorage.getItem('token').catch(
                (error)=>{
                    console.log(error)
                }
            )

            console.log('getUserInfo - data : ', data)

            // await AsyncStorage.getItem('token')
            // .then( (value)=>{
            //     if(value== undefined || value == null){
            //        console.log('getUserInfo : undefined')
    
            //     }else{
            //         console.log('getUserInfo : ', value)
            //     }
    
            // })
            // .catch( (error)=>{
            //     console.log(error)
            // });//AsyncStorage.getItem
        }catch(error){

        }
    }// getUserInfo end

    const removeInfo = () => {
        console.log('removeInfo')
        AsyncStorage.removeItem('token');
        
    }

    const setUserData = ()=> {
        AsyncStorage.setItem('token', 'your token')
        .then( ()=>{
            
            const userInfo = {
                userId : 'park',
                userPwd : '1234'
            }

            setUserInfo(userInfo);
            console.log('userInfo : ', userInfo)
        } )
        .catch( (error)=>{
            console.log(error)
        })
    }

    useEffect( ()=>{
        
        getUserInfo();

    },[])

    return(
        <TouchableOpacity >
            <Button onPress={ removeInfo} title='삭제'/>
            <View style={{marginTop : 16}}></View>
            <Button onPress={setUserData} title='저장'/>
        </TouchableOpacity>
    )
}

export default userData;