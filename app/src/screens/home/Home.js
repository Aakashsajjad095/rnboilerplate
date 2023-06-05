import { FlatList, Platform, Text, View, Dimensions, NativeModules, LayoutAnimation, Animated } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'



//components
import { CenterView, Footer } from '../../../res/components/layout/LayoutComponents'
import { MainHeader, CustomIcon,  } from '../../../res/components'

//other styles
import useGlobalStyles from '../../../res/globalStyles/GlobalStyles'
import { HomeStrings, notificationTopic,} from '../../../res/strings/AppConstant'

//utils
import { sizeHeight, sizePadding, sizeWidth } from '../../utils/sizeUtils'
import { color } from '../../../res/globalStyles/colors'


import { pickImageService } from '../../utils/pickImage'
import NavigationStrings from '../../../res/strings/NavigationStrings'
import { styles } from './style'
import { requestPermissionService } from '../../utils/permissions'
import { FONTS } from '../../../res/globalStyles/themeSizes';

import { fcmNotificationService } from '../../utils/FcmNotificationService';



import ImageContext from '../../context/ImageContext'

const { width } = Dimensions.get('screen')
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);


const Home = ({ navigation }) => {
  const globalStyle = useGlobalStyles()
  const { addSelectedImage, clearSelectedImages } = useContext(ImageContext);
  const [state, setState] = useState({

    isSelectAll: false,
    selectedItem: [],
  })


  const {isSelectAll, selectedItem} = state
  const pdfSuccess = useSelector((state) => state.convertedPdfR.pdfSuccess)
  const dispatch = useDispatch()

  //notification

  useEffect(() => {
     fcmNotificationService.Notification(notificationTopic.Topic, onInitialNotification,)
  }, [])


  const onInitialNotification = (remoteMessage, fromBackground) => {
    //console.log("processNotification onRegister:", remoteMessage, fromBackground)

    let title = '';
    let body = '';
    let alertBtns = [];

    if (remoteMessage) {
      if (remoteMessage.notification) {
        title = remoteMessage.notification.title;
        body = remoteMessage.notification.body;
      }

      // console.log('body', body)
      if (remoteMessage.data) {
        // If user tab on the notification when the app is in background or not running
        if (fromBackground && remoteMessage.data.msgType) {

        }
      }
    }
  }






  //logic functions start
  function slectImages() {
    setState({ ...state, isDisableButton: true, isVisibleGallery: Platform.OS == 'android' ? true : false })

    if (Platform.OS == 'ios') {
      pickImageService.imagePicker().then((res) => {
        if (res) {
          addSelectedImage(res);
          navigation.navigate(NavigationStrings.selectedImages, {
            imageData: []
          })
          setState({ ...state, isDisableButton: false })
        } else {
          setState({ ...state, isDisableButton: false })
        }
      })
    }
  }
  //logic functions end

  
  return (
    <View style={globalStyle.safeAreaContainer}>
     
        <MainHeader
          title={isSelectAll ? `${selectedItem.length} ${HomeStrings.selectedFiles}` : HomeStrings.file}
          icon1={<CustomIcon name="select-all" shortType={'mc'} size={25} fontColor={isSelectAll ? color.appleGreen : color.smokeyBlack} onPress={() => {
            setState({ ...state, pdfData: pdfSuccess, isSelectAll: !isSelectAll })
            setTimeout(() => {
              handelSelectAll(!isSelectAll)
            }, 10);


          }} />}
          icon2={isSelectAll ? <CustomIcon shortType={'mc'} name="delete-outline" size={25} style={{ marginHorizontal: sizePadding(7) }} fontColor={color.salmonPink} onPress={() => deleteOnPress()} /> : null}
          isbackButton={isSelectAll}
          goBack={() => {
            setState({ ...state, isSelectAll: !isSelectAll })
          }}

        />
        <CenterView>
         <Text style={{...FONTS.hBold2}}>Body</Text>
        </CenterView> :
    
    <Footer>
    <Text style={{...FONTS.bodyMedium2}}>Footer</Text>
    </Footer>




    </View>
  )
}

export default Home