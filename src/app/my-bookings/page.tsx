import NavBar from "~/components/NavBar";
import BookingCard from "./components/BookingCard";
import BlankLine from "~/components/BlankLine";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="mx-2 py-6">
        <h1 className="flex items-center justify-center font-[poppins] text-2xl font-bold text-primary md:text-3xl">
          My Bookings
        </h1>
        <BlankLine />
        <BlankLine />
        <section className="flex justify-center">
          <div className="w-full lg:flex lg:w-3/4 lg:flex-col">
            <BookingCard
              requestNumber={1}
              requestStatus={RequestStatus.Processing}
            />
            <BookingCard
              requestNumber={2}
              requestStatus={RequestStatus.Confirmed}
            />
            <BookingCard
              requestNumber={3}
              requestStatus={RequestStatus.Payed}
            />
            <BookingCard
              requestNumber={4}
              requestStatus={RequestStatus.Rejected}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export enum RequestStatus {
  Processing = "Processing",
  Rejected = "Rejected",
  Confirmed = "Confirmed",
  Payed = "Payed",
}
