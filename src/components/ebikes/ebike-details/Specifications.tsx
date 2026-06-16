type Spec = {
  label: string;
  value: string;
};

type Props = {
  specs: Spec[];
};

export default function Specifications({ specs }: Props) {
  return (
    <div className="mt-10 flex flex-wrap gap-10">
      {specs.map((spec) => (
        <div
          key={spec.label}
          className="border-l-4 border-[#6DBE45] pl-4"
        >
          <p className="text-sm text-gray-500">{spec.label}</p>

          <h4 className="mt-1 text-xl font-bold text-black">
            {spec.value}
          </h4>
        </div>
      ))}
    </div>
  );
}