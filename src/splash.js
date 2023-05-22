import React, { Component, useEffect, useRef } from 'react';
import { Dimensions, Text, View } from 'react-native';
import Lottie from 'lottie-react-native';
import myLottie from './animation.json';

const { height, width } = Dimensions.get('window');

const Splash = () => {
  const lottieRef = useRef(null);

  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: 'yellow'
      }}>
      {/* <Lottie
        ref={lottieRef}
        source={myLottie}
        loop={false}
        resizeMode="cover"
        style={{
          flexGrow: 1,
          margin: 0,
        }}
      /> */}
    </View>
  );
};

export default Splash;
