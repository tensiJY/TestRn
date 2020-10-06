import React, {useEffect, useState, useContext} from 'react';
import {StyleSheet, SafeAreaView, View, Text, } from 'react-native';

import {UserContext} from '../../Context/User';

import Input from '../../Components/Input';
import Button from '../../Components/Button';


const Login = ({navigation})=>{
    const {login} = useContext(UserContext);

    useEffect( ()=>{
        //  splash
        console.log('Login useEffect');        
    },[])

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.logoText}>SNS App</Text>
                <Input style={{marginBottom : 16}} placeholder='이메일'/>
                <Input style={{marginBottom : 16}} placeholder='비밀번호' secureTextEntry={true}/>
                <Text style={styles.passwordResetText} onPress={()=>navigation.navigate('PasswordReset')}>
                    비밀번호 재설정
                </Text>
                <Button label='로그인' style={{marginBottom : 24}} onPress={()=>{login('dev.yakuza@gamil.com', 'paswword')}}/>
                <Text style={styles.signupText}>
                    계정이 없으신가요?{' '}
                    <Text style={styles.signupLink} onPress={()=>{navigation.navigate('Signup')}}>
                        가입하기.
                    </Text>
                </Text>
            </View>
            <View style={styles.footerView}>
                <Text style={styles.copyrightText}>SNSApp from dev-jy</Text>
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
        justifyContent : 'center',
        padding : 32
    },
    logoText : {
        color : '#292929',
        fontSize : 40,
        fontWeight : 'bold',
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

export default Login;

