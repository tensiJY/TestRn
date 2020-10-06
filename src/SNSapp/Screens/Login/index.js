import React, {useEffect, useState, useContext} from 'react';
import {StyleSheet, SafeAreaView, View, Text, } from 'react-native';

import {UserContext} from '../../Context/User';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#FEFFFF'
    },
    formContainer : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        padding : 32
    },
    logoText : {
        color : '#292929',
        fontSize : 40,
        fontWeight : 'blod',
        textAlign : 'center',
        marginBottom : 40
    },
    passwordResetText : {
        color : '#3796EF',
        textAlign : 'right',
        marginBottom : 24
    },
    signupText : {
        color : '#929292',
        textAlign : 'center'
    },
    signupLink : {
        color : '#3796EF'
    }, 
    footerView : {
        borderTopWidth : 1,
        borderColor : '#D3D3D3',
        padding : 8
    },
    copyrightText : {
        color : '#929292',
        textAlign : 'center'
    }
});

const Login = ({navigation})=>{
    const {login} = useContext(UserContext);

    useEffect( ()=>{
        //  splash
        console.log('Login useEffect');        
    },[])

    return(
        <SafeAreaView>
            
        </SafeAreaView>
    )
}

export default Login;

