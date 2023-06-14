import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomIcon from '../../components/atoms/Icon';
import MainHeader from '../../components/molecules/Header';
import { Line, SafeAreaContainer } from '../../layouts';
import { theme } from '../../themes/theme';
import { sizeHeight, sizePadding, sizeWidth } from '../../utils/sizeUtils';
import Button from '../../components/atoms/Button';
import BellActiveIcon from '../../assets/images/svgs/bell/bell_active.svg'
import BellUnActiveIcon from '../../assets/images/svgs/bell/bell_active.svg'
import MenuIcon from '../../assets/images/svgs/menu/menu.svg'
import Ripple from 'react-native-material-ripple';
import CustomCard from '../../components/molecules/Card';
interface DashBoardProps {
    navigation: any;
}

const DashBoard: React.FC<DashBoardProps> = ({ navigation }) => {

    const { t, i18n } = useTranslation()
    return (
        <SafeAreaContainer edges={['top']}>
            <MainHeader
                title={'Dashboard'}
                icon1={
                    <Ripple
                        style={[styles.icon]}
                        onPress={() => { }}
                        rippleColor={theme.color.smokeyBlack}
                    >
                        <BellUnActiveIcon height={sizeHeight(25)} width={sizeWidth(20)} style={{ padding: 10 }} />
                    </Ripple>
                }
                icon2={
                    <Ripple
                        style={[styles.icon]}
                        onPress={() => { navigation.openDrawer() }}
                        rippleColor={theme.color.smokeyBlack}
                    >
                        <MenuIcon height={sizeHeight(19)} width={sizeWidth(20.7)} />
                    </Ripple>
                }
                goBack={() => { }}
            />
            <Line />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.color.aliceBlue }}>
                <Text>{t('WelcomeText')}</Text>

                <CustomCard
                    title={'12345678'}
                    date={'06.07.2023 at 8:05'} 
                    description='null'
                    name='Robert Robertsons'
                    address='20316 Saticoy St #102, Winnetka, California (CA), 91306'
                    />
                {/* <Button
                    buttonText="Save Settings"
                    onPress={() => { }}
                    iconLeft={<CustomIcon
                        shortType={'fi'}
                        name="send"
                        size={30}
                        style={{ marginHorizontal: sizePadding(7) }}
                        fontColor={theme.color.white} />}
                /> */}
            </View>
        </SafeAreaContainer>
    );
};

export default DashBoard;

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    icon: {
        paddingLeft: sizePadding(15)
    },
})
