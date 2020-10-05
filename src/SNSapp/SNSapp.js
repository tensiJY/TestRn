import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';

import Navigator from './Screens/Navigator';
import {UserContextProvider} from './Context/User'
import {RandomUserDataProvider} from './Context/RandomUserData'

const SNSapp = () => {
    //  StatusBar를 통해 상태 바에 색깔을 조정
    //  전역 데이터 > RandomUserDataProvider / UserContextProvider
    return(
        <RandomUserDataProvider cache={true}>
            <UserContextProvider>
                <StatusBar barStyle='default'/>
                <Navigator />
            </UserContextProvider>
        </RandomUserDataProvider>
    )
}

export default SNSapp;