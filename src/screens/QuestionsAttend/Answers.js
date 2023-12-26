import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MenuSVG from '../../assets/svg/Menu.svg';
import Header from '../../components/Header';
import LeftArrow from '../../assets/svg/LeftArrow.svg';
import RightArrow from '../../assets/svg/RightArrow.svg';
import { useNavigation } from '@react-navigation/native';

const Answers = () => {
    const navigation = useNavigation();

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = option => {
        setSelectedOption(option);
    };

    const getOptionStyle = option => {
        let optionStyles = [
            styles.optionBox,
            selectedOption === option && styles.selectedOptionBox,
        ];

        if (option === 'b') {
            optionStyles.push(styles.bOptionBox);
        } else if (option === 'c') {
            optionStyles.push(styles.cOptionBox);
        }

        return optionStyles;
    };

    const getTextStyle = option => {
        let textStyles = [
            styles.optionText,
            selectedOption === option && styles.selectedOptionText,
        ];

        if (option === 'b') {
            textStyles.push(styles.bOptionText);
        } else if (option === 'c') {
            textStyles.push(styles.cOptionText);
        }

        return textStyles;
    };

    return (
        <View style={{ flex: 1, padding: 1 }}>
            <Header pageType={'Answers'}>
                <MenuSVG onPress={() => navigation.navigate('Attempt 3')} />
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
            <View style={{ padding: 10, paddingHorizontal: 20 }}></View>
            {/* Options */}
            <View style={{ flexDirection: 'column', width: 350, marginHorizontal: 20 }}>
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
                        <Text
                            style={[
                                styles.labelText,
                                getTextStyle('a'),
                                selectedOption === 'a' && styles.selectedLabelText,
                            ]}>
                            a
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                color: 'rgba(58, 58, 58, 1)',
                                marginLeft: 10,
                                fontWeight: '500',
                                right: 10,
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
                        style={[
                            styles.optionLabel,
                            selectedOption === 'b' && styles.bOptionLabel,
                        ]}>
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
                                fontSize: 14,
                                color: 'rgba(58, 58, 58, 1)',
                                marginLeft: 10,
                                fontWeight: '500',
                                right: 10,
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
                        style={[
                            styles.optionLabel,
                            selectedOption === 'c' && styles.cOptionLabel,
                        ]}>
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
                                color: 'rgba(58, 58, 58, 1)',
                                marginLeft: 10,
                                fontWeight: '500',
                                right: 10,
                            }}>
                            Lorem ipsum dolor sit amet consectetur.
                        </Text>
                    </View>
                </TouchableOpacity>

                {/* Option 4 */}
                <TouchableOpacity
                    style={[styles.optionBox, getOptionStyle('d')]}
                    onPress={() => handleOptionSelect('d')}>
                    <View style={styles.optionLabel}>
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
                            }}>
                            Lorem ipsum dolor sit amet consectetur.
                        </Text>
                    </View>
                </TouchableOpacity>
                {/* Arrows */}
                <View style={styles.navigationArrows}>
                    <LeftArrow
                        width={55}
                        height={53}
                        borderRadius={10}
                        top={200}
                        left={5}
                        color={'rgba(240, 233, 255, 1)'}
                    />
                    <View style={styles.Question}>
                        <Text
                            style={{
                                width: 55,
                                height: 24,
                                fontWeight: '600',
                                lineHeight: 24,
                                fontSize: 18,
                                color: 'rgba(57, 57, 57, 1)',
                                left: 140,
                                top: 160,
                            }}>
                            Q1/{' '}
                        </Text>
                        <Text
                            style={{
                                width: 55,
                                height: 24,
                                fontWeight: '500',
                                lineHeight: 21,
                                fontSize: 16,
                                color: 'rgba(142, 138, 138, 1)',
                                left: 170,
                                top: 140,
                            }}>
                            Q20
                        </Text>
                    </View>
                    <RightArrow
                        width={55}
                        height={53}
                        borderRadius={10}
                        left={295}
                        top={100}
                        color={'rgba(230, 221, 255, 1)'}
                    />
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
        width: 350,
        marginHorizontal: 20,
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
    QTxt2: {
        width: 55,
        height: 24,
        fontWeight: '500',
        lineHeight: 21,
        fontSize: 16,
        color: 'rgba(142, 138, 138, 1)',
        left: 170,
        top: 140,
    },
    QTxt: {
        width: 55,
        height: 24,
        fontWeight: '600',
        lineHeight: 24,
        fontSize: 18,
        color: 'rgba(57, 57, 57, 1)',
        left: 140,
        top: 160,
    },
    bOptionLabel: {
        color: 'rgba(228, 51, 60, 1)', // Color for option 'b' label
    },
    bOptionText: {
        backgroundColor: 'rgba(228, 51, 60, 1)', // Color for option 'c' label
    },
    cOptionText: {
        backgroundColor: 'rgba(20, 175, 81, 1)', // Color for option 'c' label
    },
    bOptionBox: {
        backgroundColor: 'rgba(255, 229, 229, 1)', // Change color for option b container
    },
    cOptionBox: {
        backgroundColor: 'rgba(233, 255, 241, 1)', // Change color for option c container
    },
});

export default Answers;