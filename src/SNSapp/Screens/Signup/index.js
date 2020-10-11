import React, { useState } from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Tab from '../../Components/Tab';

const Signup = ({navigation})=>{
    const [tabIndex, setTabIndex] = useState(0);
    const tabs = ['전화번호', '이메일'];
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.tabContainer}>

                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#FEFFFF'
    },
    formContainer : {
        flex : 1,
        alignItems : 'center',
        padding : 32
    },
    descriptionText : {
        textAlign : 'center',
        fontSize : 12,
        color : '#929292',
        margin : (0,8)
    },
    tabContainer : {
        flexDirection : 'row',
        marginBottom : 16
    },
    footer : {
        borderTopWidth : 1,
        borderColor : '#D3D3D3',
        padding : 8
    },
    footerDescriptionText : {
        color : '#929292',
        textAlign : 'center'
    },
    goBackText : {
        color : '#3796EF'
    }
});

export default Signup;