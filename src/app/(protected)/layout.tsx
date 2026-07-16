import ProtectedLayout from '@/src/components/layout/ProtectedLayout'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        // <ProtectedLayout>
            <div>{children}</div>
        // </ProtectedLayout>
    )
}

export default layout