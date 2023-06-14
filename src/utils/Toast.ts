import { Platform, ToastAndroid, Alert } from 'react-native'

const Toast = (message: any) => {
    if (Platform.OS === 'android') {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
        Alert.alert(message)
    }
}
export default Toast