import React from 'react'

interface DisplayType {
  image: string;
  title: string;
  description: string;
}

const HomeDisplayBanner = ({ display }: {display: DisplayType}) => {
  return (
     <section className={`relative overflow-hidden rounded-lg bg-[url(${display.image})] bg-cover bg-center text-white shadow-md`}>
          {/* Background image & gradient overlay combo */}
          <div className="absolute inset-0 z-0 "></div>
          
          <div className="relative z-10 grid md:grid-cols-2 items-center">
            {/* Left Content */}
            <div className="p-6 md:p-8 lg:p-16 bg-gradient-to-r from-[#01430d] to-[#519a09] opacity-[0.8]" style={{ 
            clipPath: 'polygon(0% 0%, 100% 0, 85% 100%, 0% 100%)',
            minWidth: '108.5px'
          }}>
              <h1 className="text-xl md:text-3xl font-bold tracking-tight mb-4">
                {display.title}
              </h1>
              <p className="text-emerald-100 max-w-md leading-relaxed md:text-sm">
                {display.description}
              </p>
            </div>
            {/* Right side empty on small screens, lets background show on larger */}
            <div className="hidden md:block h-full min-h-[250px]"></div>
          </div>
        </section>
  )
}

export default HomeDisplayBanner