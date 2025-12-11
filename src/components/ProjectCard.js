import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SPACING } from '../constants/theme';

export default function ProjectCard({ project, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
            <Image source={{ uri: project.thumbnail }} style={styles.thumbnail} />

            <View style={styles.info}>
                <Text style={styles.title} numberOfLines={1}>{project.title}</Text>
                <View style={styles.metaRow}>
                    <Text style={styles.date}>{project.date}</Text>
                    <View style={[styles.badge, project.status === 'Analyzed' ? styles.badgeSuccess : styles.badgeDraft]}>
                        <Text style={styles.badgeText}>{project.status.toUpperCase()}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: COLORS.surface,
        borderRadius: 12,
        marginBottom: SPACING.m,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    thumbnail: {
        width: 80,
        height: 80,
        backgroundColor: COLORS.surfaceHighlight,
    },
    info: {
        flex: 1,
        padding: SPACING.m,
        justifyContent: 'center',
    },
    title: {
        color: COLORS.text.primary,
        fontSize: 16,
        fontWeight: '700',
        marginBottom: SPACING.xs,
    },
    metaRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    date: {
        color: COLORS.text.muted,
        fontSize: 12,
    },
    badge: {
        paddingHorizontal: SPACING.s,
        paddingVertical: 2,
        borderRadius: 4,
    },
    badgeSuccess: {
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
    },
    badgeDraft: {
        backgroundColor: 'rgba(148, 163, 184, 0.2)',
    },
    badgeText: {
        color: COLORS.text.secondary,
        fontSize: 10,
        fontWeight: '700',
    }
});
