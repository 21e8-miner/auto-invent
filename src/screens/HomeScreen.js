import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { COLORS, SPACING } from '../constants/theme';
import ProjectCard from '../components/ProjectCard';
import { MOCK_PROJECTS } from '../services/mockData';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {

    const handleNewProject = (mode) => {
        navigation.navigate('Capture', { mode });
    };

    const renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.actionGrid}>
                <ActionButton
                    icon="camera"
                    label="CAMERA"
                    onPress={() => handleNewProject('camera')}
                    primary
                />
                <ActionButton
                    icon="images"
                    label="PHOTOS"
                    onPress={() => handleNewProject('library')}
                />
                <ActionButton
                    icon="document-text"
                    label="TEXT"
                    onPress={() => handleNewProject('text')}
                />
            </View>
            <Text style={styles.sectionTitle}>RECENT PROJECTS</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={MOCK_PROJECTS}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ProjectCard
                        project={item}
                        onPress={() => navigation.navigate('Report', { id: item.id })}
                    />
                )}
                ListHeaderComponent={renderHeader}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
}

const ActionButton = ({ icon, label, onPress, primary }) => (
    <TouchableOpacity
        style={[styles.actionBtn, primary && styles.actionBtnPrimary]}
        onPress={onPress}
    >
        <Ionicons
            name={icon}
            size={24}
            color={primary ? COLORS.text.inverse : COLORS.primary}
        />
        <Text style={[styles.actionLabel, primary && styles.actionLabelPrimary]}>
            {label}
        </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    listContent: {
        padding: SPACING.l,
    },
    header: {
        marginBottom: SPACING.l,
    },
    actionGrid: {
        flexDirection: 'row',
        gap: SPACING.m,
        marginBottom: SPACING.xl,
    },
    actionBtn: {
        flex: 1,
        backgroundColor: COLORS.surface,
        padding: SPACING.m,
        borderRadius: 12,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    actionBtnPrimary: {
        backgroundColor: COLORS.primary,
        borderColor: COLORS.primary,
    },
    actionLabel: {
        marginTop: SPACING.s,
        fontSize: 12,
        fontWeight: '700',
        color: COLORS.primary,
    },
    actionLabelPrimary: {
        color: COLORS.text.inverse,
    },
    sectionTitle: {
        color: COLORS.text.secondary,
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 1,
        marginBottom: SPACING.m,
    }
});
