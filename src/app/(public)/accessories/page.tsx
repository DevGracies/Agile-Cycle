"use client"

import ProductPage from '@/src/components/shared/product/ProductPage'
import { accessories } from '@/src/lib/data'
import { accessoryDisplay, accessoryFilters } from '@/src/lib/product'
import React from 'react'

const AccessoriesPage = () => {
    // console.log(accessoryDisplay)   
  return (
    <div>
        <ProductPage 
            filter={accessoryFilters}
            breadcrumb='ACCESSORIES'
            products={accessories}
            display={accessoryDisplay}
        />
    </div>
  )
}

export default AccessoriesPage