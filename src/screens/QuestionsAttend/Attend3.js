import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';

const AttemptPage3 = () => {
    const getRoundStyles = index => {
        let roundBorderColor = 'rgba(237, 237, 237, 1)'; // Default round border color
        let roundTextColor = '#000'; // Default text color

        if ([1, 4, 5, 6, 7, 8, 11, 12, 13, 14].includes(index + 1)) {
            roundBorderColor = 'rgba(222, 255, 235, 1)';
            roundTextColor = 'rgba(20, 175, 81, 1)';
        } else if ([2, 9].includes(index + 1)) {
            roundBorderColor = 'rgba(255, 238, 212, 1)';
            roundTextColor = 'rgba(255, 171, 45, 1)';
        } else if ([3, 10, 15].includes(index + 1)) {
            roundBorderColor = 'rgba(255, 220, 220, 1)';
            roundTextColor = 'rgba(228, 51, 60, 1)';
        }

        return { roundBorderColor, roundTextColor };
    };

    return (
        <View style={{ flex: 1, padding: 1, backgroundColor: '#fff' }}>
            <Header pageType={'Attend 3'} />

            {/* Duration and Time Remaining */}
            <View
                style={{
                    width: 350,
                    height: 100,
                    borderRadius: 10,
                    borderWidth: 0.5,
                    color: 'rgba(220, 220, 220, 1)',
                    marginBottom: 20,
                    padding: 10,
                    left: 25,
                    top: 20,
                }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 10,
                            color: 'rgba(220, 220, 220, 1)',
                        }}>
                        <Text
                            style={{
                                width: 55,
                                height: 15,
                                fontWeight: '500',
                                fontSize: 14,
                                lineHeight: 15,
                                color: 'rgba(146, 146, 146, 1)',
                                left: 40,
                            }}>
                            Duration
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 10,
                            color: 'rgba(220, 220, 220, 1)',
                        }}>
                        <Text
                            style={{
                                width: 123,
                                height: 15,
                                fontWeight: '500',
                                fontSize: 14,
                                lineHeight: 15,
                                color: 'rgba(146, 146, 146, 1)',
                                left: 140,
                            }}>
                            Time Remaining
                        </Text>
                        <Text
                            style={{
                                width: 180,
                                height: 21,
                                fontWeight: '600',
                                fontSize: 16,
                                lineHeight: 21,
                                color: 'rgba(49, 49, 49, 1)',
                                top: 30,
                                right: 180,
                            }}>
                            2 hour 30 Minutes
                        </Text>
                        <View style={{ marginHorizontal: 5 }}>
                            <View
                                style={{
                                    width: 100,
                                    height: 1,
                                    borderWidth: 1,
                                    borderColor: 'rgba(220, 220, 220, 1)',
                                    transform: [{ rotate: '-90deg' }],
                                    right: 260,
                                    top: 30,
                                }}
                            />
                        </View>
                        <Text
                            style={{
                                width: 128,
                                height: 21,
                                fontWeight: '600',
                                fontSize: 16,
                                lineHeight: 21,
                                top: 30,
                                right: 260,
                                color: 'rgba(20, 175, 81, 1)',
                            }}>
                            01 : 30 :05
                        </Text>
                    </View>
                </View>
            </View>

            {/* Total Questions */}
            <View
                style={{
                    width: 350,
                    height: 100,
                    borderRadius: 10,
                    borderWidth: 0.5,
                    color: 'rgba(220, 220, 220, 1)',
                    marginBottom: 20,
                    padding: 10,
                    left: 25,
                    top: 20,
                }}>
                <Text
                    style={{
                        width: 90,
                        height: 50,
                        fontWeight: '500',
                        fontSize: 12,
                        lineHeight: 15,
                        color: 'rgba(146, 146, 146, 1)',
                        top: 20,
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
                    }}>
                    20
                </Text>
            </View>
            <View style={{ marginHorizontal: 5 }}>
                <View
                    style={{
                        width: 100,
                        height: 1,
                        borderWidth: 1,
                        borderColor: 'rgba(220, 220, 220, 1)',
                        transform: [{ rotate: '-90deg' }],
                        left: 130,
                        bottom: 51,
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
                    }}>
                    <Text
                        style={{
                            width: 99,
                            height: 18,
                            fontWeight: '500',
                            fontSize: 10,
                            lineHeight: 13.5,
                            color: 'rgba(146, 146, 146, 1)',
                            bottom: 80,
                            left: 200,
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
                            bottom: 80,
                            left: 190,
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
                            bottom: 40,
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
                            bottom: 44,
                            right: 10,
                        }}>
                        -2
                    </Text>
                </View>
            </View>

            {/* Submitted, Not Attended, Not Answered */}
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 20,
                }}>
                <View style={[styles.subBoxS, { borderColor: 'rgba(222, 255, 235, 1)' }]}>
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

            {/* Questions */}
            <Text
                style={{
                    flexDirection: 'row',
                    left: 30,
                    color: 'rgba(71, 71, 71, 1)',
                    width: 76,
                    height: 18,
                    fontWeight: '600',
                    lineHeight: 18,
                    fontSize: 16,
                }}>
                Questions
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 20,
                    marginHorizontal: 20,
                }}>
                {/* Generate Ellipses */}
                {Array.from({ length: 20 }, (_, index) => {
                    const { roundBorderColor, roundTextColor } = getRoundStyles(index);
                    return (
                        <View
                            style={[
                                styles.ellipse,
                                {
                                    borderColor: roundBorderColor,
                                    backgroundColor: roundBorderColor,
                                },
                            ]}
                            key={index}>
                            <Text style={{ color: roundTextColor }}>{index + 1}</Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 1,
        backgroundColor: '#fff',
    },
    separator: {
        width: 1,
        height: '100%',
        backgroundColor: 'rgba(220, 220, 220, 1)',
        marginHorizontal: 10,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        color: 'rgba(220, 220, 220, 1)',
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    box: {
        width: 350,
        height: 100,
        borderRadius: 10,
        borderWidth: 0.5,
        color: 'rgba(220, 220, 220, 1)',
        marginBottom: 20,
        padding: 10,
        left: 25,
        top: 20,
    },
    column: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    subBoxS: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(222, 255, 235, 1)', // Updated color
        padding: 10,
        width: 88,
        height: 58,
        alignItems: 'center',
        left: 30,
        backgroundColor: 'rgba(222, 255, 235, 1)',
    },
    questions: {
        flexDirection: 'row',
        left: 30,
        color: 'rgba(71, 71, 71, 1)',
        width: 76,
        height: 18,
        fontWeight: '600',
        lineHeight: 18,
        fontSize: 16,
    },
    ellipse: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 1,
        borderColor: 'rgba(79, 79, 79, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },

    Round: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 20,
    },
    DTxt: {
        width: 55,
        height: 15,
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 15,
        color: 'rgba(146, 146, 146, 1)',
        left: 40,
    },
    TTxt: {
        width: 123,
        height: 15,
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 15,
        color: 'rgba(146, 146, 146, 1)',
        left: 140,
    },
    TText: {
        width: 180,
        height: 21,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 21,
        color: 'rgba(49, 49, 49, 1)',
        top: 30,
        right: 180,
    },
    DText: {
        width: 128,
        height: 21,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 21,
        top: 30,
        right: 150,
        color: 'rgba(20, 175, 81, 1)',
    },
    TTText: {
        width: 90,
        height: 50,
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 15,
        color: 'rgba(146, 146, 146, 1)',
        top: 20,
        left: 20,
    },
    DTText: {
        width: 79,
        height: 38,
        color: 'rgba(78, 78, 78, 1)',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 21,
        alignContent: 'center',
        alignItems: 'center',
        left: 50,
    },
    MpQTxt: {
        width: 99,
        height: 18,
        fontWeight: '500',
        fontSize: 10,
        lineHeight: 13.5,
        color: 'rgba(146, 146, 146, 1)',
        bottom: 80,
        left: 200,
    },
    MpQText: {
        width: 99,
        height: 18,
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 16,
        color: 'rgba(78, 78, 78, 1)',
        bottom: 80,
        left: 190,
    },
    NpQTxt: {
        width: 148,
        height: 18,
        fontWeight: '500',
        fontSize: 10,
        lineHeight: 13.5,
        color: 'rgba(146, 146, 146, 1)',
        bottom: 40,
    },
    NpQText: {
        width: 148,
        height: 18,
        fontWeight: '600',
        lineHeight: 18,
        fontSize: 14,
        color: 'rgba(78, 78, 78, 1)',
        bottom: 44,
        right: 10,
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
        right: 40,
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
});

export default AttemptPage3;