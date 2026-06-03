import { ButtonHTMLAttributes } from "react";

type Props =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;

    variant?:
      | "primary"
      | "outline"
      | "ghost";

    size?: "sm" | "md" | "lg";
  };

const Button = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
  ...props
}: Props) => {

  const variants = {
    primary:
      "bg-[#01430D] text-[#F7FAFC] text-[20px] ",

    outline:
      "border border-gray-300 bg-white text-gray-700",

    ghost:
      "bg-transparent text-[#01430D]",
  };

  const sizes = {
    sm: "h-10 px-4 text-sm",

    md: "h-12 px-5 text-sm",

    lg: "h-14 px-6 text-base",
  };

  return (
    <button
      {...props}
      className={`
        flex items-center justify-center
        rounded-xl font-semibold
        disabled:cursor-not-allowed
        disabled:opacity-70

        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;