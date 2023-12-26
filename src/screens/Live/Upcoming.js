import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import TutorBkSVG from '../../assets/svg/TutorBlack.svg';
import BatchBkSVG from '../../assets/svg/BatchBlack.svg';
import ScientistPNG from '../../assets/svg/ScientistClred.png';


const LiveVideosUC = () => {
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
                            bottom: 20,
                        }}>
                        Upcoming Live Sessions{' '}
                    </Text>

                    <FlatList
                        data={[1, 2, 3, 4, 5, 6, 7, 8]}
                        showsVerticalScrollIndicator={true}
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
                                            bottom: 5,
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
                                    <TutorBkSVG width={10} height={25} bottom={30} />
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
                                    <BatchBkSVG width={10.17} height={8.8} bottom={25} />
                                </View>
                                <Text
                                    style={{
                                        width: 25,
                                        height: 12,
                                        fontWeight: '400',
                                        fontSize: 8,
                                        lineHeight: 12,
                                        color: 'rgba(0, 133, 194, 1)',
                                        marginLeft: 25,
                                        bottom: 40,
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

export default LiveVideosUC;