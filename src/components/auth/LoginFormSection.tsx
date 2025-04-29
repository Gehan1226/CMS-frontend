import { userLogin } from "../../api/auth";
import { LoginFormInputs } from "../../types/auth";
import InputField from "../InputField";
import { useForm } from "react-hook-form";

export default function LoginFormSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    console.log("Form Data:", data);
    const response = await userLogin(data);
    console.log("Login Response:", response);
  };

  return (
    <div className="bg-white flex shadow-[-10px_0_10px_-5px_rgba(0,0,0,0.1)]">
      <div className="w-full px-20 mt-10">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">Login</h2>
        <p className="text-gray-600 mb-6">
          Please enter your email and password to access your account. If you
          don't have an account yet, you can sign up in just a few clicks.
        </p>

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

        <div className="mt-6 flex justify-between">
          <p className="text-gray-600">
            New user?{" "}
            <span className="text-green-600 font-semibold">Sign up</span>
          </p>

          <p className="text-gray-600">Forgot password?</p>
        </div>
      </div>
    </div>
  );
}
