import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

class FcmNotificationService {
  requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    console.log('Authorization status:', authStatus);
    return (
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL
    );
  };

  fetchFCMToken = (onRegister) => {
    messaging()
      .getToken()
      .then((fcmToken) => {
        if (fcmToken) {
          onRegister(fcmToken);
          console.log('FCM Token:', fcmToken);
        } else {
          console.warn('No FCM token received');
        }
      })
      .catch((error) => {
        console.error('Error fetching FCM token:', error);
      });
  };

  getInitialNotification = (onInitialNotification) => {
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          onInitialNotification(remoteMessage, true);
          console.log('Received initial notification:', remoteMessage);
        }
      });
  };

  getNotificationOpenedApp = (onInitialNotification) => {
    messaging().onNotificationOpenedApp((remoteMessage) => {
      onInitialNotification(remoteMessage, true);
    });
  };

  getBackgroundMessageHandler = (onInitialNotification) => {
    messaging().setBackgroundMessageHandler((remoteMessage) => {
      onInitialNotification(remoteMessage);
    });
  };

  getSubscribe = (onInitialNotification) => {
    messaging().onMessage((remoteMessage) => {
      onInitialNotification(remoteMessage, false);
    });
  };

  subscribeToTopic = async (topic) => {
    const isSubscribed = await AsyncStorage.getItem('isSubscribed');
    if (!isSubscribed) {
      messaging()
        .subscribeToTopic(topic)
        .then(async () => {
          console.log(`Subscribed to topic: ${topic}`);
          await AsyncStorage.setItem('isSubscribed', 'true');
        });
    }
  };

  Notification = (topic, onInitialNotification) => {
    if (this.requestUserPermission()) {
    //   this.fetchFCMToken(onRegister);
    } else {
      console.warn('User has not granted permission for FCM notifications');
    }

    this.getInitialNotification(onInitialNotification);
    this.getNotificationOpenedApp(onInitialNotification);
    this.getBackgroundMessageHandler(onInitialNotification);
    this.getSubscribe(onInitialNotification);

    this.subscribeToTopic(topic);

    return () => {
      this.getSubscribe(onInitialNotification);
    };
  };
}

export const fcmNotificationService = new FcmNotificationService();
