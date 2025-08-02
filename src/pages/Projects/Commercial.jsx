import React from 'react';

const commercialProjects = [
    {
        id: 1,
        name: 'Downtown Office Plaza',
        location: 'City Center',
        description: 'A modern office complex with eco-friendly features and flexible workspaces.',
        image: '/images/projects/commercial1.jpg',
    },
    {
        id: 2,
        name: 'Retail Hub',
        location: 'Market Street',
        description: 'A vibrant retail center with top brands and dining options.',
        image: '/images/projects/commercial2.jpg',
    },
    {
        id: 3,
        name: 'Tech Park',
        location: 'Innovation District',
        description: 'State-of-the-art facilities for tech startups and established companies.',
        image: '/images/projects/commercial3.jpg',
    },
];

const Commercial = () => (
    <div style={{ padding: '2rem' }}>
        <h1>Commercial Projects</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            {commercialProjects.map(project => (
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
                        style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                    />
                    <div style={{ padding: '1rem' }}>
                        <h2 style={{ margin: '0 0 0.5rem 0' }}>{project.name}</h2>
                        <p style={{ color: '#888', margin: '0 0 1rem 0' }}>{project.location}</p>
                        <p style={{ margin: 0 }}>{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Commercial;