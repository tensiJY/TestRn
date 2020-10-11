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
                    {tabs.map(
                        (label, index) => (
                            <Tab 
                                key={`tab-${index}`}
                                selected={tabIndex===index}
                                label={label}
                                onPress={()=>setTabIndex(index)}
                            />
                        )
                    )}
                </View>
                <Input 
                    style={{marginBottom : 15}}  
                    placeholder={tabIndex===0?'전화번호':'이메일'}
                />
                <Button 
                    label="다음"
                    style={{marginBottom:24}}
                />
                {tabIndex=== 0 &&(
                    <Text style={styles.descriptionText}>
                        SNS App의 업데이트 내용을 SNS로 수신할 수 있으며, 언제든지 수신을 취소할 수 있습니다.
                    </Text>
                )}
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerDescriptionText}>
                    이미 계정이 있으신가요?{' '}
                    <Text style={styles.goBackText} onPress={()=>navigation.goBack()}>로그인</Text>
                </Text>
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