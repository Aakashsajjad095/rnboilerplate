import {StyleSheet} from 'react-native'
import {
    useSafeAreaInsets,
  } from 'react-native-safe-area-context';
import { color } from './colors';
import { sizeHeight, sizePadding, sizeWidth } from '../../src/utils/sizeUtils';
const useGlobalStyles=()=>{
    const insets = useSafeAreaInsets();
    return StyleSheet.create({
        container:{
            flex:1
        },
        containerCenter:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        safeAreaContainer:{
            flex:1,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        },
        shadowCard:{
            backgroundColor:color.white,
            shadowColor:color.primary,
            margin:1,
            shadowOffset:{
                width:0,
                height:3,
            },
            shadowRadius:2.65,
            shadowOpacity:0.1,
            elevation:1
        },
        circleShadow:{
            height:sizePadding(100),
            width:sizePadding(100),
            borderRadius:sizePadding(50),
            backgroundColor:color.white,
            shadowColor:color.salmonPink,
             margin:2,
            shadowOffset:{
                width:0,
                height:5,
            },
            shadowRadius:4.65,
            shadowOpacity:0.4,
            elevation:4
        },
        galleryImageContainer:{
            // flex: 1,
            height:sizePadding(163),
            width:sizePadding(163),
            borderRadius:sizePadding(15),
            margin:sizePadding(8),
            shadowColor:color.primary,
            shadowOffset:{
                width:0,
                height:3,
            },
            shadowRadius:6.65,
            shadowOpacity:0.1,
            // elevation:1

        },
        deleteButtonContainerStyle:{
            height:sizePadding(25),
            width:sizePadding(25),
            borderRadius:sizePadding(15),
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:color.darkSilver
            }
    })
}
export default useGlobalStyles


