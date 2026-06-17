import React from 'react'

const Header = ({ title }: { title: string }) => {
    return (
        <div className='font-semibold text-3xl'>{title}</div>
    )
}

export default Header