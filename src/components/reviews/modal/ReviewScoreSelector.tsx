"use client";

interface Props {
  label: string;
  value: number;
  onChange: (value: number) => void;
  leftLabel: string;
  rightLabel: string;
}

export function ReviewScoreSelector({
  label,
  value,
  onChange,
  leftLabel,
  rightLabel,
}: Props) {
  return (
    <div className="space-y-3 w-4/5">
      <h4 className="font-medium">{label}</h4>

      <div className="grid grid-cols-5 gap-4">
        {[1, 2, 3, 4, 5].map((score) => (
          <button
            key={score}
            type="button"
            onClick={() => onChange(score)}
            className={`
              rounded-md border border-primary transition py-3 px-4
              ${
                value === score
                  ? "border-primary bg-primary text-white"
                  : ""
              }
            `}
          >
            {score}
          </button>
        ))}
      </div>

      <div className="flex justify-between text-xs text-muted-foreground">
        <span className="text-gray-500">{leftLabel}</span>
        <span className="text-gray-500">{rightLabel}</span>
      </div>
    </div>
  );
}
