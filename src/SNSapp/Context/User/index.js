import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const defaultContext = {
    isLoding : false,
    userInfo : undefined,
    login : (email, password)=>{},
    getuserInfo : ()=>{},
    logout : ()=>{}

}

const UserContext = createContext(defaultContext);

const UserContextProVider = ({children}) => {
    const [userInfo, setUserInfo] = useState(undefined);

    const [isLoding, setIsLoding] = useState(false);

    const login = (email, password)=>{
        AsyncStorage.setItem('token', 'save your token')
        .then( ()=>{
            setUserInfo({
                name : 'dev-yakuza',
                email : 'dev.yakuza@gamil.com'
            });
            setIsLoding(true)
        });
    }// function login end


    const getUserInfo = ()=>{
        
    }

    useEffect(()=>{},[])
}