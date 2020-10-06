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

const UserContextProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState(undefined);

    const [isLoding, setIsLoding] = useState(false);

    const login = (email, password)=>{
        // Use Eamil and Passowrd for login API
        // Get token and UserInfo via Login API
        console.log('login start')
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
        console.log('getUserInfo : ', userInfo)
        AsyncStorage.getItem('token')
        .then( (value) =>{
            if(value){
                setUserInfo({
                    name : 'dev-yakuza',
                    email : 'dev.yakuza@gamil.com'
                })
            }
            setIsLoding(true)
        })
        .catch( (error)=>{
            console.log(error)
            setUserInfo(undefined);
            setIsLoding(true);
        })
        //console.log('getUserInfo : ', userInfo)
    }

    const logout = () => {
        AsyncStorage.removeItem('token');
        setUserInfo(undefined);
    }

    useEffect(()=>{
        getUserInfo();

        // if(userInfo == undefined) {
        //     login('dev','1')
        // }
    },[])

    return(
        <UserContext.Provider
            value={{
                isLoding,
                userInfo,
                login,
                getUserInfo,
                logout
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserContextProvider};