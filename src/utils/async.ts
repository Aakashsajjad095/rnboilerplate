import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (key: any, value: any) => {
    if (typeof value === 'object') {
        value = JSON.stringify(value)
    }
    await AsyncStorage.setItem(key, value)
    return
}
export const getItem = async (key: any) => {
    let value = await AsyncStorage.getItem(key)
    if (value) {
        if (value.indexOf('{') > -1) {
            value = JSON.parse(value)
        }
    }
    return value
}
export const deleteItem = async (key: any) => {
    await AsyncStorage.removeItem(key)
    return true
}