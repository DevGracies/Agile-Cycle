import Container from '@/src/components/layout/Container'
import BreadCrumbs from '@/src/components/terms-conditions/BreadCrumbs'
import ExternalLink from '@/src/components/terms-conditions/ExternalLink'
import Header from '@/src/components/terms-conditions/Header'
import SectionHeader from '@/src/components/terms-conditions/SectionHeader'
import { afterSalesSolutions, options, returnCharge, returnPolicies } from '@/src/lib/utils'
import React from 'react'


const returnableItems = [
    {
        header: "Ebike-orders",
        items: [
            "Within 30 days from the date of delivery;",
            "In unused, unworn and resellable condition;",
            "In the original packaging with all the tags intact;",
            "Box must be sealed and unopened;",
            "Customer pays return shipping (Original shipping cost is withheld from refund);",
            "E-bikes that have been Registered in the Buyer's Name officially CANNOT be returned;",
        ]
    },
    {
        header: "Accessories/Replacements/Parts orders",
        items: [
            "Within 30 days from the date of delivery;",
            "In unused, unworn and resalable condition;",
            "In the original packaging with all the tags intact;",
            "Customer pays return shipping (Original shipping cost is withheld from refund);",
        ]
    }
]
const nonReturnableItems = [
    "Customized goods (such as special orders or personalized goods)",
    "Unpackaged items (such as unlabeled, unpackaged)",
    "Used items (such as worn-out products with traces)",
    "Discounted items and Sale items (if applicable)",
    "Giveaways or free items",
    "Product from Unauthorized Reseller",
    "Damage/Lost caused by customers",
]


