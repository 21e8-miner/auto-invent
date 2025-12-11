export const MOCK_PROJECTS = [
    {
        id: '1',
        title: 'Ergo-Mesh Office Chair',
        date: '2025-05-12',
        status: 'Analyzed',
        thumbnail: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80',
    },
    {
        id: '2',
        title: 'Portable Coffee Grinder',
        date: '2025-05-10',
        status: 'Draft',
        thumbnail: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&q=80',
    }
];

export const MOCK_REPORT = {
    id: '1',
    summary: {
        title: 'Ergo-Mesh Chair v2',
        highlights: [
            'Mechanism failure risk detected in lumbar support.',
            'Manufacturing cost can be reduced by 15% via mold simplification.',
            'Potential unique pivot mechanism patents identified.',
        ]
    },
    functions: [
        { name: 'Support Weight', type: 'Primary' },
        { name: 'Adjust Height', type: 'Secondary' },
        { name: 'Roll/Mobility', type: 'Secondary' },
        { name: 'Lumbar Flex', type: 'Hidden Constraint' }
    ],
    failures: [
        { part: 'Gas Lift Cylinder', risk: 'High', note: 'Standard seals wear out after 2 years.' },
        { part: 'Caster Wheels', risk: 'Medium', note: 'Plastic axle prone to hair entanglement.' },
        { part: 'Mesh Attachment', risk: 'Low', note: 'Staple points may frey over time.' }
    ],
    improvements: [
        { title: 'Magnetic Quick-Release Casters', impact: 'High', difficulty: 'Medium', cost: '+' },
        { title: 'Unified Frame Injection', impact: 'High', difficulty: 'Hard', cost: '-' },
        { title: 'Breathable Gel Seat', impact: 'Medium', difficulty: 'Easy', cost: '=' }
    ],
    concepts: [
        {
            name: 'The Ultralight',
            desc: 'Minimalist frame using aerospace aluminum to reduce shipping weight.',
            image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80'
        },
        {
            name: 'The Tank',
            desc: 'Heavy-duty variant for 24/7 industrial use environments.',
            image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80'
        }
    ]
};
