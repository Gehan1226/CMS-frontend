import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

export default function LoginFormSection() {
  return (
    <div className="bg-white flex shadow-[-10px_0_10px_-5px_rgba(0,0,0,0.1)]">
      <div className="w-full px-20 mt-10">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">Login</h2>
        <p className="text-gray-600 mb-6">
          Please enter your email and password to access your account. If you
          don't have an account yet, you can sign up in just a few clicks.
        </p>

        <LoginForm />

        <div className="mt-6 flex justify-between">
          <p className="text-gray-600">
            New user?{" "}
            <Link to="/signup" className="text-green-600 font-semibold">
              Sign up{" "}
            </Link>
          </p>

          <p className="text-gray-600">Forgot password?</p>
        </div>
      </div>
    </div>
  );
}
