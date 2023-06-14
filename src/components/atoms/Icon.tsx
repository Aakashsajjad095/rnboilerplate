import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ripple from 'react-native-material-ripple';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { theme } from '../../themes/theme';

interface CustomIconProps {
  shortType: 'Io' | 'mc' | 'fa5' | 'Eni' | 'ad' | 'fai' | 'fi';
  name: string;
  fontColor: string;
  size: number;
  onPress?: () => void;
  style?: object;
  disabled?: boolean;
}

const CustomIcon: React.FC<CustomIconProps> = ({
  shortType,
  name,
  fontColor,
  size,
  onPress,
  style,
  disabled,
}) => {
  switch (shortType) {
    case 'Io':
      return (
        <Ripple
          disabled={disabled ? disabled : false}
          style={style}
          onPress={onPress}
          rippleColor={theme.color.smokeyBlack}
        >
          <IoniconsIcon name={name} size={size} color={fontColor} />
        </Ripple>
      );
    case 'mc':
      return (
        <Ripple
          style={style}
          disabled={disabled ? disabled : false}
          onPress={onPress}
          rippleColor={theme.color.smokeyBlack}
        >
          <MaterialCommunityIconsIcon name={name} size={size} color={fontColor} />
        </Ripple>
      );
    case 'fa5':
      return (
        <Ripple
          style={style}
          disabled={disabled ? disabled : false}
          onPress={onPress}
          rippleColor={theme.color.smokeyBlack}
        >
          <FontAwesome5 name={name} size={size} color={fontColor} />
        </Ripple>
      );
    case 'Eni':
      return (
        <Ripple
          style={style}
          disabled={disabled ? disabled : false}
          onPress={onPress}
          rippleColor={theme.color.smokeyBlack}
        >
          <EntypoIcon name={name} size={size} color={fontColor} />
        </Ripple>
      );
    case 'ad':
      return (
        <Ripple
          style={style}
          disabled={disabled ? disabled : false}
          onPress={onPress}
          rippleColor={theme.color.smokeyBlack}
        >
          <AntDesign name={name} size={size} color={fontColor} />
        </Ripple>
      );
    case 'fai':
      return (
        <Ripple
          style={style}
          disabled={disabled ? disabled : false}
          onPress={onPress}
          rippleColor={theme.color.smokeyBlack}
        >
          <FontAwesome name={name} size={size} color={fontColor} />
        </Ripple>
      );
    case 'fi':
      return (
        <Ripple
          style={style}
          disabled={disabled ? disabled : false}
          onPress={onPress}
          rippleColor={theme.color.smokeyBlack}
        >
          <FeatherIcon name={name} size={size} color={fontColor} />
        </Ripple>
      );

    default:
      return null;
  }
};

export default CustomIcon;
