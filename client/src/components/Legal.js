import React, { useState } from 'react';
import { FileText, Calendar, Shield, Globe } from 'lucide-react';

const Legal = () => {
  const [activeTab, setActiveTab] = useState('privacy');

  const tabs = [
    { id: 'privacy', label: 'Privacy Policy', icon: Shield },
    { id: 'terms', label: 'Terms of Service', icon: FileText },
    { id: 'data', label: 'Data Retention', icon: Globe },
    { id: 'gdpr', label: 'GDPR Compliance', icon: Shield }
  ];

  const content = {
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'December 15, 2023',
      sections: [
        {
          title: 'Information We Collect',
          content: 'We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This includes your name, email address, company information, and usage data.'
        },
        {
          title: 'How We Use Your Information',
          content: 'We use the information we collect to provide, maintain, and improve our services, process transactions, send communications, and ensure security and compliance.'
        },
        {
          title: 'Information Sharing',
          content: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.'
        },
        {
          title: 'Data Security',
          content: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
        }
      ]
    },
    terms: {
      title: 'Terms of Service',
      lastUpdated: 'December 15, 2023',
      sections: [
        {
          title: 'Acceptance of Terms',
          content: 'By accessing and using Zekvian services, you accept and agree to be bound by the terms and provision of this agreement.'
        },
        {
          title: 'Service Description',
          content: 'Zekvian provides cloud-based automation and analytics software designed to help businesses streamline their operations and improve efficiency.'
        },
        {
          title: 'User Responsibilities',
          content: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.'
        },
        {
          title: 'Service Availability',
          content: 'We strive to maintain 99.9% uptime but do not guarantee uninterrupted service. Scheduled maintenance will be communicated in advance.'
        }
      ]
    },
    data: {
      title: 'Data Retention Policy',
      lastUpdated: 'December 15, 2023',
      sections: [
        {
          title: 'Data Retention Periods',
          content: 'We retain your data for as long as your account is active or as needed to provide services. Account data is retained for 90 days after account closure.'
        },
        {
          title: 'Data Deletion',
          content: 'You may request deletion of your data at any time. Upon request, we will delete your data within 30 days, except where retention is required by law.'
        },
        {
          title: 'Backup and Recovery',
          content: 'We maintain secure backups of your data for disaster recovery purposes. Backup data follows the same retention policies as primary data.'
        },
        {
          title: 'Data Portability',
          content: 'You have the right to export your data in standard formats. Contact our support team to request a data export.'
        }
      ]
    },
    gdpr: {
      title: 'GDPR Compliance',
      lastUpdated: 'December 15, 2023',
      sections: [
        {
          title: 'Legal Basis for Processing',
          content: 'We process personal data based on legitimate interests, contractual necessity, and consent where required under GDPR.'
        },
        {
          title: 'Your Rights',
          content: 'Under GDPR, you have rights to access, rectify, erase, restrict processing, data portability, and object to processing of your personal data.'
        },
        {
          title: 'Data Protection Officer',
          content: 'For GDPR-related inquiries, contact our Data Protection Officer at dpo@zekvian.com.'
        },
        {
          title: 'International Transfers',
          content: 'We ensure appropriate safeguards are in place for international data transfers, including Standard Contractual Clauses where applicable.'
        }
      ]
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Legal & Compliance
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We're committed to transparency and compliance with all applicable laws and regulations for <span className="text-yellow-400 font-semibold bg-yellow-500/20 px-2 py-1 rounded border border-yellow-500/30">Zekvian</span>.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-800/80 to-black/80 border border-yellow-500/30 rounded-lg shadow-sm overflow-hidden">
          <div className="border-b border-gray-600">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'border-yellow-500 text-yellow-400'
                      : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-500'
                  }`}
                >
                  <tab.icon size={18} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {content[activeTab].title}
              </h3>
              <div className="flex items-center text-sm text-gray-400">
                <Calendar size={16} className="mr-2" />
                Last updated: {content[activeTab].lastUpdated}
              </div>
            </div>

            <div className="space-y-8">
              {content[activeTab].sections.map((section, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold text-white mb-3 hover:text-yellow-400 transition-colors">
                    {section.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-500/30 rounded-lg">
              <p className="text-sm text-gray-300">
                <strong>Questions about our legal policies?</strong> Contact our <span className="text-yellow-400 font-semibold">Zekvian</span> legal team at{' '}
                <a href="mailto:legal@zekvian.com" className="text-yellow-400 hover:text-yellow-300 font-semibold">
                  official.zekvian@gmail.com
                </a>{' '}
                for clarification or assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legal;