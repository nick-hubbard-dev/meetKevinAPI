import { Image, ImageBackground, StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface YouTubeVideo {
    title: string;
    id: string;
    thumbnail: string;
    views: string;
};

interface Playlist {
    title: string;
    active: boolean;
};

const Video = ({ title, videoID, thumbnail, views, navigation, otherVideos } : { title: string, videoID: string, thumbnail: string, views: string, navigation: navigation, otherVideos: json }) => (
    <TouchableOpacity onPress={() => {navigation.navigate('Video', {title: title, videoID: videoID, otherVideos: otherVideos});}}>
        <View>
            <Image source={{uri: thumbnail}} resizeMode="cover" style={styles.videoCard} />
            <Text style={styles.videoTitle}>{title}</Text>
            <Text style={styles.videoSubtitle}>{views} Views</Text>
        </View>
    </TouchableOpacity>
  );

const PlayListItem = ({ title, active, onPlaylistChange, setActivePlaylist} : { title: string, active: boolean, onPlaylistChange: callback, setActivePlaylist: callback}) => (
    <View onTouchEnd={() => {onPlaylistChange(title); setActivePlaylist(title);}} style={active ? [styles.playlistCard, styles.activeCard] : [styles.playlistCard]}>
        <Text style={styles.playlistTitle}>{title}</Text>
    </View>
  );


export default function VideoLibrary({ navigation }: {navigation: nav}) {
    const [currentPlaylist, setCurrentPlaylist] = useState("Featured");
    const [activePlaylists, setActivePlaylist] = useState("Featured");

    const [featuredVideos, setFeaturedVideos] = useState();
    const [latestVideos, setLastestVideos] = useState();
    const [mostViewedVideos, setMostViewedVideos] = useState();

    const [playlists, setPlaylists] = useState([
        {
            title: "Featured"
        },
        {
            title: "Latest Videos"
        },
        {
            title: "Most Viewed"
        },
        {
            title: "Governor"
        }
    ]);

    const getVideos = async () => {
        try {
         const response = await fetch('https://meet-kevin.herokuapp.com/videos');
         const json = await response.json();

         setLastestVideos(json.latest);
         setFeaturedVideos(json.features);
         setMostViewedVideos(json.mostViewed);

       } catch (error) {
         console.error(error);
       } finally {

       }
     }
   
     useEffect(() => {
       getVideos();
     }, []);


    const renderVideo = ({ item } : { item: YouTubeVideo}) => (
        <Video title={item.title} 
                videoID={item.id}
                thumbnail={item.thumbnail}  
                views={item.views}
                navigation={navigation}
                otherVideos={ "Featured" === activePlaylists ? featuredVideos : "Most Viewed" === activePlaylists ? mostViewedVideos : latestVideos }/>
    );

    const renderPlaylist = ({ item } : { item: Playlist }) => (
        <PlayListItem title={item.title} active={activePlaylists === item.title ? true : false} onPlaylistChange={setCurrentPlaylist} setActivePlaylist={setActivePlaylist}/>
    );

  return (
    <View style={styles.container}>
        <ImageBackground 
            source={require('../assets/banner.jpeg')} 
            style={styles.imageBackground} 
            resizeMode='cover'
            imageStyle={{opacity: 0.25}}>
            <View style={styles.containerView}>
                <Image source={require('../assets/twitter.jpeg')} style={styles.containerImage}></Image>
                <View style={{marginLeft: 20}}>
                    <Text style={{color: '#FFFFFF', fontSize: 20, fontWeight: 'bold'}}>Meet Kevin</Text>
                    <Text style={{color: '#FFFFFF', fontSize: 12, marginTop: 5}}>1.77M Subscribers</Text>
                </View>
            </View>
        </ImageBackground>
        <FlatList 
                style={styles.playlistsSelector}
                data={playlists}
                renderItem={renderPlaylist}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        <ScrollView style={{marginTop: 10}}>
            <View style={styles.featuredContainer}>
                <FlatList
                    style={styles.mostRecentList}
                    data={ "Featured" === currentPlaylist ? featuredVideos  : 
                            "Latest Videos" === currentPlaylist ? latestVideos : mostViewedVideos}
                    // data={featuredVideos}
                    renderItem={renderVideo}
                    showsVerticalScrollIndicator={false} 
                />
            </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#272626', 
    height: '100%'
  },
  imageBackground: {
      width: '100%',
      maxHeight: '20%',
      paddingTop: 40,
  },
  containerView: {
      marginLeft: '2.5%',
    //   marginTop: 50,
      display: 'flex',
      flexDirection: 'row',
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 20,
      borderRadius: 15,
      alignItems: 'center',
    //   marginTop: -50
  },

  containerImage: {
      width: 80,
      height: 80,
      borderRadius: 10,
  },
  containerLeft: {
      
  },
  containerMiddle: {
      
  },
  containerRight: {},
  featuredContainer: {},
  mostRecentContainer: {
     
  },
  mostRecentList: {
    flexDirection: 'column'
  },
  videoCard: {
      width: '95%',
      marginLeft: '2.5%',
      marginRight: '2.5%',
      borderRadius: 15,
      height: 250,
  },
  video: {

  },
  videoTitle: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 16,
      width: '90%',
      marginLeft: '2.5%',
      marginTop: 10
  },
  videoSubtitle: {
    color: '#9F9D9D',
    fontWeight: 'bold',
    fontSize: 16,
    width: '90%',
    marginLeft: '2.5%',
    marginTop: 2,
    marginBottom: 50
  },
  playlistsSelector: {
      marginTop: 10,
      maxHeight: 27,
      minHeight: 27
  },
  playlistCard: {
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: '#676464',
      borderColor: '#8e8e8e',
      borderWidth: 1,
      marginRight: 10,
      marginLeft: 10,
      borderRadius: 10
  },
  playlistTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12
  },
  activeCard: {
      backgroundColor: 'red'
  }
});