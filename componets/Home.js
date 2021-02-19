import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { Card } from 'react-native-elements';

import { LISTDATA } from '../shared/list'

const styles = StyleSheet.create({
  gridView: {
    marginTop: 0,
    flex: 1,
  },
  itemContainer: {
    // justifyContent: 'flex-end',
    borderRadius: 0,
    padding: 0,
    height: 200,
  },
  itemName: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '600',
    textAlign: 'left',
    marginLeft: 8,
    marginTop: 0,
    marginBottom: 0,
  },
  itemsubtitle: {
    fontSize: 11,
    color: '#000000',
    fontWeight: '600',
    textAlign: 'left',
    marginLeft: 8,
    marginTop: 0,
    marginBottom: 0,
  },
});

const Home = ({ navigation }) => {

  return (
    <View>
      <View style={{width:'100%',height:'24%'}}>
      <Card.Image source={{uri: 'https://i.ytimg.com/vi/JRXcbcEnqEs/maxresdefault.jpg'}}></Card.Image>
      </View>
      <View style={{width:'100%',height:'76%'}}>
      <FlatGrid
        itemDimension={120}
        spacing={0}
        data={LISTDATA}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Card.Image
            source={{uri: item.image}}
            onPress={()=>{navigation.navigate(item.subid,{id: item.id})}}
            /> 
            <Text style={styles.itemName}>{item.title}</Text>
            <Text style={styles.itemsubtitle}>{item.subtitle}</Text>
          </View>
        )}
      />
      </View>
    </View>
  );
}

export default Home;