import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SPACING } from '../constants/theme';
import Button from '../components/Button';
import { Ionicons } from '@expo/vector-icons';

export default function ProScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.closeBtn} onPress={() => navigation.goBack()}>
                <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>

            <Text style={styles.title}>UNLOCK PRO</Text>

            <View style={styles.card}>
                <Feature text="Unlimited AI Analyses" />
                <Feature text="Advanced Manufacturing Intel" />
                <Feature text="Patent Risk Heuristics" />
                <Feature text="High-Res Concept Renders" />
            </View>

            <Button title="SUBSCRIBE - $9.99 / MO" onPress={() => navigation.goBack()} />
            <Text style={styles.subtext}>Cancel anytime. 7-day free trial.</Text>
        </View>
    );
}

const Feature = ({ text }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: SPACING.m }}>
        <Ionicons name="checkmark-circle" size={20} color={COLORS.primary} />
        <Text style={{ color: 'white', marginLeft: 10, fontSize: 16 }}>{text}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: COLORS.background, padding: SPACING.xl, justifyContent: 'center' },
    closeBtn: { position: 'absolute', top: 50, right: 20, padding: 10 },
    title: { color: 'white', fontSize: 32, fontWeight: '800', textAlign: 'center', marginBottom: SPACING.xl },
    card: { backgroundColor: COLORS.surface, padding: SPACING.l, borderRadius: 16, marginBottom: SPACING.xl },
    subtext: { color: COLORS.text.muted, textAlign: 'center', marginTop: SPACING.m, fontSize: 12 },
});
