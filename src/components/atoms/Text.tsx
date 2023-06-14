import React, { ReactElement } from 'react';
import { View, StyleSheet, ViewProps, StyleProp, TextStyle, Text } from 'react-native';
import { theme } from '../../themes/theme';

type Props = {
    [key: string]: any;
};
const TextComponent = ({ style, ...props }: Props) => {
    return (
        <Text style={[styles.txt, style]} {...props}>
            {props.children}
        </Text>
    );
};
const styles = StyleSheet.create({
    txt: {
        fontFamily: theme.font.semiBold,
    },
});
export default Text;