import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  text?: string;
  children?: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  text,
  children,
  variant = "primary",
  className,
  ...aditionalAttrs
}: ButtonProps) => {
  const variantTailwindMap = {
    primary: "border-[0.79px] px-4 py-[10px]",
    secondary: "bg-[#00AEFF]",
  };
  return (
    <button
      className={clsx(
        "flex items-center rounded-[3.15px] justify-center text-sm font-medium",
        variantTailwindMap[variant],
        className
      )}
      {...aditionalAttrs}
    >
      {text ?? children}
    </button>
  );
};

export default Button;
