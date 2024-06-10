import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  text?: string;
  children?: ReactNode;
  variant?: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  text,
  children,
  variant = "primary",
  ...aditionalAttrs
}: ButtonProps) => {
  const variantTailwindMap = {
    primary: "w-28 border-[0.79px]",
    secondary:
      "flex items-center gap-[6.31px] w-[115.69px] justify-center bg-[#00AEFF]",
  };
  return (
    <button
      className={clsx("rounded-[3.15px] h-[41px]", variantTailwindMap[variant])}
      {...aditionalAttrs}
    >
      {text ?? children}
    </button>
  );
};

export default Button;
