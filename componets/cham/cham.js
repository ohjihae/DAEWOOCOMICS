import React from 'react';
import { Text, View } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import { ListItem, Avatar } from 'react-native-elements'

import { useDispatch, useSelector } from 'react-redux'
import { addAction } from '../../redux/actions'
import { removeAction } from '../../redux/actions'

import {LISTDATA} from '../../shared/list'
import { CGYLISTDATA } from './CgyList'

import chamfirst from './image/chamfirst';
import last from './image/chamlast';

const Cham = ({ route, navigation }) => {

  const list = CGYLISTDATA;

  // navigation.navigate("스크린이름", 매개변수)
  //console.log("--detail");
 // console.log(route.params);  // navigate로 넘어온 매개변수

  // const id = route.params.id;
  const { id } = route.params;

  const item = LISTDATA.filter(item => item.id == id)[0];
  console.log(item);

  const item2 = list.filter(item => item.id == id)[0];

  const dispatch = useDispatch();

  const actions = useSelector(state => state.actions);
  console.log("--actions--");
  console.log(actions);

  const isExistedAction = actions.filter(item => item.id == id).length > 0 ? true : false;
  console.log("--isExistedAction--");
  console.log(isExistedAction);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", justifyContent: "center" }}>
        <Card>
          <Card.Title>{item.title}</Card.Title>
          <Card.Divider />
          <Card.Image source={{ uri: item.image }} style={{ width: 350, height: 190 }}>
          </Card.Image>
          <Card.Divider />
          <Text style={{ marginBottom: 10 }}>
            {item.description}
          </Text>
          <View style={{flexDirection:'row'}}>
          <Button
            title="첫화보기"
            buttonStyle={{ width: 130, height: 30, backgroundColor: "cadetblue", marginRight:50, marginLeft:20 }}
            onPress={() => { navigation.navigate(item2.idd = chamfirst)}}
          />

          {
            isExistedAction
              ?

              <Button
                onPress={() => { dispatch(removeAction(id)) }}
                icon={<Icon name='heart' type='ionicon' color='#ffffff' />}
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: "gray", width: 130, height: 30 }}
                title='Remove'
              />
              :
              <Button
                onPress={() => { dispatch(addAction(item)) }}
                icon={<Icon name='heart-outline' type='ionicon' color='#ffffff' />}
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: "cadetblue", width: 130, height: 30 }}
                title='Like'
              />
          }

          </View>
        </Card>
        <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
          {
            list.map((item, i) => (
              <ListItem containerStyle={{ width: "90%" }} key={i} onPress={() => { navigation.navigate(item.idd )}}>
                <Avatar source={{ uri: item.image }} style={{width: 70, height: 50}} />
                <ListItem.Content>
                  <ListItem.Title>{item.title}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            ))
          }
        </View>
      </ScrollView>
    </View>
  )
}
export default Cham;