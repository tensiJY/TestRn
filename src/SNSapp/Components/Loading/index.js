import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const Loading = () =>{

    return(
        <View>
            <ActivityIndicator color='#D3D3D3' size='large'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#FEFFFF',
        alignItems : 'center',
        justifyContent : 'center'
    }
});

export default Loading;