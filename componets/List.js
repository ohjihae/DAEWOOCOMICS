import React from 'react';
import { View } from 'react-native';

import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'

// 함수의 리턴값이 JSX.Element면
// React 컴포넌트가 된다.

//JSX를 쓰려면 import React from 'react';
// Navigator로 화면을 이동할 때 컴포넌트 속성으로 navigation이 전달됨
const List = ({ navigation, list }) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={{ flexGrow:1, alignItems:"center", justifyContent:"center" }}>
        {
          list.map((item, i) => (
            <ListItem containerStyle={{width:"90%"}} key={i} onPress={()=>{navigation.navigate(item.subid, {id: item.id})}}>
              <Avatar source={{uri: item.image}} />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
                <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        }
      </ScrollView>
    </View>
  )
}
export default List;