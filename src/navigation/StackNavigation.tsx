import React, { useContext } from 'react';
import { CardStyleInterpolators, createStackNavigator, StackNavigationOptions, TransitionSpecs } from "@react-navigation/stack";
import DashBoard from '../screens/dashboard';

type RootStackParamList = {
  dashboard: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const MainStack = () => {
  const screenOption: StackNavigationOptions = {
    headerShown: false,
    gestureDirection: 'vertical',
    fullScreenGestureEnabled: true,
    customAnimationOnGesture: true,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    },
    animation: 'slide_from_right'
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name="dashboard" component={DashBoard} options={screenOption} />
    </Stack.Navigator>
  );
};

export default MainStack;
