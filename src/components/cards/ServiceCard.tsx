"use client";

interface Props {
  title: string
  description: string
}

const ServiceCard = ({ title, description }: Props) => {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-lg p-8 shadow-lg min-h-[240px] flex flex-col justify-between">
      <div>
        <div className="w-5 h-5 rounded-full bg-primary mb-8" />

        <h3 className="text-xl font-bold mb-4">{title}</h3>

        <p className="text-gray-600 leading-8 text-sm">{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard