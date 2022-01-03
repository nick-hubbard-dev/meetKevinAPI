import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import VideoLibrary from '../screens/videoLibrary.tsx';
import Video from '../screens/video.tsx'

const screens = {
    VideoLibrary: {
        screen: VideoLibrary,
        navigationOptions: {
            title: '',
            headerStyle: {
                backgroundColor: 'purple',
                height: 0
            }
        }
    },
    Video: {
        screen: Video,
        navigationOptions: {
            title: '',
            headerStyle: {
                backgroundColor: '#272626', 
                borderBottomWidth: 0,
                shadowColor: 'transparent'
            }
        }
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);