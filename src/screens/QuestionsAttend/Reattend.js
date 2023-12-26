import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

const ReAttend = () => {
    const navigation = useNavigation();
    return (
        <View style={{ padding: 1, flex: 1 }}>
            <Header pageType={'ReAttend'} />
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                {/* Started Box */}
                <View
                    style={{
                        width: 160,
                        height: 42,
                        borderRadius: 8,
                        borderWidth: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        top: 70,
                        flexDirection: 'row',
                        borderColor: 'rgba(20, 175, 81, 1)',
                        marginHorizontal: 30,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Text
                            style={[
                                styles.statusText,
                                { color: 'rgba(20, 175, 81, 1)', left: 15 },
                            ]}>
                            Started
                        </Text>
                        <View style={{ marginHorizontal: 5 }}>
                            <View
                                style={{
                                    width: 32,
                                    height: 1,
                                    borderWidth: 1,
                                    borderColor: 'rgba(20, 175, 81, 1)',
                                    transform: [{ rotate: '-90deg' }],
                                }}
                            />
                        </View>
                        <Text
                            style={[styles.dateTimeText, { color: 'rgba(126, 126, 126, 1)' }]}>
                            2023-11-30 09:00 AM
                        </Text>
                    </View>
                </View>

                {/* Separator */}
                <View style={{ width: 10 }} />

                {/* Ended Box */}
                <View
                    style={{
                        width: 160,
                        height: 42,
                        borderRadius: 8,
                        borderWidth: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        top: 70,
                        flexDirection: 'row',
                        borderColor: 'rgba(236, 83, 83, 1)',
                        right: 40,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Text
                            style={[
                                styles.statusText,
                                { color: 'rgba(236, 83, 83, 1)', left: 20 },
                            ]}>
                            Ended
                        </Text>
                        <View style={{ marginHorizontal: 5 }}>
                            <View
                                style={{
                                    width: 32,
                                    height: 1,
                                    borderWidth: 1,
                                    borderColor: 'rgba(237, 90, 94, 1)',
                                    transform: [{ rotate: '-90deg' }],
                                }}
                            />
                        </View>
                        <Text
                            style={[styles.dateTimeText, { color: 'rgba(126, 126, 126, 1)' }]}>
                            2023-11-30 11:30 AM
                        </Text>
                    </View>
                </View>
            </View>

            {/* Total Questions */}
            <View
                style={{
                    width: 350,
                    height: 90,
                    borderRadius: 10,
                    borderWidth: 0.5,
                    color: 'rgba(220, 220, 220, 1)',
                    marginBottom: 20,
                    padding: 10,
                    left: 25,
                    top: 100,
                }}>
                <Text
                    style={{
                        width: 90,
                        height: 50,
                        fontWeight: '500',
                        fontSize: 12,
                        lineHeight: 15,
                        color: 'rgba(146, 146, 146, 1)',
                        top: 10,
                        left: 20,
                    }}>
                    Total Questions
                </Text>
                <Text
                    style={{
                        width: 79,
                        height: 38,
                        color: 'rgba(78, 78, 78, 1)',
                        fontWeight: '600',
                        fontSize: 16,
                        lineHeight: 21,
                        alignContent: 'center',
                        alignItems: 'center',
                        left: 50,
                        bottom: 20,
                    }}>
                    20
                </Text>
                <View style={{ marginHorizontal: 5 }}>
                    <View
                        style={{
                            width: 89,
                            height: 1,
                            borderWidth: 1,
                            borderColor: 'rgba(220, 220, 220, 1)',
                            transform: [{ rotate: '-90deg' }],
                            bottom: 54,
                            left: 100,
                        }}
                    />
                </View>

                {/* Mark per question and Negative Mark per Question */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 20,
                            top: 20,
                        }}>
                        <Text
                            style={{
                                width: 99,
                                height: 18,
                                fontWeight: '500',
                                fontSize: 10,
                                lineHeight: 13.5,
                                color: 'rgba(146, 146, 146, 1)',
                                bottom: 105,
                                left: 160,
                            }}>
                            Mark per question:{' '}
                        </Text>
                        <Text
                            style={{
                                width: 99,
                                height: 18,
                                fontWeight: '600',
                                fontSize: 14,
                                lineHeight: 16,
                                color: 'rgba(78, 78, 78, 1)',
                                bottom: 105,
                                left: 150,
                            }}>
                            5
                        </Text>
                        <View style={{ marginHorizontal: 5 }}>
                            <View
                                style={{
                                    width: 190,
                                    height: 1,
                                    borderWidth: 1,
                                    borderColor: 'rgba(220, 220, 220, 1)',
                                    transform: [{ rotate: '0.31deg' }],
                                    right: 52,
                                    bottom: 75,
                                }}
                            />
                        </View>
                        <Text
                            style={{
                                width: 148,
                                height: 18,
                                fontWeight: '500',
                                fontSize: 10,
                                lineHeight: 13.5,
                                color: 'rgba(146, 146, 146, 1)',
                                position: 'absolute',
                                left: 160,
                                bottom: 60,
                            }}>
                            Negative Mark per Question:{' '}
                        </Text>
                        <Text
                            style={{
                                width: 148,
                                height: 18,
                                fontWeight: '600',
                                lineHeight: 18,
                                fontSize: 14,
                                color: 'rgba(78, 78, 78, 1)',
                                position: 'absolute',
                                left: 300,
                                bottom: 65,
                            }}>
                            -2
                        </Text>
                    </View>
                </View>

                {/* Total Marks Box */}
                <View
                    style={{
                        width: 351,
                        fontSize: 12,
                        lineHeight: 15,
                        alignContent: 'center',
                        height: 38,
                        borderRadius: 8,
                        backgroundColor: 'rgba(238,233,255,1)', // You can adjust the background color as needed
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 10,
                        paddingHorizontal: 10,
                        top: 5,
                    }}>
                    <Text
                        style={{
                            fontWeight: '500',
                            width: 93,
                            height: 15,
                            fontSize: 12,
                            lineHeight: 15,
                            left: 30,
                            color: 'rgba(94, 60, 190, 1)',
                        }}>
                        Total Marks{' '}
                    </Text>
                    <Text
                        style={{
                            fontWeight: '600',
                            width: 45,
                            height: 21,
                            fontSize: 14,
                            lineHeight: 15,
                            right: 20,
                            top: 3,
                            color: 'rgba(94, 60, 190, 1)',
                        }}>
                        100{' '}
                    </Text>
                    <View
                        style={{
                            width: 148,
                            height: 32,
                            borderRadius: 6,
                            backgroundColor: 'rgba(94, 60, 190, 1)',
                        }}>
                        <Text
                            style={{
                                fontWeight: '500',
                                width: 93,
                                height: 15,
                                fontSize: 12,
                                lineHeight: 15,
                                left: 20,
                                top: 7,
                                color: 'rgba(255, 255, 255, 1)',
                            }}>
                            Total Marks{' '}
                        </Text>
                        <Text
                            style={{
                                fontWeight: '600',
                                width: 45,
                                height: 21,
                                fontSize: 14,
                                lineHeight: 15,
                                left: 90,
                                bottom: 7,
                                color: 'rgba(255, 255, 255, 1)',
                            }}>
                            80{' '}
                        </Text>
                    </View>
                </View>

                {/* Submitted, Not Attended, Not Answered */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 20,
                        top: 20,
                    }}>
                    <View
                        style={[styles.subBoxS, { borderColor: 'rgba(222, 255, 235, 1)' }]}>
                        <Text
                            style={{
                                width: 53,
                                height: 43,
                                fontWeight: '500',
                                fontSize: 10,
                                lineHeight: 17.75,
                                alignContent: 'center',
                                color: 'rgba(20,175,81,1)',
                            }}>
                            Submitted
                        </Text>
                        <Text
                            style={{
                                width: 53,
                                height: 43,
                                fontWeight: '600',
                                fontSize: 17,
                                lineHeight: 24.39,
                                alignContent: 'center',
                                color: 'rgba(20,175,81,1)',
                                bottom: 25,
                                left: 10,
                            }}>
                            10
                        </Text>
                    </View>
                    <View
                        style={[
                            styles.subBoxNAttend,
                            { borderColor: 'rgba(255, 238, 212, 1)' },
                        ]}>
                        <Text
                            style={{
                                width: 70,
                                height: 43,
                                fontWeight: '500',
                                fontSize: 10,
                                lineHeight: 17.75,
                                alignContent: 'center',
                                color: 'rgba(255,171,45,1)',
                                left: 5,
                            }}>
                            Not Attended
                        </Text>
                        <Text
                            style={{
                                width: 148,
                                height: 18,
                                fontWeight: '600',
                                lineHeight: 18,
                                fontSize: 14,
                                color: 'rgba(255,171,45,1)',
                                bottom: 20,
                                left: 65,
                            }}>
                            02
                        </Text>
                    </View>
                    <View
                        style={[
                            styles.subBoxNAnswer,
                            { borderColor: 'rgba(255, 220, 220, 1)' },
                        ]}>
                        <Text
                            style={{
                                width: 70,
                                height: 43,
                                fontWeight: '500',
                                fontSize: 10,
                                lineHeight: 17.75,
                                alignContent: 'center',
                                color: 'rgba(237, 54, 54, 1)',
                                left: 5,
                            }}>
                            Not Answered
                        </Text>
                        <Text
                            style={{
                                width: 148,
                                height: 18,
                                fontWeight: '600',
                                lineHeight: 18,
                                fontSize: 14,
                                color: 'rgba(237, 54, 54, 1)',
                                left: 65,
                                bottom: 19,
                            }}>
                            03
                        </Text>
                    </View>
                </View>

                {/* Buttons */}
                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        marginHorizontal: 20,
                        marginTop: 190,
                    }}>
                    {/* Buttons */}
                    <View
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            marginHorizontal: 20,
                            marginTop: 20,
                            right: 30,
                        }}>
                        <TouchableOpacity
                            style={[
                                styles.button,
                                { backgroundColor: 'rgba(36, 111, 255, 1)', marginBottom: 10 },
                            ]}
                            onPress={() => {
                                navigation.navigate('Practice');
                            }}>
                            <Text
                                style={[styles.buttonText, { color: 'rgba(255, 255, 255, 1)' }]}>
                                Re-Attempt
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.button,
                                { backgroundColor: 'rgba(209, 255, 227, 1)' },
                            ]}
                            onPress={() => {
                                navigation.navigate('Attempt 3');
                            }}>
                            <Text
                                style={[styles.buttonText, { color: 'rgba(20, 175, 81, 1)' }]}>
                                View Result
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    statusText: {
        fontSize: 14,
        marginRight: 5,
        width: 49,
        height: 17,
        lineHeight: 16.5,
    },
    button: {
        alignItems: 'center',
        padding: 15,
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    dateTimeText: {
        fontSize: 10,
        width: 73,
        height: 24,
        color: 'rgba(126, 126, 126, 1)',
    },

    SubmitTxt: {
        width: 53,
        height: 43,
        fontWeight: '500',
        fontSize: 10,
        lineHeight: 17.75,
        alignContent: 'center',
        color: 'rgba(20,175,81,1)',
    },
    SubmitCnt: {
        width: 53,
        height: 43,
        fontWeight: '600',
        fontSize: 17,
        lineHeight: 24.39,
        alignContent: 'center',
        color: 'rgba(20,175,81,1)',
        bottom: 25,
        left: 10,
    },
    subBoxNAttend: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(255, 238, 212, 1)', // Updated color
        padding: 10,
        width: 88,
        height: 58,
        alignItems: 'center',
        right: 5,
        backgroundColor: 'rgba(255, 238, 212, 1)',
    },
    NAttendTxt: {
        width: 70,
        height: 43,
        fontWeight: '500',
        fontSize: 10,
        lineHeight: 17.75,
        alignContent: 'center',
        color: 'rgba(255,171,45,1)',
        left: 5,
    },
    NAttendCnt: {
        width: 148,
        height: 18,
        fontWeight: '600',
        lineHeight: 18,
        fontSize: 14,
        color: 'rgba(255,171,45,1)',
        bottom: 20,
        left: 65,
    },
    subBoxNAnswer: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(255, 220, 220, 1)', // Updated color
        padding: 10,
        width: 88,
        height: 58,
        alignItems: 'center',
        left: 10,
        backgroundColor: 'rgba(255, 220, 220, 1)',
    },
    NAnswerTxt: {
        width: 70,
        height: 43,
        fontWeight: '500',
        fontSize: 10,
        lineHeight: 17.75,
        alignContent: 'center',
        color: 'rgba(237, 54, 54, 1)',
        left: 5,
    },
    NAnswerCnt: {
        width: 148,
        height: 18,
        fontWeight: '600',
        lineHeight: 18,
        fontSize: 14,
        color: 'rgba(237, 54, 54, 1)',
        left: 65,
        bottom: 19,
    },
    subBoxS: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(222, 255, 235, 1)', // Updated color
        padding: 10,
        width: 88,
        height: 58,
        alignItems: 'center',
        right: 10,
        backgroundColor: 'rgba(222, 255, 235, 1)',
    },
    totalMarksBox: {
        width: 351,
        fontSize: 12,
        lineHeight: 15,
        alignContent: 'center',
        height: 38,
        borderRadius: 8,
        backgroundColor: '#EDEDED', // You can adjust the background color as needed
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 10,
        top: 5,
    },
    totalMarksCnt: {
        fontWeight: '600',
        width: 45,
        height: 21,
        fontSize: 14,
        lineHeight: 15,
        right: 20,
        top: 3,
        color: 'rgba(94, 60, 190, 1)',
    },
    totalMarksText: {
        fontWeight: '500',
        width: 93,
        height: 15,
        fontSize: 12,
        lineHeight: 15,
        left: 30,
        color: 'rgba(94, 60, 190, 1)',
    },
    additionalBox: {
        width: 148,
        height: 32,
        borderRadius: 6,
        backgroundColor: 'rgba(94, 60, 190, 1)',
    },
    totalMarksTextt: {
        fontWeight: '500',
        width: 93,
        height: 15,
        fontSize: 12,
        lineHeight: 15,
        left: 20,
        top: 7,
        color: 'rgba(255, 255, 255, 1)',
    },
    totalMarksCntt: {
        fontWeight: '600',
        width: 45,
        height: 21,
        fontSize: 14,
        lineHeight: 15,
        left: 90,
        bottom: 7,
        color: 'rgba(255, 255, 255, 1)',
    },
    buttonsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 190,
    },
    button: {
        width: 353,
        height: 53,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        right: 20,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ReAttend;