/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import Navbar from '@/src/components/layout/Navbar';

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-8 font-sans text-gray-800 antialiased leading-relaxed">
        {/* Breadcrumb Navigation */}
        <nav className="text-xs text-gray-500 mb-8 flex items-center space-x-2">
          <a href="/" className="hover:underline">Home</a>
          <span className="text-lime-600 font-bold">&gt;</span>
          <span className="text-gray-400">Terms and Conditions</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-3xl font-extrabold text-gray-900 mb-10 tracking-tight">
          Terms and Conditions
        </h1>

        {/* Document Content */}
        <div className="space-y-6 text-sm sm:text-base text-justify md:text-left">
          
          {/* OVERVIEW */}
          <section>
            <h2 className="text-base font-bold text-[#76cb00] uppercase tracking-wider mb-4">
              OVERVIEW
            </h2>
            <div className="space-y-4">
              <p>
                This website is operated by Agile Cycle. Throughout the site, the terms &quot;we&quot;, &quot;us&quot; and &quot;our&quot; refer to Agile Cycle. Agile Cycle offers this website, including all information, tools, and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.
              </p>
              <p>
                By visiting our site and/or purchasing something from us, you engage in our &quot;Service&quot; and agree to be bound by the following Terms and Conditions (&quot;Terms&quot;), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms apply to all users of the site, including but not limited to browsers, vendors, customers, merchants, and contributors of content.
              </p>
              <p>
                Please read these Terms carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms are considered an offer, acceptance is expressly limited to these Terms.
              </p>
              <p>
                Any new features, updates, or tools added to the current store shall also be subject to these Terms. You can review the most current version of the Terms at any time on this page. Agile Cycle reserves the right to update, change, or replace any part of these Terms by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.
              </p>
              <p>
                Our store is hosted on Shopify Inc., which provides us with the online e-commerce platform that allows us to sell our products and services to you securely and efficiently.
              </p>
            </div>
          </section>

          {/* SECTION 1 */}
          <section className="pt-4">
            <h2 className="text-base font-bold text-[#76cb00] uppercase tracking-wider mb-4">
              SECTION 1 – ONLINE STORE TERMS
            </h2>
            <div className="space-y-4">
              <p>
                By agreeing to these Terms and Conditions, you confirm that you are at least the age of majority in your state or province of residence. If you are below the age of majority, you confirm that you have obtained consent from a parent or legal guardian to use this site.
              </p>
              <p>
                You may not use Agile Cycle products for any illegal or unauthorized purpose. In using our Service, you must comply with all applicable laws and regulations in your jurisdiction, including but not limited to intellectual property and copyright laws.
              </p>
              <p>
                You must not transmit any worms, viruses, malware, or any code of a destructive nature through our site or services. Any attempt to interfere with the security or functionality of our website will be treated as a serious violation.
              </p>
              <p>
                A breach or violation of any of these Terms will result in immediate termination of your Services, including cancellation of any pending orders, denial of access to your account, and possible legal action where applicable.
              </p>
            </div>
          </section>

          {/* SECTION 2 */}
          <section className="pt-4">
            <h2 className="text-base font-bold text-[#76cb00] uppercase tracking-wider mb-4">
              SECTION 2 – GENERAL CONDITIONS
            </h2>
            <div className="space-y-4">
              <p>
                Agile Cycle reserves the right to refuse Service to anyone, at any time, for any reason. This includes but is not limited to suspected fraudulent activity, misuse of our platform, or violation of these Terms.
              </p>
              <p>
                You understand that your content (excluding credit card information) may be transferred unencrypted across various networks, and may involve changes to conform and adapt to technical requirements of connecting networks or devices. However, credit card information is always encrypted during transfer over secure networks.
              </p>
              <p>
                You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service, use of the Service, or access to the Service, or any contact on the website through which the Service is provided, without express written permission from Agile Cycle.
              </p>
              <p>
                The headings used in this agreement are included for convenience only and will not limit or otherwise affect the interpretation of these Terms.
              </p>
            </div>
          </section>

          {/* SECTION 3 */}
          <section className="pt-4">
            <h2 className="text-base font-bold text-[#76cb00] uppercase tracking-wider mb-4">
              SECTION 3 – ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION
            </h2>
            <div className="space-y-4">
              <p>
                Agile Cycle strives to ensure that all information provided on this site is accurate and up to date. However, we do not guarantee that the information made available will always be complete, current, or error-free. The material on this site is provided for general informational purposes only and should not be relied upon as the sole basis for making decisions. Customers are encouraged to consult primary, more accurate, and more timely sources of information before making purchasing or business decisions. Any reliance on the material on this site is at your own risk.
              </p>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}