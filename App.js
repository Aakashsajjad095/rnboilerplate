import React, { useEffect, useState } from 'react'
import { SafeAreaView,View,LogBox } from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import FlashMessage from "react-native-flash-message";
import SplashScreen from 'react-native-splash-screen'
import StackNavigation from './app/src/routers/Stack'

import {ImageProvider} from './app/src/context/ImageContext';



import { color } from './app/res/globalStyles/colors'


import {store,persistor} from './app/src/redux/store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import persistStore from 'redux-persist/es/persistStore'





const App = () => {


  const [rehydrate,setRehydrate]=useState(false)


  useEffect(() => {
    SplashScreen.hide();
    // Call the `loadPersistor` function to start the rehydration process
    LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
    LogBox.ignoreAllLogs();//Ignore all log notifications
    loadPersistor();
  }, []);


  const loadPersistor = async () => {
    persistStore(store, null, () => {
      // Set the `rehydrate` state to `true` and hide the splash screen
      setRehydrate(true);
        // SplashScreen.hide();
    });
  };


  // if (!rehydrate) {
  //   return   <LinearGradient
  //   colors={[color.primary,color.secondary]}
  //   style={{flex:1}}
  //   ></LinearGradient>;
  // }

  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} ></PersistGate>
      <>
      <ImageProvider>
    <SafeAreaProvider>
      {/* <SafeAreaView style={{flex:1}}> */}
     <StackNavigation/>
     {/* </SafeAreaView> */}
     </SafeAreaProvider>
     <FlashMessage position="top" /> 
     </ImageProvider>
</>
     </Provider>
  )
}

export default App