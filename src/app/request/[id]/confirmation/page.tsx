import Image from "next/image";
import Link from "next/link";
import NavBar from "~/components/NavBar";
import BlankLine from "~/components/BlankLine";

export default function HomePage({
  params,
}: Readonly<{ params: { id: number } }>) {
  const id: number = params.id;
  const requestNumber = parseInt(id.toString());

  return (
    <>
      <NavBar />
      <main>
        <div className="mt-60 flex flex-col items-center space-y-5 lg:mt-40">
          <div>
            <Image
              src="/Icon.png"
              alt="Villa Amrita Logo"
              width={200}
              height={200}
              loading="lazy"
            />
          </div>
          <div>
            <span className="font-[poppins] text-2xl font-bold text-primary md:text-3xl">
              Booking Request Placed!
            </span>
          </div>
          <div>
            <span className="my-2 font-[poppins] text-lg font-bold lg:text-base">
              Request Ticket: #{requestNumber}
            </span>
          </div>
          <BlankLine />
          <div>
            <span className="rounded-full border border-primary bg-primary px-8 py-4 font-[poppins] text-lg font-bold text-white transition-colors hover:bg-primary-dark">
              <Link href={`/my-bookings`}>Go to My Bookings</Link>
            </span>
          </div>
        </div>
      </main>
    </>
  );
}
