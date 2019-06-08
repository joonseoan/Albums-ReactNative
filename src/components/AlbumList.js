import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const AlbumList = props => {
    const [albumList, setAlbumList] = useState([]);
    useEffect(() => {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(res => {
                setAlbumList(res.data);
            })
            .catch(e => {
                new Error('An unexpected error occurs.');
            });    
    }, []);

    return(<View>
        <Text>AlbumList!!!!</Text>
    </View>);
}

export default AlbumList;



