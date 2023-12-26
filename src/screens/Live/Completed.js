import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';

import TutorBkSVG from '../../assets/svg/TutorBlack.svg';
import BatchBkSVG from '../../assets/svg/BatchBlack.svg';
import ScientistPNG from '../../assets/svg/ScientistTrans.png';
import { useNavigation } from '@react-navigation/native';
import PauseBg from '../../assets/svg/PauseBg.png';
import PauseBTN from '../../assets/svg/PauseBtn.svg';

const LiveVideosC = () => {
    const navigation = useNavigation();

    return (
        <ScrollView
            style={{
                flex: 1,
                padding: 1,
                backgroundColor: '#ffffff',
            }}>
            <View style={{ marginHorizontal: 10 }}>
                <View style={{ marginBottom: 20, marginTop: 20 }}>
                    <Text
                        style={{
                            fontSize: 17,
                            fontWeight: '600',
                            color: 'rgba(57, 57, 57, 1)',
                            left: 20,
                            bottom: 15,
                        }}>
                        Completed Live Sessions
                    </Text>
                    <FlatList
                        data={[1, 2, 3, 4, 5, 6, 7]}
                        showsVerticalScrollIndicator={true}
                        renderItem={({ item }) => (
                            <View
                                style={{
                                    backgroundColor: 'rgba(255,255,255,1)',
                                    padding: 20,
                                    borderRadius: 10,
                                    width: 360,
                                    height: 200,
                                    marginBottom: 10,
                                    marginLeft: 10,
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 5,
                                    position: 'relative',
                                }}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('VideoPlayer')}
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        position: 'absolute',
                                        top: 20,
                                        bottom: 20,
                                    }}>
                                    <PauseBTN width={30} height={30} />
                                </TouchableOpacity>

                                <Image
                                    source={ScientistPNG}
                                    style={{
                                        width: 200,
                                        height: 200,
                                        resizeMode: 'contain',
                                        position: 'absolute',
                                        left: 175,
                                    }}
                                />

                                <View
                                    style={{
                                        backgroundColor: 'rgba(255,255,255,0.2)',
                                        width: 105,
                                        height: 16,
                                        paddingHorizontal: 10,
                                        paddingVertical: 5,
                                        borderRadius: 10,
                                        position: 'absolute',
                                        bottom: 160,
                                        left: 20,
                                    }}>
                                    <Text
                                        style={{
                                            marginBottom: 5,
                                            fontSize: 8,
                                            width: 129,
                                            height: 12,
                                            lineHeight: 12,
                                            bottom: 3,
                                            color: 'rgba(180,180,180,1)',
                                        }}>
                                        20 march 2023 | 10:30 am
                                    </Text>
                                </View>

                                <Text
                                    style={{
                                        width: 148,
                                        height: 38,
                                        fontWeight: '500',
                                        fontSize: 10,
                                        lineHeight: 15,
                                        marginTop: 30,
                                        color: 'rgba(46, 46, 46, 1)',
                                        bottom: 10,
                                        left: 2,
                                    }}>
                                    Lorem ipsum dolor sit amet consectetur
                                </Text>
                                {/* Example Tutor section */}
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginTop: 10,
                                        position: 'absolute',
                                        bottom: 50,
                                        left: 20,
                                    }}>
                                    <TutorBkSVG width={10} height={25} bottom={50} left={5} />
                                    <Text
                                        style={{
                                            width: 21,
                                            height: 12,
                                            fontWeight: '400',
                                            fontSize: 8,
                                            lineHeight: 12,
                                            color: 'rgba(0, 133, 194, 1)',
                                            marginLeft: 15,
                                            bottom: 48,
                                        }}>
                                        Tutor
                                    </Text>
                                    <Text
                                        style={{
                                            width: 150,
                                            height: 15,
                                            fontWeight: '600',
                                            fontSize: 10,
                                            lineHeight: 15,
                                            color: 'rgba(46,46,46,1)',
                                            bottom: 30,
                                            right: 20,
                                        }}>
                                        Muhameed Ameer
                                    </Text>
                                </View>

                                {/* Example Batch section */}
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        position: 'absolute',
                                        marginTop: 10,
                                        bottom: 30,
                                        left: 20,
                                    }}>
                                    <BatchBkSVG width={10.17} height={8.8} bottom={25} left={5} />
                                    <Text
                                        style={{
                                            width: 25,
                                            height: 12,
                                            fontWeight: '400',
                                            fontSize: 8,
                                            lineHeight: 12,
                                            color: 'rgba(0, 133, 194, 1)',
                                            marginLeft: 15,
                                            bottom: 25,
                                        }}>
                                        Batch
                                    </Text>
                                    <Text
                                        style={{
                                            width: 100,
                                            height: 15,
                                            fontWeight: '600',
                                            fontSize: 10,
                                            lineHeight: 15,
                                            bottom: 13,
                                            color: 'rgba(46,46,46,1)',
                                        }}>
                                        BH215-01
                                    </Text>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({});

export default LiveVideosC;