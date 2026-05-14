"use client";
import React, { useState, useRef } from 'react';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CloseIcon from '@mui/icons-material/Close';

export default function EditProductPage() {
  // --- STATE ---
  const [images, setImages] = useState<(string | null)[]>([null, null, null, null]);
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [isUnlimited, setIsUnlimited] = useState(true);
  const [taxIncluded, setTaxIncluded] = useState<string>("yes");
  const [colors, setColors] = useState<string[]>([]);
  const [hexInput, setHexInput] = useState<string>("");
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- HANDLERS ---
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      const newImages = [...images];
      newImages[selectedIdx] = url;
      setImages(newImages);
    }
  };

  const removeImage = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation(); 
    const newImages = [...images];
    newImages[idx] = null;
    setImages(newImages);
  };

  const addColorByHex = () => {
    if (/^#([0-9A-F]{3}){1,2}$/i.test(hexInput)) {
      setColors([...colors, hexInput]);
      setHexInput("");
    }else{
        alert('wrong input')
    }
  };

  const removeColor = (idx: number) => {
    setColors(colors.filter((_, i) => i !== idx));
  };

  return (
    <div className="min-h-screen p-8 font-sans text-gray-700  bg-[#F2F5F3]">
      <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />

      {/* --- HEADER --- */}
       <div className="bg-white mb-10 max-w-7xl mx-auto rounded-xl justify-between flex items-center overflow-hidden h-20 bg-gradient-to-r from-[#ffffff] to-[#F2F5F3]">
        <div 
          className="h-full flex items-center pl-8 pr-12 bg-gradient-to-r from-[#01430D] to-[#519A09] text-white font-semibold text-sm"
          style={{ 
            clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0% 100%)',
            minWidth: '240px'
          }}
        >
          Edit product
        </div>
        <button className="bg-[#0a3614] mr-[1rem] text-white px-8 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-all shadow-md">
          Publish product
        </button> 
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* --- LEFT UNIFIED COLUMN --- */}
        <div className="bg-white rounded-[0.5rem] shadow-sm border border-gray-100 overflow-hidden h-full">
          
          {/* Basic Details Section */}
          <div className="p-8 border-b border-gray-50">
            <h3 className="font-bold mb-6 text-sm uppercase tracking-wide">Basic details</h3>
            <div className="space-y-5">
              <div>
                <label className="text-xs text-gray-400 mb-2 block font-semibold">Product name</label>
                <input type="text" defaultValue="Agile Pro Rider (eBike)" className="w-full bg-[#fcfdfc] border border-[#e8f3e8] rounded-xl p-3 text-sm font-medium focus:outline-none focus:border-green-200" />
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-2 block font-semibold">Product Description</label>
                <textarea rows={6} className="w-full bg-[#fcfdfc] border border-[#e8f3e8] rounded-xl p-4 text-xs leading-relaxed focus:outline-none focus:border-green-200" defaultValue="Agile Comet X is designed for urban adventurers..." />
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="p-8 border-b border-gray-50">
            <h3 className="font-bold mb-6 text-sm uppercase tracking-wide">Pricing</h3>
            <div className="space-y-5">
              <div>
                <label className="text-xs text-gray-400 mb-2 block font-semibold">Product price</label>
                <div className="relative">
                  <input type="text" defaultValue="250,000" className="w-full bg-[#fcfdfc] border border-[#e8f3e8] rounded-xl p-3 text-sm font-semibold focus:outline-none" />
                  <div className="absolute right-3 top-2.5 flex items-center gap-1 border-l pl-2 border-gray-200">
                    <span className="text-lg">🇳🇬</span>
                    <KeyboardArrowDownOutlinedIcon fontSize="small" className="text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-400 mb-2 block">Discounted Price <span className="text-[#4f9a14]">(Optional)</span></label>
                <div className="relative flex items-center bg-[#fcfdfc] border border-[#e8f3e8] rounded-xl px-3 py-1">
                  <div className="flex items-center gap-2 mr-2">
                    <span className="bg-[#0a3614] text-white px-2 py-0.5 rounded text-xs font-bold">N</span>
                  </div>
                  <input type="text" placeholder="0.00" className="bg-transparent text-sm font-bold text-[#4f9a14] focus:outline-none flex-grow py-2" />
                  <span className="text-[10px] text-gray-500 font-bold uppercase whitespace-nowrap ml-2">Sale = N150,000.00</span>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-xs text-gray-400 mb-4 font-semibold">Tax Included</p>
                <div className="flex gap-8">
                  <div className="flex items-center gap-3 cursor-pointer" onClick={() => setTaxIncluded('yes')}>
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${taxIncluded === 'yes' ? 'border-[#4f9a14]' : 'border-gray-300'}`}>
                      {taxIncluded === 'yes' && <div className="w-1.5 h-1.5 rounded-full bg-[#4f9a14]" />}
                    </div>
                    <span className={`text-xs ${taxIncluded === 'yes' ? 'font-bold text-gray-800' : 'font-normal text-gray-400'}`}>Yes</span>
                  </div>
                  <div className="flex items-center gap-3 cursor-pointer" onClick={() => setTaxIncluded('no')}>
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${taxIncluded === 'no' ? 'border-[#4f9a14]' : 'border-gray-300'}`}>
                      {taxIncluded === 'no' && <div className="w-1.5 h-1.5 rounded-full bg-[#4f9a14]" />}
                    </div>
                    <span className={`text-xs ${taxIncluded === 'no' ? 'font-bold text-gray-800' : 'font-normal text-gray-400'}`}>No</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inventory Section */}
          <div className="p-8">
            <h3 className="font-bold mb-6 text-sm uppercase tracking-wide">Inventory</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-xs text-gray-400 mb-2 block font-semibold">Stock Quantity</label>
                <input type="text" defaultValue="Unlimited" className="w-full bg-[#fcfdfc] border border-[#e8f3e8] rounded-xl p-3 text-sm font-medium focus:outline-none" />
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-2 block font-semibold">Stock Status</label>
                <div className="relative">
                  <select className="w-full bg-[#fcfdfc] border border-[#e8f3e8] rounded-xl p-3 text-sm appearance-none focus:outline-none cursor-pointer font-medium">
                    <option>In Stock</option>
                  </select>
                  <KeyboardArrowDownOutlinedIcon className="absolute right-3 top-3 text-gray-400 pointer-events-none" fontSize="small" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div onClick={() => setIsUnlimited(!isUnlimited)} className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${isUnlimited ? 'bg-[#4f9a14]' : 'bg-gray-200'}`}>
                  <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 shadow-sm transition-all ${isUnlimited ? 'right-0.5' : 'left-0.5'}`}></div>
                </div>
                <span className="text-xs font-bold">Unlimited</span>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 accent-[#4f9a14] cursor-pointer" defaultChecked />
                <span className="text-xs font-bold">Show stock quantity on storefront</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT UNIFIED COLUMN --- */}
        <div className="bg-white rounded-[0.5rem] shadow-sm border border-gray-100 overflow-hidden h-full">
          
          {/* Image Upload Section */}
          <div className="p-8 border-b border-gray-50">
            <h3 className="font-bold mb-4 text-sm uppercase tracking-wide">Upload Product Image</h3>
            <div className="relative w-full aspect-[16/9] bg-[#fcfdfc] rounded-2xl overflow-hidden border border-[#e8f3e8] mb-6 flex items-center justify-center">
              {images[selectedIdx] ? (
                <img src={images[selectedIdx]!} className="w-full h-full object-cover" alt="Selected product" />
              ) : (
                <div className="text-center">
                  <div className="text-xs text-gray-300 italic uppercase font-bold tracking-widest">No Image Selected</div>
                </div>
              )}
              {images[selectedIdx] && (
                <button onClick={() => fileInputRef.current?.click()} className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-[10px] font-bold px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg border border-gray-100 hover:bg-white transition-all">
                  <ReplayOutlinedIcon sx={{ fontSize: 16 }} /> Replace
                </button>
              )}
            </div>

            <div className="grid grid-cols-4 gap-4">
              {images.map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => { setSelectedIdx(idx); if(!img) fileInputRef.current?.click(); }}
                  className={`relative aspect-square rounded-2xl border-2 cursor-pointer flex flex-col items-center justify-center transition-all ${selectedIdx === idx ? 'border-[#4f9a14] bg-[#f8faf8] scale-105 z-10' : 'border-dashed border-[#e8f3e8] bg-white hover:border-green-300'}`}
                >
                  {img ? (
                    <>
                      <img src={img} className="w-full h-full object-cover rounded-xl" alt={`Thumb ${idx + 1}`} />
                      <button 
                        onClick={(e) => removeImage(idx, e)}
                        className="absolute top-1.5 right-1.5 bg-white text-gray-500 rounded-full w-5 h-5 flex items-center justify-center shadow-md border border-gray-100 hover:text-red-500 transition-all z-20"
                      >
                        <CloseIcon sx={{ fontSize: 12 }} />
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="w-8 h-8 bg-[#f0f9f0] rounded-full flex items-center justify-center mb-1">
                        <AddCircleOutlinedIcon className="text-[#4f9a14]" sx={{ fontSize: 20 }} />
                      </div>
                      <span className="text-[8px] font-bold text-[#4f9a14] uppercase tracking-tighter">Add Image</span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Category & Color Section */}
          <div className="p-8">
            <h3 className="font-bold mb-6 text-sm uppercase tracking-wide">Category & Sub - category</h3>
            <div className="space-y-4 mb-10">
              <div className="relative">
                <select className="w-full bg-[#fcfdfc] border border-[#e8f3e8] rounded-xl p-3.5 text-sm appearance-none focus:outline-none focus:border-green-200 cursor-pointer font-medium">
                  <option value="" disabled >Select product category</option>
                  <option>E-Bikes</option>
                </select>
                <KeyboardArrowDownOutlinedIcon className="absolute right-4 top-4 text-gray-400 pointer-events-none" fontSize="small" />
              </div>
              <div className="relative">
                <select className="w-full bg-[#fcfdfc] border border-[#e8f3e8] rounded-xl p-3.5 text-sm appearance-none focus:outline-none focus:border-green-200 cursor-pointer font-medium">
                  <option value="" disabled >Select product sub-category</option>
                  <option>Urban Cruisers</option>
                </select>
                <KeyboardArrowDownOutlinedIcon className="absolute right-4 top-4 text-gray-400 pointer-events-none" fontSize="small" />
              </div>
            </div>

            <p className="text-xs text-gray-400 mb-5 font-semibold uppercase tracking-tight">Add color (Hex code)</p>
            <div className="flex flex-wrap items-center gap-4">
              {colors.map((color, idx) => (
                <div key={idx} className="relative group">
                  <div className="w-12 h-12 rounded-2xl shadow-sm border border-gray-200 overflow-hidden" style={{ backgroundColor: color }} />
                  <button 
                    onClick={() => removeColor(idx)}
                    className="absolute -top-1.5 -right-1.5 bg-white text-gray-500 rounded-full w-5 h-5 flex items-center justify-center shadow-md border border-gray-100 hover:text-red-500 transition-all"
                  >
                    <CloseIcon sx={{ fontSize: 10 }} />
                  </button>
                </div>
              ))}

              <div className="flex items-center border border-[#e8f3e8] rounded-2xl bg-[#fcfdfc] px-2 h-12 w-24 shadow-sm focus-within:border-green-200 transition-colors">
                <input 
                  type="text" 
                  value={hexInput} 
                  onChange={(e) => setHexInput(e.target.value)}
                  placeholder="#FFFFFF" 
                  className="bg-transparent text-xs font-bold w-full focus:outline-none placeholder:text-gray-300"
                />
                <button onClick={addColorByHex} className="text-green-600 hover:scale-125 transition-transform ml-1">
                  <AddOutlinedIcon />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}