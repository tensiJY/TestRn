import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const Input = ({placeholder, keyboardType, secureTextEntry, style, clearMode, onChangeText}) =>{
    //  selectionColor : 입력 필드에 내용을 복사하거나 붙여넣기 하기 위해 사용하는 selection의 색성을 결정한다.
    //  secureTextEntry : 비밀번호 입력과 같이 입력 내용을 숨길지 여부를 설정한다.
    //  keyboardType : 이메일, 숫자, 전화번호 등과 같이 키보드의 타입을 결정한다.
    //  autoCapitalize : 영어 입력시 첫 문자를 대문자로 자동으로 변경할지 여부를 설정한다.
    //  autoCorrect : 사용자의 입력 내용의 철자가 틀렸을 경우 자동으로 수정할지 여부를 설정한다.
    //  allowFontScaling :  사용자가 단말기 설정을 통해 수정한 폰트 크기를 적용할지 여부를 설정한다
    //  placeholderTextColor : 사용자의 입력 내용이 없을 때 보여줄, 색상을 결정
    //  placeholder : 사용자의 입력 내용이 없을 때, 표시할 내용을 설정
    //  clearButtonMode : 사용자의 입력 내용이 있을 때, 입력창에 오른쪽 부분에 전체 삭제 버튼을 표시할지 여부를 설정
    //  onChangeText : 입력 창의 내용이 변경될 때 호출되는 콜백 함수.

    return(
        <View style={styles.mainContainer}>
            <TextInput style={styles.inputField}
                selectionColor='#292929'
                secureTextEntry={secureTextEntry}   //  secureTextEntry={true}
                keyboardType={keyboardType? keyboardType : 'default'}
                autoCapitalize='none'
                autoCorrect={false}
                allowFontScaling={false}
                placeholderTextColor='#C3C2C8'
                placeholder={placeholder}           //  placeholder='비밀번호'
                clearButtonMode={clearMode? 'while-editing' : 'always'}
                onChangeText={onChangeText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer : {
        flex : 1,
        height : 40,
        paddingLeft : 16,
        paddingRight : 16,
        borderRadius : 4,
        backgroundColor : '#FAFAFA',
        borderWidth : 1,
        borderColor : '#D3D3D3'
    },
    inputField : {
        flex : 1,
        color : '#292929'
    },

});

export default Input;