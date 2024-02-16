import Image from "next/image";
import Link from "next/link";
import BlankLine from "~/components/BlankLine";
import GetStartedButton from "./components/GetStartedButton";
import LearnMoreButton from "./components/LearnMoreButton";
import ButtonList from "./components/ButtonList";
import styles from "./styles.module.css";

export default function HomePage() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center overflow-x-hidden lg:hidden">
        <BlankLine />
        <BlankLine />
        <BlankLine />
        <BlankLine />
        <BlankLine />
        <BlankLine />
        <section className="glass-blur glass-tint flex items-center justify-center">
          <Image
            src="/Icon.png"
            alt="Villa Amrita Logo"
            width={170}
            height={170}
            loading="lazy"
          />
        </section>
        <div className="glass-overlay absolute top-0 h-screen w-full rounded-full" />
        <BlankLine />
        <BlankLine />
        <BlankLine />
        <BlankLine />
        <BlankLine />
        <BlankLine />
        <BlankLine />
        <BlankLine />
        <BlankLine />
        <BlankLine />
        <section className="flex-col items-center justify-center">
          <h2 className="mb-1 flex justify-center font-[poppins] text-3xl font-bold">
            Welcome to
          </h2>
          <h1 className="flex justify-center font-[poppins] text-3xl font-bold text-primary">
            Villa Amrita!
          </h1>
        </section>
        <BlankLine />
        <BlankLine />
        <BlankLine />
        <p className="flex justify-center px-14 text-center font-[poppins]">
          The perfect stay for your escape to
        </p>
        <p className="px-20 font-[poppins] text-primary">Bentota, Sri Lanka.</p>
        <BlankLine />
        <BlankLine />
        <BlankLine />
        <BlankLine />
        <BlankLine />
        <BlankLine />
        <BlankLine />
        <BlankLine />
        <BlankLine />
        <BlankLine />
        <BlankLine />
        <BlankLine />
        <BlankLine />
        <section className="z-10 w-3/5">
          <GetStartedButton />
          <LearnMoreButton />
          <p className="mt-4 text-center font-[poppins]">
            Already have an account?
            <br />
            <Link
              href="/sign-in"
              className="text-primary transition-colors hover:text-primary-dark hover:underline"
            >
              Sign in!
            </Link>
          </p>
        </section>
        <BlankLine />
        <BlankLine />
      </div>

      <div className="relative hidden lg:block">
        <div className={styles.background}>
          <div className="absolute left-1/2 top-1/2 flex h-[95%] w-[97.5%] -translate-x-1/2 -translate-y-1/2 transform rounded-3xl bg-white bg-opacity-15 px-8 py-6 backdrop-blur-md backdrop-filter">
            {/*Left Column*/}
            <div className="flex-1">
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src="/Original-Icon.png"
                  alt="Villa Amrita Logo"
                  width={700}
                  height={700}
                  loading="lazy"
                />
              </div>
            </div>

            {/*Line*/}
            <div className="mx-4 border-r border-white blur-[1px]"></div>

            {/*Right Column*/}
            <div className="flex-1">
              <div className="px-8 py-[7.5rem]">
                <h2 className="mb-4 font-[poppins] text-6xl font-bold text-white">
                  Welcome to
                </h2>
                <h1 className="mb-10 font-[poppins] text-6xl font-extrabold text-primary">
                  Villa Amrita!
                </h1>
                <p className="mb-14 font-[poppins] text-xl text-white">
                  The perfect stay for your escape to{" "}
                  <span className="text-primary">Bentota, Sri Lanka.</span>
                </p>
                <BlankLine />
                <ButtonList data-cy="button-list" />
                <p className="mt-6 font-[poppins] text-white">
                  Already have an account?{" "}
                  <Link
                    href="/sign-in"
                    className="text-primary transition-colors hover:text-primary-dark hover:underline"
                  >
                    Sign in!
                  </Link>
                </p>
                .
              </div>
            </div>
          </div>
          <div className="flex h-full w-full items-end justify-end">
            <a href="http://www.freepik.com" className="text-right">
              Background Designed by Freepik
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
