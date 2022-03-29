import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './tabNavigator';
import Toast from 'react-native-toast-message';

export const RootNavigation = () => {
    return (
        <NavigationContainer  >
            <TabNavigator />
            <Toast />
        </NavigationContainer>
    );
}