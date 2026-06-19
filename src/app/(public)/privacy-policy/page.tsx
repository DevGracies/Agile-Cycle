import Container from '@/src/components/layout/Container'
import BreadCrumbs from '@/src/components/terms-conditions/BreadCrumbs'
import ExternalLink from '@/src/components/terms-conditions/ExternalLink'
import Header from '@/src/components/terms-conditions/Header'
import SectionHeader from '@/src/components/terms-conditions/SectionHeader'
import React from 'react'

const PrivacyPolicyPage = () => {
    return (
        <Container className='py-24 space-y-6'>
            <BreadCrumbs href="privacy-policy" title="Privacy Policy" />
            <Header title="Privacy Policy" />

            <div className='space-y-4'>
                <section className='space-y-4'>
                    <SectionHeader title="SECTION 1 - What do We do With Your Information?" />
                    <div className='space-y-4 text-sm'>
                        <p>When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address. In efforts to verify and protect your identity, we leverage a third party 100% private and secure fraud checking platform, Signifyd.When you browse our store, we also automatically receive your computer&apos;s internet protocol (IP) address to provide us with information that helps us learn about your browser and operating system.</p>
                        <p>Email marketing (if applicable): With your permission, we may send you emails about our store, new products, and other updates.</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="SECTION 2 - Consent" />
                    <div className='space-y-4 text-sm'>
                        <p>When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it.</p>
                        <p>If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent or provide you with an opportunity to say no.</p>
                        <div>
                            <p>How Do I Withdraw My Consent?</p>
                            <p>If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at any time, by contacting us.</p>
                        </div>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="SECTION 4 - SHARING YOUR PERSONAL INFORMATION" />
                    <div className='space-y-4 text-sm'>
                        <p>We only share your personal information with Shopify and Google. Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our products and services to you, you can read more about how Shopify uses your Personal Information here: <ExternalLink href="https://www.shopify.com/legal/privacy" title="https://www.shopify.com/legal/privacy." /> We also use Google Analytics to help us understand how our customers use the Site, you can read more about how Google uses your Personal Information here: <ExternalLink href="https://www.google.com/intl/en/policies/privacy" title="https://www.google.com/intl/en/policies/privacy." /> We use Google&apos;s ad services such as Google Analytics to help personalize the advertising you see on third party websites. To restrict Shopify merchants that use these ad services from using your personal information for such services, visit <ExternalLink href="https://www.google.com/intl/en/policies/privacy" title="https://www.google.com/intl/en/policies/privacy." /></p>
                        <p>Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>
                        <p>In addition, we will not share your personal information with any other third parties.</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="SECTION 5 - Third-Party Services" />
                    <div className='space-y-4 text-sm'>
                        <p>In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.</p>
                        <p>However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their privacy policies concerning the information we are required to provide to them for your purchase-related transactions.</p>
                        <p>For these providers, we recommend that you read their privacy policies so you can understand how your personal information will be handled by these providers.</p>
                        <p>In particular, remember that certain providers may be located in or have facilities that are located in a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.</p>
                        <p>As an example, if you are located in Nigeria and your transaction is processed by a payment gateway located in the United States, then your personal information used in completing that transaction may be subject to disclosure under United States legislation, such as the Patriot Act.
                        Once you leave Agile Cycle’s website or are redirected to a third‑party website or application, you are no longer governed by this Privacy Policy or our Terms of Service.</p>
                        <p><span className='font-bold'>Links:</span> When you click on links on our store, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.</p>
                        <p><span className='font-bold'>Google Analytics:</span> Our store uses Google Analytics to help us learn about who visits our site and what pages are being looked at.</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="SECTION 6 - Security" />
                    <div className='space-y-4 text-sm'>
                        <p>To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.</p>
                        <p>If you provide us with your credit card information, the information is encrypted using secure socket layer technology (SSL) and stored with AES-256 encryption. Although no method of transmission over the Internet or electronic storage is 100% secure, we follow all PCI-DSS requirements and implement additional generally accepted industry standards.</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="SECTION 7 - Cookies" />
                    <div className='space-y-4 text-sm'>
                        <p>Here is a list of cookies that we use. We&apos;ve listed them here so you that you can choose if you want to opt-out of cookies or not.</p>
                        <div>
                            <p>_session_id, unique token, sessional, Allows Shopify to store information about your session (referrer, landing page, etc).</p>
                            <p>_shopify_visit, no data held, Persistent for 30 minutes from the last visit, Used by our website provider&apos;s internal stats tracker to record the number of visits.</p>
                            <p>_shopify_uniq, no data held, expires midnight (relative to the visitor) of the next day, Counts the number of visits to a store by a single customer.cart, unique token, persistent for 2 weeks, Stores information about the contents of your cart.</p>
                            <p>_secure_session_id, unique token, sessional storefront_digest, unique token, indefinite If the shop has a password, this is used to determine if the current visitor has access.</p>
                        </div>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="SECTION 8 - Age of Consent" />
                    <div className='space-y-4 text-sm'>
                        <p>By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="SECTION 9 - Changes to This Privacy Policy" />
                    <div className='space-y-4 text-sm'>
                        <p>We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.</p>
                        <p>If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.</p>
                        <div>
                            <p className='font-bold'>What Information Do We Collect?</p>
                            <p>We collect information from you when you register on the site, place an order, enter a contest or sweepstakes, respond to a survey or communication such as e-mail, or participate in another site feature. When ordering or registering, we may ask you for your name, e-mail address, mailing address, phone number, credit card information or other information. You may, however, visit our site anonymously. Like many websites, we use &apos;cookies&apos; to enhance your experience and gather information about visitors and visits to our websites. Please refer to the &apos;Do We Use Cookies?&apos; section above for information about cookies and how we use them.</p>
                        </div>
                        <div>
                            <p className='font-bold'>How Do We Use Your Information?</p>
                            <p>We may use the information we collect from you when you register, purchase products, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways: To personalize your site experience and to allow us to deliver the type of content and product offerings in which you are most interested. To allow us to better service you in responding to your customer service requests. To quickly process your transactions. To administer a survey or other site feature. If you have opted-in to receive our e-mail newsletter, we may send you periodic e-mails. If you would no longer like to receive promotional e-mail from us, please refer to the &apos;How Can You Opt-Out, Remove, or Modify Information You Have Provided to Us?&apos; section below. If you have not opted-in to receive e-mail newsletters, you will not receive these e-mails.</p>
                        </div>
                        <div>
                            <p className='font-bold'>How Do We Protect Visitor Information?</p>
                            <p>We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. When you place orders or access your personal information, we offer the use of a secure server. All sensitive/credit information you supply is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our databases to be only accessed as stated above.</p>
                        </div>
                        <div>
                            <p className='font-bold'>Do We Disclose Information We Collect to Outside Parties?</p>
                            <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide you with advance notice, except as described below. The term &apos;outside parties&apos; does not include our business. It also does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others&apos; rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.</p>
                        </div>
                        <div>
                            <p className='font-bold'>How Can You Opt-Out, Remove, or Modify Information You Have Provided to Us?</p>
                            <p>To delete all of your online account information from our database, sign into the &apos;My Account&apos; section of our site and remove your shipping addresses & payment information. Please note that we may maintain information about an individual sales transaction to service that transaction and for record-keeping. Third-party links In an attempt to provide you with increased value, we may include third party links on our site. These linked sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these linked sites (including if a specific link does not work). Changes to our policy If we decide to change our privacy policy, we will post those changes on this page. Policy changes will apply only to information collected after the date of the change</p>
                        </div>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="Questions and Contact Information" />
                    <div className='space-y-4 text-sm'>
                        <p>If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Privacy Compliance Officer at <ExternalLink href="mailto:info@agilecycle.com" title="info@agilecycle.com." /></p>
                    </div>
                </section>
            </div>
        </Container>
    )
}

export default PrivacyPolicyPage