import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';


import Home from './componets/Home'
import List from './componets/List'
import Actions from './componets/Actions'
import Details from './componets/Details'
import LotsOfGreetings from './componets/LotsOfGreeting'

// https://ionicons.com/
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './redux/reducers'
import { TapGestureHandler } from 'react-native-gesture-handler';

const store = createStore(rootReducer); 

const Tab = createBottomTabNavigator();
const ListStack = createStackNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{title:"Home", headerTitleAlign:"center"}} />
      <HomeStack.Screen name="Details" component={Details} options={{title:"Details", headerTitleAlign:"center"}}  />
    </HomeStack.Navigator>
  )
}

const ListStackScreen = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="List" component={List} options={{title:"List", headerTitleAlign:"center"}} />
      <ListStack.Screen name="Details" component={Details} options={{title:"Details", headerTitleAlign:"center"}}  />
    </ListStack.Navigator>
  )
}


const screeOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch(route.name){
      // focus가 있으면 'home', 'home-outline'
      case 'Home':
        iconName = focused
          ? 'home'
          : 'home-outline';
        break;
      case 'List':
        iconName = focused
          ? 'list'
          : 'list-outline'; 
        break;
      case 'Search':
        iconName = focused
          ? 'search'
          : 'search-outline'; 
        break;
      case 'Actions':
        iconName = focused
          ? 'checkmark'
          : 'checkmark-outline'; 
        break;
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
})

const tabBarOptions= {
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
}


/* App 컴포넌트 시작 */
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={screeOptions} tabBarOptions={tabBarOptions}>
            <Tab.Screen name="Home" component={LotsOfGreetings}/>
            <Tab.Screen name="List" component={ListStackScreen}/>
            <Tab.Screen name="Search" component={HomeStackScreen}/>
            <Tab.Screen name="Actions" component={Actions}/>
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}