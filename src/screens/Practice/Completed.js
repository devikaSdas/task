import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    FlatList,
} from 'react-native';

import PracticeSvg from '../../assets/svg/PracticeQS.svg';
import { useNavigation } from '@react-navigation/native';

const PracticeC = () => {
    const navigation = useNavigation();
    return (
        <ScrollView
            style={{
                flex: 1,
                padding: 1,
                backgroundColor: '#ffffff',
            }}>
            <View style={{ marginHorizontal: 5 }}>
                {/* Completed Questions */}
                <FlatList
                    data={[1, 1, 1, 1, 1, 1, 1, 1]}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View
                            style={{
                                width: 370,
                                height: 150,
                                backgroundColor: 'rgba(94, 60, 190, 1)',
                                padding: 20,
                                borderRadius: 10,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginVertical: 5,
                                marginHorizontal: 5,
                                marginLeft: 15,
                                alignItems: 'center', // Added for centering items vertically
                            }}>
                            <Text
                                style={{
                                    width: 148,
                                    height: 38,
                                    fontWeight: '500',
                                    fontSize: 12,
                                    lineHeight: 15,
                                    color: '#FFFEFE',
                                    marginRight: 20,
                                    bottom: 20,
                                }}>
                                Lorem ipsum dolor sit amet consectetur
                            </Text>

                            <PracticeSvg width={93} height={94} right={10} />
                            <TouchableOpacity
                                style={{
                                    backgroundColor: 'rgba(36, 111, 255, 1)',
                                    borderRadius: 5,
                                    width: 93,
                                    height: 30,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'absolute',
                                    bottom: 20,
                                    left: 20,
                                }}
                                onPress={() => navigation.navigate('ReAttend')}>
                                <Text
                                    style={{
                                        color: 'rgba(255, 255, 255, 1)',
                                        fontWeight: '600',
                                        fontSize: 8,
                                        textAlign: 'center', // Added textAlign
                                    }}>
                                    Re- Attempt Now
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    padding: 10,
                                    borderRadius: 6,
                                    width: 93,
                                    height: 30,
                                    backgroundColor: 'rgba(253, 180, 255, 1)',
                                    top: 100,
                                    right: 160,
                                    position: 'absolute', // Added position
                                }}>
                                <Text
                                    style={{
                                        fontWeight: '600',
                                        textAlign: 'center',
                                        fontSize: 8,
                                        color: 'rgba(201, 42, 204, 1)',
                                    }}>
                                    View Result
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f8ff',
    },
    section: {
        marginVertical: 10,
        marginHorizontal: 10,
    },
    headingB: {
        fontSize: 17,
        fontWeight: '600',
        color: '#393939',
        marginTop: 10,
        bottom: 10,
    },
    boxB: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#5E3CBE',
        padding: 20,
        borderRadius: 10,
        marginBottom: 10,
        width: 390,
        height: 120,
        marginTop: 10,
    },
    questionDetails: {
        flex: 1,
    },
    dateTime2: {
        fontSize: 10,
        color: '#fff',
        marginBottom: 5,
        bottom: 24,
    },
    mainText2: {
        fontWeight: '500',
        fontSize: 10,
        color: '#fff',
        width: 160,
        bottom: 20,
    },
    rightContent: {
        alignItems: 'center',
    },
    expiresSoon: {
        backgroundColor: '#DA1D1D',
        borderRadius: 17,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 10,
        top: 30,
        right: 160,
    },
    expiresText: {
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: 6,
    },
    attemptButton: {
        backgroundColor: '#246FFF',
        padding: 10,
        borderRadius: 6,
        width: 83,
        right: 265,
        bottom: 10,
    },
    attemptText: {
        color: '#FFFFFF',
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 8,
        lineHeight: 12,
    },
    ViewResultBTN: {
        padding: 10,
        borderRadius: 6,
        width: 63,
        right: 175,
        bottom: 42,
        backgroundColor: '#FDB4FF',
    },
    ResultTxt: {
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 8,
        color: '#C92ACC',
    },
    topBox: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginBottom: 10,
        width: 360,
        height: 50,
        borderRadius: 25,
        left: 20,
        top: 10,
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 24,
        backgroundColor: '#FFFFFF',
        width: 120,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#000000',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedButton: {
        backgroundColor: '#5E3CBE',
    },
    selectedButtonText: {
        color: '#fff',
    },
});

export default PracticeC;