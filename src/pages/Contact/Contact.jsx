import React, { useState } from 'react';

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send form data to your backend
        setSubmitted(true);
    };

    return (
        <div style={{ maxWidth: 500, margin: '0 auto', padding: 24 }}>
            <h2>Contact Us</h2>
            {submitted ? (
                <p>Thank you for contacting us! We'll get back to you soon.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: 16 }}>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: 8, marginTop: 4 }}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: 8, marginTop: 4 }}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <label>
                            Message:
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                style={{ width: '100%', padding: 8, marginTop: 4 }}
                            />
                        </label>
                    </div>
                    <button type="submit" style={{ padding: '8px 16px' }}>
                        Send
                    </button>
                </form>
            )}
        </div>
    );
};

export default Contact;