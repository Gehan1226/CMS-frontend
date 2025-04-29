import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  register?: UseFormRegisterReturn;
  error?: FieldError;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  register,
  error,
  ...rest
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        className={`mt-1 block w-full border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 p-2`}
        {...register}
        {...rest}
      />
      {error && <p className="text-sm text-red-600 mt-1">{error.message}</p>}
    </div>
  );
};

export default InputField;
