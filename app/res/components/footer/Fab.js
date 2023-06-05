import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Ripple from 'react-native-material-ripple';
import LinearGradient from 'react-native-linear-gradient';

//components
import CustomIcon from '../icons/CustomIcon';

// other styles
import { sizeFont, sizeHeight, sizeWidth } from '../../../src/utils/sizeUtils';
import { color } from '../../globalStyles/colors';


const Fab = ({ onPress, disabled, iconName }) => {
    return (
        <Ripple onPress={onPress} disabled={disabled} rippleContainerBorderRadius={sizeHeight(25)} style={styles.fabPosition}>
            <LinearGradient colors={[color.primary, color.secondary]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.fabContainer}>
                <CustomIcon name={'plus'} fontColor={color.white} shortType={'fa5'} size={sizeFont(24)} disabled={true}/>
            </LinearGradient>
        </Ripple>
    );
};

const styles = StyleSheet.create({
    fabPosition: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    fabContainer: {
        width: sizeHeight(50),
        height: sizeHeight(50),
        borderRadius: sizeHeight(25),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
    }
});

export default Fab;