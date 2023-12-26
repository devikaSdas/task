import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
    FlatList,
} from 'react-native';
import TutorSVG from '../../assets/svg/TutorBlue.svg'
import BatchSVG from '../../assets/svg/BatchBlue.svg';
import ScientistPNG from '../../assets/svg/ScientistClred.png';
import TutorBkSVG from '../../assets/svg/TutorBlack.svg';
import BatchBkSVG from '../../assets/svg/BatchBlack.svg';
import ViewAllSvg from '../../assets/svg/viewall>.svg';
import { useNavigation } from '@react-navigation/native';


const LiveVideosAll = () => {
    const navigation = useNavigation();
    return (
        <ScrollView
            style={{
                flex: 1,
                padding: 1,
                backgroundColor: '#ffffff',
            }}>
            <View style={{ marginHorizontal: 5 }}>
                {/*Ongoing Live Session */}
                <View style={{ marginBottom: 20, marginTop: 20 }}>
                    <Text
                        style={{
                            width: 172,
                            height: 24,
                            fontSize: 17,
                            fontWeight: '600',
                            lineHeight: 24,
                            color: 'rgba(57, 57, 57, 1)',
                            marginBottom: 20,
                            left: 20,
                        }}>
                        Ongoing{' '}
                    </Text>
                    <View
                        style={{
                            backgroundColor: 'rgba(94, 60, 190, 1)',
                            padding: 20,
                            borderRadius: 10,
                            width: 380,
                            height: 210,
                            marginBottom: 10,
                            marginLeft: 10,
                        }}>
                        <View
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                width: 105,
                                height: 16,
                                paddingHorizontal: 10,
                                paddingVertical: 5,
                                borderRadius: 10,
                            }}>
                            <Text
                                style={{
                                    marginBottom: 5,
                                    fontSize: 8,
                                    color: 'rgba(255, 255, 255, 1)',
                                    width: 129,
                                    height: 12,
                                    lineHeight: 12,
                                    bottom: 3,
                                }}>
                                12 Nov 2023 | 10:30 am{' '}
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
                                color: 'rgba(255, 254, 254, 1)',
                                bottom: 20,
                                left: 2,
                            }}>
                            Lorem ipsum dolor sit amet consectetur
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 10,
                                position: 'absolute',
                            }}>
                            <TutorSVG width={10} height={25} top={75} left={20} />
                        </View>
                        <Text
                            style={{
                                width: 21,
                                height: 12,
                                fontWeight: '400',
                                fontSize: 8,
                                lineHeight: 12,
                                color: 'rgba(255, 255, 255, 0.4)',
                                marginLeft: 45,
                                bottom: 107,
                                position: 'absolute',
                            }}>
                            Tutor
                        </Text>
                        <Text
                            style={{
                                width: 100,
                                height: 15,
                                fontWeight: '600',
                                fontSize: 10,
                                lineHeight: 15,
                                color: 'rgba(255, 254, 254, 1)',
                                marginLeft: 25,
                                top: 5,
                            }}>
                            Muhameed Ameer
                        </Text>
                        <View style={{ marginBottom: 5 }}>
                            <BatchSVG width={10.17} height={8.8} top={20} />
                        </View>
                        <Text
                            style={{
                                width: 21,
                                height: 12,
                                fontWeight: '400',
                                fontSize: 8,
                                lineHeight: 12,
                                color: 'rgba(255, 255, 255, 0.4)',
                                marginLeft: 25,
                                top: 5,
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
                                color: 'rgba(255, 254, 254, 1)',
                                marginLeft: 25,
                                top: 10,
                            }}>
                            BH215-01
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 10,
                            }}>
                            <Image
                                source={ScientistPNG}
                                style={{
                                    width: 400,
                                    height: 210,
                                    resizeMode: 'contain',
                                    marginLeft: 69,
                                    bottom: 170,
                                }}
                            />
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#14AF51',
                                    width: 101,
                                    height: 27,
                                    position: 'absolute',
                                    right: 20,
                                    bottom: 190,
                                    borderRadius: 5,
                                    justifyContent: 'center',
                                }}
                                onPress={() => {
                                    navigation.navigate('Live');
                                }}>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        fontWeight: '600',
                                        lineHeight: 15,
                                        alignSelf: 'center',
                                        color: '#FFFFFF',
                                    }}>
                                    Join Now
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {/*Upcoming Live Session */}
                <View style={{ marginBottom: 20, marginTop: 20 }}>
                    <Text
                        style={{
                            fontSize: 17,
                            fontWeight: '600',
                            color: 'rgba(57, 57, 57, 1)',
                            left: 20,
                            bottom: 5,
                        }}>
                        Upcoming{' '}
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 10,
                            top: 5,
                        }}>
                        <Text
                            style={{
                                color: '#5F5F5F',
                                fontWeight: '400',
                                fontSize: 10,
                                width: 38,
                                height: 15,
                                left: 320,
                                bottom: 28,
                            }}>
                            View All
                        </Text>
                        <ViewAllSvg
                            width={15}
                            height={8}
                            color="#787878"
                            bottom={28}
                            right={30}
                        />
                    </View>
                    <FlatList
                        data={[1, 2, 3]}
                        horizontal
                        renderItem={({ item }) => (
                            <View
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 1)',
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
                                }}>
                                <View
                                    style={{
                                        backgroundColor: 'rgba(240, 233, 255, 1)',
                                        width: 105,
                                        height: 16,
                                        paddingHorizontal: 10,
                                        paddingVertical: 5,
                                        borderRadius: 10,
                                        right: 370,
                                        borderWidth: 1,
                                        borderColor: 'rgba(240, 233, 255, 1)',
                                    }}>
                                    <Text
                                        style={{
                                            marginBottom: 5,
                                            fontSize: 8,
                                            color: 'rgba(118, 78, 204, 1)',
                                            width: 129,
                                            height: 12,
                                            lineHeight: 12,
                                            bottom: 3,
                                            right: 5,
                                        }}>
                                        20 march 2023 | 10:30 am{' '}
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
                                        bottom: 20,
                                        left: 2,
                                    }}>
                                    Lorem ipsum dolor sit amet consectetur
                                </Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginTop: 10,
                                    }}>
                                    <TutorBkSVG width={10} height={25} bottom={30} right={365} />
                                </View>
                                <Text
                                    style={{
                                        width: 21,
                                        height: 12,
                                        fontWeight: '400',
                                        fontSize: 8,
                                        lineHeight: 12,
                                        color: 'rgba(0, 133, 194, 1)',
                                        marginLeft: 25,
                                        bottom: 48,
                                    }}>
                                    Tutor
                                </Text>
                                <Text
                                    style={{
                                        width: 100,
                                        height: 15,
                                        fontWeight: '600',
                                        fontSize: 10,
                                        lineHeight: 15,
                                        color: 'rgba(46, 46, 46, 1)',
                                        marginLeft: 25,
                                        bottom: 40,
                                    }}>
                                    Muhameed Ameer
                                </Text>
                                <View style={{ marginBottom: 5 }}>
                                    <BatchBkSVG width={10.17} height={8.8} bottom={25} left={5} />
                                </View>
                                <Text
                                    style={{
                                        width: 21,
                                        height: 12,
                                        fontWeight: '400',
                                        fontSize: 8,
                                        lineHeight: 12,
                                        color: 'rgba(0, 133, 194, 1)',
                                        marginLeft: 25,
                                        bottom: 40,
                                    }}>
                                    Batch Name
                                </Text>
                                <Text
                                    style={{
                                        width: 100,
                                        height: 15,
                                        fontWeight: '600',
                                        fontSize: 10,
                                        lineHeight: 15,
                                        color: 'rgba(46, 46, 46, 1)',
                                        marginLeft: 25,
                                        bottom: 33,
                                    }}>
                                    BH215-01
                                </Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginTop: 10,
                                    }}>
                                    <Image
                                        source={ScientistPNG}
                                        style={{
                                            width: 390,
                                            height: 198,
                                            resizeMode: 'contain',
                                            marginLeft: 59,
                                            bottom: 215,
                                        }}
                                    />
                                </View>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                {/*Completed Live Session */}
                <View style={{ marginBottom: 20, marginTop: 20 }}>
                    <Text
                        style={{
                            fontSize: 17,
                            fontWeight: '600',

                            color: 'rgba(57, 57, 57, 1)',
                            left: 20,
                            bottom: 5,
                        }}>
                        Completed{' '}
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 10,
                            top: 5,
                        }}>
                        <Text
                            style={{
                                color: '#5F5F5F',
                                fontWeight: '400',
                                fontSize: 10,
                                width: 38,
                                height: 15,
                                left: 320,
                                bottom: 28,
                            }}>
                            View All
                        </Text>
                        <ViewAllSvg
                            width={15}
                            height={8}
                            color="#787878"
                            bottom={28}
                            right={30}
                        />
                    </View>
                    <FlatList
                        data={[1, 2, 3]}
                        horizontal
                        renderItem={({ item }) => (
                            <View
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 1)',
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
                                }}>
                                <View
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                        width: 105,
                                        height: 16,
                                        paddingHorizontal: 10,
                                        paddingVertical: 5,
                                        borderRadius: 10,
                                        right: 370,
                                    }}>
                                    <Text
                                        style={{
                                            marginBottom: 5,
                                            fontSize: 8,
                                            color: 'rgba(180, 180, 180, 1)',
                                            width: 129,
                                            height: 12,
                                            lineHeight: 12,
                                            bottom: 3,
                                        }}>
                                        20 march 2023 | 10:30 am{' '}
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
                                        bottom: 20,
                                        left: 2,
                                    }}>
                                    Lorem ipsum dolor sit amet consectetur
                                </Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginTop: 10,
                                    }}>
                                    <TutorBkSVG width={10} height={25} bottom={30} right={365} />
                                </View>
                                <Text
                                    style={{
                                        width: 21,
                                        height: 12,
                                        fontWeight: '400',
                                        fontSize: 8,
                                        lineHeight: 12,
                                        color: 'rgba(0, 133, 194, 1)',
                                        marginLeft: 25,
                                        bottom: 48,
                                    }}>
                                    Tutor
                                </Text>
                                <Text
                                    style={{
                                        width: 100,
                                        height: 15,
                                        fontWeight: '600',
                                        fontSize: 10,
                                        lineHeight: 15,
                                        color: 'rgba(46, 46, 46, 1)',
                                        marginLeft: 25,
                                        bottom: 40,
                                    }}>
                                    Muhameed Ameer
                                </Text>
                                <View style={{ marginBottom: 5 }}>
                                    <BatchBkSVG width={10.17} height={8.8} bottom={25} left={5} />
                                </View>
                                <Text
                                    style={{
                                        width: 21,
                                        height: 12,
                                        fontWeight: '400',
                                        fontSize: 8,
                                        lineHeight: 12,
                                        color: 'rgba(0, 133, 194, 1)',
                                        marginLeft: 25,
                                        bottom: 40,
                                    }}>
                                    Batch Name
                                </Text>
                                <Text
                                    style={{
                                        width: 100,
                                        height: 15,
                                        fontWeight: '600',
                                        fontSize: 10,
                                        lineHeight: 15,
                                        color: 'rgba(46, 46, 46, 1)',
                                        marginLeft: 25,
                                        bottom: 33,
                                    }}>
                                    BH215-01
                                </Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginTop: 10,
                                    }}>
                                    <Image
                                        source={ScientistPNG}
                                        style={{
                                            width: 390,
                                            height: 198,
                                            resizeMode: 'contain',
                                            marginLeft: 59,
                                            bottom: 215,
                                        }}
                                    />
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

export default LiveVideosAll;