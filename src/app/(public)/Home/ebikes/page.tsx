import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ProductCard from '@/src/components/home/ProductCard';
import HomeDisplayBanner from '@/src/components/home/HomeDisplayBanner';

// 1. Define the interface for the bike data
interface BikeProduct {
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

// 2. Mock data array for the product loop
const bikeProducts: BikeProduct[] = [
  {
    id: '1',
    name: 'Agile Comet X',
    imageUrl:'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1200',
    // imageUrl: 'https://images.unsplash.com/photo-1571068316344-750895a43937?auto=format&fit=crop&q=80&w=600', // Replace with your local asset path
    currentPrice: '₦150,000',
    originalPrice: '₦250,000',
    rating: 5,
    reviewsCount: 91,
    specs: {
      range: '65 miles',
      material: 'Steel',
      weight: '26.7 Kg',
      torque: '50 Nm - 70 NM',
      motor: '750W mid-drive',
      battery: '600 Wh, 3.5 hrs',
    },
  },
  {
    id: '2',
    name: 'Agile Comet X',
    imageUrl: 'https://images.unsplash.com/photo-1571068316344-750895a43937?auto=format&fit=crop&q=80&w=600',
    currentPrice: '₦150,000',
    originalPrice: '₦250,000',
    rating: 5,
    reviewsCount: 91,
    specs: {
      range: '65 miles',
      material: 'Steel',
      weight: '26.7 Kg',
      torque: '50 Nm - 70 NM',
      motor: '750W mid-drive',
      battery: '600 Wh, 3.5 hrs',
    },
  },
  {
    id: '3',
    name: 'Agile Comet X',
    imageUrl: 'https://images.unsplash.com/photo-1571068316344-750895a43937?auto=format&fit=crop&q=80&w=600',
    currentPrice: '₦150,000',
    originalPrice: '₦250,000',
    rating: 5,
    reviewsCount: 91,
    specs: {
      range: '65 miles',
      material: 'Steel',
      weight: '26.7 Kg',
      torque: '50 Nm - 70 NM',
      motor: '750W mid-drive',
      battery: '600 Wh, 3.5 hrs',
    },
  },
];

export default function ElectricBikesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* --- HERO BANNER --- */}
       <HomeDisplayBanner/>

        {/* --- PRODUCT GRID --- */}
        <section>
          <ProductCard bikeProducts={bikeProducts}/>
        </section>
         {/* Pagination Footer */}
      <div className="flex justify-between items-center mt-8 max-[689px]:flex-col">
        <div className='w-[6.5rem] max-[689px]:w-[9%] max-[689px]:hidden'></div>
        <div className="flex items-center gap-3 max-[689px]:mb-[2rem]">
          <button className="w-10 h-10 flex items-center justify-center bg-[#4f7c2b] text-white rounded-full hover:bg-[#3d6122] transition-colors shadow-md">
            <ArrowBackIcon fontSize="small" />
          </button>
          <div className="flex items-center gap-2">
             <div className="w-6 h-1 bg-[#0d2a13] rounded-full"></div>
             <div className="w-4 h-1 bg-gray-200 rounded-full"></div>
             <div className="w-4 h-1 bg-gray-200 rounded-full"></div>
          </div>
          <button className="w-10 h-10 flex items-center justify-center bg-[#4f7c2b] text-white rounded-full hover:bg-[#3d6122] transition-colors shadow-md">
            <ArrowForwardIcon fontSize="small" />
          </button>
        </div>
        <div className='flex items-center'>
          <div className="text-sm text-gray-600 font-medium">
          Showing 1-10 of 50
        </div>
        <div className=' w-[0.1rem] h-[1rem] bg-[grey] mx-[0.4rem]'></div>
        <span>page <span>1</span></span>   // still working
        </div>
      </div>
      </div>
    </main>
  );
}