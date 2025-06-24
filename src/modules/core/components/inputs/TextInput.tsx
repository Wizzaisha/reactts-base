import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  iconName?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  type: "text" | "email";
}

export default function TextInput({
  label,
  type,
  iconName,
  register,
  error,
  className,
  ...rest
}: TextInputProps) {
  return (
    <div className={`w-full relative ${className ?? ""}`}>
      <label className="text-preset5-bold text-grey-500">{label}</label>
      <input
        type={type}
        {...register}
        {...rest}
        className={`w-full border border-beige-500 p-2 rounded-md`}
      ></input>

      {iconName && <p>Icon</p>}

      {error && <p className="text-red text-preset5-bold">{error.message}</p>}
    </div>
  );
}
