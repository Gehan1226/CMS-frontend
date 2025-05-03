import { useContext } from "react";
import { Header } from "../components/home/Header";
import { HeroSection } from "../components/home/HeroSection";
import { UserContext } from "../context/UserContext";

export default function Home() {
  const userContext = useContext(UserContext);

  console.log("User Context in home page :", userContext);
  return (
    <>
      <Header />
      <HeroSection />
    </>
  );
}
