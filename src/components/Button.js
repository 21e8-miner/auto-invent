import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../constants/theme';

export default function Button({ title, onPress, variant = 'primary', style }) {
    const isOutline = variant === 'outline';

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.container,
                isOutline ? styles.outline : styles.primary,
                style
            ]}
            activeOpacity={0.8}
        >
            <Text style={[styles.text, isOutline && styles.textOutline]}>
                {title.toUpperCase()}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: SPACING.m,
        paddingHorizontal: SPACING.l,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 150,
    },
    primary: {
        backgroundColor: COLORS.primary,
    },
    outline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: COLORS.primary,
    },
    text: {
        color: '#FFF',
        fontWeight: '700',
        fontSize: 16,
        letterSpacing: 1,
    },
    textOutline: {
        color: COLORS.primary,
    }
});
