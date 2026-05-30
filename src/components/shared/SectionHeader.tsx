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
      <p className="text-[#519A09] font-semibold mb-4 flex items-center gap-4">
        {subtitle}
        {icon && <span aria-hidden="true">🚲</span>}
        <span className="text-[#01430D]">{section}</span>
      </p>
    </div>
  )
}

export default SectionHeader