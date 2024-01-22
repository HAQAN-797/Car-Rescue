import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

const Background = ({ children }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require("../assets/2.jpg")} style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {children}
        </View>
      </ImageBackground>
      <View style={{ position: "absolute", bottom: 20, left: 0, right: 0, alignItems: 'center' }}>
       
      </View>
    </View>
  );
}

export default Background;
