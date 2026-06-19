import Container from '@/src/components/layout/Container'
import BreadCrumbs from '@/src/components/terms-conditions/BreadCrumbs'
import ExternalLink from '@/src/components/terms-conditions/ExternalLink'
import Header from '@/src/components/terms-conditions/Header'
import SectionHeader from '@/src/components/terms-conditions/SectionHeader'
import Link from 'next/link'
import React from 'react'

const TermsAndConditionsPage = () => {
    return (
        <Container className='py-24 space-y-6'>
            <BreadCrumbs href="terms-conditions" title="Terms and Conditions" />
            <Header title="Terms and Conditions" />

            <div className='space-y-4'>
                <section className='space-y-4'>
                    <SectionHeader title="Overview" />
                    <div className='space-y-4 text-sm'>
                        <p>This website is operated by Agile Cycle. Throughout the site, the terms “we”, “us” and “our” refer to Agile Cycle. Agile Cycle offers this website, including all information, tools, and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.</p>
                        <p>By visiting our site and/or purchasing something from us, you engage in our “Service” and agree to be bound by the following Terms and Conditions (“Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms apply to all users of the site, including but not limited to browsers, vendors, customers, merchants, and contributors of content.</p>
                        <p>Please read these Terms carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms are considered an offer, acceptance is expressly limited to these Terms.</p>
                        <p>Any new features, updates, or tools added to the current store shall also be subject to these Terms. You can review the most current version of the Terms at any time on this page. Agile Cycle reserves the right to update, change, or replace any part of these Terms by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.</p>
                        <p>Our store is hosted on Shopify Inc., which provides us with the online e‑commerce platform that allows us to sell our products and services to you securely and efficiently.</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="SECTION 1 – ONLINE STORE TERMS" />
                    <div className='space-y-4 text-sm'>
                        <p>By agreeing to these Terms and Conditions, you confirm that you are at least the age of majority in your state or province of residence. If you are below the age of majority, you confirm that you have obtained consent from a parent or legal guardian to use this site.</p>
                        <p>You may not use Agile Cycle products for any illegal or unauthorized purpose. In using our Service, you must comply with all applicable laws and regulations in your jurisdiction, including but not limited to intellectual property and copyright laws.</p>
                        <p>You must not transmit any worms, viruses, malware, or any code of a destructive nature through our site or services. Any attempt to interfere with the security or functionality of our website will be treated as a serious violation.</p>
                        <p>A breach or violation of any of these Terms will result in immediate termination of your Services, including cancellation of any pending orders, denial of access to your account, and possible legal action where applicable.</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="SECTION 2 – GENERAL CONDITIONS" />
                    <div className='space-y-4 text-sm'>
                        <p>Agile Cycle reserves the right to refuse Service to anyone, at any time, for any reason. This includes but is not limited to suspected fraudulent activity, misuse of our platform, or violation of these Terms.</p>
                        <p>You understand that your content (excluding credit card information) may be transferred unencrypted across various networks, and may involve changes to conform and adapt to technical requirements of connecting networks or devices. However, credit card information is always encrypted during transfer over secure networks.</p>
                        <p>You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service, use of the Service, or access to the Service, or any contact on the website through which the Service is provided, without express written permission from Agile Cycle.</p>
                        <p>The headings used in this agreement are included for convenience only and will not limit or otherwise affect the interpretation of these Terms.</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="SECTION 3 – ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION" />
                    <div className='space-y-4 text-sm'>
                        <p>Agile Cycle strives to ensure that all information provided on this site is accurate and up to date. However, we do not guarantee that the information made available will always be complete, current, or error‑free. The material on this site is provided for general informational purposes only and should not be relied upon as the sole basis for making decisions. Customers are encouraged to consult primary, more accurate, and more timely sources of information before making purchasing or business decisions. Any reliance on the material on this site is at your own risk.</p>
                        <p>This site may contain certain historical information. Historical information, by nature, is not current and is provided for reference purposes only. Agile Cycle reserves the right to modify the contents of this site at any time, but we are under no obligation to update any information. You agree that it is your responsibility to monitor changes to our site and remain informed of updates.</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="SECTION 4 – MODIFICATIONS TO THE SERVICE AND PRICES" />
                    <div className='space-y-4 text-sm'>
                        <p>Prices for our products are subject to change without prior notice. Agile Cycle reserves the right, at any time, to modify or discontinue the Service (or any part or content thereof) without notice.</p>
                        <p>We shall not be liable to you or to any third party for any modification, price change, suspension, or discontinuance of the Service. This includes adjustments to product availability, shipping options, or promotional offers. Customers are encouraged to review product details and pricing at the time of purchase, as these may vary over time.</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="SECTION 5 – PRODUCTS OR SERVICES" />
                    <div className='space-y-4 text-sm'>
                        <p>Certain products or services may be available exclusively online through the Agile Cycle website. These products may have limited quantities and are subject to return or exchange only in accordance with our Refund Policy.</p>
                        <p>We make every effort to display product colors, specifications, and images as accurately as possible. However, we cannot guarantee that your device’s display will perfectly reflect the actual product colors or finishes.</p>
                        <p>Agile Cycle reserves the right, but is not obligated, to limit the sales of our products or services to any person, geographic region, or jurisdiction. This right may be exercised on a case‑by‑case basis. We also reserve the right to limit the quantities of any products or services offered.</p>
                        <p>All product descriptions, specifications, and pricing are subject to change at any time without prior notice, at our sole discretion. Agile Cycle may discontinue any product at any time. Any offer for a product or service made on this site is void where prohibited by law.</p>
                        <p>We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, nor do we guarantee that any errors in the Service will be corrected immediately.</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="SECTION 6 – ACCURACY OF BILLING AND ACCOUNT INFORMATION" />
                    <div className='space-y-4 text-sm'>
                        <p>Agile Cycle reserves the right to refuse any order you place with us. At our sole discretion, we may limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed under the same customer account, using the same credit card, or orders that share the same billing and/or shipping address.</p>
                        <p>In the event that we make a change to or cancel an order, we will attempt to notify you using the email address, billing address, or phone number provided at the time the order was placed. Agile Cycle also reserves the right to limit or prohibit orders that, in our judgment, appear to be placed by dealers, resellers, or distributors.</p>
                        <p>You agree to provide current, complete, and accurate purchase and account information for all transactions made at our store. You also agree to promptly update your account details, including your email address, billing information, and credit card numbers with expiration dates, so that we can complete your transactions and contact you when necessary.</p>
                        <p>For more details on how we handle your personal data, please review our <Link href="/privacy-policy" className='text-primary'>Privacy Policy.</Link></p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="SECTION 7 – OPTIONAL TOOLS" />
                    <div className='space-y-4 text-sm'>
                        <p>Agile Cycle may provide you with access to third‑party tools or applications over which we have no monitoring, control, or input. These tools are offered strictly for convenience and may enhance your shopping or service experience.</p>
                        <p>You acknowledge and agree that we provide access to such tools “as is” and “as available,” without any warranties, representations, or conditions of any kind, and without any endorsement. Agile Cycle shall have no liability whatsoever arising from or relating to your use of optional third‑party tools.</p>
                        <p>Any use of these optional tools offered through the site is entirely at your own risk and discretion. You are responsible for ensuring that you are familiar with and approve of the terms on which such tools are provided by the relevant third‑party provider(s).</p>
                        <p>In the future, Agile Cycle may introduce new services, features, or tools through the website (including new resources or integrations). Such new features and/or services will also be subject to these Terms and Conditions.</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="SECTION 8 – THIRD‑PARTY LINKS" />
                    <div className='space-y-4 text-sm'>
                        <p>Certain content, products, and services available via Agile Cycle may include materials from third parties. Third‑party links on this site may direct you to websites that are not affiliated with Agile Cycle.</p>
                        <p>We are not responsible for examining or evaluating the content, accuracy, or reliability of third‑party websites. Agile Cycle does not warrant and will not have any liability or responsibility for any third‑party materials, websites, or for any other products or services offered by third parties.</p>
                        <p>We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with third‑party websites. Customers are strongly advised to review the policies and practices of third‑party providers carefully and ensure they understand them before engaging in any transaction.</p>
                        <p>Complaints, claims, concerns, or questions regarding third‑party products should be directed to the third‑party provider directly.</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="SECTION 9 – USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS" />
                    <div className='space-y-4 text-sm'>
                        <p>If, at our request, you send specific submissions (for example, contest entries), or without a request you send creative ideas, suggestions, proposals, plans, or other materials — whether online, by email, by postal mail, or otherwise (collectively referred to as “comments”) — you agree that Agile Cycle may, at any time and without restriction, edit, copy, publish, distribute, translate, and otherwise use in any medium any comments that you forward to us.</p>
                        <div>
                            You acknowledge that Agile Cycle is under no obligation:
                            <ol className='list-decimal list-inside'>
                                <li>To maintain any comments in confidence.</li>
                                <li>To pay compensation for any comments.</li>
                                <li>To respond to any comments.</li>
                            </ol>
                        </div>
                        <p>Agile Cycle may, but is not obligated to, monitor, edit, or remove content that we determine in our sole discretion to be unlawful, offensive, threatening, defamatory, obscene, or otherwise objectionable, or that violates any party’s intellectual property or these Terms and Conditions.</p>
                        <p>You agree that your comments will not violate the rights of any third party, including copyright, trademark, privacy, personality, or other personal or proprietary rights. You further agree that your comments will not contain libelous, abusive, or obscene material, nor contain any computer virus or malware that could affect the operation of the Service or any related website.</p>
                        <p>You may not use a false email address, impersonate another person, or otherwise mislead Agile Cycle or third parties as to the origin of any comments. You are solely responsible for the accuracy of any comments you make. Agile Cycle assumes no responsibility and accepts no liability for any comments posted by you or any third party.</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="SECTION 10 – PERSONAL INFORMATION" />
                    <div className='space-y-4 text-sm'>
                        <p>Your submission of personal information through the store is governed by our Privacy Policy. We collect necessary user information securely and in compliance with regulations in order to provide products and services to customers, while avoiding obtaining user information during payment and other processes, and taking technical and management measures to protect data security. To view our <Link href="/privacy-policy" className='text-primary'>Privacy Policy.</Link></p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="SECTION 11 – ERRORS, INACCURACIES AND OMISSIONS" />
                    <div className='space-y-4 text-sm'>
                        <p>From time to time, there may be information on the Agile Cycle website or within our Service that contains typographical errors, inaccuracies, or omissions. These may relate to product descriptions, pricing, promotions, offers, shipping charges, transit times, or availability.</p>
                        <p>Agile Cycle reserves the right to correct any errors, inaccuracies, or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time, without prior notice (including after you have submitted your order).</p>
                        <p>We undertake no obligation to update, amend, or clarify information in the Service or on any related website, including pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website should be taken to indicate that all information has been modified or updated.</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="SECTION 12 – PROHIBITED USES" />
                    <div className='space-y-4 text-sm'>
                        <p>In addition to other prohibitions set forth in these Terms and Conditions, you are prohibited from using the Agile Cycle site or its content for the following purposes:</p>
                        <ol className="list-[lower-alpha] list-inside">
                            <li>For any unlawful purpose.</li>
                            <li>To solicit others to perform or participate in unlawful acts.</li>
                            <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances.</li>
                            <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others.</li>
                            <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability.</li>
                            <li>To submit false or misleading information.</li>
                            <li>To upload or transmit viruses, malware, or any other type of malicious code that may affect the functionality or operation of the Service, related websites, other websites, or the Internet.</li>
                            <li>To collect or track the personal information of others without consent.</li>
                            <li>To engage in spamming, phishing, pharming, pretexting, spidering, crawling, or scraping.</li>
                            <li>For any obscene or immoral purpose</li>
                            <li>To interfere with or circumvent the security features of the Service, related websites, other websites, or the Internet.</li>
                        </ol>
                        <p>Agile Cycle reserves the right to terminate your use of the Service or any related website if you violate any of the prohibited uses listed above.</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="SECTION 13 – DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY" />
                    <div className='space-y-4 text-sm'>
                        <p>Agile Cycle does not guarantee, represent, or warrant that your use of our Service will be uninterrupted, timely, secure, or error‑free. We do not warrant that the results obtained from the use of the Service will be accurate, reliable, or suitable for your specific needs</p>
                        <p>You acknowledge and agree that from time to time, Agile Cycle may remove the Service for indefinite periods of time or cancel the Service entirely, without prior notice to you.</p>
                        <p>You expressly agree that your use of, or inability to use, the Service is at your sole risk. The Service and all products and services delivered to you through the Service are (except as expressly stated by Agile Cycle) provided “as is” and “as available” for your use, without any representation, warranties, or conditions of any kind, either express or implied. This includes, but is not limited to, implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non‑infringement.</p>
                        <p>In no case shall Agile Cycle, its directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers, or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind. This includes, without limitation, lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability, or otherwise, arising from your use of any of the Service or any products procured using the Service.</p>
                        <p>Agile Cycle shall also not be liable for any other claim related in any way to your use of the Service or any product, including but not limited to errors or omissions in any content, or any loss or damage incurred as a result of the use of the Service or any content (or product) posted, transmitted, or otherwise made available via the Service, even if advised of their possibility.</p>
                        <p>Because some jurisdictions do not allow the exclusion or limitation of liability for consequential or incidental damages, in such jurisdictions Agile Cycle’s liability shall be limited to the maximum extent permitted by law.</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="SECTION 14 – INDEMNIFICATION" />
                    <div className='space-y-4 text-sm'>
                        <p>You agree to indemnify, defend, and hold harmless Agile Cycle, along with our parent company, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns, and employees, from any claim or demand. This includes reasonable attorneys’ fees made by any third party due to or arising out of:</p>
                        <ul className='list-disc list-inside'>
                            <li>Your breach of these Terms and Conditions or the documents they incorporate by reference.</li>
                            <li>Your violation of any applicable law or regulation.</li>
                            <li>Your infringement of the rights of a third party, including intellectual property rights, privacy rights, or contractual rights.</li>
                        </ul>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="SECTION 15 – SEVERABILITY" />
                    <div className='space-y-4 text-sm'>
                        <p>In the event that any provision of these Terms and Conditions is determined to be unlawful, void, or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law. The unenforceable portion shall be deemed severed from these Terms, and such determination shall not affect the validity and enforceability of any remaining provisions.</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="SECTION 16 – TERMINATION" />
                    <div className='space-y-4 text-sm'>
                        <p>The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.</p>
                        <p>These Terms and Conditions remain effective unless and until terminated by either you or Agile Cycle. You may terminate these Terms at any time by notifying us that you no longer wish to use our Services, or by ceasing use of our site.</p>
                        <p>If, in our sole judgment, you fail or we suspect that you have failed to comply with any term or provision of these Terms, Agile Cycle may terminate this agreement at any time without notice. You will remain liable for all amounts due up to and including the date of termination, and Agile Cycle may deny you access to our Services (or any part thereof).</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="SECTION 17 – ENTIRE AGREEMENT" />
                    <div className='space-y-4 text-sm'>
                        <p>The failure of Agile Cycle to exercise or enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.</p>
                        <p>These Terms and Conditions, together with any policies or operating rules posted by Agile Cycle on this site or in respect to the Service, constitute the entire agreement and understanding between you and Agile Cycle. They govern your use of the Service, superseding any prior or contemporaneous agreements, communications, and proposals, whether oral or written, between you and Agile Cycle (including prior versions of these Terms).</p>
                        <p>Any ambiguities in the interpretation of these Terms shall not be construed against Agile Cycle as the drafting party.</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="SECTION 18 – GOVERNING LAW" />
                    <div className='space-y-4 text-sm'>
                        <p>These Terms and Conditions, and any separate agreements whereby Agile Cycle provides you Services, shall be governed by and construed in accordance with the laws of Nigeria.</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="SECTION 19 – CHANGES TO TERMS AND CONDITIONS" />
                    <div className='space-y-4 text-sm'>
                        <p>You can review the most current version of the Terms and Conditions at any time on this page. Agile Cycle reserves the right, at our sole discretion, to update, change, or replace any part of these Terms by posting updates and changes to our website.</p>
                        <p>It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes constitutes acceptance of those changes.</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="SECTION 20 – CONTACT INFORMATION" />
                    <div className='space-y-4 text-sm'>
                        <div>
                            <p>Questions about these Terms and Conditions should be sent to us at:</p>
                            <p><span className='font-bold'>Email:</span> <ExternalLink href="mailto:info@agilecycle.com " title="info@agilecycle.com " /></p>
                        </div>
                    </div>
                </section>

            </div>
        </Container>
    )
}

export default TermsAndConditionsPage