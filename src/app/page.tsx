import HomeHero from "@/components/hero/HomeHero";
import NavBar from "@/components/navbar/NavBar";
import HomeAboutUs from "./HomeAboutUs";
import HomeEducationCrisis from "./HomeEducationCrisis";

export default function Home() {
  return (
    <>
      {/* header is included inside navbar */}
      <NavBar />
      <main className="flex flex-col h-fit">
        <HomeHero/>
        {/* know about us section */}
        <HomeAboutUs/>
        <HomeEducationCrisis/>
      </main>
    </>
  );
}
