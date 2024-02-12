import BlankLine from "~/components/BlankLine";
import PrimaryButton from "~/components/PrimaryButton";
import SecondaryButton from "~/components/SecondaryButton";

export default function HomePage() {
  return (
    <main className="text-themed-primary flex min-h-screen flex-col items-center justify-center">
      Welcome to Villa Amrita!
      <BlankLine />
      <div className="h-10 w-[20rem]">
        <PrimaryButton content="My Primary Button" />
      </div>
      <BlankLine />
      <BlankLine />
      <BlankLine />
      <div className="h-12 w-[20rem]">
        <SecondaryButton content="My Secondary Button" />
      </div>
    </main>
  );
}
