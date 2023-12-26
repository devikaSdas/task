import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import LogoSVG from '../../assets/svg/cdsp logo.svg';
import UsernameIcon from '../../assets/svg/UserCrct.svg';
import PasswordIcon from '../../assets/svg/PassView.svg';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 30,
                backgroundColor: '#ffffff',
            }}>
            {/* Logo */}
            <LogoSVG width={196} height={46} />

            {/* Welcome Back Heading */}
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: '700',
                    width: 153,
                    height: 30,
                    marginVertical: 10,
                    fontFamily: 'Poppins',
                    lineHeight: 30,
                    color: 'rgba(0, 0, 0, 1)',
                    marginRight: 160,
                    top: 10,
                    lineHeight: 30,
                }}>
                Welcome back
            </Text>

            {/* Text */}
            <Text
                style={{
                    width: 314,
                    height: 66,
                    fontWeight: '400',
                    fontSize: 12,
                    lineHeight: 18,
                    marginBottom: 20,
                    textAlign: 'center',
                    color: 'rgba(85, 85, 85, 1)',
                    marginRight: 20,
                    top: 12,
                    fontFamily: 'Poppins',
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </Text>

            {/* Username and Password Container */}
            <View style={{ width: 324, height: 176, borderRadius: 10 }}>
                {/* Username */}
                <Text
                    style={{
                        fontSize: 16,
                        marginBottom: 5,
                        color: 'rgba(28,28,28, 1)',
                        fontFamily: 'Poppins',
                    }}>
                    Username
                </Text>
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={{
                            width: '100%',
                            height: 40,
                            borderColor: '#ccc',
                            borderWidth: 1,
                            marginBottom: 15,
                            paddingHorizontal: 10,
                            borderRadius: 5,
                            color: '#000000',
                            fontFamily: 'Poppins',
                        }}
                        placeholder="Input your username"
                        placeholderTextColor="#BCBCBC"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <UsernameIcon style={styles.inputIcon} />
                </View>

                {/* Password */}
                <Text
                    style={{
                        fontSize: 16,
                        marginBottom: 5,
                        color: 'rgba(28,28,28,1z)',
                        fontFamily: 'Poppins',
                    }}>
                    Password
                </Text>
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={{
                            width: '100%',
                            height: 40,
                            borderColor: '#ccc',
                            borderWidth: 1,
                            marginBottom: 15,
                            paddingHorizontal: 10,
                            borderRadius: 5,
                            color: '#000000',
                            fontFamily: 'Poppins',
                        }}
                        placeholder="Input your password"
                        placeholderTextColor="#BCBCBC"
                        secureTextEntry
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <PasswordIcon style={{ bottom: 44, left: 300 }} />
                </View>
            </View>

            {/* Login Button */}
            <TouchableOpacity
                style={{
                    width: 323,
                    backgroundColor: 'rgba(96, 59, 173, 1)',
                    paddingVertical: 12,
                    paddingHorizontal: 50,
                    borderRadius: 12,
                    top: 40,
                }}
                onPress={() => navigation.navigate('Main')}>
                <Text
                    style={{
                        color: '#ffffff',
                        textAlign: 'center',
                        fontSize: 16,
                        fontWeight: 'bold',
                        fontFamily: 'Poppins',
                    }}>
                    Log In
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
        backgroundColor: '#f4f4f4',
    },
    heading: {
        fontSize: 20,
        fontWeight: '700',
        width: 153,
        height: 30,
        marginVertical: 10,
        fontFamily: 'Poppins',
        lineHeight: 30,
        color: '#000000',
        marginRight: 160,
        top: 10,
        lineHeight: 30,
    },
    text: {
        width: 314,
        height: 66,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18,
        marginBottom: 20,
        textAlign: 'center',
        color: '#555555',
        marginRight: 20,
        top: 12,
    },
    inputContainer: {
        width: 324,
        height: 176,
        borderRadius: 10,
    },
    inputLabel: {
        fontSize: 16,
        marginBottom: 5,
        color: '#1C1C1C',
    },
    textInput: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        color: '#000000',
    },
    loginBtn: {
        width: 323,
        backgroundColor: '#603BAD',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 12,
        top: 40,
    },
    loginBtnText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    inputIcon: {
        bottom: 44,
        left: 300,
    },
});

export default LoginScreen;