import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { RFValue } from "react-native-responsive-fontsize";

export const sizeWidth=(value)=>{
    return scale(value)
}
export const sizeHeight=(value)=>{
   return verticalScale(value)
}
export const sizePadding=(value)=>{
   return moderateScale(value)
}
export const sizeFont=(value)=>{
    return RFValue(value)
}