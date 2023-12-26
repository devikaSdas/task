import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/Login/LoginPage';
import TabNavigation from './TabNav';
import HomeScreen from '../screens/Home/HomePage';
import LiveMain from '../screens/Live/Live';
import PracticeMain from '../screens/Practice/Practice';
import ProfilePage from '../screens/Profile/ProfilePage';
import EditProfilePage from '../screens/Profile/EditProfile';
import AttemptPage from '../screens/QuestionsAttend/Attend1';
import AttemptPage2 from '../screens/QuestionsAttend/Attend2';
import AttemptPage3 from '../screens/QuestionsAttend/Attend3';
import ReAttend from '../screens/QuestionsAttend/Reattend';
import Answers from '../screens/QuestionsAttend/Answers';
import VideoPlayer from '../screens/VideoPlayer/Video';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Main"
                component={TabNavigation}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Live"
                component={LiveMain}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Practice"
                component={PracticeMain}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Profile"
                component={ProfilePage}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Edit Profile"
                component={EditProfilePage}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Attempt 1"
                component={AttemptPage}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Attempt 2"
                component={AttemptPage2}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Attempt 3"
                component={AttemptPage3}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ReAttend"
                component={ReAttend}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Answers"
                component={Answers}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="VideoPlayer"
                component={VideoPlayer}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;