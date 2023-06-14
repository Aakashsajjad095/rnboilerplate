import ImagePicker from 'react-native-image-crop-picker';
import Toast from './Toast';
import ImgToBase64 from 'react-native-image-base64';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from "rn-fetch-blob";
import { Platform, PixelRatio } from 'react-native';

const fs = RNFetchBlob.fs;
let imagePath: any = null;

const PickImage = () => {

    return new Promise((res, rej) => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then((image: any) => {
            Toast('Image Uploaded')
            console.log("image--->", image);
            return res(image.path)
        }).catch((error: any) => {
            console.log(error);
            Toast('User cancelled image selection')
        });
    })
}

const TakeImage = () => {
    return new Promise((res, rej) => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then((image: any) => {
            Toast('Image Uploaded')

            return res(image.path)
        }).catch((error: any) => {
            console.log(error);
            Toast('User cancelled image selection')

        });
    })

}

const PickDocument = () => {
    return new Promise((res, rej) => {
        DocumentPicker.pickSingle({
            copyTo: 'documentDirectory',
            type: [DocumentPicker.types.pdf]
        }).then((document: any) => {
            console.log("document--->", document);
            return res(document)
        })
    })
}

const DocToBase64 = (uri: any) => {
    return new Promise((res, rej) => {
        console.log("uri--->", uri);
        RNFetchBlob.config({
            fileCache: true
        })
            .fetch("GET", uri)
            // the image is now dowloaded to device's storage
            .then((resp: any) => {
                // the image path you can use it directly with Image component
                imagePath = resp.path();
                return resp.readFile("base64");
            })
            .then((base64Data: any) => {
                // here's base64 encoded image
                console.log("imagePath--->", imagePath);
                console.log("base64Data--->", base64Data);
                // remove the file from storage
                return fs.unlink(imagePath);
            });
    })

}

const ImageToBase64 = (uri: any) => {
    return new Promise((res, rej) => {
        ImgToBase64.getBase64String(uri)
            .then((base64String: any) => res(base64String))
            .catch((err: any) => {
                console.log(err, 'image to base64');
            });
    })

}

function CapitalizeFirstLetters(str: any) {
    return str.toLowerCase().replace(/([^a-z])([a-z])(?=[a-z]{2})|^([a-z])/g, function (_: any, g1: any, g2: string, g3: string) {
        return (typeof g1 === 'undefined') ? g3.toUpperCase() : g1 + g2.toUpperCase();
    });
}

const RemoveDuplicates = (arr: any = []) => {
    const map = new Map();
    arr.forEach((x: any) => map.set(JSON.stringify(x), x));
    arr = [...map.values()];
    return arr;
};

const normalize = (size: number) => {
    const scale = PixelRatio.get();

    const newSize = size * scale;

    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
}


export { PickImage, TakeImage, ImageToBase64, PickDocument, DocToBase64, CapitalizeFirstLetters, RemoveDuplicates, normalize }

