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
// import { Accessories, Enhancements, Product } from "../types"
import { Insight } from "../types";


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

// Insights data for the Home Agile Cycle Shop section and blog page
export const insights: Insight[] = [
  {
    _id: "1",
    image: "/home/insight.png",
    heroImage: "/home/blog.png",
    title: "Tips and Tricks for Keeping Your E-Bike Running Smoothly",
    description: "Keeping your eBike in great shape doesn't have to be complicated.",
    publishedAt: "January 22, 2026",
    author: {
      _id: "1",
      name: "Agile Cycle"
    },
    likes: 24,
    comments: 12,

    commentsData: [
      {
        _id: "1",
        name: "Chimako Favour",
        time: "5 hrs ago",
        likes: 12,
        content:
          "Absolutely love Agile Cycle, affordable on any budget and such fast delivery, straight to my door!",
        replies: [
          {
            _id: "11",
            name: "Admin",
            time: "3 hrs ago",
            likes: 2,
            content: "Thanks for your feedback."
          },
          {
            _id: "12",
            name: "Samuel",
            time: "2 hrs ago",
            likes: 1,
            content: "Great article."
          }
        ]
      },

      {
        _id: "2",
        name: "Samuel",
        time: "1 hr ago",
        likes: 8,
        content:
          "This article was really helpful. Looking forward to more updatesss.",
        replies: [

        ]
      }
    ],

    sections: [
      {
        _id: "1",
        title: "Keep the battery charged",
        content: "The battery is the most critical component...",
        image: "/home/blog2.png",
      },
      {
        _id: "2",
        title: "Keep the battery charged",
        content: "The battery is the most critical component...",
        image: "/home/blog3.png",
      },
      {
        _id: "3",
        title: "Keep the battery charged",
        content: "The battery is the most critical component...",
        image: "/home/blog4.png",
      },
      {
        _id: "4",
        title: "Keep the battery charged",
        content: "The battery is the most critical component...",
        image: "/home/blog5.png",
      },
      {
        _id: "5",
        title: "Keep the battery charged",
        content: "The battery is the most critical component...",
        image: "/home/blog6.png",
      },
      {
        _id: "6",
        title: "Keep the battery charged",
        content: "The battery is the most critical component...",
        image: "/home/blog7.png",
      },
      {
        _id: "7",
        title: "Keep the battery charged",
        content: "The battery is the most critical component...",
        image: "/home/blog8.png",
      },
      {
        _id: "8",
        title: "Keep the battery charged",
        content: "The battery is the most critical component...",
        image: "/home/blog9.png",
      },
    ],
  },
  {
    _id: "2",
    image: "/home/insight2.png",
    heroImage: "/home/blog2.png",
    title: "Tips and Tricks for Keeping Your E-Bike Running Smoothly",
    description: "Keeping your eBike in great shape doesn't have to be complicated.",
    publishedAt: "January 22, 2026",
    author: {
      name: "Agile Cycle",
      _id: "1"
    },
    likes: 24,
    comments: 12,

    commentsData: [
      {
        _id: "1",
        name: "Chimako Favour",
        time: "5 hrs ago",
        likes: 12,
        content:
          "Absolutely love Agile Cycle, affordable on any budget and such fast delivery, straight to my door!",
        replies: [
          {
            _id: "11",
            name: "User",
            time: "3 hrs ago",
            likes: 2,
            content: "Thanks for your feedback."
          },
          {
            _id: "12",
            name: "Samuel",
            time: "2 hrs ago",
            likes: 1,
            content: "Great article."
          }
        ]
      },

      {
        _id: "2",
        name: "Samuel",
        time: "1 hr ago",
        likes: 8,
        content:
          "This article was really helpful. Looking forward to more updates.",
        replies: [
          {
            _id: "10",
            name: "User",
            time: "3 hrs ago",
            likes: 2,
            content: "Thanks for your feedback."
          },
        ]
      }
    ],

    sections: [
      {
        _id: "1",
        title: "Keep the battery charged",
        content: "The battery is the most critical component...",
        image: "/home/blog3.png",
      },
    ],
  },
  {
    _id: "3",
    image: "/home/insight3.png",
    heroImage: "/home/blog.png",
    title: "Tips and Tricks for Keeping Your E-Bike Running Smoothly",
    description: "Keeping your eBike in great shape doesn't have to be complicated.",
    date: "January 22, 2026",
    author: { _id: "1", name: "Agile Cycle" },
    likes: 24,
    comments: 12,
    sections: [
      {
        _id: "1",
        title: "Keep the battery charged",
        content: "The battery is the most critical component...",
        image: "/home/blog2.png",
      },
    ],
  },
  {
    _id: "4",
    image: "/home/insight.png",
    heroImage: "/home/blog.png",
    title: "Tips and Tricks for Keeping Your E-Bike Running Smoothly",
    description: "Keeping your eBike in great shape doesn't have to be complicated.",
    date: "January 22, 2026",
    author: { _id: "1", name: "Agile Cycle" },
    likes: 24,
    comments: 12,
    sections: [
      {
        _id: "1",
        title: "Keep the battery charged",
        content: "The battery is the most critical component...",
        image: "/home/blog2.png",
      },
    ],
  },
  {
    _id: "5",
    image: "/home/insight2.png",
    heroImage: "/home/blog.png",
    title: "Tips and Tricks for Keeping Your E-Bike Running Smoothly",
    description: "Keeping your eBike in great shape doesn't have to be complicated.",
    date: "January 22, 2026",
    author: { _id: "1", name: "Agile Cycle" },
    likes: 24,
    comments: 12,
    sections: [
      {
        _id: "1",
        title: "Keep the battery charged",
        content: "The battery is the most critical component...",
        image: "/home/blog2.png",
      },
    ],
  },
  {
    _id: "6",
    image: "/home/insight3.png",
    heroImage: "/home/blog.png",
    title: "Tips and Tricks for Keeping Your E-Bike Running Smoothly",
    description: "Keeping your eBike in great shape doesn't have to be complicated.",
    date: "January 22, 2026",
    author: { _id: "1", name: "Agile Cycle" },
    likes: 24,
    comments: 12,
    sections: [
      {
        _id: "1",
        title: "Keep the battery charged",
        content: "The battery is the most critical component...",
        image: "/home/blog2.png",
      },
    ],
  },
  {
    _id: "7",
    image: "/home/insight.png",
    heroImage: "/home/blog.png",
    title: "Tips and Tricks for Keeping Your E-Bike Running Smoothly",
    description: "Keeping your eBike in great shape doesn't have to be complicated.",
    date: "January 22, 2026",
    author: { _id: "1", name: "Agile Cycle" },
    likes: 24,
    comments: 12,
    sections: [
      {
        _id: "1",
        title: "Keep the battery charged",
        content: "The battery is the most critical component...",
        image: "/home/blog2.png",
      },
    ],
  },
  {
    _id: "8",
    image: "/home/insight2.png",
    heroImage: "/home/blog.png",
    title: "Tips and Tricks for Keeping Your E-Bike Running Smoothly",
    description: "Keeping your eBike in great shape doesn't have to be complicated.",
    date: "January 22, 2026",
    author: { _id: "1", name: "Agile Cycle" },
    likes: 24,
    comments: 12,
    sections: [
      {
        _id: "1",
        title: "Keep the battery charged",
        content: "The battery is the most critical component...",
        image: "/home/blog2.png",
      },
    ],
  },
  {
    _id: "9",
    image: "/home/insight3.png",
    heroImage: "/home/blog.png",
    title: "Tips and Tricks for Keeping Your E-Bike Running Smoothly",
    description: "Keeping your eBike in great shape doesn't have to be complicated.",
    date: "January 22, 2026",
    author: { _id: "1", name: "Agile Cycle" },
    likes: 24,
    comments: 12,
    sections: [
      {
        _id: "1",
        title: "Keep the battery charged",
        content: "The battery is the most critical component...",
        image: "/home/blog2.png",
      },
    ],
  },
  {
    _id: "10",
    image: "/home/insight.png",
    heroImage: "/home/blog.png",
    title: "Tips and Tricks for Keeping Your E-Bike Running Smoothly",
    description: "Keeping your eBike in great shape doesn't have to be complicated.",
    date: "January 22, 2026",
    author: { _id: "1", name: "Agile Cycle" },
    likes: 24,
    comments: 12,
    sections: [
      {
        _id: "1",
        title: "Keep the battery charged",
        content: "The battery is the most critical component...",
        image: "/home/blog2.png",
      },
    ],
  },
  {
    _id: "11",
    image: "/home/insight2.png",
    heroImage: "/home/blog.png",
    title: "Tips and Tricks for Keeping Your E-Bike Running Smoothly",
    description: "Keeping your eBike in great shape doesn't have to be complicated.",
    date: "January 22, 2026",
    author: { _id: "1", name: "Agile Cycle" },
    likes: 24,
    comments: 12,
    sections: [
      {
        _id: "1",
        title: "Keep the battery charged",
        content: "The battery is the most critical component...",
        image: "/home/blog2.png",
      },
    ],
  },
  {
    _id: "12",
    image: "/home/insight3.png",
    heroImage: "/home/blog.png",
    title: "Tips and Tricks for Keeping Your E-Bike Running Smoothly",
    description: "Keeping your eBike in great shape doesn't have to be complicated.",
    date: "January 22, 2026",
    author: { _id: "1", name: "Agile Cycle" },
    likes: 24,
    comments: 12,
    sections: [
      {
        _id: "1",
        title: "Keep the battery charged",
        content: "The battery is the most critical component...",
        image: "/home/blog2.png",
      },
    ],
  },



];
/********************* END OF Insights data for the Home Agile Cycle Shop section and blog page******************* */


