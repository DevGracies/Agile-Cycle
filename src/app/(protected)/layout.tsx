import ProtectedLayout from '@/src/components/layout/ProtectedLayout'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ProtectedLayout>
            {children}
        </ProtectedLayout>
    )
}

export default layout