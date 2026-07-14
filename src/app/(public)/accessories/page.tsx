"use client"

import ProductPage from '@/src/components/shared/product/ProductPage'
import { useAccessory } from '@/src/context/AccessoryProvider'
import { accessoryDisplay, accessoryFilters } from '@/src/lib/product'
import React from 'react'

const AccessoriesPage = () => {
  const { accessories } = useAccessory();
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