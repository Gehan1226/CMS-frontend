import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type Option = {
  value: string | number;
  label: string;
};

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  register?: UseFormRegisterReturn;
  error?: FieldError;
  options?: Option[];
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  register,
  error,
  options = [],
  ...rest
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {rest.type === "select" ? (
        <select
          id={id}
          className={`mt-1 block w-full border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 p-2`}
          {...register}
          {...(rest as React.SelectHTMLAttributes<HTMLSelectElement>)}
        >
          <option value="">Select an option</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={rest.type}
          className={`mt-1 block w-full border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 p-2`}
          {...register}
          {...rest}
        />
      )}
      {error && <p className="text-sm text-red-600 mt-1">{error.message}</p>}
    </div>
  );
};

export default InputField;
