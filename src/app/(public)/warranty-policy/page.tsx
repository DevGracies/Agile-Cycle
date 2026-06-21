import Container from '@/src/components/layout/Container'
import BreadCrumbs from '@/src/components/terms-conditions/BreadCrumbs'
import Header from '@/src/components/terms-conditions/Header'
import SectionHeader from '@/src/components/terms-conditions/SectionHeader'
import React from 'react'

const WarrantyPolicyPage = () => {
    return (
        <Container className='py-24 space-y-6'>
            <BreadCrumbs href="warranty-policy" title="Warranty Policy" />
            <Header title="Warranty Policy" />

            <div className='space-y-4'>
                <section className='space-y-4'>
                    <SectionHeader title="Coverage" />
                    <div className='space-y-4 text-sm'>
                        <p>All Agile Cycle eBikes are covered under our 2‑year, all‑inclusive manufacturer’s warranty for the original owner
                            against all manufacturing defects. (Note: Free accessories are not covered under warranty service.)</p>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="Warranty Period & Eligibility" />
                    <div className='space-y-4 text-sm'>
                        <ul>
                            <li>The warranty is automatically registered when the initial purchaser orders and receives the product from our online shop.</li>
                            <li>The warranty applies to the <span className='text-primary'>initial purchaser only.</span></li>
                        </ul>
                        <p className='font-bold'>Transfer Conditions:</p>
                        <p>The warranty may transfer to a new owner only if:</p>
                        <ol className='list-decimal list-inside'>
                            <li>The 1.5‑year warranty period has not expired since the initial purchase.</li>
                            <li>The new owner has the original purchaser’s name and order number.</li>
                        </ol>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="COVERED PRODUCTS" />
                    <div className='space-y-4 text-sm'>
                        <p>Agile Cycle will replace any component that is deemed to be defective or damaged (including damage incurred during shipment),
                            except in case of user error. The warranty covers the listed products and follows the terms below:</p>
                        <p className='font-bold'>Frame</p>
                        <ul className='list-disc list-inside ml-3'>
                            <li>Covered by a <span className='text-primary'>1.5‑year replacement warranty.</span></li>
                            <li>Warranty includes replacement frame only (labor charges for transferring parts are not included).</li>
                            <li>Agile Cycle may use scratch‑and‑dent stock or substitute compatible styles/colors if exact replacements are unavailable.</li>
                        </ul>
                        <p>Frame issues excluded from this warranty include but are not limited to:</p>
                        <ul className='list-disc list-inside ml-3'>
                            <li>Corrosion, paint fade, scratches, impact marks.</li>
                            <li>Damage from accidents or modifications (e.g., drilling, welding).</li>
                            <li>Chain guard issues.</li>
                        </ul>
                        <p className="font-bold">Batteries</p>
                        <ul className='list-disc list-inside ml-3'>
                            <li>Covered by a <span className='text-primary'>2‑year replacement warranty.</span></li>
                            <li>Defective batteries will be repaired or replaced at no cost within the warranty period.</li>
                            <li>Warranty period remains unchanged from the original purchase date.</li>
                            <li>No cash reimbursement.</li>
                            <li>Batteries can be assessed and found defective directly by Agile Cycle only.</li>
                        </ul>
                        <p>This Limited Warranty does not cover:</p>
                        <ul className='list-disc list-inside ml-3'>
                            <li>Defects or damage resulting from accidents, abuse, misuse, abnormal use (including but not limited to stunt riding, racing, or other similar activities not consistent with the intended use of the Products), improper storage, abnormal exposure to liquid, chemical exposure, moisture, abrasives, sand or dirt, neglect, or abnormal physical, electrical or electromechanical stress.</li>
                            <li>Defects or damage caused by private modification.</li>
                            <li>Scratches, dents, and cosmetic damage, unless caused by Agile Cycle.</li>
                            <li>Products that have the serial number or bar‑code removed, defaced, damaged, altered, or made illegible.</li>
                            <li>Ordinary wear and tear.</li>
                            <li>Defects or damage to the Products caused by the use of accessories, products, or ancillary/peripheral equipment not furnished or approved by Agile Cycle for the Products.</li>
                            <li>Defects or damage caused by the assembly, testing, operation, maintenance, installation, service, repair, or adjustment of the Products in a manner that varies from the Assembly Instructions or Owner&apos;s Manual.</li>
                            <li>Defects or damage resulting from external causes such as collision, fire, flooding, windstorms, lightning, earthquakes, exposure to weather conditions, theft, blown fuses, or improper use of any electrical source.</li>
                        </ul>

                        <p>Additional battery exclusions:</p>
                        <ul className='list-disc list-inside ml-3'>
                            <li>Charging with a battery charger not intended or appropriate for use with the Battery.</li>
                            <li>Using a battery charger improperly.</li>
                            <li>If any of the seals on the battery are broken or show evidence of tampering.</li>
                            <li>If the Battery has been used in equipment other than the eBike for which it is specified.</li>
                        </ul>

                        <p className="font-bold">Parts & Components</p>
                        <p>Spare parts are covered by a 1‑year warranty.</p>
                        <p>(If you purchase extra accessories, they are also protected for one year. Once you confirm that the item is not working, you may contact Agile Cycle to request a replacement spare part. Please note: freight fees must be paid by the customer.)</p>

                        <p>This Limited Warranty does not cover:</p>

                        <ul className='list-disc list-inside ml-3'>
                            <li>Parts compromised by corrosion due to exposure to the elements (moisture, heat, etc.).</li>
                            <li>Damage or deterioration of the surface finish, appearance, or aesthetics of the product.</li>
                            <li>Labor charges for part replacement or changeover.</li>
                            <li>Defects or damage resulting from accidents, abuse, misuse, abnormal use (including but not limited to stunt riding, racing, or other similar activities not consistent with the intended use of the Products), improper storage, abnormal exposure to liquid, chemicals, moisture, abrasives, sand or dirt, neglect, or abnormal physical, electrical or electromechanical stress.</li>
                            <li>Scratches, dents, and cosmetic damage not caused by Agile Cycle.</li>
                            <li>Products with the serial number or bar‑code removed, defaced, damaged, altered, or made illegible.</li>
                            <li>Defects or damage to the Products caused by the use of accessories, products, or ancillary/peripheral equipment not furnished or approved by Agile Cycle for the Products.</li>
                            <li>Defects or damage caused by improper assembly, testing, , maintenance, installation, service, repair, or adjustment in a manner that varies from the Assembly Instructions or Owner&apos;s Manual.</li>operation
                            <li>Defects or damage resulting from external causes, such as collision, fire, flooding, windstorms, lightning, earthquakes, exposure to weather conditions, theft, blown fuses, or improper use of any electrical source.</li>
                            <li>Regular wear and tear not caused by craftsmanship or material defects (such as tires and brake pads).</li>
                        </ul>
                    </div>
                </section>

                <section className='space-y-4'>
                    <SectionHeader title="CLAIMS PROCESS" />
                    <div className='space-y-4 text-sm'>
                        <ol className='list-decimal list-inside space-y-4'>
                            <li className='font-bold'>Warranty Claims</li>
                            <ul className='list-disc list-inside ml-3'>
                                <li>Submit claims via support@agilecycle.com with proof of purchase and photos/videos of the defect.</li>
                                <li>Valid claims within 2 years will be processed by Agile Cycle.</li>
                                <li>Customers cover shipping costs for replacement parts.</li>
                                <li>Defective displays, batteries, motors, and controllers are eligible for replacement.</li>
                            </ul>
                            <li className='font-bold'>Shipping Damage Claims</li>
                            <ul className='list-disc list-inside ml-3'>
                                <li>Report shipping damage within <span className='text-primary'>7 days of receipt</span> with photo/video proof.</li>
                                <li>Free accessories are not eligible for replacement if scratched during transit.</li>
                            </ul>
                            <li className='font-bold'>Credit Card Chargebacks</li>
                            <ul className='list-disc list-inside ml-3'>
                                <li>If a purchase is subject to a chargeback, the warranty is invalid until resolved</li>
                            </ul>
                            <li className='font-bold'>Evidence Requirement</li>
                            <ul className='list-disc list-inside ml-3'>
                                <li className='text-red-600'>Agile Cycle will not replace any component without first receiving photo/video proof of the defect.</li>
                            </ul>
                        </ol>
                    </div>
                </section>
                <section className='space-y-4'>
                    <SectionHeader title="Repair Service" />
                    <div className='space-y-4 text-sm'>
                        <p>For offline repair services, Agile Cycle provides <span className="text-primary">free replacement parts only.</span> Labor costs are not
                            reimbursed unless authorized by our after‑sales team.</p>
                    </div>
                </section>
            </div>
        </Container>
    )
}

export default WarrantyPolicyPage