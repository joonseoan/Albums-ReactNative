
import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => (
    // *****************
    // when we use ScrollView in the children components
    //  in the parent component, we must use "{ flex: 1}"
    //  which makes the View tag extends to 
    //  the rage of all entire ScrollView tag size 
    <View style={{ flex: 1 }}>
        <Header headerText="Albums!" />
        <AlbumList />
    </View>
    
);

AppRegistry.registerComponent('albums', () => App);