import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';


const AlbumList = props => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(res => {
                setAlbums(res.data);
            })
            .catch(e => {
                new Error('An unexpected error occurs.');
            });    
    }, []);

    const renderAlbums = () => {
        return albums.map(album => 
            <AlbumDetail key={ album.title } albumRecord={ album }/>
        );
    }

    if(albums.length === 0) return <Text>Loading...</Text>;

    return(
        // View : Fixed on the screen
        // ScrollView: disable scolles ^^;;
        <ScrollView>
        { renderAlbums() }
    </ScrollView>);
}

export default AlbumList;



