"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (  
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-4 right-4 z-50
        bg-white/50 hover:bg-white/80
        text-primary p-2 rounded-full
        backdrop-blur-md
        transition-all duration-300
        ${visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <ArrowUp size={25} />
    </button>
  )
}