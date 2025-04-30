import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";

export default function SignupFormSection() {
  return (
    <div className="bg-white flex shadow-[5px_0_10px_rgba(0,0,0,0.3)]">
      <div className="w-full px-20 mt-10">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">SignUp</h2>
        <p className="text-gray-600 mb-6">
          Please create your account by entering a username and password. It
          only takes a few seconds to get started.
        </p>

        <SignUpForm />

        <div className="mt-6">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-green-600 font-semibold">
              Login{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
