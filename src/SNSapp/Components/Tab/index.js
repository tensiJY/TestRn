import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

const Tab = ({selected, label, imageSource, onPress})=>{
    let color = selected? '#292929' : '#929292';

    return(
        <TouchableOpacity 
            style={[styles.container,{borderColor:color}]}
            activeOpacity={1}
            onPress={onPress}>
                {label && <Text style={[styles.labelText, {color:color}]}>{label}</Text>}
                {imageSource && <Image style={styles.tabImage} source={imageSource} />}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        borderBottomWidth : 1,
        borderColor : '#929292',
        paddingBottom : 8,
        alignItems : 'center',
        justifyContent : 'center'
    },
    labelText : {
        fontSize : 16,
        color : '#929292',
        textAlign : 'center'
    },
    tabImage : {
        marginTop : 8,
    }
});

export default Tab;