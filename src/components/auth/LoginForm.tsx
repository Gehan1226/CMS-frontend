import { useMutation } from "@tanstack/react-query";
import { userLogin } from "../../api/auth";
import { LoginFormInputs } from "../../types/auth";
import InputField from "../InputField";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const mutation = useMutation({
    mutationFn: (data: LoginFormInputs) => {
      return userLogin(data);
    },
  });

  const onSubmit = async (data: LoginFormInputs) => {
    mutation.mutate(data);
  };

  return (
    <form className="space-y-4 mt-10" onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="User Name"
        id="user-name"
        type="text"
        placeholder="john_doe"
        register={register("userName", {
          required: "Username is required",
          minLength: {
            value: 3,
            message: "Username must be at least 3 characters",
          },
          pattern: {
            value: /^\w+$/,
            message:
              "Username can only contain letters, numbers, and underscores",
          },
        })}
        error={errors.userName}
      />

      <InputField
        label="Password"
        id="password"
        type="password"
        placeholder="••••••••"
        register={register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        })}
        error={errors.password}
      />
      <button className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Login
      </button>
    </form>
  );
}
