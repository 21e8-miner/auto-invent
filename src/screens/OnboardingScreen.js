import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { COLORS, SPACING } from '../constants/theme';
import Button from '../components/Button';

export default function OnboardingScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.tagline}>PRODUCT INTELLIGENCE ENGINE</Text>
                    <Text style={styles.title}>AUTO{'\n'}INVENT</Text>
                </View>

                <View style={styles.illustration}>
                    {/* Placeholder for cool 3D render later */}
                    <View style={styles.placeholderBox}>
                        <Text style={styles.placeholderText}>[ A.I. CORE ]</Text>
                    </View>
                </View>

                <View style={styles.featureList}>
                    <FeatureRow text="Identifies Weak Points" />
                    <FeatureRow text="Optimizes Manufacturing Costs" />
                    <FeatureRow text="Generates Patent-Ready Variants" />
                </View>

                <View style={styles.footer}>
                    <Button
                        title="INITIALIZE SYSTEM"
                        onPress={() => navigation.replace('Home')}
                        style={styles.button}
                    />
                    <Button
                        title="RESTORE PURCHASES"
                        variant="outline"
                        onPress={() => { }}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const FeatureRow = ({ text }) => (
    <View style={styles.featureRow}>
        <View style={styles.dot} />
        <Text style={styles.featureText}>{text}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    content: {
        flex: 1,
        padding: SPACING.l,
        justifyContent: 'space-between',
    },
    header: {
        marginTop: SPACING.xl,
    },
    tagline: {
        color: COLORS.primary,
        fontWeight: '600',
        letterSpacing: 2,
        fontSize: 12,
        marginBottom: SPACING.s,
    },
    title: {
        color: COLORS.text.primary,
        fontSize: 48,
        fontWeight: '800',
        lineHeight: 48,
        letterSpacing: -1,
    },
    illustration: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: SPACING.xl,
    },
    placeholderBox: {
        width: 200,
        height: 200,
        borderWidth: 1,
        borderColor: COLORS.border,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.surface,
        borderRadius: 16,
    },
    placeholderText: {
        color: COLORS.text.secondary,
        fontFamily: 'Courier',
    },
    featureList: {
        marginBottom: SPACING.xl,
    },
    featureRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACING.m,
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: COLORS.accent,
        marginRight: SPACING.m,
    },
    featureText: {
        color: COLORS.text.secondary,
        fontSize: 16,
        fontWeight: '500',
    },
    footer: {
        gap: SPACING.m,
    },
    button: {
        width: '100%',
    }
});
