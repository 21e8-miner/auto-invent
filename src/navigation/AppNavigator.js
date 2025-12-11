import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

// Placeholder Screens (we will create these next)
import OnboardingScreen from '../screens/OnboardingScreen';
import HomeScreen from '../screens/HomeScreen';
import CaptureScreen from '../screens/CaptureScreen';
import ProcessingScreen from '../screens/ProcessingScreen';
import ReportScreen from '../screens/ReportScreen';
import ProScreen from '../screens/ProScreen';

import { COLORS } from '../constants/theme';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <StatusBar style="light" />
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: COLORS.background },
                    headerTintColor: COLORS.text.primary,
                    headerTitleStyle: { fontFamily: 'System', fontWeight: 'bold' },
                    contentStyle: { backgroundColor: COLORS.background },
                    headerBackTitleVisible: false,
                }}
            >
                <Stack.Screen
                    name="Onboarding"
                    component={OnboardingScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'PROJEKTS' }}
                />
                <Stack.Screen
                    name="Capture"
                    component={CaptureScreen}
                    options={{ title: 'NEW DATA INPUT' }}
                />
                <Stack.Screen
                    name="Processing"
                    component={ProcessingScreen}
                    options={{ headerShown: false, gestureEnabled: false }}
                />
                <Stack.Screen
                    name="Report"
                    component={ReportScreen}
                    options={{ title: 'INNOVATION REPORT' }}
                />
                <Stack.Screen
                    name="Pro"
                    component={ProScreen}
                    options={{ presentation: 'modal', headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
