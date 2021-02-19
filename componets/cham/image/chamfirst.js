import React from 'react';
import { View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'

const chamfirst = () => {
  return (
    <View>
      <ScrollView>
        <Image
          source={{
            uri: 'https://alltimeimage.s3.ap-northeast-2.amazonaws.com/yagall/6a95966a6a4208.jpg'
          }}
          style={{ width: "100%", height: 5200 }}
        />
      </ScrollView>
    </View>
  );
}

export default chamfirst;