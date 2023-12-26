import { StyleSheet, Text, View, TouchableOpacity, color } from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/Header';
import ProfilePage from '../Profile/ProfilePage';
import EditProfilePage from '../Profile/EditProfile';

const ProfileMain = () => {
    const [enable, setEnable] = useState(1);

    const renderProfile = () => {
        switch (enable) {
            case 1:
                return <ProfilePage />;
            case 2:
                return <EditProfilePage />;

            default:
                return null;
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Header pageType={'Profile'} />

            {/* Render Profile Videos based on selection */}
            {renderProfile()}
        </View>
    );
};

export default ProfileMain;
const styles = StyleSheet.create({
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
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});