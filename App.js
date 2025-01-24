import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';
import { useState, useCallback, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Entypo } from '@expo/vector-icons';
import * as Font from 'expo-font';
import {View, TouchableOpacity, ActivityIndicator } from 'react-native';


SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 1000,
  fade:true,
});

export default function App() {
  const [appIsRead, setAppIsRead ] = useState(false);

  useEffect(() =>{
    async function prepare(){
      try {
        Font.loadAsync(Entypo.font);
        await new Promise(resolve => setTimeout(resolve,2000));
      }catch(e){
        console.warn(e);
      } finally {
        setAppIsRead(true);
      }
    }

    prepare();
  },[]);

  const onLayoutRootView = useCallback(() => {
    if(appIsRead) {
      SplashScreen.hide();
    }
  },[appIsRead]);

  if(!appIsRead) {
    return null;
  }
  return (
    <>
      <View
        onLayout={onLayoutRootView}    
      ></View>
        <StatusBar style="light" />
        <Routes />
    </>
  );
}


