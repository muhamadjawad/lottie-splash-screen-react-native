import React, {Component, useEffect} from 'react';
import {View} from 'react-native';
import LottieSplashScreen from 'react-native-lottie-splash-screen';
import Splash from './src/splash';

const App = () => {
  useEffect(() => {
    // when this screen will appear the lottie shoukd be removed
    LottieSplashScreen.hide(); // here
  }, []);

  return (
    <View style={{flex: 1}}>
      <Splash />
    </View>
  );
};

export default App;
