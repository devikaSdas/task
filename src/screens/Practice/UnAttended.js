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
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

const PracticeUA = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={{ flex: 1, padding: 1 }}>
            {/* Practice Questions */}
            <View style={{ marginHorizontal: 5 }}>
                {/* FlatList 1 */}
                <FlatList
                    data={[1, 1]}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View
                            style={{
                                width: 370,
                                height: 150,
                                backgroundColor: 'rgba(35, 99, 224, 1)',
                                padding: 20,
                                borderRadius: 10,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginVertical: 5,
                                marginHorizontal: 5,
                                marginLeft: 15,
                                alignItems: 'center',
                            }}>
                            <View
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    width: 105,
                                    height: 18,
                                    paddingHorizontal: 10,
                                    paddingVertical: 5,
                                    borderRadius: 10,
                                    marginRight: 20,
                                    marginBottom: 90,
                                }}>
                                <Text
                                    style={{
                                        marginBottom: 5,
                                        fontSize: 8,
                                        color: 'rgba(255, 255, 255, 1)',
                                        width: 89,
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
                                    color: '#FFFEFE',
                                    marginRight: 20,
                                    right: 120,
                                }}>
                                Lorem ipsum dolor sit amet consectetur
                            </Text>

                            <View
                                style={{
                                    backgroundColor: 'rgba(218, 29, 29, 1)',
                                    width: 44,
                                    height: 15,
                                    paddingHorizontal: 10,
                                    paddingVertical: 5,
                                    borderRadius: 10,
                                    marginBottom: 90,
                                    right: 180,
                                }}>
                                <Text
                                    style={{
                                        color: '#FFFFFF',
                                        fontWeight: '500',
                                        fontSize: 6,
                                        width: 40,
                                        height: 9,
                                        lineHeight: 9,
                                        bottom: 3,
                                        right: 5,
                                    }}>
                                    Expires Soon
                                </Text>
                            </View>
                            <PracticeSvg width={93} height={94} right={100} />
                            <TouchableOpacity
                                style={{
                                    backgroundColor: 'rgba(20, 175, 81, 1)',
                                    borderRadius: 5,
                                    width: 93,
                                    height: 30,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'absolute',
                                    right: 250,
                                    bottom: 20,
                                }}
                                onPress={() => navigation.navigate('Attempt 1')}>
                                <Text
                                    style={{
                                        color: 'rgba(255, 255, 255, 1)',
                                        fontWeight: '600',
                                        fontSize: 8,
                                    }}>
                                    Attempt Now
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />

                {/* FlatList 2 */}
                <FlatList
                    data={[1, 1, 1, 1, 1, 1, 1, 1]}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View
                            style={{
                                width: 370,
                                height: 150,
                                backgroundColor: 'rgba(35, 99, 224, 1)',
                                padding: 20,
                                borderRadius: 10,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginVertical: 5,
                                marginHorizontal: 5,
                                marginLeft: 15,
                                alignItems: 'center',
                            }}>
                            <View
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    width: 105,
                                    height: 18,
                                    paddingHorizontal: 10,
                                    paddingVertical: 5,
                                    borderRadius: 10,
                                    marginRight: 20,
                                    marginBottom: 90,
                                }}>
                                <Text
                                    style={{
                                        marginBottom: 5,
                                        fontSize: 8,
                                        color: 'rgba(255, 255, 255, 1)',
                                        width: 89,
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
                                    color: '#FFFEFE',
                                    marginRight: 20,
                                    right: 120,
                                }}>
                                Lorem ipsum dolor sit amet consectetur
                            </Text>

                            <PracticeSvg width={93} height={94} right={60} />
                            <TouchableOpacity
                                style={{
                                    backgroundColor: 'rgba(20, 175, 81, 1)',
                                    borderRadius: 5,
                                    width: 93,
                                    height: 30,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'absolute',
                                    right: 245,
                                    bottom: 20,
                                }}
                                onPress={() => navigation.navigate('Attempt 1')}>
                                <Text
                                    style={{
                                        color: 'rgba(255, 255, 255, 1)',
                                        fontWeight: '600',
                                        fontSize: 8,
                                    }}>
                                    Attempt Now
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

const styles = StyleSheet.create({});

export default PracticeUA;