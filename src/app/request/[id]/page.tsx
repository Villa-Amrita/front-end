import NavBar2 from "~/components/NavBar";
import MealSelector from "./components/MealSelector";

export default function HomePage() {
  return (
    <>
      <NavBar2 />
      <main>
        <div className="p-4">
          <MealSelector />
        </div>
      </main>
    </>
  );
}
