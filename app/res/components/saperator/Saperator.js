import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from '../../globalStyles/colors'

const Saperator = ({style}) => {
  return (
    <View style={[styles.container,style]}/>
  )
}

export default Saperator

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:1,
        backgroundColor:color.lightGrey,
    }
})