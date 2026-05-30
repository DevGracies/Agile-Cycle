import Container from '../layout/Container'
import SectionHeader from '../shared/SectionHeader'
import CategoryCard from '../cards/CategoryCard'
import { categories } from '@/src/lib/data'
import productImage4 from "@/public/ebikes/Ebikes.png"

const CategorySection = () => {
  return (
    <section className="min-h-screen py-24">
      <Container>
        <SectionHeader
          title="Choose the Ride That Moves You"
          subtitle="Categories"
          section="Ebikes"
          icon
        />
        <p className="text-gray-600 max-w-3xl leading-6 text-sm mb-14">
          All models are available in <span className='text-primary'>Step-Through </span>(easy mount, lower frame) and <span className='text-primary'>Step-Over</span>(sportier, traditional frame)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((item, index) => (
            <CategoryCard key={index} {...item} />
          ))}

          <CategoryCard
            title="Ride Share Models"
            description="Durable fleet‑ready bikes designed for shared mobility programs. Built to withstand frequent use while offering simple maintenance and reliable performance."
            image={productImage4}
            large
          />
        </div>
      </Container>
    </section>
  )
}

export default CategorySection