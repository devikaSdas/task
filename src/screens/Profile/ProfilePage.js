import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import ProfileSVG from '../../assets/svg/ProfileImage.svg';
import EditPSVG from '../../assets/svg/EditP.svg';
import { useNavigation } from '@react-navigation/native';

const ProfilePage = () => {
    const navigation = useNavigation();

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

                    <Text
                        style={{
                            width: 199,
                            height: 30,
                            fontWeight: '600',
                            fontSize: 20,
                            lineHeight: 30,
                            color: '#FFFFFF',
                            top: 70,
                            right: 125,
                        }}>
                        Muhammed Ameer{' '}
                    </Text>
                    <Text
                        style={{
                            fontSize: 16,
                            color: '#FFF',
                            position: 'absolute',
                            top: 160,
                            right: 70,
                        }}>
                        DLCRER435
                    </Text>
                </View>
            </ImageBackground>

            {/* Bottom white section */}
            <View style={{ flex: 1, backgroundColor: '#FFF', padding: 20 }}>
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
                <Text
                    style={{
                        fontSize: 14,
                        fontWeight: '600',
                        lineHeight: 24,
                        marginBottom: 15,
                        color: '#292929',
                    }}>
                    {' '}
                    Lorem ipsum dolorsit amet consectetur adipiscing elit
                </Text>
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
        left: 80,
        marginTop: 15,
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
    },
    Name: {
        width: 199,
        height: 30,
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 30,
        color: '#FFFFFF',
        top: 70,
        right: 125,
    },
    idNumber: {
        fontSize: 16,
        color: '#FFF',
        position: 'absolute',
        top: 160,
        right: 70,
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
    },
});

export default ProfilePage;