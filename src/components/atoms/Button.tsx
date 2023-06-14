import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, StyleProp, ViewStyle } from 'react-native';
import { sizeFont, sizePadding } from '../../utils/sizeUtils';
import Ripple from 'react-native-material-ripple';
import { theme } from '../../themes/theme';

interface CustomButtonProps extends TouchableOpacityProps {
    buttonText: string;
    onPress: () => void;
    buttonStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<ViewStyle>;
    iconLeft?: any;
    iconRight?: any;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    buttonText,
    onPress,
    buttonStyle,
    textStyle,
    iconLeft,
    iconRight,
    ...props
}) => {
    return (
        <Ripple
            style={[styles.button, buttonStyle]}
            onPress={onPress}
            rippleColor={theme.color.smokeyBlack}
            {...props}
        >
            {iconLeft && iconLeft}
            <Text style={[styles.buttonText, textStyle]}>{buttonText}</Text>
            {iconRight && iconRight}
        </Ripple>

    );
};

const styles = StyleSheet.create({
    ripStyle: {
        borderRadius: 100,
        overflow: 'hidden'
    },
    button: {
        backgroundColor: theme.color.darkGreen,
        paddingVertical: sizePadding(10),
        paddingHorizontal: sizePadding(20),
        borderRadius: 100,
        flexDirection: 'row',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: sizeFont(16),
        fontWeight: 'bold',
    },
});

export default CustomButton;
