import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';

import Navigator from './Screens/Navigator';
import {UserContextProvider} from './Context/User'
import {RandomUserDataProvider} from './Context/RandomUserData'

const SNSapp = () => {
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