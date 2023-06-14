import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaContainer } from '../../layouts';
import { theme } from '../../themes/theme';
import { moreMenus } from './menus';
import CustomIcon from '../../components/atoms/Icon';
import { sizeFont, sizeHeight, sizePadding, sizeWidth } from '../../utils/sizeUtils';

interface CustomDrawerProps {
  colors: {
    primaryText: string;
    secondaryText: string;
    appbarBackground: string;
  };
  textVariants: {
    bold: string;
  };
  navigation: any; // Replace 'any' with the appropriate navigation type
}

const CustomDrawer: React.FC<CustomDrawerProps> = (props) => {


  const handleOnPressItem = (route: string) => {
    props.navigation.navigate(route);
  }

  const RenderMenu: React.FC<{ item: any; index: number }> = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => handleOnPressItem(item.route)}
        style={style.row}>
        <Text style={style.title}>{item.title}</Text>
        <CustomIcon
          name="right"
          shortType={'ad'}
          size={sizeFont(18)}
          fontColor={theme.color.darkSilver}
          style={{ paddingRight: sizePadding(10), width: sizeWidth(40) }} />
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaContainer edges={['bottom']} safeStyle={{ backgroundColor: theme.color.white }}>
      {/* <View style={style.container}>
        <View style={{ width: '100%', height: 62, flexDirection: 'row', alignItems: 'center', marginLeft: 24 }}>
          <Image style={{ height: 40, width: 40, marginRight: 10 }} source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.simplilearn.com%2Fimage-processing-article&psig=AOvVaw15xvxnyqUB77NoLjR69J7z&ust=1686204886487000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJj0yezAsP8CFQAAAAAdAAAAABAE' }} />
          <Text style={{ fontSize: 22, fontWeight: 'bold', color: props.colors.primaryText, textAlign: 'left' }}>KKUKKU</Text>
        </View>
      </View> */}
      <FlatList
        style={style.flatListStyle}
        data={moreMenus}
        renderItem={RenderMenu}
        keyExtractor={item => item.route}
      />
    </SafeAreaContainer>

  );
}

export default CustomDrawer;

const style = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingLeft: sizePadding(5),
    paddingRight: sizePadding(25),
    borderTopLeftRadius: sizePadding(10),
    backgroundColor: theme.color.primary,
    overflow: 'hidden'
  },
  row: {
    width: '100%',
    height: sizeHeight(60),
    padding: sizePadding(15),
    marginLeft: sizePadding(15),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontSize: sizeFont(16),
    fontFamily: theme.font.regular
  },
  flatListStyle: {
    width: '100%',
    marginTop: sizePadding(10),
  }
})
