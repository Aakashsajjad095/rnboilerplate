import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';
import Ripple from 'react-native-material-ripple';
import AppLogo from '../../assets/images/svgs/logo/app_logo.svg';
import { Row } from '../../layouts';
import { theme } from '../../themes/theme';
import { sizeHeight, sizePadding, sizeWidth } from '../../utils/sizeUtils';

interface MainHeaderProps {
  headerStyle?: StyleProp<View>;
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  rightTitle?: string;
  rightTitleOnPress?: () => void;
  goBack?: () => void;
  icon1?: ReactNode;
  icon2?: ReactNode;
  icon3?: ReactNode;
  backIconColor?: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({
  headerStyle,
  title,
  titleStyle,
  rightTitle,
  rightTitleOnPress,
  goBack,
  icon1,
  icon2,
  icon3,
  backIconColor,
}) => {
  return (
    <Row style={[styles.mainRowContainer, headerStyle]}>
      <Row style={{ alignItems: 'center' }}>
        <AppLogo height={sizeHeight(36.3)} width={sizeWidth(35.9)} />
      </Row>
      {rightTitle ? (
        <Ripple onPress={rightTitleOnPress}>
          <Text style={[{ fontFamily: theme.font.regular, color: '#000' }, titleStyle]}>{rightTitle}</Text>
        </Ripple>
      ) : (
        <Row style={styles.iconsRowContainer}>
          {icon1}
          {icon2}
          {icon3}
        </Row>
      )}
    </Row>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  mainRowContainer: {
    justifyContent: 'space-between',
    backgroundColor: theme.color.black,
    paddingTop: sizePadding(10),
    paddingBottom: sizePadding(15),
    paddingHorizontal: sizePadding(17),
  },
  iconsRowContainer: {
    marginTop: sizePadding(2),
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor:'red',
    // padding:20
  },
  backIconContainer: {
    paddingHorizontal: sizePadding(5),
  },
  logo: {
    width: 50,
    height: 30,
    resizeMode: 'cover',
    //justifyContent:'flex-end'
  },
});
