import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeBSvg from '../assets/svg/Home.svg';
import HomeBkSvg from '../assets/svg/HomeBk.svg';
import LiveVideosBSvg from '../assets/svg/LiveVideosBlue.svg';
import LiveVideosBkSvg from '../assets/svg/LiveVideos.svg';
import PracticeBSvg from '../assets/svg/PracticeBlue.svg';
import PracticeBkSvg from '../assets/svg/PracticeBk.svg';
import ProfileBSvg from '../assets/svg/ProfileBlue.svg';
import ProfileBkSvg from '../assets/svg/Profile.svg';
import HomeScreen from '../screens/Home/HomePage';
import PracticeUA from '../screens/Practice/PracticeQsUnattend';
import ProfilePage from '../screens/Profile/ProfilePage';
import LiveVideosAll from '../screens/Live/LiveVideosAll';
import Live from '../screens/Live/Live';
import LiveMain from '../screens/Live/Live';
import PracticeMain from '../screens/Practice/Practice';
import EditProfilePage from '../screens/Profile/EditProf';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => {
                    let icon;
                    let iconSize;

                    switch (route.name) {
                        case 'Home':
                            iconSize = focused ? 27.4 : 30;
                            icon = focused ? (
                                <HomeBSvg width={iconSize} height={iconSize} />
                            ) : (
                                <HomeBkSvg width={iconSize} height={iconSize} />
                            );
                            break;
                        case 'Live':
                            iconSize = focused ? 33 : 36;
                            icon = focused ? (
                                <LiveVideosBSvg width={iconSize} height={iconSize} />
                            ) : (
                                <LiveVideosBkSvg width={iconSize} height={iconSize} />
                            );
                            break;
                        case 'Practice':
                            iconSize = focused ? 33 : 33;
                            icon = focused ? (
                                <PracticeBSvg width={iconSize} height={iconSize} />
                            ) : (
                                <PracticeBkSvg width={iconSize} height={iconSize} />
                            );
                            break;
                        case 'Profile':
                            iconSize = focused ? 24 : 27;
                            icon = focused ? (
                                <ProfileBSvg width={iconSize} height={iconSize} />
                            ) : (
                                <ProfileBkSvg width={iconSize} height={iconSize} />
                            );
                            break;
                        default:
                            icon = null;
                    }

                    return icon;
                },
            })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Live" component={LiveMain} />
            <Tab.Screen name="Practice" component={PracticeMain} />
            <Tab.Screen name="Profile" component={ProfilePage} />
        </Tab.Navigator>
    );
};

export default TabNavigation;