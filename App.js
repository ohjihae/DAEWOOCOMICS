import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';


import Search from './componets/Search'
import List from './componets/List'
import Actions from './componets/Actions'
import Home from './componets/Home'

import chamlast from './componets/cham/image/chamlast'
import chamfirst from './componets/cham/image/chamfirst'
import cham from './componets/cham/cham'
import so from './componets/so/so'
import solast from './componets/so/image/solast'
import sofirst from './componets/so/image/sofirst'
import elec from './componets/elec/elec'
import elecfirst from './componets/elec/image/elecfirst'
import eleclast from './componets/elec/image/eleclast'


// https://ionicons.com/
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './redux/reducers'

const store = createStore(rootReducer); 

const Tab = createBottomTabNavigator();
const ListStack = createStackNavigator();
const SearchStack = createStackNavigator();
const HomeStack = createStackNavigator();

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={Search} options={{title:"Search", headerTitleAlign:"center"}} />
    </SearchStack.Navigator>
  )
}

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{title:"Home", headerTitleAlign:"center"}} />
      <HomeStack.Screen name="cham" component={cham} options={{title:"참교육", headerTitleAlign:"center"}} />
      <HomeStack.Screen name="chamlast" component={chamlast} options={{title:"17화", headerTitleAlign:"center"}}  />
      <HomeStack.Screen name="chamfirst" component={chamfirst} options={{title:"1화", headerTitleAlign:"center"}}  />
      <HomeStack.Screen name="so" component={so} options={{title:"소녀의 세계", headerTitleAlign:"center"}} />
      <HomeStack.Screen name="solast" component={solast} options={{title:"20화", headerTitleAlign:"center"}}  />
      <HomeStack.Screen name="sofirst" component={sofirst} options={{title:"1화", headerTitleAlign:"center"}}  />
      <HomeStack.Screen name="elec" component={elec} options={{title:"일렉시드", headerTitleAlign:"center"}} />
      <HomeStack.Screen name="eleclast" component={eleclast} options={{title:"5화", headerTitleAlign:"center"}}  />
      <HomeStack.Screen name="elecfirst" component={elecfirst} options={{title:"1화", headerTitleAlign:"center"}}  />
    </HomeStack.Navigator>
  )
}

const ListStackScreen = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="List" component={List} options={{title:"순위별", headerTitleAlign:"center"}} />
      <ListStack.Screen name="chamlast" component={chamlast} options={{title:"17화", headerTitleAlign:"center"}}  />
      <ListStack.Screen name="chamfirst" component={chamfirst} options={{title:"1화", headerTitleAlign:"center"}}  />
      <ListStack.Screen name="cham" component={cham} options={{title:"참교육", headerTitleAlign:"center"}} />
      <ListStack.Screen name="so" component={so} options={{title:"소녀의 세계", headerTitleAlign:"center"}} />
      <ListStack.Screen name="solast" component={solast} options={{title:"20화", headerTitleAlign:"center"}}  />
      <ListStack.Screen name="sofirst" component={sofirst} options={{title:"1화", headerTitleAlign:"center"}}  />
      <ListStack.Screen name="elec" component={elec} options={{title:"일렉시드", headerTitleAlign:"center"}} />
      <ListStack.Screen name="eleclast" component={eleclast} options={{title:"5화", headerTitleAlign:"center"}}  />
      <ListStack.Screen name="elecfirst" component={elecfirst} options={{title:"1화", headerTitleAlign:"center"}}  />
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
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
})

const tabBarOptions= {
  activeTintColor: 'cadetblue',
  inactiveTintColor: 'gray',
}


/* App 컴포넌트 시작 */
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={screeOptions} tabBarOptions={tabBarOptions}>
            <Tab.Screen name="Home" component={HomeStackScreen}/>
            <Tab.Screen name="List" component={ListStackScreen}/>
            <Tab.Screen name="Search" component={SearchStackScreen}/>
            <Tab.Screen name="Actions" component={Actions}/>
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}