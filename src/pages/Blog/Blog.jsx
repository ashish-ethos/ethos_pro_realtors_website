import React, { useEffect, useState } from 'react';

// Dummy blog data
const dummyPosts = [
    {
        id: 1,
        title: 'Welcome to Our Blog',
        date: '2024-06-01',
        author: 'Admin',
        excerpt: 'Discover the latest updates, tips, and insights from our team.',
        content: 'This is the full content of the first blog post. Stay tuned for more!',
    },
    {
        id: 2,
        title: 'Real Estate Market Trends 2024',
        date: '2024-06-10',
        author: 'Jane Smith',
        excerpt: 'A quick overview of what’s happening in the real estate market this year.',
        content: 'The real estate market is evolving rapidly in 2024. Here’s what you need to know...',
    },
];

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Simulate fetching data
        setTimeout(() => {
            setPosts(dummyPosts);
        }, 500);
    }, []);

    return (
        <div style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
            <h1>Blog</h1>
            {posts.length === 0 ? (
                <p>Loading posts...</p>
            ) : (
                posts.map(post => (
                    <div key={post.id} style={{ marginBottom: 32, borderBottom: '1px solid #eee', paddingBottom: 16 }}>
                        <h2>{post.title}</h2>
                        <p style={{ color: '#888', fontSize: 14 }}>
                            {post.date} &middot; {post.author}
                        </p>
                        <p>{post.excerpt}</p>
                        <details>
                            <summary style={{ cursor: 'pointer', color: '#007bff' }}>Read more</summary>
                            <p>{post.content}</p>
                        </details>
                    </div>
                ))
            )}
        </div>
    );
};

export default Blog;