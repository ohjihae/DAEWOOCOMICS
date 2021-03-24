import 'react-native-gesture-handler';

import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';


import Search from './Search'
import List from './ListContainer'
import Actions from './Actions'
import Home from './HomeContainer'
import HWTest from './HWTest'

import chamlast from './cham/image/chamlast'
import chamfirst from './cham/image/chamfirst'
import cham from './cham/Cham'
import so from './so/so'
import solast from './so/image/solast'
import sofirst from './so/image/sofirst'
import elec from './elec/elec'
import elecfirst from './elec/image/elecfirst'
import eleclast from './elec/image/eleclast'


// https://ionicons.com/
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';


const Tab = createBottomTabNavigator();
const ListStack = createStackNavigator();
const SearchStack = createStackNavigator();
const HomeStack = createStackNavigator();

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={Search} options={{ title: "Search", headerTitleAlign: "center" }} />
    </SearchStack.Navigator>
  )
}

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{ title: "Home", headerTitleAlign: "center" }} />
      <HomeStack.Screen name="cham" component={cham} options={{ title: "참교육", headerTitleAlign: "center" }} />
      <HomeStack.Screen name="chamlast" component={chamlast} options={{ title: "17화", headerTitleAlign: "center" }} />
      <HomeStack.Screen name="chamfirst" component={chamfirst} options={{ title: "1화", headerTitleAlign: "center" }} />
      <HomeStack.Screen name="so" component={so} options={{ title: "소녀의 세계", headerTitleAlign: "center" }} />
      <HomeStack.Screen name="solast" component={solast} options={{ title: "20화", headerTitleAlign: "center" }} />
      <HomeStack.Screen name="sofirst" component={sofirst} options={{ title: "1화", headerTitleAlign: "center" }} />
      <HomeStack.Screen name="elec" component={elec} options={{ title: "일렉시드", headerTitleAlign: "center" }} />
      <HomeStack.Screen name="eleclast" component={eleclast} options={{ title: "5화", headerTitleAlign: "center" }} />
      <HomeStack.Screen name="elecfirst" component={elecfirst} options={{ title: "1화", headerTitleAlign: "center" }} />
    </HomeStack.Navigator>
  )
}

const ListStackScreen = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="List" component={List} options={{ title: "순위별", headerTitleAlign: "center" }} />
      <ListStack.Screen name="chamlast" component={chamlast} options={{ title: "17화", headerTitleAlign: "center" }} />
      <ListStack.Screen name="chamfirst" component={chamfirst} options={{ title: "1화", headerTitleAlign: "center" }} />
      <ListStack.Screen name="cham" component={cham} options={{ title: "참교육", headerTitleAlign: "center" }} />
      <ListStack.Screen name="so" component={so} options={{ title: "소녀의 세계", headerTitleAlign: "center" }} />
      <ListStack.Screen name="solast" component={solast} options={{ title: "20화", headerTitleAlign: "center" }} />
      <ListStack.Screen name="sofirst" component={sofirst} options={{ title: "1화", headerTitleAlign: "center" }} />
      <ListStack.Screen name="elec" component={elec} options={{ title: "일렉시드", headerTitleAlign: "center" }} />
      <ListStack.Screen name="eleclast" component={eleclast} options={{ title: "5화", headerTitleAlign: "center" }} />
      <ListStack.Screen name="elecfirst" component={elecfirst} options={{ title: "1화", headerTitleAlign: "center" }} />
    </ListStack.Navigator>
  )
}


const screeOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch (route.name) {
      // focus가 있으면 'home', 'home-outline'
      case 'Home':
        iconName = focused
          ? 'home'
          : 'home-outline';
        break;
      case 'List':
        iconName = focused
          ? 'podium'
          : 'podium-outline';
        break;
      case 'Search':
        iconName = focused
          ? 'search'
          : 'search-outline';
        break;
      case 'Actions':
        iconName = focused
          ? 'heart'
          : 'heart-outline';
        break;
      case 'HWTest':
        iconName = focused
          ? 'hardware-chip'
          : 'hardware-chip-outline';
        break;
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
})

const tabBarOptions = {
  activeTintColor: 'rgb(101, 113, 203)',
  inactiveTintColor: 'gray',
}

export default function Main() {

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("----main is mounted--")
    // back-end에서 tasks 데이터를 가져오고, global state를 갱신
    dispatch({ type: "FETCH_ACTION" })
  }, [])




  return (

    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screeOptions} tabBarOptions={tabBarOptions}>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="List" component={ListStackScreen} />
          <Tab.Screen name="Search" component={SearchStackScreen} />
          <Tab.Screen name="Actions" component={Actions} />
          <Tab.Screen name="HWTest" component={HWTest} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  );
}