import SignupFormSection from "../components/auth/SignupFormSection";
import SignUpWelcomeSection from "../components/auth/SignUpWelcomeSection";

export default function SignupPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <SignupFormSection />
      <SignUpWelcomeSection />
    </div>
  );
}
