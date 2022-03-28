import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { MainIcon } from '../instruments/svg/mainTab'
import { ProfileScreen } from '../components/profileScreen';
import { SearchScreen } from '../components/searchScreen';
import { styles } from './styles'
import { SearchIcon } from '../instruments/svg/searchTab';
import { ProfileIcon } from '../instruments/svg/profile';
import { MoreTab } from '../instruments/svg/moreTab';
import {CycleTab} from '../instruments/svg/cycleTab';

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
    return (

        <Tab.Navigator initialRouteName='Profile'
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: '#58ceb2',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: styles.tabBarOptionsStyle,
                tabBarIconStyle: styles.iconStyle,
                tabBarLabelStyle: styles.labelStyle,
                tabBarLabelStyle: { paddingBottom: 5 },
            })}
        >
            <Tab.Screen
                name='Main'
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <MainIcon color={focused ? '#58ceb2' : 'grey'}  />
                }}
            />
            <Tab.Screen
                name='Search'
                component={SearchScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <SearchIcon color={focused ? '#58ceb2' : 'grey'}  />
                }}
            />
            <Tab.Screen
                name='Recycle'
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <CycleTab color={focused ? '#58ceb2' : 'grey'}  />
                }}
            />
            <Tab.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <ProfileIcon color={focused ? '#58ceb2' : 'grey'}  />
                }}
            />
            <Tab.Screen
                name='About'
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <MoreTab color={focused ? '#58ceb2' : 'grey'}  />
                }}
            />
        </Tab.Navigator>
    )
}