export const clubPosts = [
  {
    _id: "1",
    image: "/home/blog2.png",
    title: "Best Affordable Bike Brands for Students sammy?",
    author: "Anitin Seggs",
    time: "23 hrs ago",
    comments: 78,
    likes: 22,
    category: "Questions",
    featured: true,
  },
  {
    _id: "2",
    image: "/club/lifestyle.jpg",
    title: "Cycling as a Sustainable Lifestyle Choice",
    author: "Gunns Johnson",
    time: "13 hrs ago",
    comments: 94,
    likes: 19,
    category: "Lifestyle",
    featured: false,
  },
  {
    _id: "3",
    image: "/club/news.jpg",
    title: "Cycling Events in Lagos This Month",
    author: "Ada Jones",
    time: "13 hrs ago",
    comments: 94,
    likes: 19,
    category: "News",
    featured: false,
  },
];

export const comments = [
  {
    _id: "1",
    author: "Chimaka Favour",
    time: "5 hrs ago",
    content: "Absolutely love Agile Cycle. Affordable and reliable.",
    replies: [
      {
        _id: "11",
        author: "Samuel",
        time: "4 hrs ago",
        content: "Thanks for sharing your experience.",
      },
      {
        _id: "12",
        author: "Ese",
        time: "2 hrs ago",
        content: "You welcome .",
      },
    ],
  },
  {
    _id: "2",
    author: "John Doe",
    time: "2 hrs ago",
    content:
      "I've been using their services for months now.",
    replies: [
      {
        _id: "11",
        author: "Samuel",
        time: "4 hrs ago",
        content: "Thanks for sharing your experience.",
      },
      {
        _id: "12",
        author: "Ese",
        time: "2 hrs ago",
        content: "You welcome .",
      },
    ],
  },
];