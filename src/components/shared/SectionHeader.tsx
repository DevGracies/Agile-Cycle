import { Bike } from "lucide-react"

interface Props {
  subtitle?: string
  title?: string
  section?: string
  icon?: boolean
}

const SectionHeader = ({ title, subtitle, section, icon }: Props) => {
  return (
    <div className="">
      <h2 className="text-xl md:text-3xl font-black mb-5">
        {title}
      </h2>
      <p className="text-primary font-semibold mb-4 flex items-center gap-4">
        {subtitle}
        {icon && <span aria-hidden="true"><Bike /></span>}
        <span className="text-secondary">{section}</span>
      </p>
    </div>
  )
}

export default SectionHeader