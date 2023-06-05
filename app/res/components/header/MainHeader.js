import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Row } from '../layout/LayoutComponents'
import { color } from '../../globalStyles/colors'
import { sizeFont, sizePadding } from '../../../src/utils/sizeUtils'
import { FONTS } from '../../globalStyles/themeSizes'
import CustomIcon from '../icons/CustomIcon'
import Ripple from 'react-native-material-ripple'


const MainHeader = ({headerStyle,title,titleStyle,rightTitle,rightTitleOnPress,isbackButton,goBack,icon1,icon2,icon3,backIconColor}) => {
  return (
    <Row style={[styles.mainRowContainer,headerStyle]}> 
    <Row>
      {isbackButton&&
    <CustomIcon name="arrow-back" shortType={'Io'} size={sizeFont(23)} fontColor={backIconColor?backIconColor:color.smokeyBlack} style={{paddingRight:sizePadding(10),width:sizePadding(40)}} onPress={goBack} />}
    <Text style={[{...FONTS.hSemiBold3,color:color.eerieBlack},titleStyle]}>{title}</Text>
     
      </Row>
      {rightTitle?
      <Ripple onPress={rightTitleOnPress}>
  <Text style={[{...FONTS.hRegular5,color:color.eerieBlack},titleStyle]}>{rightTitle}</Text>
      </Ripple>
      :
      <Row style={styles.iconsRowContainer}>
      {icon1}
      {icon2}
      {icon3}
      </Row>}
    </Row>
  )
}

export default MainHeader

const styles = StyleSheet.create({
    mainRowContainer:{
        justifyContent:'space-between',
        backgroundColor:color.white,
        paddingTop:sizePadding(15),
        paddingBottom:sizePadding(15),
        paddingHorizontal:sizePadding(7),
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
    iconsRowContainer:{
      marginTop:sizePadding(2),
        justifyContent:'space-between',
    },
    backIconContainer:{
      paddingHorizontal:sizePadding(5)
    }
})