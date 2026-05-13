import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, User, ShoppingCart, ChevronDown } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Image
            src="/Agile-Cycle-Logo.png"
            alt="Agile Cycle Logo"
            width={80}
            height={62}
            className="absolute top-[10px] left-[70px]"
            priority
          />
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-gray-700 font-medium text-sm">
          <Link href="/" className="hover:text-green-700">Home</Link>
          <div className="flex items-center cursor-pointer hover:text-green-700">
            E-bikes <ChevronDown size={14} className="ml-1" />
          </div>
          <div className="flex items-center cursor-pointer hover:text-green-700">
            Accessories <ChevronDown size={14} className="ml-1" />
          </div>
          <div className="flex items-center cursor-pointer hover:text-green-700">
            Enhancements <ChevronDown size={14} className="ml-1" />
          </div>
          <div className="flex items-center cursor-pointer hover:text-green-700">
            Explore <ChevronDown size={14} className="ml-1" />
          </div>
          <div className="flex items-center cursor-pointer hover:text-green-700">
            Support <ChevronDown size={14} className="ml-1" />
          </div>
        </nav>

        <div className="flex items-center space-x-4">
          <User size={20} className="text-gray-600 cursor-pointer" />
          <div className="relative cursor-pointer">
            <ShoppingCart size={20} className="text-gray-600" />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </header>

      {/* Search Bar Row */}
      <div className="w-full flex justify-center py-4">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-50 border border-gray-100 rounded-md py-2 px-4 text-sm focus:outline-none"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2">
            <span className="text-green-700 border-l border-gray-300 pl-2">|</span>
            <Search size={16} className="text-green-700" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/signup-bike-image.jpg"
            alt="Agile Cycle E-bike in nature"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Frosted Glass Content Card */}
        <div className="relative z-10 h-full flex items-center px-6 lg:px-20 max-w-7xl mx-auto">
          <div className="bg-white/30 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-xl text-white border border-white/20">
            <span className="tracking-[0.5em] text-sm font-semibold uppercase block mb-4">
              L E T ' S &nbsp; G O
            </span>
            <h1 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              EVERYWHERE!
            </h1>
            <p className="text-sm md:text-base leading-relaxed mb-10 opacity-90">
              Agile Cycle' is a disruptive lifestyle complementary brand, driven by a strong 
              ethos and sense of responsibility to better the lives and livelihoods of our 
              clients and the world in general, particularly through green/clean energy or 
              sustainable solutions.
            </p>
            <Link 
              href="/shop"
              className="inline-block bg-white text-green-800 px-8 py-3 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors"
            >
              Explore Bikes
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}