import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: FC<ButtonProps> = ({ variant = "primary", children, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded ${
        variant === "primary" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
