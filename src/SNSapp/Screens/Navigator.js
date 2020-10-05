import React, { useContext } from 'react';
import {Image, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {UserContext} from '../Context/User';

import SearchBar from '../Components/SearchBar';
import Loding from '../Components/Loding';

import Login from './Login';
import PasswordReset from './PasswordReset';
import Signup from './Signup';
import MyFeed from './MyFeed';
import Feeds from './Feeds';
import FeedListOnly from './FeedListOnly';
import Upload from './Upload';
import Notification from './Notification';
import Profile from './Profile';
import CustomDrawer from './CustomDrawer';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

//  각각의 화면들 중 네비게이션 헤더가 필요한 컴포넌트는 기본적으로 스택 내비게이션으로 감싸줌.
//  >> 내비게이션 헤더가 필요한 경우 스택 내비게이션을 추가해 주어야 함
const LoginNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown : false}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="PasswordReset" component={PasswordReset}/>
        </Stack.Navigator>
    )
}

const MyFeedTab = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="MyFeed" component={MyFeed} options={{title:'SNS App'}}/>
        </Stack.Navigator>
    )
}

const FeedsTab = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Feeds"
                component={Feeds}
                options={{
                    header : () => <SearchBar />
                }} />

            <Stack.screen
                name='FeedListOnly'
                component={FeedListOnly}
                options={{
                    headerBackTitleVisible : false,
                    title : '둘러보기',
                    headerTintColor : '#292929'
                }}
            />
        </Stack.Navigator>

        
    )
}//

const UploadTab = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='Upload'
                component={Upload}
                options={{
                    title : '사진 업로드'
                }}
            />
        </Stack.Navigator>
    )
}//

const ProfileTab = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='Profile'
                component={Profile}
                options={{title:'Profile'}}
            />
        </Stack.Navigator>
    )
}

const MainTabs = ()=>{
    return(
        <BottomTab.Navigator tabBarOptions={{showLabel : false}}>
            <BottomTab.screen 
                name="MyFeed"
                component={MyFeedTab}
                options={{
                    tabBarIcon: ( {color, focused}) =>(
                        <Image 
                            source={focused? require('../Assets/Images/Tabs/ic_home.png') : require('../Assets/Images/Tabs/ic_home_outline.png')}
                        />
                    )
                }}
            />

            <BottomTab.screen 
                name='Feeds'
                component={FeedsTab}
                options={{
                    tabBarIcon : ( {color, focused} ) =>(
                        <Image 
                            source={ focused? require('../Assets/Images/Tabs/ic_search.png') : require('../Assets/Images/Tabs/ic_search_outline.png')}
                        />
                    )
                }}
            />

            <BottomTab.Screen
                name="Upload"
                component={UploadTab}
                options={{
                tabBarLabel: 'Third',
                tabBarIcon: ({color, focused}) => (
                    <Image
                    source={
                        focused
                        ? require('../Assets/Images/Tabs/ic_add.png')
                        : require('../Assets/Images/Tabs/ic_add_outline.png')
                    }
                    />
                ),
                }}
            />

            <BottomTab.Screen
                name="Notification"
                component={Notification}
                options={{
                tabBarIcon: ({color, focused}) => (
                    <Image
                    source={
                        focused
                        ? require('../Assets/Images/Tabs/ic_favorite.png')
                        : require('../Assets/Images/Tabs/ic_favorite_outline.png')
                    }
                    />
                ),
                }}
            />

            <BottomTab.Screen
                name="Profile"
                component={ProfileTab}
                options={{
                tabBarIcon: ({color, focused}) => (
                    <Image
                    source={
                        focused
                        ? require('../Assets/Images/Tabs/ic_profile.png')
                        : require('../Assets/Images/Tabs/ic_profile_outline.png')
                    }
                    />
                ),
                }}
            />

        </BottomTab.Navigator>
    )
}

const MainNavigator = () => {
    return(
        <Drawer.Navigator
            drawerPosition='right'
            drawerType='slide'
            drawerContent={ (props)=> <CustomDrawer props={props}/>}
        >
            <Drawer.screen name="MainTabs" component={MainTabs}/>
        </Drawer.Navigator>
    )
}

export default () => {
    const {isLoding, userInfo} = useContext(UserContext);

    if (isLoding === false){
        return <Loding />;
    }

    return(
        <NavigationContainer>
            {userInfo? <MainNavigator /> : <LoginNavigator />}
        </NavigationContainer>
    )
}