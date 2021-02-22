import React from 'react';
import { View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'

const elecfirst = () => {
  return (
    <View>
      <ScrollView>
        <Image
          source={{
            uri: 'https://cloudflare.africa.com/toon/1907/w_2400_29_2482_3.jpg'
          }}
          style={{ width: "100%", height: 4600 }}
        />
      </ScrollView>
    </View>
  );
}

export default elecfirst;