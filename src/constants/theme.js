export const COLORS = {
    // Premium Dark Mode Palette
    background: '#0F172A',
    surface: '#1E293B',
    surfaceHighlight: '#334155',

    primary: '#3B82F6', // Electric Blue
    secondary: '#64748B', // Muted Gray
    accent: '#F59E0B', // Warning/Attention

    text: {
        primary: '#F8FAFC',
        secondary: '#94A3B8',
        muted: '#475569',
        inverse: '#0F172A',
    },

    status: {
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
    },

    border: '#334155',
};

export const SPACING = {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 48,
};

export const ALIGN = {
    row: { flexDirection: 'row', alignItems: 'center' },
    rowBetween: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    center: { justifyContent: 'center', alignItems: 'center' },
};
