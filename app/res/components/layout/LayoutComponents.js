import React from 'react';
import { View,StyleSheet } from 'react-native';
import { sizePadding } from '../../../src/utils/sizeUtils';

const Row = ({ children,style }) => (
  <View style={[{ flexDirection: 'row' },style]}>{children}</View>
);

const Column = ({ children,style }) => (
  <View style={[{ flexDirection: 'column' },style]}>{children}</View>
);
const PositionAbsolute = ({ style, children }) => (
      <View style={[styles.absolute, style]}>
        {children}
      </View>
    );
    const Footer = ({ style, children }) => (
      <View style={[styles.FooterStle, style]}>
        {children}
      </View>
    );
    const CenterView = ({ style, children }) => (
        <View style={[styles.centerContainer, style]}>
          {children}
        </View>
      );


export { Row, Column,PositionAbsolute,CenterView,Footer };

const styles = StyleSheet.create({
    absolute: {
      position: 'absolute',
    },
    footerStyle:{
      position: 'absolute',
      bottom:sizePadding(25),
      top:0,
      right:0,
      left:0
    },
    centerContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
  });