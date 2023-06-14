/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry, Text, TextInput, useColorScheme } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import { LogBox } from 'react-native';
import store from './src/redux/store'
import { ThemeProvider } from './src/themes/ThemeContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import './languages/i18n'

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

let persistor = persistStore(store);

const AppRedux = () => (
    <Provider {...{ store }}>
        <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider scheme={useColorScheme() === 'dark' ? 'dark' : 'light'}>
                <SafeAreaProvider>
                    <App />
                </SafeAreaProvider>
            </ThemeProvider>
        </PersistGate>
    </Provider>
);

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(AppRedux));
