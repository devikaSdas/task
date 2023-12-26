import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
import TutorBkSVG from '../../assets/svg/TutorBlack.svg';
import BatchBkSVG from '../../assets/svg/BatchBlack.svg';
import VideoPauseSVG from '../../assets/svg/VideoPause.svg';
import VideoSVG from '../../assets/svg/video.svg';
import GobackSVG from '../../assets/svg/VideoPlyBack.svg';
import { useNavigation } from '@react-navigation/native';
import RedlineSVG from '../../assets/svg/Redline.svg';

const VideoPlayer = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            {/* Video Player */}
            <Video
                source={{
                    uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                }}
                style={{ width: 450, height: 300, backgroundColor: 'black' }}
                controls={true}
                resizeMode="contain"
            />

            <VideoSVG
                width={92}
                height={92}
                color={'rgba(255, 255, 255, 1)'}
                bottom={70}
                left={300}
            />
            <RedlineSVG
                width={360}
                height={10}
                style={{ position: 'absolute', bottom: 0 }}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Live')}>
                <GobackSVG width={40} height={40} bottom={380} left={10} />
            </TouchableOpacity>
            <VideoPauseSVG
                width={120}
                height={40}
                color={'rgba(255, 255, 255, 1)'}
                bottom={290}
                left={150}
            />

            <Text
                style={{
                    width: 70,
                    height: 15,
                    fontWeight: '500',
                    fontSize: 12,
                    lineHeight: 15,
                    bottom: 200,
                    left: 10,
                    color: 'rgba(255,255,255,1)',
                }}>
                06:39/30:00
            </Text>
            {/* DateTime Text */}
            <Text
                style={{
                    marginTop: 10,
                    fontSize: 14,
                    color: 'rgba(170, 165, 165, 1)',
                    bottom: 180,
                    left: 30,
                }}>
                20 March 2023 | 10:30 am
            </Text>

            {/* Additional Content in Columns */}
            <View
                style={{ flexDirection: 'row', justifyContent: 'center', bottom: 140 }}>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ marginBottom: 5 }}>
                        <TutorBkSVG width={24} height={24} right={75} />
                    </View>
                    <Text
                        style={{
                            fontWeight: '400',
                            fontSize: 8,
                            color: 'rgba(0, 133, 194, 1)',
                            bottom: 20,
                            right: 20,
                        }}>
                        Tutor
                    </Text>
                    <Text
                        style={{
                            fontWeight: '600',
                            fontSize: 10,
                            color: '#000000',
                            bottom: 20,
                            right: 20,
                        }}>
                        Muhameed Ameer
                    </Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ marginBottom: 5 }}>
                        <BatchBkSVG width={24} height={24} right={90} />
                    </View>
                    <Text
                        style={{
                            fontWeight: '400',
                            fontSize: 8,
                            bottom: 25,
                            right: 50,
                            color: 'rgba(0, 133, 194, 1)',
                        }}>
                        Batch Name
                    </Text>
                    <Text
                        style={{
                            fontWeight: '600',
                            fontSize: 10,
                            color: '#ffffff',
                            bottom: 20,
                            right: 50,
                        }}>
                        BH215-01
                    </Text>
                </View>
            </View>
            <View style={{ padding: 40, bottom: 150 }}>
                <Text
                    style={{
                        width: 352,
                        height: 72,
                        fontWeight: '400',
                        fontSize: 14,
                        lineHeight: 18,
                        right: 15,
                        color: 'rgba(67,67,67,1)',
                    }}>
                    Lorem ipsum dolor sit amet consectetur. Quis sed ultrices suspendisse
                    ullamcorper dui vulputate et sed. Et vel purus leo sollicitudin
                    scelerisque ante sollicitudin. Arcu purus lorem metus eleifend orci.
                </Text>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    videoPlayer: {
        width: 450,
        height: 300,
        backgroundColor: 'black',
    },
    dateTimeText: {
        marginTop: 10,
        fontSize: 14,
        color: 'rgba(170, 165, 165, 1)',
        bottom: 180,
        left: 30,
    },
    iconContainer: {
        marginBottom: 5,
    },
    HtutorA: {
        fontWeight: '400',
        fontSize: 8,
        color: 'rgba(0, 133, 194, 1)',
        bottom: 25,
        right: 50,
    },
    tNameA: {
        fontWeight: '600',
        fontSize: 10,
        color: '#000000',
        bottom: 20,
        right: 20,
    },
    HBatchB: {
        fontWeight: '400',
        fontSize: 8,
        color: 'rgba(0, 133, 194, 1)',
        bottom: 25,
        right: 50,
    },
    tBatchB: {
        fontWeight: '600',
        fontSize: 10,
        color: '#000000',
        bottom: 20,
        right: 50,
    },
    timer: {
        width: 70,
        height: 15,
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 15,
        color: 'rgba(255, 255, 255, 1)',
        bottom: 200,
        left: 10,
    },
    Text: {
        width: 352,
        height: 72,
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 18,
        color: 'rgba(67, 67, 67, 1)',
        right: 15,
    },
    MainTxt: {
        padding: 40,
        bottom: 150,
    },
    additionalContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        bottom: 140,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    column: {
        alignItems: 'center',
    },
});

export default VideoPlayer;