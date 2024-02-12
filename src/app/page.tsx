import Image from "next/image";
import BlankLine from "~/components/BlankLine";
import PrimaryButton from "~/components/PrimaryButton";
import SecondaryButton from "~/components/SecondaryButton";
import styles from "./styles.module.css";

export default function HomePage() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center lg:hidden">
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
          <h2 className="mb-1 flex justify-center text-3xl font-bold">
            Welcome to
          </h2>
          <h1 className="flex justify-center text-3xl font-bold text-primary">
            Villa Amrita!
          </h1>
        </section>
        <BlankLine />
        <BlankLine />
        <BlankLine />
        <p className="flex justify-center px-14 text-center font-semibold">
          The perfect stay for your escape to
        </p>
        <p className="px-20 font-semibold text-primary">Bentota, Sri Lanka.</p>
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
        <section className="w-3/5">
          <div className="my-2 h-14 text-xl font-bold">
            <PrimaryButton content="Get Started" />
          </div>
          <div className="my-2 h-14 text-xl font-bold">
            <SecondaryButton content="Learn More" />
          </div>
        </section>
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
                />
              </div>
            </div>

            {/*Line*/}
            <div className="mx-4 border-r border-white blur-[1px]"></div>

            {/*Right Column*/}
            <div className="flex-1">
              <div className="px-8 py-36">
                <h2 className="mb-4 text-6xl font-bold text-white">
                  Welcome to
                </h2>
                <h1 className="mb-14 text-6xl font-extrabold text-primary">
                  Villa Amrita!
                </h1>
                <p className="mb-20 text-xl font-semibold text-white">
                  The perfect stay for your escape to{" "}
                  <span className="text-primary">Bentota, Sri Lanka</span>.
                </p>
                <BlankLine />
                <section className="flex w-full space-x-4">
                  {/* Left Column */}
                  <div className="flex-1">
                    <button className="h-20 w-full rounded-lg border border-primary bg-gradient-to-tr from-primary-light to-primary-dark px-4 py-2 text-lg font-bold text-white transition-colors hover:border-primary-light">
                      Get Started
                    </button>
                  </div>

                  {/* Right Column */}
                  <div className="flex-1">
                    <button className="h-20 w-full rounded-lg border border-primary bg-none px-4 py-2 text-lg font-bold text-primary transition-colors hover:border-primary-light hover:text-primary-light">
                      Learn More
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
