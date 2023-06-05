import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ripple from 'react-native-material-ripple';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';

//other style
import { color } from '../../globalStyles/colors';

const CustomIcon = ({shortType,name,fontColor,size,onPress,style,disabled}) => {
 switch(shortType){
    case 'Io':
        return <Ripple disabled={disabled?disabled:false} style={style} onPress={onPress} rippleColor={color.primary}><IoniconsIcon name={name} size={size} color={fontColor}/></Ripple>;
        case 'mc':
            return <Ripple style={style} disabled={disabled?disabled:false} onPress={onPress} rippleColor={color.primary}><MaterialCommunityIconsIcon name={name} size={size} color={fontColor}/></Ripple>;
            case 'fa5':
                return <Ripple style={style} disabled={disabled?disabled:false} onPress={onPress} rippleColor={color.primary}><FontAwesome5Icon name={name} size={size} color={fontColor}/></Ripple>;
                case 'Eni':
                    return <Ripple style={style} disabled={disabled?disabled:false} onPress={onPress} rippleColor={color.primary}><EntypoIcon name={name} size={size} color={fontColor}/></Ripple>;
            default:
                return null;
 }
}

export default CustomIcon
