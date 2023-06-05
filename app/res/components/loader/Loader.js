import React from 'react';
import { View, ActivityIndicator, StyleSheet,Text } from 'react-native';
import { sizePadding } from '../../../src/utils/sizeUtils';
import { color } from '../../globalStyles/colors';
import { FONTS } from '../../globalStyles/themeSizes';

const Loader = ({isLoaderShow,message}) => (
  <View style={[styles.container,{backgroundColor:isLoaderShow?'rgba(0, 0, 0, 0.5)':'transparent'}]}>
  {isLoaderShow &&
<View style={{padding:sizePadding(15),backgroundColor:color.white,borderRadius:sizePadding(7),flexDirection:'row',justifyContent:'flex-start',width:'90%'}}>
<ActivityIndicator size="large" color={color.primary} />
<Text style={{...FONTS.hMedium5,textAlign:'center',marginTop:sizePadding(5),marginLeft:sizePadding(20)}}>{message}</Text>
</View>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    //backgroundColor: 'transparent',
     backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default Loader;
