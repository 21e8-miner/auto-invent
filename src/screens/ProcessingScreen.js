import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { COLORS, SPACING } from '../constants/theme';
import { analyzeProduct } from '../services/aiService';
import { MOCK_REPORT } from '../services/mockData';

const STEPS = [
    "Vision Model Analysis...",
    "Decomposing Functions...",
    "Running Failure Mode Simulation...",
    "Generating Patent Heuristics...",
    "Rendering Concept Variants..."
];

export default function ProcessingScreen({ navigation, route }) {
    const [stepIndex, setStepIndex] = useState(0);
    const { description, photo } = route.params || {};

    useEffect(() => {
        // Cycle through steps text
        const interval = setInterval(() => {
            setStepIndex(curr => (curr + 1) % STEPS.length);
        }, 1500);

        const runAnalysis = async () => {
            try {
                console.log("Analyzing:", description);

                let report;
                if (!description && !photo) {
                    // Fallback if accessed directly
                    report = MOCK_REPORT;
                } else {
                    // REAL AI CALL
                    // If this fails (e.g. no API key), catch block goes to Mock
                    report = await analyzeProduct(description || "A generic product innovation query", photo);
                }

                clearInterval(interval);
                navigation.replace('Report', { reportData: report });
            } catch (e) {
                console.log("AI Failed, falling back to mock:", e.message);
                // Fallback to mock data on error so user sees SOMETHING
                clearInterval(interval);
                Alert.alert("Prototype Mode", "AI Analysis failed (Check API Key). Showing simulation data.");
                navigation.replace('Report', { reportData: MOCK_REPORT });
            }
        };

        runAnalysis();

        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.center}>
                <ActivityIndicator size="large" color={COLORS.primary} style={{ marginBottom: SPACING.xl }} />

                <Text style={styles.loadingText}>ANALYZING PROJECT</Text>
                <Text style={styles.stepText}>{STEPS[stepIndex]}</Text>
            </View>

            <View style={styles.footer}>
                <Text style={styles.tipTitle}>TIP:</Text>
                <Text style={styles.tipText}>
                    Auto-Invent checks against common manufacturing constraints for plastic injection molding.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        justifyContent: 'space-between',
        padding: SPACING.xl,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        color: COLORS.text.primary,
        fontSize: 20,
        fontWeight: '800',
        letterSpacing: 2,
        marginBottom: SPACING.m,
    },
    stepText: {
        color: COLORS.primary,
        fontSize: 14,
        fontFamily: 'Courier',
        textAlign: 'center',
    },
    footer: {
        backgroundColor: COLORS.surface,
        padding: SPACING.m,
        borderRadius: 8,
    },
    tipTitle: {
        color: COLORS.text.secondary,
        fontWeight: 'bold',
        fontSize: 12,
        marginBottom: 4,
    },
    tipText: {
        color: COLORS.text.muted,
        fontSize: 12,
        lineHeight: 18,
    }
});
