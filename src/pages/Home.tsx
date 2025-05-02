import { useContext } from "react";
import { Header } from "../components/home/Header";
import { HeroSection } from "../components/home/HeroSection";
import { UserContext } from "../context/UserContext";

export default function Home() {
  const userContext = useContext(UserContext);

  console.log("User Context:", userContext);

  return (
    <>
      <Header />
      <HeroSection />
    </>
  );
}
