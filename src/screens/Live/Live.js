import { StyleSheet, Text, View, TouchableOpacity, color } from 'react-native';
import React, { useState } from 'react';
import LiveVideosAll from '../Live/All';
import LiveVideosUC from '../Live/Upcoming';
import LiveVideosC from '../Live/Completed';
import Header from '../../components/Header';

const LiveMain = () => {
    const [enable, setEnable] = useState(1);

    const renderLiveVideos = () => {
        switch (enable) {
            case 1:
                return <LiveVideosAll />;
            case 2:
                return <LiveVideosUC />;
            case 3:
                return <LiveVideosC />;
            default:
                return null;
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Header pageType={'Live'} />

            {/* Filter Buttons */}
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginVertical: 20,
                    paddingHorizontal: 20,
                }}>
                <TouchableOpacity
                    style={[styles.button, enable === 1 && styles.selectedButton]}
                    onPress={() => setEnable(1)}>
                    <Text
                        style={[
                            styles.buttonText,
                            enable === 1 && styles.selectedButtonText,
                        ]}>
                        All
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, enable === 2 && styles.selectedButton]}
                    onPress={() => setEnable(2)}>
                    <Text
                        style={[
                            styles.buttonText,
                            enable === 2 && styles.selectedButtonText,
                        ]}>
                        Upcoming
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, enable === 3 && styles.selectedButton]}
                    onPress={() => setEnable(3)}>
                    <Text
                        style={[
                            styles.buttonText,
                            enable === 3 && styles.selectedButtonText,
                        ]}>
                        Completed
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Render Live Videos based on selection */}
            {renderLiveVideos()}
        </View>
    );
};

export default LiveMain;
const styles = StyleSheet.create({
    button: {
        // paddingVertical: 8,
        // paddingHorizontal: 15,
        borderRadius: 24,
        // backgroundColor: '#FFFFFF',
        width: 120,
        height: 36,
        // justifyContent: 'center',
        // alignItems: 'center',
        flex: 1,
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