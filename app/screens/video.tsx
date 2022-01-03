import { Image, ImageBackground, StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import WebView from 'react-native-webview';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface YouTubeVideo {
    title: string;
    id: string;
    thumbnail: string;
    views: string;
};

export default function Video({ navigation }: {navigation: navigation}) {

    const renderOtherVideos = ({ item } : { item: YouTubeVideo}) => (
        <TouchableOpacity onPress={() => { navigation.navigate('Video', {title: item.title, videoID: item.id, otherVideos: navigation.getParam('otherVideos')});}}>
            <View style={styles.listItem}>
                <Image source={{uri: item.thumbnail}} style={styles.thumbnail}/>
                <Text style={styles.thumbnailTitle}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );

  return (
    <View style={styles.container}>
        <WebView javaScriptEnabled={true}
                    style={styles.webview}
                    domStorageEnabled={true}
                    source={{uri: `https://www.youtube.com/embed/${navigation.getParam('videoID')}`}}/>
        <FlatList 
            style={styles.otherVideos}
            data={navigation.getParam('otherVideos')}
            renderItem={renderOtherVideos}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#272626', 
        height: '100%'
    },
    webview: {
        // maxHeight: '50%',
        // minHeight: '50%'
    },
    otherVideos: {
        maxHeight: '50%',
        minHeight: '50%',
        marginTop: 20
    },
    thumbnail: {
        width: "30%",
        height: 70,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10
    },
    thumbnailTitle: {
        width: "50%",
        color: '#FFFFFF'
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
    }
});