import React from 'react'

const ExternalLink = ({href, title}: {href: string, title: string}) => {
  return (
    <a href={href} target='_blank' className='text-primary'>{title}</a>
  )
}

export default ExternalLink