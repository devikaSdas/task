import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MenuSVG from '../../assets/svg/Menu.svg';
import Header from '../../components/Header';
import LeftArrow from '../../assets/svg/LeftArrow.svg';
import RightArrow from '../../assets/svg/RightArrow.svg';
import { useNavigation } from '@react-navigation/native';

const AttemptPage2 = () => {
    const navigation = useNavigation();

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = option => {
        setSelectedOption(option);
    };

    const getOptionStyle = option => {
        return [
            styles.optionBox,
            selectedOption === option && styles.selectedOptionBox,
        ];
    };

    const getTextStyle = option => {
        return [
            styles.optionText,
            selectedOption === option && styles.selectedOptionText,
        ];
    };

    return (
        <View style={{ flex: 1, padding: 1 }}>
            <Header pageType={'Attend 2'}>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <MenuSVG />
                </TouchableOpacity>
            </Header>

            <View style={{ alignItems: 'center', marginBottom: 10 }}>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: '600',
                        lineHeight: 21,
                        color: 'rgba(57, 57, 57, 1)',
                        right: 145,
                        top: 5,
                    }}>
                    Question 1
                </Text>
            </View>

            {/* Question */}
            <View style={{ marginBottom: 20, width: 400, height: 110 }}>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: '300',
                        color: 'rgba(69, 69, 69, 1)',
                        marginHorizontal: 20,
                        fontFamily: 'Poppins',
                    }}>
                    Lorem ipsum dolor sit amet consectetur. Sagittis pellentesque
                    fringilla volutpat neque tempus sit aliquet eget. Viverra sed nunc
                    sapien faucibus odio morbi. Velit nisl commodo sagittis lectus nibh
                    rhoncus.
                </Text>
            </View>

            <View style={{ width: 200, height: 18 }}>
                <Text
                    style={{
                        fontSize: 12,
                        fontWeight: '500',
                        color: 'rgba(61, 60, 60, 1)',
                        marginHorizontal: 20,
                    }}>
                    Choose Answer
                </Text>
            </View>

            {/* MCQ Model */}
            <View style={{ padding: 10, paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'column', width: 336 }}>
                    {/* Option 1 */}
                    <TouchableOpacity
                        style={[styles.optionBox, getOptionStyle('a')]}
                        onPress={() => handleOptionSelect('a')}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: 10,
                            }}>
                            <Text style={[styles.labelText, getTextStyle('a')]}>a</Text>
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: 'rgba(58, 58, 58, 1)',
                                    marginLeft: 10,
                                    fontWeight: '500',
                                    right: 10,
                                    fontFamily: 'Poppins',
                                }}>
                                Lorem ipsum dolor sit amet consectetur.
                            </Text>
                        </View>
                    </TouchableOpacity>

                    {/* Option 2 */}
                    <TouchableOpacity
                        style={[styles.optionBox, getOptionStyle('b')]}
                        onPress={() => handleOptionSelect('b')}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: 10,
                            }}>
                            <Text
                                style={[
                                    styles.labelText,
                                    getTextStyle('b'),
                                    selectedOption === 'b' && styles.selectedLabelText,
                                ]}>
                                b
                            </Text>
                            <Text
                                style={{
                                    flex: 1,
                                    fontSize: 14,
                                    color: 'rgba(58, 58, 58, 1)',
                                    marginLeft: 10,
                                    fontWeight: '500',
                                    fontFamily: 'Poppins',

                                }}>
                                Lorem ipsum dolor sit amet consectetur.
                            </Text>
                        </View>
                    </TouchableOpacity>

                    {/* Option 3 */}
                    <TouchableOpacity
                        style={[styles.optionBox, getOptionStyle('c')]}
                        onPress={() => handleOptionSelect('c')}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: 10,
                            }}>
                            <Text
                                style={[
                                    styles.labelText,
                                    getTextStyle('c'),
                                    selectedOption === 'c' && styles.selectedLabelText,
                                ]}>
                                c
                            </Text>
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: 'rgba(92, 92, 92, 1)',
                                    fontWeight: '400',
                                    fontFamily: 'Poppins',

                                }}>
                                Lorem ipsum dolor sit amet consectetur.
                            </Text>
                        </View>
                    </TouchableOpacity>

                    {/* Option 4 */}
                    <TouchableOpacity
                        style={[styles.optionBox, getOptionStyle('d')]}
                        onPress={() => handleOptionSelect('d')}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: 10,
                            }}>
                            <Text
                                style={[
                                    styles.labelText,
                                    getTextStyle('d'),
                                    selectedOption === 'd' && styles.selectedLabelText,
                                ]}>
                                d
                            </Text>
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: 'rgba(58, 58, 58, 1)',
                                    marginLeft: 10,
                                    fontWeight: '500',
                                    right: 10,
                                    fontFamily: 'Poppins',

                                }}>
                                Lorem ipsum dolor sit amet consectetur.
                            </Text>
                        </View>
                    </TouchableOpacity>

                    {/* Submit Button */}
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'rgba(94, 60, 190, 1)',
                            borderRadius: 10,
                            padding: 15,
                            alignItems: 'center',
                            marginTop: 20,
                            width: 145,
                            height: 55,
                            top: 190,
                            left: 120,
                        }}
                        onPress={() => navigation.navigate('Answers')}>
                        <Text
                            style={{
                                color: 'rgba(255, 255, 255, 1)',
                                fontWeight: '600',
                                fontSize: 16,
                            }}>
                            Submit
                        </Text>
                    </TouchableOpacity>

                    {/* Arrows */}
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 20,
                            paddingHorizontal: 20,
                        }}>
                        <LeftArrow
                            width={55}
                            height={53}
                            color={'rgba(240, 233, 255, 1)'}
                            top={140}
                            left={45}
                        />
                        <RightArrow
                            width={55}
                            height={53}
                            color={'rgba(230, 221, 255, 1)'}
                            left={280}
                            top={80}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 1,
        // backgroundColor: '#fff',
    },
    headingContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    headingText: {
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 21,
        color: 'rgba(57, 57, 57, 1)',
        right: 145,
        top: 5,
    },
    questionContainer: {
        marginBottom: 20,
        width: 400,
        height: 110,
    },
    questionText: {
        fontSize: 16,
        fontWeight: '300',
        color: 'rgba(69, 69, 69, 1)',
        marginHorizontal: 20,
    },
    mcqContainer: {
        padding: 10,
        paddingHorizontal: 20,
    },
    optionContainer: {
        flexDirection: 'column',
        width: 336,
    },
    optionBox: {
        width: 350,
        height: 49,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: 'rgba(204, 204, 204, 1)',
        padding: 10,
        marginBottom: 10,
    },
    optionText: {
        fontSize: 14,
        color: 'rgba(92, 92, 92, 1)',
        left: 20,
        fontWeight: '400',
    },
    Timer: {
        width: 80,
        height: 24,
        fontWeight: '500',
        lineHeight: 24,
        fontSize: 16,
        color: 'rgba(36,194,98,1)',
    },
    QNo: {
        width: 55,
        height: 24,
        fontWeight: '500',
        lineHeight: 24,
        fontSize: 16,
        color: 'rgba(57,57,57,1)',
    },
    optionLabel: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    optionText: {
        fontSize: 14,
        color: 'rgba(58, 58, 58, 1)',
        marginLeft: 10,
        fontWeight: '500',
        right: 10,
    },
    optionLabelText: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 1)',
        fontWeight: '400',
    },
    selectedOptionBox: {
        backgroundColor: 'rgba(238, 232, 255, 1)',
    },
    selectedOptionText: {
        color: 'black',
    },
    submitButton: {
        backgroundColor: 'rgba(94, 60, 190, 1)',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        marginTop: 20,
        width: 145,
        height: 55,
        top: 170,
        left: 100,
    },
    submitText: {
        color: 'rgba(255, 255, 255, 1)',
        fontWeight: '600',
        fontSize: 16,
    },
    labelText: {
        width: 22,
        height: 22,
        borderRadius: 10,
        backgroundColor: 'rgba(233, 233, 233, 1)',
        textAlign: 'center',
        lineHeight: 22,
        color: 'rgba(58, 58, 58, 1)',
        marginRight: 10,
    },
    selectedLabelText: {
        backgroundColor: 'rgba(94, 60, 190, 1)',
        color: 'white',
        width: 22,
        height: 22,
        borderRadius: 10,
        textAlign: 'center',
        marginRight: 10,
        lineHeight: 22,
    },
    AnswerContainer: {
        width: 200,
        height: 18,
    },
    AnswerText: {
        fontSize: 12,
        fontWeight: '500',
        color: 'rgba(61, 60, 60, 1)',
        marginHorizontal: 20,
    },
});

export default AttemptPage2;