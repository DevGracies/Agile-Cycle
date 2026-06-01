import EbikesImage1 from "@/public/ebikes/ebikesm.png"
import EbikesImage2 from "@/public/ebikes/Ebike2.png"
import EbikesImage3 from "@/public/ebikes/Ebikes3.png"

import accessory1 from "@/public/accessories/accessory1.png"
import accessory2 from "@/public/accessories/accessory2.png"
import accessory3 from "@/public/accessories/accessory3.png"
import accessory4 from "@/public/accessories/accessory4.png"
import accessory5 from "@/public/accessories/accessory5.png"
import accessory6 from "@/public/accessories/accessory6.png"

import enhancement1 from "@/public/enhancement/enhancement1.png"
import enhancement2 from "@/public/enhancement/enhancement2.png"
import enhancement3 from "@/public/enhancement/enhancement3.png"
import enhancement4 from "@/public/enhancement/enhancement4.png"
import enhancement5 from "@/public/enhancement/enhancement5.png"
import enhancement6 from "@/public/enhancement/enhancement6.png"
import { Product } from "../types/product"


export const categories = [
  {
    title: 'Cruisers',
    description:
      'Relaxed stylish bikes designed for comfort and leisure rides. Perfect for anyone who values comfort.',
    image: EbikesImage1.src,
  },
  {
    title: 'Commuters',
    description:
      'Sleek lightweight e‑bikes designed for daily commutes, short trips, and urban exploration.',
    image: EbikesImage2.src,
  },
  {
    title: 'Cargo Bikes',
    description:
      'Heavy duty frames built to carry groceries, gear, or even passengers. Ideal for eco-friendly transport solutions.',
    image: EbikesImage3.src,
  },
  {
    title: 'Folding Bikes',
    description:
      'Compact designs that fold for easy storage and portability. Great for riders who need flexibility on the go.',
    image: EbikesImage1.src,
  },
  {
    title: 'Utility Bikes',
    description:
      'Versatile all‑purpose models that balances comfort and durability. A smart choice without needing multiple bikes.',
    image: EbikesImage2.src,
  },
  {
    title: 'Trikes ((3 Wheelers))',
    description:
      'High performance models engineered for riders who demand speed, endurance, and cutting-edge technology.',
    image: EbikesImage3.src,
  },
]

export const services = [
  {
    title: 'After‑Sales Services',
    description:
      'Professional maintenance repairs and support to keep your e-bike running smoothly long after purchase.',
  },
  {
    title: 'Tourism Packages',
    description:
      'Guided e‑bike tours and adventure experiences designed for leisure riders. and explorers',
  },
  {
    title: 'Advertising Packages',
    description:
      'Promotional opportunities for businesses using e‑bike fleets or branded accessories.',
  },
  {
    title: 'Consultancies',
    description:
      'Expert advice on fleet management sustainability programs and e‑bike integration for organizations.',
  },
  {
    title: 'Ride Sharing Services',
    description:
      'Community and corporate ride share solutions, offering eco‑friendly mobility at scale.',
  },
]

export const accessories = [
  {
    id: "#product1",
    name: 'Ajustable Bike Stem',
    image: accessory1.src,
    price: 73500,
    rating: 5,
  },
  {
    id: "#product2",
    name: 'Oversize Saddle',
    image: accessory2.src,
    price: 73500,
    rating: 5,
  },
  {
    id: "#product3",
    name: 'Ebike Hitch Rack',
    image: accessory3.src,
    price: 100000,
    rating: 5,
  },
  {
    id: "#product4",
    name: 'Hunter Light',
    image: accessory4.src,
    price: 73500,
    rating: 5,
  },
  {
    id: "#product5",
    name: 'E-bike Pump',
    image: accessory5.src,
    price: 73500,
    rating: 5,
  },
  {
    id: "#product6",
    name: 'Break Handle Bell',
    image: accessory6.src,
    price: 100000,
    rating: 5,
  },
]
export const enhancements: Product[] = [
  {
    id: "#product1",
    name: 'Extended Range Lithium Battery',
    image: enhancement1.src,
    price: 73000,
    rating: 5,
  },
  {
    id: "#product2",
    name: 'Smart Display Console',
    image: enhancement2.src,
    price: 73000,
    rating: 5,
  },
  {
    id: "#product3",
    name: 'Suspension Seat Post',
    image: enhancement3.src,
    price: 73000,
    rating: 5,
  },
  {
    id: "#product4",
    name: 'Integrated Led Lighting System',
    image: enhancement4.src,
    price: 73000,
    rating: 5,
  },
  {
    id: "#product5",
    name: 'Cargo Rear Rack with Panniers',
    image: enhancement5.src,
    price: 73000,
    rating: 5,
  },
  {
    id: "#product6",
    name: 'Ergonomic Gel Saddles',
    image: enhancement6.src,
    price: 73000,
    rating: 5,
  },
]
