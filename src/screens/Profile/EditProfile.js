import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import ProfileSVG from '../../assets/svg/ProfileImage.svg';
import EditPSVG from '../../assets/svg/EditP.svg';
import CameraSVG from '../../assets/svg/Cam.svg';
import CamBgSVG from '../../assets/svg/CamBg.svg';
import CloseSVG from '../../assets/svg/CloseAttend.svg';

const EditProfilePage = () => {
    const [schoolVisible, setSchoolVisible] = useState(true);
    const [contactVisible, setContactVisible] = useState(true);
    const [emailVisible, setEmailVisible] = useState(true);
    const [addressVisible, setAddressVisible] = useState(true);

    const handleClearDetails = detailType => {
        switch (detailType) {
            case 'school':
                setSchoolVisible(false);
                break;
            case 'contact':
                setContactVisible(false);
                break;
            case 'email':
                setEmailVisible(false);
                break;
            case 'address':
                setAddressVisible(false);
                break;
            default:
                break;
        }
    };

    return (
        <View style={{ flex: 1 }}>
            {/* Top colored section */}
            <ImageBackground
                source={require('../../assets/svg/profBg.png')} // Update the path to your background image
                style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 90 }}
                resizeMode="cover" // Adjust the resizeMode as needed
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 20,
                    }}>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: '#FFF',
                            bottom: 70,
                            right: 60,
                            lineHeight: 24,
                        }}>
                        Profile
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Edit Profile')}>
                        <Text
                            style={{
                                fontSize: 16,
                                color: '#FFF',
                                bottom: 70,
                                left: 80,
                                marginTop: 15,
                            }}>
                            Edit Profile{' '}
                        </Text>
                        <EditPSVG
                            width={16}
                            height={16}
                            bottom={88}
                            left={50}
                            onPress={() => navigation.navigate('Edit Profile')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <ProfileSVG width={154.6} height={154.81} bottom={35} left={30} />
                    <CamBgSVG width={51} height={51} borderRadius={2} top={10} right={15} />
                    <CameraSVG width={25} height={19} top={10} right={52} />

                    <Text
                        style={{
                            width: 199,
                            height: 30,
                            fontWeight: '600',
                            fontSize: 20,
                            lineHeight: 30,
                            color: '#FFFFFF',
                            top: 70,
                            right: 195,
                        }}>
                        Muhammed Ameer
                    </Text>
                    <Text
                        style={{
                            fontSize: 16,
                            color: '#ffffff',
                            position: 'absolute',
                            top: 160,
                            right: 70,
                        }}>
                        DLCRER435
                    </Text>
                </View>
            </ImageBackground>

            <View style={{ flex: 1, backgroundColor: '#FFF', padding: 20 }}>
                {schoolVisible && (
                    <>
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: '600',
                                marginBottom: 5,
                                color: '#828282',
                                marginTop: 20,
                            }}>
                            School:
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: '600',
                                    lineHeight: 24,
                                    marginBottom: 15,
                                    color: '#292929',
                                }}>
                                Digital Learning Platform
                            </Text>
                            <View
                                style={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: 'rgba(191, 191, 191, 1)',
                                    width: 326,
                                    marginLeft: 5, // Added margin to separate text and line
                                }}
                            />
                        </View>
                    </>
                )}

                {contactVisible && (
                    <>
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: '600',
                                marginBottom: 5,
                                color: '#828282',
                                marginTop: 20,
                            }}>
                            Contact:
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: '600',
                                    lineHeight: 24,
                                    marginBottom: 15,
                                    color: '#292929',
                                }}>
                                +91 9293949495
                            </Text>
                            <View
                                style={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: 'rgba(191, 191, 191, 1)',
                                    width: 326,
                                }}
                            />
                        </View>
                    </>
                )}

                {emailVisible && (
                    <>
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: '600',
                                marginBottom: 5,
                                color: '#828282',
                                marginTop: 20,
                            }}>
                            Email:
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: '600',
                                    lineHeight: 24,
                                    marginBottom: 15,
                                    color: '#292929',
                                }}>
                                ameer123@gmail.com
                            </Text>
                            <View
                                style={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: 'rgba(191, 191, 191, 1)',
                                    width: 326,
                                }}
                            />
                        </View>
                    </>
                )}

                {addressVisible && (
                    <>
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: '600',
                                marginBottom: 5,
                                color: '#828282',
                                marginTop: 20,
                            }}>
                            Address:
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: '600',
                                    lineHeight: 24,
                                    marginBottom: 15,
                                    color: '#292929',
                                }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </Text>
                            <View
                                style={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: 'rgba(191, 191, 191, 1)',
                                    width: 326,
                                }}
                            />
                        </View>
                    </>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topSection: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 90,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileHeading: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
        bottom: 70,
        right: 60,
        lineHeight: 24,
    },
    editProfile: {
        fontSize: 16,
        color: '#FFF',
        bottom: 70,
        left: 135,
    },
    profileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 20,
        left: 30,
    },
    name: {
        width: 199,
        height: 30,
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 30,
        color: '#FFFFFF',
        top: 100,
        right: 230,
    },
    idNumber: {
        fontSize: 16,
        color: '#FFF',
        position: 'absolute',
        top: 190,
        right: 85,
    },
    bottomSection: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 20,
    },
    sectionHeading: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 5,
        color: '#828282',
        marginTop: 20,
    },
    sectionContent: {
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 24,
        marginBottom: 15,
        color: '#292929',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(191, 191, 191, 1)',

        // textDecorationLine:'underline',
    },
    saveButton: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 6,
        backgroundColor: '#14AF51',
        bottom: 70,
        left: 70,
    },
    saveText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
});

export default EditProfilePage;