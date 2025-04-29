import LoginFormSection from "../components/auth/LoginFormSection";
import LoginWelcomeSection from "../components/auth/LoginWelcomeSection";

export default function LoginPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <LoginWelcomeSection />
      <LoginFormSection />
    </div>
  );
}
