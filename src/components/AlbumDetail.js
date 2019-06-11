import React from 'react';
import { View, Text, Image, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ albumRecord }) => {
    const { title, artist, thumbnail_image, image, url } = albumRecord;
    const { 
        headerContentStyle, 
        thumbnailStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;

    return(<Card>
        <CardSection>
            <View style={ thumbnailContainerStyle }>
                {/* Image here for react-native syntax  */}
                <Image 
                    style={ thumbnailStyle }
                    source={{ uri: thumbnail_image }} 
                />
            </View>

            {/* flexDirection 'row' only for this views */}
            <View style={ headerContentStyle }>
                <Text style={ headerTextStyle }>{ title }</Text>
                <Text>{ artist }</Text>
            </View>
        </CardSection>

        <CardSection>
            <Image
                style={ imageStyle } 
                source={{ uri: image }} 
            />
        </CardSection>

        <CardSection>
            {/* Linking.openURL: open the provided URL */}
            <Button whenPressed={ () => Linking.openURL(url) }>
                Buy Now!
            </Button>
        </CardSection>
    </Card>);
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    // to show image (must-have style to show image)
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        // define 'height"
        height: 300,

        // to max size of width
        flex: 1,
        width: null
    }
}

export default AlbumDetail;
