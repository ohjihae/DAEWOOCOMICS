import React from 'react';
import { View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'

const sofirst = () => {
  return (
    <View>
      <ScrollView>
        <Image
          source={{
            uri: 'https://image.aladin.co.kr/img/img_content/8934998067_01.jpg'
          }}
          style={{ width: "100%", height: 1951 }}
        />
      </ScrollView>
    </View>
  );
}

export default sofirst;