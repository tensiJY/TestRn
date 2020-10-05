import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Button
} from 'react-native'

const Main = ({navigation}) =>{

    const goDetail = () => {
        navigation.navigate('Detail')
    }

    return(
        <SafeAreaView>
            <Text>this is main</Text>
            <Button
                title="Go to Details" 
                onPress={goDetail}
            />
        </SafeAreaView>
    )
}

export default Main;