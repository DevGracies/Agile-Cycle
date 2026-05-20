"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Search, User, ShoppingCart, ChevronDown, ChevronUp, ArrowRight,
  ShieldCheck, CreditCard, Info, PhoneCall, Newspaper 
} from 'lucide-react';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  // Close dropdowns if clicking outside the navbar
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(null); // Clear previous frame
      setTimeout(() => setActiveDropdown(label), 10); // Seamless swap
    }
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'E-bikes', hasDropdown: true },
    { label: 'Accessories', hasDropdown: true },
    { label: 'Enhancements', hasDropdown: true },
    { label: 'Explore', hasDropdown: true },
    { label: 'Support', hasDropdown: true },
  ];

  return (
    <nav ref={navbarRef} className="w-full bg-white font-sans relative z-50 border-b border-gray-100">
      {/* Upper Top Navbar Layer */}
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="absolute top-[10px] left-[70px] w-[80px] h-[62px] flex-shrink-0">
          <Image
            src="/Agile-Cycle-Logo.png"
            alt="Agile Cycle Logo"
            fill
            priority
            className="object-contain opacity-100 rotate-0"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              {item.hasDropdown ? (
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className={`text-[14px] font-semibold flex items-center gap-1.5 transition-colors duration-200 ${
                    activeDropdown === item.label ? 'text-[#4CA832]' : 'text-[#4A4A4A] hover:text-black'
                  }`}
                >
                  {item.label}
                  {activeDropdown === item.label ? (
                    <ChevronUp className="w-4 h-4 text-[#4CA832]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#7A7A7A]" />
                  )}
                </button>
              ) : (
                <Link
                  href={item.href || '#'}
                  className="text-[#4A4A4A] hover:text-black text-[14px] font-semibold transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Utility Icons */}
        <div className="flex items-center gap-5 text-[#4A4A4A]">
          <button className="hover:text-black transition-colors">
            <User className="w-5 h-5 stroke-[1.5]" />
          </button>
          <button className="relative hover:text-black transition-colors">
            <ShoppingCart className="w-5 h-5 stroke-[1.5]" />
            <span className="absolute -top-1.5 -right-2 bg-[#E14B33] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Search Bar Layer */}
      <div className="w-full pb-4 px-6">
        <div className="max-w-2xl mx-auto relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-[#FAF9F5] border border-[#EDEDED] rounded-md py-2 px-4 text-sm outline-none placeholder-[#A0A0A0] text-gray-7xl transition-all focus:border-gray-300"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-[#7A7A7A]">
            <span className="text-gray-300">|</span>
            <Search className="w-4 h-4 hover:text-black cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Dynamic Mega Dropdowns Platform */}
      {activeDropdown && (
        <div className="absolute top-full left-0 w-full bg-[#F5F7F5] border-t border-gray-100 shadow-xl transition-all duration-200">
          <div className="max-w-7xl mx-auto px-10 py-8 min-h-[420px]">
            
            {/* 1. E-BIKES DROPDOWN */}
            {activeDropdown === 'E-bikes' && (
              <div className="grid grid-cols-4 gap-8">
                {/* Sidebar menu block */}
                <div className="col-span-1 flex flex-col justify-between border-r border-gray-200/60 pr-6">
                  <div>
                    <h3 className="text-[#3b662d] font-bold text-lg mb-6">Ebikes</h3>
                    <ul className="space-y-4">
                      <li className="font-semibold text-white bg-gradient-to-r from-[#4CA832] to-[#A3D96C]/20 px-4 py-2.5 rounded-l-md border-l-4 border-[#3b662d]">Cruisers</li>
                      <li className="font-semibold text-gray-500 hover:text-gray-900 px-4 cursor-pointer transition-colors">Commuters</li>
                      <li className="font-semibold text-gray-500 hover:text-gray-900 px-4 cursor-pointer transition-colors">Cargo Bikes</li>
                      <li className="font-semibold text-gray-500 hover:text-gray-900 px-4 cursor-pointer transition-colors">Folding Bikes</li>
                      <li className="font-semibold text-gray-500 hover:text-gray-900 px-4 cursor-pointer transition-colors">Utility Bikes</li>
                      <li className="font-semibold text-gray-500 hover:text-gray-900 px-4 cursor-pointer transition-colors">Trikes</li>
                      <li className="font-semibold text-gray-500 hover:text-gray-900 px-4 cursor-pointer transition-colors">Ride share</li>
                    </ul>
                  </div>
                  <button className="flex items-center gap-2 font-bold text-gray-800 text-sm hover:gap-3 transition-all pt-6">
                    All Ebikes <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                {/* Content Cards Grid */}
                <div className="col-span-3">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-500 font-semibold text-sm">Most popular</span>
                    <button className="flex items-center gap-2 font-bold text-gray-800 text-sm">
                      All Cruisers <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    {/* Fallback Gray Card */}
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col h-full">
                      <div className="w-full h-48 bg-gray-400 flex items-center justify-center" />
                      <div className="p-4 flex flex-col gap-2">
                        <h4 className="font-bold text-gray-900 text-sm">Agile Comet X</h4>
                        <div className="flex items-baseline gap-2">
                          <span className="text-[#4CA832] font-bold text-sm">₦150,000</span>
                          <span className="text-gray-400 line-through text-[11px]">₦158,000</span>
                        </div>
                      </div>
                    </div>
                    {/* Render Image Card 1 */}
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col h-full">
                      <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: "url('/bike-placeholder.jpg')" }} />
                      <div className="p-4 flex flex-col gap-2">
                        <h4 className="font-bold text-gray-900 text-sm">Agile Comet X</h4>
                        <div className="flex items-baseline gap-2">
                          <span className="text-[#4CA832] font-bold text-sm">₦150,000</span>
                          <span className="text-gray-400 line-through text-[11px]">₦158,000</span>
                        </div>
                      </div>
                    </div>
                    {/* Render Image Card 2 */}
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col h-full">
                      <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: "url('/bike-placeholder.jpg')" }} />
                      <div className="p-4 flex flex-col gap-2">
                        <h4 className="font-bold text-gray-900 text-sm">Agile Comet X</h4>
                        <div className="flex items-baseline gap-2">
                          <span className="text-[#4CA832] font-bold text-sm">₦150,000</span>
                          <span className="text-gray-400 line-through text-[11px]">₦158,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. ACCESSORIES DROPDOWN */}
            {activeDropdown === 'Accessories' && (
              <div className="grid grid-cols-4 gap-8">
                <div className="col-span-1 flex flex-col justify-between border-r border-gray-200/60 pr-6">
                  <div>
                    <h3 className="text-[#3b662d] font-bold text-lg mb-6">Accessories</h3>
                    <ul className="space-y-4">
                      <li className="font-semibold text-white bg-gradient-to-r from-[#4CA832] to-[#A3D96C]/20 px-4 py-2.5 rounded-l-md border-l-4 border-[#3b662d]">Lights</li>
                      <li className="font-semibold text-gray-500 hover:text-gray-900 px-4 cursor-pointer transition-colors">Carrier bags</li>
                      <li className="font-semibold text-gray-500 hover:text-gray-900 px-4 cursor-pointer transition-colors">Mirrors</li>
                      <li className="font-semibold text-gray-500 hover:text-gray-900 px-4 cursor-pointer transition-colors">Helmets</li>
                      <li className="font-semibold text-gray-500 hover:text-gray-900 px-4 cursor-pointer transition-colors">Phone holders</li>
                      <li className="font-semibold text-gray-500 hover:text-gray-900 px-4 cursor-pointer transition-colors">Electric pump</li>
                      <li className="font-semibold text-gray-500 hover:text-gray-900 px-4 cursor-pointer transition-colors">Batteries</li>
                    </ul>
                  </div>
                  <button className="flex items-center gap-2 font-bold text-gray-800 text-sm hover:gap-3 transition-all pt-6">
                    All Accessories <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="col-span-3">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-500 font-semibold text-sm">Most popular</span>
                    <button className="flex items-center gap-2 font-bold text-gray-800 text-sm">
                      All Lights <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    {/* Accessory 1 */}
                    <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between h-full">
                      <div className="w-full h-40 bg-contain bg-center bg-no-repeat mb-4" style={{ backgroundImage: "url('/hunter-light.jpg')" }} />
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-2">Hunter Light</h4>
                        <span className="text-[#4CA832] font-bold text-sm">₦73,000</span>
                      </div>
                    </div>
                    {/* Accessory 2 */}
                    <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between h-full">
                      <div className="w-full h-40 bg-contain bg-center bg-no-repeat mb-4" style={{ backgroundImage: "url('/cruisers-light.jpg')" }} />
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-2">Cruisers Light</h4>
                        <span className="text-[#4CA832] font-bold text-sm">₦73,000</span>
                      </div>
                    </div>
                    {/* Accessory 3 */}
                    <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between h-full">
                      <div className="w-full h-40 bg-contain bg-center bg-no-repeat mb-4" style={{ backgroundImage: "url('/headlight.jpg')" }} />
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-2">Headlight (Female Connector)</h4>
                        <span className="text-[#4CA832] font-bold text-sm">₦73,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. ENHANCEMENTS DROPDOWN */}
            {activeDropdown === 'Enhancements' && (
              <div className="grid grid-cols-4 gap-8">
                <div className="col-span-1 flex flex-col justify-between border-r border-gray-200/60 pr-6">
                  <div>
                    <h3 className="text-[#3b662d] font-bold text-lg mb-6">Enhancements</h3>
                    <ul className="space-y-4">
                      <li className="font-semibold text-white bg-gradient-to-r from-[#4CA832] to-[#A3D96C]/20 px-4 py-2.5 rounded-l-md border-l-4 border-[#3b662d]">Performance</li>
                      <li className="font-semibold text-gray-500 hover:text-gray-900 px-4 cursor-pointer transition-colors">Comfort</li>
                      <li className="font-semibold text-gray-500 hover:text-gray-900 px-4 cursor-pointer transition-colors">Safety</li>
                      <li className="font-semibold text-gray-500 hover:text-gray-900 px-4 cursor-pointer transition-colors">Technology</li>
                      <li className="font-semibold text-gray-500 hover:text-gray-900 px-4 cursor-pointer transition-colors">Utility</li>
                      <li className="font-semibold text-gray-500 hover:text-gray-900 px-4 cursor-pointer transition-colors">Style</li>
                    </ul>
                  </div>
                  <button className="flex items-center gap-2 font-bold text-gray-800 text-sm hover:gap-3 transition-all pt-6">
                    All Enhancements <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="col-span-3">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-500 font-semibold text-sm">Most popular</span>
                    <button className="flex items-center gap-2 font-bold text-gray-800 text-sm">
                      All Performance Enhancements <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    {/* Item 1 */}
                    <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between h-full">
                      <div className="w-full h-40 bg-contain bg-center bg-no-repeat mb-4" style={{ backgroundImage: "url('/lithium-battery.jpg')" }} />
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-2">Extended Range Lithium Battery</h4>
                        <span className="text-[#4CA832] font-bold text-sm">₦73,000</span>
                      </div>
                    </div>
                    {/* Item 2 */}
                    <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between h-full">
                      <div className="w-full h-40 bg-contain bg-center bg-no-repeat mb-4" style={{ backgroundImage: "url('/smart-display.jpg')" }} />
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-2">Smart Display Console</h4>
                        <span className="text-[#4CA832] font-bold text-sm">₦73,000</span>
                      </div>
                    </div>
                    {/* Item 3 */}
                    <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between h-full">
                      <div className="w-full h-40 bg-contain bg-center bg-no-repeat mb-4" style={{ backgroundImage: "url('/seat-post.jpg')" }} />
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-2">Suspension Seat Post</h4>
                        <span className="text-[#4CA832] font-bold text-sm">₦73,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. EXPLORE DROPDOWN */}
            {activeDropdown === 'Explore' && (
              <div className="grid grid-cols-4 gap-8">
                <div className="col-span-1 border-r border-gray-200/60 pr-6">
                  <h3 className="text-[#3b662d] font-bold text-lg mb-6">Explore Our Services</h3>
                </div>
                <div className="col-span-3 space-y-4 max-h-[450px] overflow-y-auto pr-2">
                  {[
                    { title: "After Sales", desc: "From assembly and upgrades to repairs and tune-ups, we keep your ride safe, smooth, and powerful.", img: "/service1.jpg" },
                    { title: "Agile Tours", desc: "Discover Nigeria on two wheels with AGILE Tours. Guided rides take you through historic landmarks, cultural sites, and hidden gems.", img: "/service2.jpg" },
                    { title: "Agile Ads", desc: "AGILE Advertising turns bicycles into eco-friendly ad vehicles, reaching people on busy routes and hard-to-access areas.", img: "/service3.jpg" },
                    { title: "Consultancies", desc: "Expert guidance for every rider, from e-bike upgrades and maintenance to personalized classes and health advice.", img: "/service4.jpg" },
                    { title: "Agile Hubs", desc: "AGILE Hubs builds smart ride-sharing across Nigeria's campuses, estates, and public spaces.", img: "/service5.jpg" }
                  ].map((service, idx) => (
                    <div key={idx} className="flex bg-white rounded-lg shadow-sm overflow-hidden items-center justify-between p-0 h-[76px]">
                      <div className="flex items-center h-full flex-1">
                        {/* Custom Clip-Path Angle Banner Styling */}
                        <div 
                          className="h-full w-48 relative bg-gradient-to-r from-[#174613] to-[#4CA832] flex items-center pl-6 text-white font-bold text-md"
                          style={{ clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0% 100%)' }}
                        >
                          <div className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay" style={{ backgroundImage: `url(${service.img})` }} />
                          <span className="relative z-10">{service.title}</span>
                        </div>
                        <p className="text-gray-600 text-[12px] px-6 line-clamp-2 max-w-xl">
                          {service.desc}
                        </p>
                      </div>
                      <button className="flex items-center gap-1.5 font-bold text-[#4CA832] text-xs pr-6 whitespace-nowrap hover:gap-2.5 transition-all">
                        Read more <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. SUPPORT DROPDOWN */}
            {activeDropdown === 'Support' && (
              <div className="grid grid-cols-4 gap-8">
                <div className="col-span-1 border-r border-gray-200/60 pr-6">
                  <h3 className="text-[#3b662d] font-bold text-lg mb-6">Support</h3>
                  <div className="font-semibold text-white bg-gradient-to-r from-[#4CA832] to-[#A3D96C]/20 px-4 py-2.5 rounded-l-md border-l-4 border-[#3b662d] inline-block w-full">
                    Services
                  </div>
                </div>
                <div className="col-span-3 grid grid-cols-2 gap-6">
                  {/* Grid of support actionable panels */}
                  <div className="bg-[#E4EFE2] rounded-xl border border-[#D5E6D2] p-5 flex items-start gap-4 cursor-pointer hover:shadow-sm transition-shadow">
                    <Search className="w-6 h-6 text-[#3b662d] mt-0.5" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">Search</h4>
                      <p className="text-gray-500 text-xs">Find what you need fast.</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-5 flex items-start gap-4 border border-gray-100 cursor-pointer hover:shadow-sm transition-shadow">
                    <ShieldCheck className="w-6 h-6 text-[#3b662d] mt-0.5" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">Warranty</h4>
                      <p className="text-gray-500 text-xs">Reliable coverage for your gear.</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-5 flex items-start gap-4 border border-gray-100 cursor-pointer hover:shadow-sm transition-shadow">
                    <Newspaper className="w-6 h-6 text-[#3b662d] mt-0.5" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">Blog</h4>
                      <p className="text-gray-500 text-xs">Read tips and updates.</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-5 flex items-start gap-4 border border-gray-100 cursor-pointer hover:shadow-sm transition-shadow">
                    <CreditCard className="w-6 h-6 text-[#3b662d] mt-0.5" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">Payment</h4>
                      <p className="text-gray-500 text-xs">Secure and easy checkout.</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-5 flex items-start gap-4 border border-gray-100 cursor-pointer hover:shadow-sm transition-shadow">
                    <Info className="w-6 h-6 text-[#3b662d] mt-0.5" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">About Us</h4>
                      <p className="text-gray-500 text-xs">Learn our story and mission.</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-5 flex items-start gap-4 border border-gray-100 cursor-pointer hover:shadow-sm transition-shadow">
                    <PhoneCall className="w-6 h-6 text-[#3b662d] mt-0.5" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">Contact Us</h4>
                      <p className="text-gray-500 text-xs">We&apos;re here to help you.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </nav>
  );
}