import {
  Poppins_400Regular, useFonts
} from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Routers from './navigation/routers';
import store from './store';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import FlashMessage from "react-native-flash-message";
import {Text} from 'react-native'
import { navigationRef } from './navigation/rootNavigation';
// import { navigationRef } from './RootNavigation';
export default function App(props) {
  // let [fontsLoaded] = useFonts({
  //   'Poppins': require('./assets/fonts/Quicksand-Bold.ttf'),
  // });

  // if(!fontsLoaded) return <AppLoading/>

  let persistor = persistStore(store)
  // console.log('hello')
  return (
    
    <Provider store={store}>
        {/* <Text style={{paddingTop: 100}}>123</Text> */}
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <NavigationContainer ref={navigationRef}>
          <Routers/>
          {/* <SafeAreaView> */}
          {/* </SafeAreaView> */}
          <FlashMessage position="top" />
        </NavigationContainer>
      {/* </PersistGate> */}
    </Provider>
  );
}
