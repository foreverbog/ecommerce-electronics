import CategoriesContainer from "@/components/home/CategoriesContainer";
import HomeParagraph from "@/components/home/HomeParagraph";
import HomeTitle from "@/components/home/HomeTitle";
import StartButton from "@/components/home/StartButton";

export default function Home() {
  return (
    <main className="h-dvh flex flex-col justify-center items-center bg-gradient-to-b from-background from-80% via-accent to-primary">
      <HomeTitle />

      <HomeParagraph />

      <CategoriesContainer />

      <StartButton />
    </main>
  );
}
