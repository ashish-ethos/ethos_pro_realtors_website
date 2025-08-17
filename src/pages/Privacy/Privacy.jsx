import React from 'react';
import {
    Shield,
    Eye,
    Lock,
    Users,
    FileText,
    ExternalLink,
    CheckCircle,
    AlertCircle,
    Info,
    Calendar,
} from 'lucide-react';

const Privacy = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-t border-gray-200">
                <div className="max-w-5xl mx-auto px-4 py-3">
                    <div className="text-center flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-gray-900 ">
                            Privacy Policy
                        </h1>

                        <div className="inline-flex items-center  px-4 py-2 bg-blue-50 text-blue-700 rounded-lg border border-blue-200">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium">
                                Last updated: August, 2025
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-5xl mx-auto px-4 py-6">
                {/* Introduction */}
                <section className="bg-white rounded-lg p-6 mb-4 shadow-sm border border-gray-200">
                    <div className="flex items-center mb-4">
                        <div className="p-2 bg-blue-100 rounded-lg mr-3">
                            <Info className="w-4 h-4 text-blue-600" />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900">
                            Introduction
                        </h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                        At Ethos Pro Realtors, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, 
                        use, and safeguard your personal information when you use our website, services, or interact with us. 
                        By accessing our website or providing your information, you agree to the terms of this policy.
                    </p>
                </section>
                {/* Grid layout for sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                    {/* Information We Collect */}
                    <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center mb-4">
                            <div className="p-2 bg-green-100 rounded-lg mr-3">
                                <Eye className="w-4 h-4 text-green-600" />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900">
                                1. Information We Collect
                            </h2>
                        </div>
                        
                        <div className="space-y-3">
                            <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                                <h3 className="font-semibold text-gray-900 mb-1">
                                    Personal Information
                                </h3>
                                <p className="text-gray-600">
                                    Name, email address, phone number, and details you provide.
                                </p>
                            </div>
                            <div className="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                                <h3 className="font-semibold text-gray-900 mb-1">Usage Data</h3>
                                <p className="text-gray-600">
                                    IP address, browser type, and pages visited.
                                </p>
                            </div>
                            <div className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                                <h3 className="font-semibold text-gray-900 mb-1">Cookies</h3>
                                <p className="text-gray-600">
                                    Data collected through cookies to personalize your experience.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* How We Use Your Information */}
                    <section className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                        <div className="flex items-center mb-4">
                            <div className="p-2 bg-purple-100 rounded-lg mr-3">
                                <FileText className="w-4 h-4 text-purple-600" />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900">
                                2. How We Use Your Information
                            </h2>
                        </div>
                        <div className="space-y-2">
                            {[
                                'Respond to your inquiries and provide support',
                                'Offer tailored recommendations',
                                'Process transactions and send updates',
                                'Improve our website functionality',
                                'Comply with legal requirements',
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-start space-x-3 p-2 bg-gray-50 rounded-lg"
                                >
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Sharing Your Information */}
                    <section className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                        <div className="flex items-center mb-4">
                            <div className="p-2 bg-indigo-100 rounded-lg mr-3">
                                <Users className="w-4 h-4 text-indigo-600" />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900">
                                3. Sharing Your Information
                            </h2>
                        </div>
                        <div className="space-y-3">
                            <div className="p-3 bg-teal-50 rounded-lg border-l-4 border-teal-500">
                                <h3 className="font-semibold text-gray-900 mb-1">
                                    Service Providers
                                </h3>
                                <p className="text-gray-600">
                                    Third-party vendors assisting in our services.
                                </p>
                            </div>
                            <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                                <h3 className="font-semibold text-gray-900 mb-1">
                                    Legal Compliance
                                </h3>
                                <p className="text-gray-600">
                                    Authorities, if required by law or to protect rights.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Your Privacy Rights */}
                    <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center mb-4">
                            <div className="p-2 bg-green-100 rounded-lg mr-3">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900">
                                4. Your Privacy Rights
                            </h2>
                        </div>
                        <div className="space-y-2">
                            {[
                                'Access, correct, or update your personal info',
                                'Opt-out of marketing communications',
                                'Request deletion of personal data',
                            ].map((right, i) => (
                                <div
                                    key={i}
                                    className="flex items-start space-x-3 p-2 bg-green-50 rounded-lg"
                                >
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                    <span className="text-gray-700">{right}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Data Security */}
                    <section className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                        <div className="flex items-center mb-4">
                            <div className="p-2 bg-emerald-100 rounded-lg mr-3">
                                <Lock className="w-4 h-4 text-emerald-600" />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900">
                                5. Data Security
                            </h2>
                        </div>
                        <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                            <div className="flex items-start space-x-3">
                                <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5" />
                                <p className="text-gray-700 leading-relaxed">
                                    We implement robust measures to protect your personal data.
                                    However, no system is 100% secure.
                                </p>
                            </div>
                        </div>
                    </section>



                    {/* Cookies Policy */}
                    <section className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                        <div className="flex items-center mb-4">
                            <div className="p-2 bg-orange-100 rounded-lg mr-3">
                                <Shield className="w-4 h-4 text-orange-600" />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900">
                                6. Cookies Policy
                            </h2>
                        </div>
                        <p className="text-gray-600">
                            Our website uses cookies to enhance your experience. You can
                            manage cookies in browser settings.
                        </p>
                    </section>

                    {/* Third-Party Links */}
                    <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center mb-4">
                            <div className="p-2 bg-cyan-100 rounded-lg mr-3">
                                <ExternalLink className="w-4 h-4 text-cyan-600" />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900">
                                7. Third-Party Links
                            </h2>
                        </div>
                        <p className="text-gray-600">
                            Our site may link to external sites. We are not responsible for
                            their privacy practices.
                        </p>
                    </section>

                    {/* Updates to Policy */}
                    <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center mb-4">
                            <div className="p-2 bg-violet-100 rounded-lg mr-3">
                                <Calendar className="w-4 h-4 text-violet-600" />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900">
                                8. Updates to This Policy
                            </h2>
                        </div>
                        <p className="text-gray-600">
                            We may update this Privacy Policy from time to time. Changes will
                            be posted here with updated date.
                        </p>
                    </section>

                    {/* Footer Note - full width */}
                    <div className="md:col-span-2 bg-white rounded-lg p-4 text-center border border-gray-200">
                        <p className="text-gray-600 leading-relaxed">
                            By using our website or services, you acknowledge that you have
                            read and understood this Privacy Policy.
                        </p>
                        <p className="mt-2 font-medium text-gray-800">
                            Thank you for trusting us with your information!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
