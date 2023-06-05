import ImageCropPicker from "react-native-image-crop-picker";
import { sizeHeight, sizeWidth } from "./sizeUtils";
class PickImageService{

    imagePicker=async()=>{
        return new Promise(async(resolve,reject)=>{
            ImageCropPicker.openPicker({
                multiple:true,
                maxFiles: 20,
      mediaType: 'photo',
                height:sizeHeight(100),
                width:sizeWidth(200)
            }).then((images)=>{
              resolve(images)
            }).catch((e)=>{
                console.log('error when selecting image',e)
                resolve('')
            })
        })
    }
}
export const pickImageService=new PickImageService()