// SignUpForm.tsx
import { useMutation } from "@tanstack/react-query";
import { userSignUp } from "../../api/auth"; // Define the sign-up API call method
import InputField from "../InputField";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/auth";

export default function SignUpForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<User>();

  const mutation = useMutation({
    mutationFn: (data: User) => {
      return userSignUp(data);
    },
    onSuccess: (data: string) => {
      alert(data);
      navigate("/login");
    },
  });

  const onSubmit = async (data: User) => {
    mutation.mutate(data);
  };

   const password = watch("password");

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

      <InputField
        label="Confirm Password"
        id="confirm-password"
        type="password"
        placeholder="••••••••"
        register={register("confirmPassword", {
          required: "Please confirm your password",
          validate: (value) => value === password || "Passwords do not match",
        })}
        error={errors.confirmPassword}
      />

      <button className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Sign Up
      </button>
    </form>
  );
}
