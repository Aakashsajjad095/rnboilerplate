import MaskedView from '@react-native-masked-view/masked-view';
import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
    colors: string[];
    start?: { x: number; y: number };
    end?: { x: number; y: number };
} & ActivityIndicatorProps;

const LoaderGrad = ({ colors, start, end, ...props }: Props) => {
    return (
        <MaskedView maskElement={<ActivityIndicator {...props} />}>
            <LinearGradient colors={colors} start={start} end={end}>
                <ActivityIndicator {...props} style={[props.style, { opacity: 0 }]} />
            </LinearGradient>
        </MaskedView>
    );
};
export default LoaderGrad;