const ReturnAndRefundPolicyPage = () => {
    return (
        <Container className='py-24 space-y-6'>
            <BreadCrumbs href="return-refund-policy" title="Return and Refund Policy" />
            <Header title="Return and Refund Policy" />
            <p className='text-sm'>We hope you are satisfied with every shopping. If you have any quality problems, please feel free to contact us and we will provide professional guidance and solutions in time. If you would like to return an item and request a refund, please see our return and refund policy below.</p>

            <div className='space-y-4'>
                <section className='space-y-4'>
                    <SectionHeader title="Return Instructions" />
                    <ul className='list-disc list-inside ml-3 space-y-4 text-sm'>
                        <li>We have a convenient 30 days return policy, which means you have 30 days from the day you receive your item to request a return, exchange, or refund. Our return policy will take effect upon receipt of the package.</li>
                        <li>If you are unhappy with your purchase, as long as you contact us within 30 days from the receipt of the item, we will process your return/exchange request. Any request after 30 days will not be honored. Please make sure to contact us by email <ExternalLink href="mailto:service@agilecycle.com" title="service@agilecycle.com" /> at first.</li>
                        <li>To be eligible for return, your product must be in an unshipped state or in the same state as when it was received (unused, unworn, labeled and in the original packaging, and a receipt or proof of purchase is also required ).</li>
                        <li>The order has been shipped and the product is in transit, returns are not supported. It is only supported to apply for a return and before delivery or after arrival. To start the return, you can contact us in time to resolve any return issues.</li>
                        <li>In order to make a valid return, you must obtain approval for such return from Vivi, which can be obtained by email contacting us or by the Returns Center. Any product you send back to Vivi without Vivi&apos;s express consent will be rejected and returned to you at your expense.</li>
                        <li>If your return is accepted, we will send you a return shipping destination and instructions on how and where to send the package. Items returned to us without prior request will not be accepted.</li>
                    </ul>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="Returnable Items" />
                    <div className='space-y-4 text-sm'>
                        <ol className='list-decimal list-inside space-y-3'>
                            {returnableItems.map((item) => (
                                <div key={item.header} >
                                    <li className='font-bold mb-3'>{item.header}</li>
                                    {item.items.map((i) => (
                                        <ul key={i} className='list-disc list-inside ml-3'>
                                            <li>{i}</li>
                                        </ul>
                                    )
                                    )}
                                </div>
                            ))}
                        </ol>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="Non-returnable Items (INCLUDE BUT ARE NOT LIMITED TO)" />
                    <ul className='list-disc list-inside text-sm ml-3'>
                        {nonReturnableItems.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="General Return Process" />
                    <div className='space-y-4 text-sm'>
                        <ul className='list-disc list-inside ml-3 space-y-4'>
                            <li>Initiate a return: Please go to our <ExternalLink href="/" title="Returns Center" />  to submit a return request, or please email us at service@viviebike.com with photos and/or videos of the items and let us know your order number. Our customer service staff will determine the eligibility for your return request within 3 business days</li>
                            <li>Ship the item back: If your return is accepted, we’ll send you the return address, as well as instructions on how and where to send your package. (Note: Items returned without authorization will not be accepted). We recommend that you send your return/exchange in a shipping method providing tracking information as well as a signature, because we will not be responsible for lost return/exchange.</li>
                            <li>Refund or exchange: When we receive your return/exchange, we will inspect the item within 3-5 business days and send you an email to let you know that we have received your return. In the case of a return, we will also notify you whether your refund has been approved; in the case of an exchange, we will also notify you of the tracking method for the replacement.</li>
                        </ul>
                        <p className='font-bold'>Please Note: All returns must be made within 30 days of ordering.Before returning any items, please contact us and get our written approval. Any unreturned products will not be refunded.</p>
                    </div>
                </section>

                <section className='space-y-4'>
                    <SectionHeader title="Return Charge" />
                    <ul className='list-disc list-inside text-sm ml-3 space-y-4'>
                        {returnCharge.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="Return" />
                    <ul className='list-disc list-inside text-sm ml-3 space-y-4'>
                        {returnPolicies.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="Refunds" />
                    <div className='space-y-4 text-sm'>
                        <ul className='list-disc list-inside space-y-4 ml-3'>
                            <li>Once you request a return, we may withhold reimbursement until we have received the products back, or when you have demonstrated that   you have returned the products. This depends on which situation arises earlier.</li>
                            <li>Once your return is received and inspected, we will notify you of the approval or rejection of your refund. If you are approved, the refund will be provided to the original method of payment within 2-3 business days. Please note that it takes for the refund to be credited to your account depends on your card issuer and typically takes 7-15 days.</li>
                            <li>You will be refunded the amount with the same payment method as you used to pay, unless you have expressly agreed to another form of refund. In any event, we do not charge any fees for such refunds.</li>
                            <li>If you haven’t received the refund within 2-3 business days, please check your bank account again. Then contact your bank or credit card company. It may take some time before a refund is official posted. If you’ve done all of this and you still have not received your refund, please contact us at <ExternalLink href="service@viviebike.com" title="service@viviebike.com." /></li>
                            <li>If you initiate a Paypal or credit card chargeback, the bank will suspend and freeze our refund until the bank resolves it through arbitration. Generally, it takes 3-6 months for the bank to handle a chargeback dispute. The fastest way to get a refund is to contact our after-sales customer service (email: <ExternalLink href="mailto:service@agilecycle.com" title="service@agilecycle.com" />) to apply for a refund.</li>
                        </ul>
                        <p className="font-bold">Please Note: we do not refund our original shipping cost.</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="Exchange" />
                    <div className='space-y-4 text-sm'>
                        <p>We only replace items if they are defective or damaged on receipt. If you need to exchange it for the same item, send us an email at
                            <ExternalLink href="mailto:service@agilecycle.com." title="service@agilecycle.com." /> We will guide you through the exchange process. There are   no additional handling fees and shipping charges for exchanges.
                        </p>
                        <p>Depending on where you live, the time it may take for your exchanged product to reach you, may vary. The fastest way to ensure that you get what you want is to return the items you own. Once you accept the return, please purchase the new product separately.</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="Other After-Sales Solutions" />
                    <div className='space-y-6 text-sm'>
                        <ul className='list-disc space-y-4 text-sm ml-6'>
                            {afterSalesSolutions.map((item) => (
                                <div key={item.title}>
                                    <li className='font-bold'>{item.title}</li>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                        </ul>
                        {options.map((item) => (
                            <div key={item.title} className="space-y-4">
                                <h2 className='font-medium text-lg'>{item.title}</h2>
                                <ul className='list-disc list-inside ml-3'>
                                    {item.items.map((i) => (
                                        <li key={i}>{i}</li>
                                    ))}

                                </ul>
                            </div>
                        ))}
                    </div>

                </section>
            </div>

        </Container>
    )
}

export default ReturnAndRefundPolicyPage