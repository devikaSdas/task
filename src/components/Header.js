import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LogoSvg from '../assets/svg/cdsp logo.svg';
import LangSVG from '../assets/svg/Language.svg';
import MoreSVG from '../assets/svg/More.svg';
import MenuSVG from '../assets/svg/Menu.svg';
import GoBackSVG from '../assets/svg/Goback.svg';
import { useNavigation } from '@react-navigation/native';
import CloseSVG from '../assets/svg/CloseAttend.svg';

const Header = ({ pageType }) => {
    const navigation = useNavigation();

    const renderContent = () => {
        switch (pageType) {
            case 'HomePage':
                return (
                    <>
                        <LogoSvg width={114} height={26} />
                        <LangSVG left={100} />
                        <Text
                            style={{
                                color: 'rgba(86, 86, 86, 1)',
                                width: 43,
                                height: 18,
                                fontWeight: '500',
                                fontSize: 12,
                                left: 50,
                            }}>
                            English
                        </Text>
                        <MoreSVG />
                    </>
                );
            case 'Live':
                return (
                    <>
                        <Text
                            style={{
                                width: 100,
                                height: 24,
                                fontSize: 18,
                                fontWeight: '600',
                                lineHeight: 24,
                                color: 'rgba(57,57,57,1)',
                            }}>
                            Live Videos{' '}
                        </Text>
                        <LangSVG left={100} />
                        <Text
                            style={{
                                color: 'rgba(86, 86, 86, 1)',
                                width: 43,
                                height: 18,
                                fontWeight: '500',
                                fontSize: 12,
                                left: 50,
                            }}>
                            English
                        </Text>
                        <MoreSVG />
                    </>
                );
            case 'Practice':
                return (
                    <>
                        <Text
                            style={{
                                width: 170,
                                height: 24,
                                fontWeight: '600',
                                fontSize: 18,
                                lineHeight: 24,
                                color: 'rgba(57,57,57,1)',
                            }}>
                            Practice Questions
                        </Text>
                        <LangSVG left={55} />
                        <Text
                            style={{
                                color: 'rgba(86, 86, 86, 1)',
                                width: 43,
                                height: 18,
                                fontWeight: '500',
                                fontSize: 12,
                                left: 30,
                            }}>
                            English
                        </Text>
                        <MoreSVG />
                    </>
                );
            case 'Attend 1':
                return (
                    <>
                        <GoBackSVG
                            width={20}
                            height={20}
                            color={'rgba(139, 139, 139, 1)'}
                            right={5}
                            onPress={() => navigation.navigate('Practice')}
                        />
                        <Text
                            style={{
                                width: 165,
                                height: 24,
                                fontWeight: '600',
                                fontSize: 18,
                                lineHeight: 24,
                                color: 'rgba(57, 57, 57, 1)',
                                right: 180,
                            }}>
                            Attempt Questions
                        </Text>
                    </>
                );
            case 'Attend 2':
                return (
                    <>
                        <Text
                            style={{
                                width: 100,
                                height: 24,
                                fontWeight: '500',
                                fontSize: 20,
                                lineHeight: 24,
                                color: 'rgba(36, 194, 98, 1)',
                            }}>
                            01 : 25 : 30
                        </Text>
                        <Text
                            style={{
                                width: 55,
                                height: 24,
                                fontWeight: '600',
                                lineHeight: 24,
                                fontSize: 18,
                                color: 'rgba(57, 57, 57, 1)',
                                left: 130,
                                bottom: 3,
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
                                left: 60,
                            }}>
                            Q20
                        </Text>
                        <MenuSVG onPress={() => navigation.navigate('Attempt 3')} />
                    </>
                );
            case 'Attend 3':
                return (
                    <>
                        <CloseSVG
                            width={14}
                            height={14}
                            color={'rgba(180, 180, 18'}
                            onPress={() => navigation.navigate('Attempt 1')}
                        />
                    </>
                );
            case 'ReAttend':
                return (
                    <>
                        <GoBackSVG
                            width={20}
                            height={20}
                            color={'rgba(139, 139, 139, 1)'}
                            right={5}
                            onPress={() => navigation.navigate('Practice')}
                        />
                    </>
                );
            case 'Answers':
                return (
                    <>
                        <GoBackSVG
                            width={20}
                            height={20}
                            color={'rgba(139, 139, 139, 1)'}
                            right={5}
                            onPress={() => navigation.navigate('Attempt 1')}
                        />
                        <MenuSVG onPress={() => navigation.navigate('Attempt 3')} />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#fff',
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
                paddingHorizontal: 20,
                height: 60,
            }}>
            {renderContent()}
            {/* Additional header elements or customization */}
        </View>
    );
};

const styles = StyleSheet.create({});

export default Header;