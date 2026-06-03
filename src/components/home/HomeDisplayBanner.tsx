import React from 'react'

const HomeDisplayBanner = () => {
  return (
     <section className="relative overflow-hidden rounded-lg bg-[url('https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center text-white shadow-md">
          {/* Background image & gradient overlay combo */}
          <div className="absolute inset-0 z-0 "></div>
          
          <div className="relative z-10 grid md:grid-cols-2 items-center">
            {/* Left Content */}
            <div className="p-8 md:p-12 lg:p-16 bg-gradient-to-r from-[#01430d] to-[#519a09] opacity-[0.8]" style={{ 
            clipPath: 'polygon(0% 0%, 100% 0, 85% 100%, 0% 100%)',
            minWidth: '108.5px'
          }}>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Electric Bikes
              </h1>
              <p className="text-emerald-100 max-w-md leading-relaxed text-sm md:text-base">
                Affordable e-bikes for every lifestyle: cruisers, commuters, cargo, folding, utility, and trikes. 
                From mountain trails to city streets, Agile Cycle has the ride for your adventure. Enjoy the 
                journey with family and friends.
              </p>
            </div>
            {/* Right side empty on small screens, lets background show on larger */}
            <div className="hidden md:block h-full min-h-[250px]"></div>
          </div>
        </section>
  )
}

export default HomeDisplayBanner