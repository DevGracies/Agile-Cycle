import Container from '@/src/components/layout/Container'
import BreadCrumbs from '@/src/components/terms-conditions/BreadCrumbs'
import ExternalLink from '@/src/components/terms-conditions/ExternalLink'
import Header from '@/src/components/terms-conditions/Header'
import SectionHeader from '@/src/components/terms-conditions/SectionHeader'
import Image from 'next/image'
import React from 'react'
import mastercardVisaImage from "@/public/payment-policy/mastercard&visa.png";
import paystackImage from "@/public/payment-policy/paystack_logo.svg.png";

const PaymentPolicyPage = () => {
    return (
        <Container className='py-24 space-y-6'>
            <BreadCrumbs href="payment-policy" title="Payment Policy" />
            <Header title="Payment Policy" />

            <div className='space-y-4'>
                <section className='space-y-4'>
                    <SectionHeader title="Introduction" />
                    <div className='space-y-4 text-sm'>
                        <p>Thanks for choosing Agile Cycle, we appreciate your decision to proceed with payment. To ensure that transactions at our online store are safe and secure, we have adopted the latest payment encryption technology. Our website also uses SSL (secure encryption link) to prevent any information leakage.</p>
                        <p>If you come across additional collection accounts such as Agile Cycle LTD / Agile Cycle Tech Co., please rest assured that these are our correct accounts for receiving payments. For any questions, please contact our dedicated customer support team at <ExternalLink href="mailto:support@agilecycle.com" title="support@agilecycle.com." /> Rest assured that we will prioritize your inquiries and work diligently to provide clarification and resolution as quickly as possible.</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="Supported Payment Methods" />
                    <div className='space-y-4 text-sm'>
                        <p>We work with trusted banks and leading e‑commerce payment providers to make your checkout smooth and reliable. Currently, Agile Cycle supports:</p>
                        <p className='font-bold'>Pay with credit/debit card</p>
                        {/* TODO PAYMENT GATEWAY IMAGES */}
                        <div className='flex gap-10'>
                            <Image
                                src={mastercardVisaImage}
                                alt=""
                                width={150}
                                height={100}
                                className='object-cover'
                            />
                            <Image
                                src={paystackImage}
                                alt=""
                                width={250}
                                height={100}
                                className='object-cover scale-80'
                            />
                        </div>
                        <p>At this time, our online store supports credit and debit cards issued by Visa and MasterCard, processed securely through the Paystack payment gateway. When paying with a card, you will be asked to provide the name on the card, the card number, the expiration month and year, and the CVV (digital security code). This information is required to complete your payment securely.</p>
                        <p>Agile Cycle does not store your card number or personal details entered during checkout. All transactions are encrypted and handled securely by Paystack. If you have questions about charges or transactions on your card, please contact the bank that issued your card directly, as they are best positioned to assist.</p>
                        <p>Please note that, in some cases, your payment may be declined at checkout as part of our fraud prevention system. This is a protective measure against possible credit card fraud.</p>
                        <p className='font-bold'>Under such circumstance, here are 2 solutions for you:</p>
                        <ul className='list-disc list-inside ml-3 space-y-2'>
                            <li>Call your bank or card provider ahead of time about your purchase. If your payment is denied, kindly reach out to your card issuer for clarification and assistance.</li>
                            <li>Please switch to your other credit/debit cards.</li>
                        </ul>
                    </div>
                </section>
            </div>
        </Container>
    )
}

export default PaymentPolicyPage