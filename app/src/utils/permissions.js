import { PermissionsAndroid } from 'react-native';
// import RNFetchBlob from 'react-native-blob-util';
import RNFS from 'react-native-fs';

class RequestPermissionService{
// Function to request external storage write permission
 requestExternalStorageWritePermission = async () => {
  try {
    // Check if the permission is already granted
    const granted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    );
    if (granted) {
      console.log('External storage write permission already granted');
      return true;
    }

    // If permission is not granted, request it
    const result = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    );
    if (result === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('External storage write permission granted');
      return true;
    } else {
      console.log('External storage write permission denied');
      return false;
    }
  } catch (error) {
    console.error('Failed to request external storage write permission:', error);
    return false;
  }
};
}
export const requestPermissionService=new RequestPermissionService()
