import Container from '@/src/components/layout/Container'
import BreadCrumbs from '@/src/components/terms-conditions/BreadCrumbs'
import ExternalLink from '@/src/components/terms-conditions/ExternalLink'
import Header from '@/src/components/terms-conditions/Header'
import SectionHeader from '@/src/components/terms-conditions/SectionHeader'
import Link from 'next/link'
import React from 'react'

const ShippingPolicyPage = () => {
    return (
        <Container className='py-24 space-y-6'>
            <BreadCrumbs href="shipping-policy" title="Shippping Policy" />
            <Header title="Shipping Policy" />

            <div className='space-y-4'>
                <section className='space-y-4'>
                    <SectionHeader title="Overview" />
                    <div className='space-y-4 text-sm'>
                        <p>We value every customer and customer satisfaction is always our top priority. We are committed to providing you with fast and reliable shipping services. We are doing our best to expedite the process so your package arrives as quickly as possible. Thank you very much for your patience. Thank you for your understanding. Below is our shipping policy.</p>
                        <p></p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="Processing Time" />
                    <div className='space-y-4 text-sm'>
                        <p>Normally, all orders will be processed within 1-2 business days. Orders placed Monday through Friday will be processed within 24 hours of order placement or on the next business day. Orders placed Saturday to Sunday or holidays will be processed the next business day. Orders will not be processed on Saturday and Sunday.</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="SHIPPING Time" />
                    <div className='space-y-4 text-sm'>
                        <p>In-stock orders typically ship the next business day after the order has been processed, unless otherwise noted on the product page. In the rare cases, there may be a slight delay in shipment and you do not receive your order within 14 business days, feel free to contact us at  <ExternalLink href="mailto:support@agilecycle.com" title="support@agilecycle.com." /> </p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="Delivery Location" />
                    <div className='space-y-4 text-sm'>
                        <p>Purchased on our official website, we ship <span className='text-primary'>locally </span>(within Nigeria) and <span className='text-primary'>internationally</span> (outside Nigeria).</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="SHIPPING CARRIERS" />
                    <div className='space-y-4 text-sm'>
                        <p>Local Carrier Shipping/Express Shipping/Pickup (In Store).</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="ORDER TRACKING" />
                    <div className='space-y-4 text-sm'>
                        <p>If you have registered an account with <ExternalLink href="https://www.agilecycle.com" title="agilecycle.com" />, you can track your order and shipping and handling information on your account. If you have not registered on our website, when your order ships, you will be sent an email confirmation with the tracking number associated with the order. You can check and track the delivery status of your order by visiting the official website of the courier company and entering the tracking number in the &apos;Check your shipment&apos; box. You can also use your order number to track your order <Link href="/orders" className='text-primary'>here</Link>. For more shipping information, please send an email to <ExternalLink href="mailto:service@agilecycle.com" title="service@agilecycle.com." /> We will get back to you within 24 hours.</p>
                        <p>For all international deliveries, please rest assured that your order is on the way safely and the time required depends on our logistics partners and their affiliates. You can provide your contact number under the address selected during payment so that the courier company can contact you in the event of any unforeseen circumstances.</p>
                    </div>
                </section>
            </div>
        </Container>
    )
}

export default ShippingPolicyPage