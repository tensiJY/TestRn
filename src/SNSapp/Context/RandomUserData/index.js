import React, {createContext, useState, useEffect} from 'react';
import {Image} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import Loading from '../../Components/Loading';

const RandomUserDataContext = createContext({
    //  number의 인수가 없을 경우 10
    getMyFeed:(number=10)=>{
        return [];
    }
});

const RandomUserDataProvider = ({cache, children}) =>{
    const [userList, setUserList] = useState([]);
    const [descriptionList, setDescriptionList] = useState([]);
    const [imageList, setImageList] = useState([]);

    //  cache를 false로 선언하였거나, 이전에 캐싱한 데이터가 없는 경우
    //  fetch api를 통해 새롭게 데이터를 가져옴.
    const getCacheData = async (key) => {
        const cacheData = await AsyncStorage.getItem(key);

        if(cache=== false || cacheData == null){
            return undefined;
        }

        const cacheList = JSON.parse(cacheData);

        if(cacheList.length !== 25){
            return undefined;
        }

        return cacheList;
    }

    const setCachedData = (key, data)=>{
        AsyncStorage.setItem(key, JSON.stringify(data));
    }

    const setUsers = async () => {
        const cachedData = await getCacheData('UserList');
        if(cachedData){
            setUserList(cachedData);
            return;
        }

        try{
            const response = await fetch('https://raw.githubusercontent.com/dev-yakuza/users/master/api.json');
            const data = await response.json();
            setUserList(data);
            setCachedData('UserList', data);
        }catch(error){
            console.log('setUsers error');
            console.log(error);
        }
    };//

    const setDescriptions = async () =>{
        const cachedData = await getCacheData('DescriptionList');
        console.log('setDescriptions');
        console.log(cachedData);

        if(cachedData){
            setDescriptionList(cachedData);
            return;
        }

        try{
            const response = await fetch('https://opinionated-quotes-api.gigalixirapp.com/v1/quotes?rand=t&n=25');
            const data = await response.json();
            let text = [];
            for (var idx in data.quotes){
                text.push(data.quotes[idx].quote);
            }

            setDescriptionList(text);
            setCachedData('DescriptionList', text);

        }catch(error){
            console.log('RandomUserData error');
            console.log(error);
        }
    }//

    const setImages = async () => {
        const cachedData = await getCacheData('ImageList');
        if(cachedData){
            if(Image.queryCache){
                Image.queryCache(cachedData);
                cachedData.map( (data)=>{
                    Image.prefetch(data);
                });
            }

            setImageList(cachedData);
            return;
        }

        setTimeout( async ()=>{
            try{
                const response = fetch('https://source.unsplash.com/random/');
                const data = await response.url;
                if(imageList.indexOf(data)>=0){
                    setImages();
                    return;
                }

                setImageList([...imageList, data])

            }catch(error){
                console.log('setImages error');
                console.log(error)
            }
        }, 400)
    }

    useEffect( ()=>{
        setUsers();
        setDescriptions();
    },[])

    useEffect( ()=>{
        if(imageList.length !== 25){
            setImages();
        } else {
            setCachedData('ImageList', imageList);
        }

    },[imageList])


    const getImages = ()=>{
        let images = [];
        const count = Math.floor( Math.random() * 4);
        for (let i=0; i<=count ; i++) {
            images.push(imageList[Math.floor(Math.random()*24)]);
        }

        return images;
    }

    const getMyFeed = (number = 10) => {
        let feeds = [];
        for(let i=0; i< number; i++){
            const user = userList[Math.floor(Math.random()*24)];
            feeds.push({
                name : user.name,
                photo : user.photo,
                description : descriptionList[Math.floor(Math.random()*24)],
                images : getImages()
            });
        }

        return feeds;
    }

    console.log(`${userList.length} / ${descriptionList.length} / ${imageList.length}`);

    return(
        <RandomUserDataContext.Provider
            value={{getMyFeed}}
        >
                { userList.length === 25 && descriptionList.length === 25 && imageList.length === 25 ? (children) : <Loading />}
        </RandomUserDataContext.Provider>
    )
};

export {RandomUserDataContext, RandomUserDataProvider}