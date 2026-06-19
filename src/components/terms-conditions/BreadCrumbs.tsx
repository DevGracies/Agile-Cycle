import Link from 'next/link'
import React from 'react'

const BreadCrumbs = ({href, title}: {href: string, title: string }) => {
    return (
        <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-3 text-[12px] uppercase tracking-wide"
        >
            <Link href="/" className="text-[#9d9d9d]">
                Home
            </Link>

            <span className="text-[#9d9d9d]">{">"}</span>

            <Link
                href={`/${href}`}
                className="text-[#9d9d9d]"
            >
                {title}
            </Link>
        </nav>
    )
}

export default BreadCrumbs