import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle, TouchableOpacity } from 'react-native';
import { theme } from '../../themes/theme';
import { sizeFont, sizeHeight, sizePadding, sizeWidth } from '../../utils/sizeUtils';
import { Column, Line, Row } from '../../layouts';
import { useTranslation } from 'react-i18next';
import CircleArrow from '../../assets/images/svgs/arrow/circle_arrow.svg'

interface CustomCardProps {
    title: string;
    description: string;
    containerStyle?: ViewStyle;
    titleStyle?: TextStyle;
    descriptionStyle?: TextStyle;
    onPress?: () => void;
    date?: any,
    name?: string,
    address?: string
}

const CustomCard: React.FC<CustomCardProps> = ({
    title,
    description,
    containerStyle,
    titleStyle,
    descriptionStyle,
    onPress,
    date,
    name,
    address
}) => {
    const { t, i18n } = useTranslation()
    return (
        <TouchableOpacity style={[styles.container, containerStyle]}>
            <Column style={{ padding: sizePadding(16) }}>
                <Row style={styles.upper}>
                    <Text style={[styles.title, titleStyle]}>{`${t('WorkOrder')}# ${title}`}</Text>
                    <Text style={[styles.date, descriptionStyle]}>{`${date}`}</Text>
                </Row>
                <View style={styles.services}>
                    <Text style={[styles.serviceType, titleStyle]}>{`${'Carpet Cleaning'}`}</Text>
                </View>
                <Column style={styles.middle}>
                    <Text style={[styles.title, titleStyle]}>{`${name}`}</Text>
                    <Text style={[styles.description, descriptionStyle]}>{`${address}`}</Text>
                </Column>
            </Column>

            <Line />
            <Row style={styles.lower}>
                <Row>
                    <Column style={styles.column}>
                        <Text style={[styles.date, titleStyle]}>{`${t('VisitDate')}`}</Text>
                        <Text style={[styles.description, descriptionStyle]}>{`${'06.26.2023'}`}</Text>
                    </Column>
                    <Column style={styles.column}>
                        <Text style={[styles.date, titleStyle]}>{`${t('ClientPO')}`}</Text>
                        <Text style={[styles.description, descriptionStyle]}>{`${'123456778'}`}</Text>
                    </Column>
                </Row>
                <TouchableOpacity>
                    <CircleArrow height={sizeHeight(62)} width={sizeWidth(62)} />
                </TouchableOpacity>

            </Row>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '92%',
        backgroundColor: theme.color.white,
        shadowColor: theme.color.tint,
        borderRadius: sizeHeight(10),
        // padding: sizePadding(16),
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    upper: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    lower: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: sizePadding(16)
    },
    services: {
        backgroundColor: theme.color.buttonBG,
        alignSelf: 'flex-start',
        borderRadius: sizePadding(100),
        marginTop: sizePadding(10),
    },
    column: {
        paddingVertical: sizePadding(12),
        marginRight: sizePadding(30)
    },
    serviceType: {
        fontSize: sizeFont(12),
        color: theme.color.black,
        paddingHorizontal: sizePadding(8),
        paddingVertical: sizePadding(5)
    },
    middle: {
        marginTop: sizePadding(17),
        marginBottom: sizePadding(12)
    },
    title: {
        fontSize: sizeFont(14),
        fontFamily: theme.font.extraBold,
        color:'black',
        paddingRight: sizePadding(8)
    },
    date: {
        fontSize: sizeFont(12),
        color: theme.color.gray47,
        lineHeight: sizeHeight(17.63),
        paddingBottom: sizePadding(4)
    },
    description: {
        fontSize: sizeFont(12),
        color: theme.color.black,
    },

});

export default CustomCard;
