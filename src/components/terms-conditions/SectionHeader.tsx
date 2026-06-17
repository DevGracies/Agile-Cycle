import React from 'react'

const SectionHeader = ({ title }: { title: string }) => {
    return (
        <div className='font-semibold text-primary uppercase'>{title}</div>
    )
}

export default SectionHeader