import React from "react";
import { CheckCircle } from "lucide-react";
import { ProductFeature } from "@/src/types/product";


interface FeatureSectionProps {
  features: ProductFeature[];
  packageContents: string[];
  note: string;
}

const FeatureSection = ({
  features,
  packageContents,
  note,
}: FeatureSectionProps) => {
  return (
    <section className="w-full md:w-3/4 rounded-xl border border-gray-200 bg-white p-6">
      <div className="space-y-8">
        <div>
          <h2 className="mb-6 text-sm font-bold uppercase tracking-wide text-secondary">
            Main Features
          </h2>

          <div className="space-y-4">
            {features.map((feature) => (
              <ul
                key={feature.id}
                className="list-disc text-primary px-6"
              >
                <li>
                  <h3 className="font-semibold text-primary">
                    {feature.title}:
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {feature.description}
                  </p>
                </li>
              </ul>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-secondary">
            Package Content
          </h3>

          <ul className="space-y-2 text-sm text-gray-600">
            {packageContents.map((content, index) => (
              <li key={index}>{content}</li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2">
            <h3 className="font-semibold text-secondary">Note:</h3> <p className="text-gray-600 text-sm">{note}</p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;