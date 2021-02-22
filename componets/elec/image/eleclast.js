import React from 'react';
import { View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'

const elecfirst = () => {
  return (
    <View>
      <ScrollView>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-MREZZq_hj-tL7De3MskYszxqGyvCfl6XfA&usqp=CAU'
          }}
          style={{ width: "100%", height: 3840 }}
        />
      </ScrollView>
    </View>
  );
}

export default elecfirst;