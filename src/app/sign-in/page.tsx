import SigninForm from "./components/SigninForm";

export default function HomePage() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-secondary-light to-secondary-dark lg:bg-gradient-to-tr lg:from-complementary-light lg:to-complementary">
        <SigninForm />
      </div>
    </main>
  );
}
