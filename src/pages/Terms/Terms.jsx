import React from "react";
import {
  FileText,
  CheckCircle,
  Shield,
  User,
  AlertTriangle,
  Link,
  Calendar,
  Scale,
} from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="text-center flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 ">
              Terms & Conditions
            </h1>
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg border border-blue-200">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">
                Last updated: August, 2024
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Acceptance of Terms */}
          <section className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 rounded-lg mr-3">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                1. Acceptance of Terms
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              By using our website or services, you acknowledge that you have
              read, understood, and agree to these Terms and Conditions. If you
              do not agree, please discontinue use of our website and services.
            </p>
          </section>

          {/* Use of Services */}
          <section className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 rounded-lg mr-3">
                <User className="w-4 h-4 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                2. Use of Services
              </h2>
            </div>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>You must be at least 18 years old or have guardian consent.</li>
              <li>
                You agree to use our services only for lawful purposes and in
                compliance with all laws.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account information.
              </li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 rounded-lg mr-3">
                <FileText className="w-4 h-4 text-purple-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                3. Intellectual Property
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              All content on this website, including text, images, logos, and
              design, is the property of Ethos Pro Realtors or its licensors and
              is protected by copyright laws. You may not reproduce, distribute,
              or modify any content without written permission.
            </p>
          </section>

          {/* User Conduct */}
          <section className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-red-100 rounded-lg mr-3">
                <AlertTriangle className="w-4 h-4 text-red-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                4. User Conduct
              </h2>
            </div>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Do not engage in activity that disrupts website functionality.</li>
              <li>Do not post harmful, misleading, or offensive content.</li>
              <li>
                Do not attempt to gain unauthorized access to any part of the
                website or systems.
              </li>
            </ul>
          </section>

          {/* Product & Service Availability */}
          <section className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-indigo-100 rounded-lg mr-3">
                <Shield className="w-4 h-4 text-indigo-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                5. Product & Service Availability
              </h2>
            </div>
            <p className="text-gray-600">
              All products and services are subject to availability and may be
              changed or discontinued without notice. We reserve the right to
              refuse service at our discretion.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-yellow-100 rounded-lg mr-3">
                <Shield className="w-4 h-4 text-yellow-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                6. Limitation of Liability
              </h2>
            </div>
            <p className="text-gray-600">
              Ethos Pro Realtors is not responsible for any direct, indirect, or
              incidental damages arising from use of our website or services. We
              do not guarantee uninterrupted or error-free operation.
            </p>
          </section>

          {/* Third-Party Links */}
          <section className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-cyan-100 rounded-lg mr-3">
                <Link className="w-4 h-4 text-cyan-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                7. Third-Party Links
              </h2>
            </div>
            <p className="text-gray-600">
              Our website may contain links to third-party sites. We are not
              responsible for their content, policies, or practices. Access them
              at your own risk.
            </p>
          </section>

          {/* Modifications to Terms */}
          <section className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-violet-100 rounded-lg mr-3">
                <Calendar className="w-4 h-4 text-violet-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                8. Modifications to Terms
              </h2>
            </div>
            <p className="text-gray-600">
              We may update or modify these Terms anytime without prior notice.
              Continued use of our website after changes means acceptance of the
              updated terms.
            </p>
          </section>

          {/* Governing Law */}
          <section className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-emerald-100 rounded-lg mr-3">
                <Scale className="w-4 h-4 text-emerald-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                9. Governing Law
              </h2>
            </div>
            <p className="text-gray-600">
              These Terms are governed by the laws of India. Any disputes will
              be subject to the jurisdiction of Haryana courts.
            </p>
          </section>

          {/* Footer Note */}
          <div className="md:col-span-2 bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-gray-600 leading-relaxed">
              By using our website or services, you acknowledge that you have
              read and understood these Terms and Conditions.
            </p>
            <p className="mt-2 font-medium text-gray-800">
              Thank you for choosing Ethos Pro Realtors!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
