import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View, Image, Text} from 'react-native';

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Tab from '../../Components/Tab';

const PasswordReset = ({navigation}) => {

    const [tabIndex, setTabIndex] = useState(0);

    const tabs=['사용자 이름', '전화번호'];

    const tabDescriptions = [
        '사용자 이름 또는 이메일을 입력하면 다시 계정에 로그인 할 수 있는 링크를 보내드립니다.',
        '전화번호를 입력하면 계정에 다시 액세스 할 수 있는 코드를 보내드립니다.'
    ];

    const placeHolders = ['사용자 이름 또는 이메일', '전화번호'];

    //  var _tabs = ['사','전']
    //  _tabs.map( (v, idx)=>{  console.log(v, idx) } )
    //  사 0
    //  전 1
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.lockImageContainer}>
                    <Image source={require('../../Assets/Images/lock.png')} />
                </View>
                <Text style={styles.titleText}> 
                    로그인에 문제가 있나요?
                </Text>
                <Text style={styles.descriptionText}> {tabDescriptions[tabIndex]} </Text>
                <View style={styles.tabContainer}>
                    {   tabs.map( ( label, index)=>(
                            <Tab 
                                key={`tab-${index}`}
                                selected={tabindex === index}
                                label={label}
                                onPress={ ()=> setTabIndex(index)}
                            />
                    ))}
                </View>
                <Input style={{marginBottom : 16}}/>
                <Button placeholder={placeHolders[tabIndex]} />
                <Text style={styles.helpLabelText}>도움이 더 필요하세요?</Text>
            </View>
            
            <View style={styles.footer}>
                <Text style={styles.goBackText} onPress={()=>{navigation.goBack()}}>
                    로그인으로 돌아가기
                </Text>
            </View>
        </SafeAreaView>
    )
};

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
    lockImageContainer : {
        padding : 24,
        borderWidth : 24,
        borderColor : '#292929',
        borderRadius : 80,
        padding : 32
    },
    titleText : {
        fontSize : 16,
        marginBottom : 16
    },
    descriptionText : {
        textAlign : 'center',
        marginBottom : 16,
        color : '#292929'
    },
    tabContainer : {
        flexDirection : 'row',
        marginBottom : 16
    },
    helpLabelText : {
        colokr : '#3796EF'
    },
    footer : {
        borderTopWidth : 1,
        borderColor : '#D3D3D3',
        padding : 8
    },
    goBackText : {
        color : '#3796EF',
        textAlign : 'center'
    },
});


export default PasswordReset;