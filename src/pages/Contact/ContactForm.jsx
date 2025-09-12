import React, { useState } from 'react';
import { Input } from 'antd';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Phone, Mail } from 'lucide-react';
import CustomInput from '../../components/ui/Input';

const ContactForm = ({ onSubmitSuccess }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '+91', 
        email: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { TextArea } = Input;

    const handleChange = (e) => {
        console.log(`Input Changed: ${e.target.name} = ${e.target.value}`);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setError(null);
    };

    const handlePhoneChange = (value, countryData, e, formattedValue) => {
        console.log('Phone Input Changed:', { value, countryData, formattedValue });
        const fullPhone = formattedValue ? formattedValue.replace(/[\s-]/g, '') : `+${countryData.dialCode}${value}`;
        console.log('Cleaned Phone:', fullPhone);
        if (fullPhone.startsWith('+91') && fullPhone.length !== 12) {
            setError('Phone number must be 10 digits after +91');
        } else {
            setError(null);
        }
        setFormData({
            ...formData,
            phone: fullPhone,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submit Button Clicked');
        setLoading(true);
        setError(null);

        if (!/^\+91\d{10}$/.test(formData.phone)) {
            console.log('Phone Validation Failed:', formData.phone);
            setError('Phone number must be 10 digits after +91');
            setLoading(false);
            return;
        }

        try {
            console.log('Form Submission Started:', formData);

            const formBody = new URLSearchParams({
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                message: formData.message,
            }).toString();

            console.log('Form Data Sent:', formBody);

            const response = await fetch('https://thespitihomes.in/ethoswebsite/enquiry-form.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formBody,
                signal: AbortSignal.timeout(10000),
                redirect: 'manual',
            });

            console.log('API Response Status:', response.status);
            console.log('API Response Redirected:', response.redirected);
            console.log('API Response Headers:', [...response.headers.entries()]);

            if (response.redirected) {
                console.log('Redirect detected, status:', response.status);
                const redirectedUrl = response.headers.get('location');
                console.log('Redirected to:', redirectedUrl);
                setSubmitted(true);
                setFormData({ name: '', phone: '+91', email: '', message: '' });
                if (onSubmitSuccess) onSubmitSuccess();
                setTimeout(() => setSubmitted(false), 3000);
                return;
            }

            const result = await response.json();
            console.log('API Response Body:', result);

            if (result.status === 'success') {
                console.log('Form submission successful: API returned success');
                setSubmitted(true);
                setFormData({ name: '', phone: '+91', email: '', message: '' });
                if (onSubmitSuccess) onSubmitSuccess();
                setTimeout(() => setSubmitted(false), 3000);
            } else {
                const errorMessages = result.errors
                    ? Object.values(result.errors).join(' ')
                    : result.message || 'Something went wrong';
                console.log('Form submission failed:', errorMessages);
                throw new Error(errorMessages);
            }
        } catch (err) {
            console.error('Form submission error:', {
                message: err.message,
                stack: err.stack,
                name: err.name,
            });
            setError(err.message || 'Failed to submit the form. Check your network or server configuration.');
        } finally {
            setLoading(false);
            console.log('Form Submission Ended');
        }
    };

    return (
        <div className="bg-white rounded-3xl shadow-2xl p-4 lg:p-6 relative overflow-hidden ">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 to-transparent rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-100 to-transparent rounded-full -ml-12 -mb-12"></div>

            <div className="relative z-10">
                <h4 className="text-2xl font-bold text-gray-800 mb-1">Get In Touch</h4>

                {submitted ? (
                    <div className="text-center py-12">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg
                                className="w-8 h-8 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
                        <p className="text-gray-600">We'll get back to you soon.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && <div className="text-red-600 text-center">{error}</div>}
                        <div className="grid gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <CustomInput
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    required
                                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition placeholder-gray-400"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Phone <span className="text-red-500">*</span>
                            </label>
                            <PhoneInput
                                country={'in'}
                                value={formData.phone}
                                enableSearch={true}
                                disableDropdown={false}
                                countryCodeEditable={false}
                                inputProps={{ required: true }}
                                onChange={handlePhoneChange}
                                inputClass="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition placeholder-gray-400"
                                buttonClass="border-2 border-gray-200 rounded-l-xl"
                                dropdownClass="border-2 border-gray-200 rounded-xl"
                                placeholder="Mobile Number"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                            <CustomInput
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition placeholder-gray-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                            <TextArea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message..."
                                rows={4}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition resize-none placeholder-gray-400"
                            />
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-auto px-6 py-2 rounded-xl text-white font-semibold transition ${
                                    loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                                }`}
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                        Submitting...
                                    </div>
                                ) : (
                                    'Submit'
                                )}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ContactForm;