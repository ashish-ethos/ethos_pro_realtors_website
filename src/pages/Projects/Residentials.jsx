import React from 'react';

const residentialProjects = [
    {
        id: 1,
        name: 'Green Valley Residences',
        location: 'Downtown',
        description: 'Modern apartments with eco-friendly amenities.',
        image: 'https://via.placeholder.com/300x200?text=Green+Valley',
    },
    {
        id: 2,
        name: 'Sunset Villas',
        location: 'Uptown',
        description: 'Luxury villas with private gardens and pools.',
        image: 'https://via.placeholder.com/300x200?text=Sunset+Villas',
    },
    {
        id: 3,
        name: 'City Heights',
        location: 'Midtown',
        description: 'High-rise apartments with city views.',
        image: 'https://via.placeholder.com/300x200?text=City+Heights',
    },
];

const Residentials = () => (
    <div style={{ padding: '2rem' }}>
        <h1>Residential Projects</h1>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {residentialProjects.map(project => (
                <div
                    key={project.id}
                    style={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        width: '300px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                        overflow: 'hidden',
                        background: '#fff',
                    }}
                >
                    <img
                        src={project.image}
                        alt={project.name}
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    />
                    <div style={{ padding: '1rem' }}>
                        <h2 style={{ margin: '0 0 0.5rem 0' }}>{project.name}</h2>
                        <p style={{ margin: '0 0 0.5rem 0', color: '#888' }}>
                            {project.location}
                        </p>
                        <p style={{ margin: 0 }}>{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Residentials;