import React, { useEffect, useState } from 'react';

import { TouchableOpacity,SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';


const Item = ({ id, title , onPress  }) => {
   
   
    return(
        <TouchableOpacity onPress={onPress}>
            <Text>{id}</Text>
            <Text >{title}</Text>
        </TouchableOpacity>
    )
};

const ItemList = ({url }) =>{
    const [data, setData] = useState();

    useEffect(()=>{
        
        let useData = [
            {
                id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                title: 'First Item',
            },
            {
                id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                title: 'Second Item',
            },
            {
                id: '58694a0f-3da1-471f-bd96-145571e29d72',
                title: 'Third Item',
            },
        ];

        setData(useData);
    },[] )


    const itemDetail = (item)=>{
        console.log(item)
    }
    
    return(
        <View>
            <FlatList
                 pagingEnabled={true}
                 data={data}
                 keyExtractor={ (item) => {
                     //console.log(item)
                     return `${item.id}`
                 }}
                 renderItem={
                    ({item, index})=>(
                        <Item 
                            id={item.id}
                            title={item.title}
                            onPress={ ()=>itemDetail(item.id) }
                        />
                    )
                 }
            />
        </View>
    )
}


const Flat = () => {
  

  return (
    <SafeAreaView >
        <ItemList 
            url={'park'}
          
        />
    </SafeAreaView>
  );
}


export default Flat;
