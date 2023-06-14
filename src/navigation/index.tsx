import React, { useContext } from 'react';
import { View } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext } from '../themes/ThemeContext';
import { sizePadding, sizeWidth } from '../utils/sizeUtils';
import CustomDrawer from './DrawerMenu/CustomDrawer';
import MainStack from './StackNavigation';
import { theme } from '../themes/theme';

type RootDrawerParamList = {
  MainHome: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

function Index(props: any) {
  const displayTheme = useContext(ThemeContext).state.theme;

  const screenOption: DrawerContentOptions = {
    headerShown: false,
    drawerPosition: 'right',
    drawerStyle: {
      borderTopLeftRadius: sizePadding(10),
      borderBottomLeftRadius: sizePadding(10),
      borderColor: theme.color.white,
      borderWidth: sizeWidth(5)
    },
    drawerType: 'front',
  };

  const CustomDrawerContent = (drawerProps: DrawerContentComponentProps) => {
    return (
      <DrawerContentScrollView {...drawerProps}>
        <CustomDrawer {...drawerProps} {...displayTheme} />
      </DrawerContentScrollView>
    );
  };

  return (
    <View style={{ flex: 1, }}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName='MainHome'
          drawerContent={CustomDrawerContent}
          screenOptions={screenOption}
        >
          <Drawer.Screen name='MainHome' component={MainStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default Index;

