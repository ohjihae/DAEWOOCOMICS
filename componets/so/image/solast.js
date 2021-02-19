import React from 'react';
import { View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'

const solast = () => {
  return (
    <View>
      <ScrollView>
        <Image
          source={{
            uri: 'https://cloudflare.africa.com/toon/1909/w_728_152_0218_1.jpg'
          }}
          style={{ width: "100%", height: 5000 }}
        />
      </ScrollView>
    </View>
  );
}

export default solast;