import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera'; // Updated for new Expo SDK
import { COLORS, SPACING } from '../constants/theme';
import Button from '../components/Button';
import { Ionicons } from '@expo/vector-icons';

export default function CaptureScreen({ route, navigation }) {
    const { mode = 'text' } = route.params || {};
    const [photo, setPhoto] = useState(null);
    const [description, setDescription] = useState('');
    const [permission, requestPermission] = useCameraPermissions();
    const [cameraRef, setCameraRef] = useState(null);

    const handleCapture = async () => {
        if (cameraRef) {
            try {
                const photoData = await cameraRef.takePictureAsync();
                setPhoto(photoData.uri);
            } catch (e) {
                Alert.alert("Camera Error", "Could not take photo.");
            }
        }
    };

    const startAnalysis = () => {
        navigation.navigate('Processing', { description, photo });
    };

    // Render Camera Mode
    if (mode === 'camera' && !photo) {
        if (!permission) {
            // Camera permissions are still loading
            return <View style={styles.container} />;
        }

        if (!permission.granted) {
            return (
                <View style={styles.centerContainer}>
                    <Text style={styles.text}>We need your permission to show the camera</Text>
                    <Button onPress={requestPermission} title="grant permission" />
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <CameraView style={styles.camera} ref={(ref) => setCameraRef(ref)}>
                    <View style={styles.cameraOverlay}>
                        <TouchableOpacity style={styles.captureBtn} onPress={handleCapture}>
                            <View style={styles.captureBtnInner} />
                        </TouchableOpacity>
                    </View>
                </CameraView>
            </View>
        );
    }

    // Render Form / Confirmation Mode
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>

            {/* Photo Preview if exists */}
            {photo && (
                <View style={styles.previewContainer}>
                    <Image source={{ uri: photo }} style={styles.previewImage} />
                    <TouchableOpacity style={styles.retakeBtn} onPress={() => setPhoto(null)}>
                        <Ionicons name="refresh" size={20} color="white" />
                        <Text style={styles.retakeText}>RETAKE</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* Input Fields */}
            <View style={styles.formGroup}>
                <Text style={styles.label}>WHAT IS THIS PRODUCT?</Text>
                <TextInput
                    style={styles.input}
                    placeholder="e.g. Vintage desk lamp..."
                    placeholderTextColor={COLORS.text.muted}
                    value={description}
                    onChangeText={setDescription}
                    multiline
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>TARGET AUDIENCE?</Text>
                <TextInput
                    style={styles.input}
                    placeholder="e.g. Students in small dorms"
                    placeholderTextColor={COLORS.text.muted}
                />
            </View>

            <View style={styles.spacer} />

            <Button
                title="START ANALYSIS"
                onPress={startAnalysis}
            />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: COLORS.background },
    centerContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.background },
    scrollContent: { padding: SPACING.l },
    text: { color: 'white', marginBottom: 20 },

    camera: { flex: 1 },
    cameraOverlay: { flex: 1, backgroundColor: 'transparent', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 40 },
    captureBtn: { width: 70, height: 70, borderRadius: 35, backgroundColor: 'rgba(255,255,255,0.3)', justifyContent: 'center', alignItems: 'center' },
    captureBtnInner: { width: 60, height: 60, borderRadius: 30, backgroundColor: 'white' },

    previewContainer: { marginBottom: SPACING.l, borderRadius: 12, overflow: 'hidden', height: 250 },
    previewImage: { width: '100%', height: '100%' },
    retakeBtn: { position: 'absolute', bottom: 10, right: 10, backgroundColor: 'rgba(0,0,0,0.6)', flexDirection: 'row', alignItems: 'center', padding: 8, borderRadius: 8 },
    retakeText: { color: 'white', fontWeight: 'bold', marginLeft: 5, fontSize: 12 },

    formGroup: { marginBottom: SPACING.l },
    label: { color: COLORS.text.primary, fontSize: 12, fontWeight: '700', marginBottom: SPACING.s, letterSpacing: 1 },
    input: { backgroundColor: COLORS.surface, color: COLORS.text.primary, padding: SPACING.m, borderRadius: 8, borderWidth: 1, borderColor: COLORS.border, fontSize: 16 },
    spacer: { height: SPACING.xl }
});
