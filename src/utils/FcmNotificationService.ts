import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

class FcmNotificationService {
  requestUserPermission = async (): Promise<boolean> => {
    const authStatus = await messaging().requestPermission();
    console.log('Authorization status:', authStatus);
    return (
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL
    );
  };

  fetchFCMToken = (onRegister: (token: string) => void): void => {
    messaging()
      .getToken()
      .then((fcmToken: any) => {
        if (fcmToken) {
          onRegister(fcmToken);
          console.log('FCM Token:', fcmToken);
        } else {
          console.warn('No FCM token received');
        }
      })
      .catch((error: any) => {
        console.error('Error fetching FCM token:', error);
      });
  };

  getInitialNotification = (onInitialNotification: (remoteMessage: any, isInitial: boolean) => void): void => {
    messaging()
      .getInitialNotification()
      .then((remoteMessage: any) => {
        if (remoteMessage) {
          onInitialNotification(remoteMessage, true);
          console.log('Received initial notification:', remoteMessage);
        }
      });
  };

  getNotificationOpenedApp = (onInitialNotification: (remoteMessage: any, isInitial: boolean) => void): void => {
    messaging().onNotificationOpenedApp((remoteMessage: any) => {
      onInitialNotification(remoteMessage, true);
    });
  };

  getBackgroundMessageHandler = (onInitialNotification: (remoteMessage: any) => void): void => {
    messaging().setBackgroundMessageHandler((remoteMessage: any) => {
      onInitialNotification(remoteMessage);
    });
  };

  getSubscribe = (onInitialNotification: (remoteMessage: any, isInitial: boolean) => void): void => {
    messaging().onMessage((remoteMessage: any) => {
      onInitialNotification(remoteMessage, false);
    });
  };

  subscribeToTopic = async (topic: string): Promise<void> => {
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

  Notification = async (topic: string, onInitialNotification: any): Promise<(() => void)> => {
    if (await this.requestUserPermission()) {
      // this.fetchFCMToken(onRegister);
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
