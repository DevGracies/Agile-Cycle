import Container from '@/src/components/layout/Container'
import BreadCrumbs from '@/src/components/terms-conditions/BreadCrumbs'
import ExternalLink from '@/src/components/terms-conditions/ExternalLink'
import Header from '@/src/components/terms-conditions/Header'
import SectionHeader from '@/src/components/terms-conditions/SectionHeader'
import { cookieTypes } from '@/src/lib/utils'
import React from 'react'

const CookiePolicyPage = () => {
    return (
        <Container className='py-24 space-y-6'>
            <BreadCrumbs href="cookie-policy" title="Cookie Policy" />
            <Header title="Cookie Policy" />

            <div className='space-y-4'>
                <section className='space-y-4'>
                    <SectionHeader title="Introduction" />
                    <div className='space-y-4 text-sm'>
                        <p>Agile Cycle (“we”, “us”, or “our”) may use cookies, web beacons, tracking pixels, and other tracking technologies when you visit our website [agilecycle.com], including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”), to help customize the Site and improve your experience.</p>
                        <p>We reserve the right to make changes to this Cookie Policy at any time and for any reason. We will alert you about any changes by updating the “Last Updated” date of this Cookie Policy. Any changes or modifications will be effective immediately upon posting the updated Cookie Policy on the Site, and you waive the right to receive specific notice of each such change or modification.</p>
                        <p>You are encouraged to periodically review this Cookie Policy to stay informed of updates. You will be deemed to have accepted the changes in any revised Cookie Policy by your continued use of the Site after the date such revised Cookie Policy is posted.</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="Use of cookies" />
                    <div className='space-y-4 text-sm'>
                        <p>A “cookie” is a string of information which assigns you a unique identifier that we store on your computer. Your browser then provides that unique identifier to use each time you submit a query to the Site. We use cookies on the Site to, among other things, keep track of services you have used, record registration information, record your user preferences, keep you logged into the Site, facilitate purchase procedures, and track the pages you visit. Cookies help us understand how the Site is being used and improve your user experience.</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="Types of cookies" />
                    <div className='space-y-4 text-sm'>
                        <p>The following types of cookies may be used when you visit the Site:</p>
                        <ul className='list-disc space-y-4 text-sm ml-6'>
                            {cookieTypes.map((item) => (
                                <div key={item.title} className='space-y-4'>
                                    <li className='font-bold'>{item.title}</li>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                        </ul>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="CONTROL OF COOKIES" />
                    <div className='space-y-4 text-sm'>
                        <p>Most browsers are set to accept cookies by default. However, you can remove or reject cookies in your browser’s settings. Please be aware that such action could affect the availability and functionality of the Site.</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="OTHER TRACKING TECHNOLOGIES" />
                    <div className='space-y-4 text-sm'>
                        <p>In addition to cookies, we may use web beacons, pixel tags, and other tracking technologies on the Site to help customize the Site and improve your experience. A “web beacon” or “pixel tag” is tiny object or image embedded in a web page or email. They are used to track the number of users who have visited particular pages and viewed emails, and acquire other statistical data. They collect only a limited set of data, such as a cookie number, time and date of page or email view, and a description of the page or email on which they reside. Web beacons and pixel tags cannot be declined. However, you can limit their use by controlling the cookies that interact with them.</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="PRIVACY POLICY" />
                    <div className='space-y-4 text-sm'>
                        <p>For more information about how we use information collected by cookies and other tracking technologies, please refer to our Privacy Policy posted on the Site. This Cookie Policy is part of and is incorporated into our Privacy Policy. By using the Site, you agree to be bound by this Cookie Policy and our Privacy Policy.</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="CONTACT US" />
                    <div className='space-y-4 text-sm'>
                        <p>If you have questions or comments about this Cookie Policy, please contact us at: <ExternalLink href="mailto:info@agilecycle.com" title="info@agilecycle.com" /></p>
                    </div>
                </section>
            </div>
        </Container>
    )
}

export default CookiePolicyPage