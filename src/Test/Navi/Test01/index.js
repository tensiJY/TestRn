import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './Main';
import Detail from './Detail';

const Stack = createStackNavigator();

const MainNavigation = ()=>{
   return(
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Main}
            />
            <Stack.Screen
                name="Detail"
                component={Detail}
            />
        </Stack.Navigator>
   )
}

const Navi = ()=>{

    return(
        <NavigationContainer>
            <MainNavigation />
        </NavigationContainer>
    )
}

export default Navi;
