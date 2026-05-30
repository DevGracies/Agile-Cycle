import { ReactNode } from "react";

interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
  children: ReactNode;
  rightContent?: ReactNode;
}

const ProductSectionLayout = ({
  title,
  subtitle,
  description,
  children,
  rightContent,
}: Props) => {
  return (
    <section className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        
        <div className="flex items-center justify-between">
          <div>

            {title && (
              <h2 className="text-xl font-semibold">
                {title}
              </h2>
            )}

            {subtitle && (
              <p className="text-sm text-primary">
                {subtitle}
              </p>
            )}

            {description && (
              <p className="text-gray-600 max-w-3xl text-sm mt-4">
                {description}
              </p>
            )}
          </div>

          {rightContent}
        </div>

        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
};

export default ProductSectionLayout;