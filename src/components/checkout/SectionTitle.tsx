interface SectionTitleProps {
  title: string;
  description?: string;
}

export default function SectionTitle({
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="space-y-1">
      <h2 className="text-lg font-semibold text-neutral-900">
        {title}
      </h2>

      {description && (
        <p className="text-sm text-neutral-500">
          {description}
        </p>
      )}
    </div>
  );
}