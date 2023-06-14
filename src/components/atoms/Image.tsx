import React, { useState } from 'react';
import { Image, View } from 'react-native';
import FastImage, { FastImageProps, ResizeMode } from 'react-native-fast-image';
import { SkypeIndicator } from 'react-native-indicators';
import { theme } from '../../themes/theme';
import { images } from '../../assets/images';


interface CachedImageProps {
    source: string;
    style?: FastImageProps['style'] | any;
    resizeMode?: ResizeMode;
}

const CachedImage: React.FC<CachedImageProps> = (props) => {
    const [loading, setLoading] = useState<boolean>(true);

    return props.source ? (
        <>
            <FastImage
                onLoadEnd={() => setLoading(false)}
                style={props.style}
                source={{
                    uri: props.source,
                }}
                resizeMode={props.resizeMode || FastImage.resizeMode.cover}
            />
            {loading && (
                <View style={[props.style, { position: 'absolute', justifyContent: 'center', alignItems: 'center' }]}>
                    <SkypeIndicator color={theme.color.smokeyBlack} />
                </View>
            )}
        </>
    ) : (
        <Image
            style={props.style || { width: '100%', height: '100%' }}
            resizeMode='cover'
            source={images.placeholder}
        />
    );
};

export default CachedImage;
