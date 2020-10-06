import React, {createContext, useState, useEffect} from 'react';
import {Image} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import Loding from '../../Components/Loding';

const RandomUserDataContext = createContext({
    //  number의 인수가 없을 경우 10
    getMyFeed:(number=10)=>{
        return [];
    }
});

const RandomUserDataProvider = ({cache, children}) =>{
    const [userList, setUserList] = useState([]);
    const [descriptionList, setDescriptionList] = useState([]);

    const getCacheData = async (key) => {
        const cacheData = await AsyncStorage.getItem(key);

        if(cache=== false || cacheData == null){
            return undefined;
        }

        const cacheList = JSON.parse(cacheData);

        if(cacheList.length !== 25){
            return undefined;
        }

        return cacheList;
    }

    const setCacheData = (key, data)=>{
        AsyncStorage.setItem(key, JSON.stringify(data));
    }

    const setUsers = async () => {
        const cachedData = await getCacheData('UserList');
        if(cachedData){
            setUserList(cachedData);
            return;
        }

        try{

        }catch(error){
            console.log(error)
        }
    };

    return(
        <RandomUserDataContext.Provider>
                {children}
        </RandomUserDataContext.Provider>
    )
};

export {RandomUserDataContext, RandomUserDataProvider}