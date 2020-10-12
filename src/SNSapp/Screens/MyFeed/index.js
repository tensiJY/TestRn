import React, { useContext, useState, useEffect } from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {RandomUserDataContext} from '../../Context/RandomUserData'
import IconButton from '../../Components/IconButton';
import Feed from '../../Components/Feed';

import StoryList from './StoryList';

const MyFeed = ({navigation}) =>{
    const {getMyFeed} = useContext(RandomUserDataContext);

    const [feedList, setFeedList] = useState([]);
    const [storyList, setStoryList] = useState([]);
    const [loding, setLoding] = useState(false);
   
    React.useLayoutEffect( ()=>{
        navigation.setOptions({
            headerLeft : () => <IconButton iconName="camera" />,
            headerRight : () => (
                <View style={styles.headerRightcontaienr}>
                    <IconButton iconName='live' />
                    <IconButton iconName='send' />
                </View>
            ),
        });
    },[] )

    useEffect( ()=> {
        setFeedList(getMyFeed());
        setStoryList(getMyFeed());

    }, [])

    return(
        <FlatList 
            data={feedList}
            keyExtractor={ (item, index) => {
                return `myfeed-${index}`
            }}
            showsVerticalScrollIndicator={false}
            onRefresh={ ()=>{
                setLoding(true);
                setTimeout( ()=>{
                    setFeedList(getMyFeed());
                    setStoryList(getMyFeed());
                    setLoding(false)
                },2000);
            }}
            onEndReached={}
        />
    )
}

const styles = StyleSheet.create({
    headerRightcontaienr : {
        flexDirection : 'row'
    },

});
