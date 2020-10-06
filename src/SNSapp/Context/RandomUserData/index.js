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

}

export {RandomUserDataContext, RandomUserDataProvider}