import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

const AttemptPage = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Header pageType={'Attend 1'} />
            {/* Content */}
            <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
                {/* Box */}
                <View
                    style={{
                        backgroundColor: 'rgba(94, 60, 190, 1)',
                        padding: 20,
                        borderRadius: 10,
                        width: 370,
                        height: 180,
                    }}>
                    {/* Box Content */}
                    <View style={{ marginBottom: 20 }}>
                        {/* Details */}
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginBottom: 10,
                            }}>
                            <Text
                                style={{
                                    fontWeight: '400',
                                    color: 'rgba(255, 255, 255, 0.45)',
                                    left: 5,
                                }}>
                                Date:
                            </Text>
                            <Text style={{ color: '#fff', fontWeight: '500', right: 155 }}>
                                21 November 2023 |{' '}
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginBottom: 10,
                            }}>
                            <Text
                                style={{
                                    fontWeight: '400',
                                    color: 'rgba(255, 255, 255, 0.45)',
                                    left: 175,
                                    bottom: 30,
                                }}>
                                Time:
                            </Text>
                            <Text
                                style={{
                                    color: '#fff',
                                    fontWeight: '500',
                                    bottom: 30,
                                    left: 15,
                                }}>
                                10:00 AM - 12:00 PM
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginBottom: 10,
                            }}>
                            <Text
                                style={{
                                    fontWeight: '400',
                                    color: 'rgba(255, 255, 255, 0.45)',
                                    bottom: 20,
                                    right: 10,
                                }}>
                                Mark per Question:
                            </Text>
                            <Text
                                style={{
                                    color: '#fff',
                                    fontWeight: '500',
                                    bottom: 20,
                                    right: 200,
                                }}>
                                2 |{' '}
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginBottom: 10,
                            }}>
                            <Text
                                style={{
                                    fontWeight: '400',
                                    color: 'rgba(255, 255, 255, 0.45)',
                                    left: 140,
                                    bottom: 50,
                                }}>
                                Negative Mark per Question:
                            </Text>
                            <Text
                                style={{
                                    color: '#fff',
                                    fontWeight: '500',
                                    bottom: 50,
                                    left: 15,
                                }}>
                                -0.5
                            </Text>
                        </View>
                        {/* Total Mark */}
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginBottom: 10,
                            }}>
                            <View
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    paddingVertical: 5,
                                    paddingHorizontal: 10,
                                    borderRadius: 15,
                                    width: 100,
                                    borderColor: 'black',
                                }}>
                                <Text
                                    style={{
                                        fontWeight: '400',
                                        color: 'rgba(255, 255, 255, 0.45)',
                                        bottom: 10,
                                        left: 70,
                                    }}>
                                    Total Mark:
                                </Text>
                                <Text
                                    style={{
                                        color: '#FFFFFF',
                                        fontWeight: 'bold',
                                        fontSize: 16,
                                        left: 150,
                                        bottom: 30,
                                    }}>
                                    100
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Text */}
                <View style={{ marginBottom: 20, top: 40 }}>
                    <Text
                        style={{
                            fontWeight: '300',
                            fontSize: 14,
                            lineHeight: 18,
                            color: 'rgba(0, 0, 0, 1)',
                            fontFamily: 'Poppins',
                        }}>
                        Lorem ipsum dolor sit amet consectetur. Sagittis pellentesque
                        fringilla volutpat neque tempus sit aliquet eget. Viverra sed nunc
                        sapien faucibus odio morbi. Velit nisl commodo sagittis lectus nibh
                        rhoncus.
                    </Text>
                </View>
                {/* Out of Box */}
                <View style={styles.outOfBox}>
                    <Text
                        style={{
                            fontWeight: '500',
                            fontSize: 16,
                            marginTop: 10,
                            color: 'rgba(0, 0, 0, 1)',
                            top: 70,
                            fontFamily: 'Poppins',
                        }}>
                        Instructions:
                    </Text>
                    <Text
                        style={{
                            fontSize: 12,
                            lineHeight: 22,
                            color: 'rgba(0, 0, 0, 1)',
                            top: 80,
                            fontWeight: '300',
                            fontFamily: 'Poppins',
                        }}>
                        {'1. Lorem ipsum dolor sit amet consectetur\n'}
                        {'2. Sagittis pellentesquefringilla volutpat\n'}
                        {'3. Neque tempus sit aliquet eget\n'}
                        {'4. Viverra sed nunc sapien faucibus odio morbi\n'}
                        {'5. Velit nisl commodo sagittis lectus nibh rhoncus.'}
                    </Text>
                </View>

                {/* Additional TouchableOpacity */}
                <TouchableOpacity
                    style={{
                        backgroundColor: 'rgba(20, 175, 81, 1)',
                        paddingVertical: 15,
                        alignItems: 'center',
                        borderRadius: 8,
                        marginTop: 190,
                    }}
                    onPress={() => navigation.navigate('Attempt 2')}>
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 }}>
                        Attempt Now
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 10,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'black',
    },
    content: {
        paddingHorizontal: 20,
        marginTop: 30,
    },
    box: {
        backgroundColor: 'rgba(94, 60, 190, 1)',
        padding: 20,
        borderRadius: 10,
        width: 370,
        height: 180,
    },
    boxContent: {
        marginBottom: 20,
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    dateH: {
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.45)',
        left: 5,
    },
    dateD: {
        color: '#fff',
        fontWeight: '500',
        right: 155,
    },
    timeH: {
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.45)',
        left: 175,
        bottom: 30,
    },
    timeD: {
        color: '#fff',
        fontWeight: '500',
        bottom: 30,
        left: 15,
    },
    MarkH: {
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.45)',
        bottom: 20,
        right: 10,
    },
    MarkD: {
        color: '#fff',
        fontWeight: '500',
        bottom: 20,
        right: 200,
    },
    NegMarkH: {
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.45)',
        left: 140,
        bottom: 50,
    },
    NegMarkD: {
        color: '#fff',
        fontWeight: '500',
        bottom: 50,
        left: 15,
    },
    outOfBoxText: {
        fontWeight: '500',
        fontSize: 16,
        marginTop: 10,
        color: 'rgba(0, 0, 0, 1)',
        top: 70,
    },
    instructionDetails: {
        fontSize: 12,
        lineHeight: 22,
        color: 'rgba(0, 0, 0, 1)',
        top: 80,
        fontWeight: '300',
    },
    text: {
        fontSize: 12,
        fontWeight: '300',
        lineHeight: 18,
        width: 341,
        height: 72,
        color: 'rgba(0, 0, 0, 1)',
        top: 60,
        left: 10,
    },
    attemptButton: {
        backgroundColor: 'rgba(20, 175, 81, 1)',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 190,
    },
    attemptText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    TotMarkH: {
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.45)',
        bottom: 10,
        left: 70,
    },
    TotMarkBox: {
        backgroundColor: 'rgba(255, 255, 255, 0.2',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        width: 100,
        borderColor: 'black',
    },
    TotMark: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
        left: 150,
        bottom: 30,
    },
    Txt: {
        fontWeight: '300',
        fontSize: 14,
        lineHeight: 18,
        color: 'rgba(0, 0, 0, 1)',
    },
    MainText: {
        marginBottom: 20,
        top: 40,
    },
});

export default AttemptPage;