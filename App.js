import { useFonts } from '@expo-google-fonts/inter';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import React, { useContext, useState } from 'react';
import FlashMessage from "react-native-flash-message";
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { navigationRef } from './navigation/rootNavigation';
import Routers from './navigation/routers';
import store from './store';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper'


export default function App(props) {
  let [fontsLoaded] = useFonts({
    'Poppins': require('./assets/fonts/Quicksand-Bold.ttf'),
  });

  if(!fontsLoaded) return <AppLoading/>

  let persistor = persistStore(store)
  // console.log('hello')
  return (

    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        {/* <PaperProvider theme={isDark ? CustomDarkTheme : CustomDefaultTheme}> */}
          {/* <NavigationContainer theme={isDark ? CustomDarkTheme : CustomDefaultTheme} ref={navigationRef}> */}
            <Routers />
            {/* <FlashMessage position="top" /> */}
          {/* </NavigationContainer> */}
        {/* </PaperProvider> */}
      {/* </PersistGate> */}
    </Provider>
  );
}
