import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const styles = StyleSheet.create({
    styleButton : {
        height : 400,
        borderRadius : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#3796EF'
    },
    labelText : {
        color : '#FFFFFF'
    }
});

const Button = ({label, style, color, onPress})=>{
    return(
        <TouchableOpacity style={[style, styles.styleButton]} onPress={onPress}>
            <Text style={[{color : color? colokr : '#FFFFFF'}, styles.labelText]}>{label}</Text>
        </TouchableOpacity>
    )
}