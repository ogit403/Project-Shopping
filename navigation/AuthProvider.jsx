import React, {createContext, useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import FlashMessage from 'react-native-flash-message'
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper'
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { navigationRef } from './rootNavigation';
// import {Notifications} from 'expo'
// import * as Notifications from 'expo-notifications'
// import * as Permissions from 'expo-permissions'

export const AuthContext = createContext({})

const AuthProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false)

    // useEffect(() => {
    //     registerForPushNotificationsAsync().then(token => console.log(token)).catch(err => console.log(err))
    // }, [])

    // const registerForPushNotificationsAsync = async () => {
    //     let token;
        
    //     const { status: existingStatus } = await Notifications.getPermissionsAsync();
    //     let finalStatus = existingStatus;
    //     if (existingStatus !== 'granted') {
    //       const { status } = await Notifications.requestPermissionsAsync();
    //       finalStatus = status;
    //     }
    //     if (finalStatus !== 'granted') {
    //       alert('Failed to get push token for push notification!');
    //       return;
    //     }
    //     // token = (await Notifications.getExpoPushTokenAsync()).data;
        
    //     token = (await Notifications.getExpoPushTokenAsync()).data;
    //     // console.log(token);
    // return token;
    // };

    const CustomDefaultTheme = {
        ...DefaultTheme,
        ...PaperDefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          ...PaperDefaultTheme.colors
        }
      }
    
      const CustomDarkTheme = {
        ...DarkTheme,
        ...PaperDarkTheme,
        colors: {
          ...DarkTheme.colors,
          ...PaperDarkTheme.colors
        }
      }

    return (
        <AuthContext.Provider
        value={{
            isDark,
            toggleTheme: () => {
                setIsDark(isDark => !isDark)
            }
        }}
    >
        <PaperProvider theme={isDark ? CustomDarkTheme : CustomDefaultTheme}>
          <NavigationContainer theme={isDark ? CustomDarkTheme : CustomDefaultTheme} ref={navigationRef}>
            {/* <Routers /> */}
        {children}
            <FlashMessage position="top" />
          </NavigationContainer>
        </PaperProvider>
    </AuthContext.Provider>
    )
}

export default AuthProvider
