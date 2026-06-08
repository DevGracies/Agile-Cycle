import React from 'react'
type bikeProducts= {
  id: string;
  name: string;
  imageUrl: string;
  currentPrice: string;
  originalPrice: string;
  rating: number;
  reviewsCount: number;
  specs: {
    range: string;
    material: string;
    weight: string;
    torque: string;
    motor: string;
    battery: string;
  };
}
type BikeListProps = {
  bikeProducts: bikeProducts[]
}
const ProductCard = ({bikeProducts}:BikeListProps) => {
  return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bikeProducts.map((bike) => (
            <div 
              key={bike.id} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col justify-between"
            >
              {/* Product Image Section */}
              <div className="relative pt-[65%] bg-gray-100">
                <span className="absolute top-0 right-0 z-10 bg-[#4ca600] text-white text-xs font-semibold px-5 py-3 rounded-tr-lg rounded-bl-lg">
                  E-Bike
                </span>
                <img 
                  src={bike.imageUrl} 
                  alt={bike.name}
                  className="absolute inset-0 w-full h-full object-cover" 
                />
              </div>

              {/* Product Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <h3 className="text-center text-lg font-bold text-gray-800 mb-3">
                    {bike.name}
                  </h3>

                  {/* Price & Rating */}
                  <div className="flex items-center justify-between mb-4 px-1">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-[#4ca600] font-bold text-lg">{bike.currentPrice}</span>
                      <span className="text-gray-400 line-through text-xs">{bike.originalPrice}</span>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      <div className="flex text-amber-500">
                        {[...Array(bike.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-gray-500 text-xs font-medium">({bike.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Specifications Grid */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs border-t border-gray-100 pt-3 mb-6 text-gray-700">
                    <div><span className="font-semibold text-black">Range:</span> {bike.specs.range}</div>
                    <div><span className="font-semibold text-black">Torque:</span> {bike.specs.torque}</div>
                    <div><span className="font-semibold text-black">Material:</span> {bike.specs.material}</div>
                    <div><span className="font-semibold text-black">Motor:</span> {bike.specs.motor}</div>
                    <div><span className="font-semibold text-black">Weight:</span> {bike.specs.weight}</div>
                    <div><span className="font-semibold text-black">Battery:</span> {bike.specs.battery}</div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center space-x-2">
                  <button className="flex-1 bg-[#033e18] hover:bg-[#022d11] text-white font-medium text-sm py-2.5 px-4 rounded-lg transition-colors duration-200">
                    Add to cart
                  </button>
                  <button className="p-2.5 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors" aria-label="Maximize view">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
  )
}

export default ProductCard