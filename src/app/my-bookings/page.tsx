/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
//const cookies = new Cookies();
//const customerId = cookies.get("authId") as string;
import { viewAllReservations } from "lib/client";
import Cookies from "universal-cookie";
import NavBar from "~/components/NavBar";
import BookingCard from "./components/BookingCard";
import BlankLine from "~/components/BlankLine";
import { type ReservationType as Reservation } from "../../../../back-end/server/api/trpcRouter";

export default async function HomePage() {
  const customerId = "dLbW6DbPscTM70apUKBMLXZS7ph1";

  const viewAllReservations = async (): Promise<Reservation[]> => {
    const response = await fetch(`http://localhost:8080/api/reservation/viewAllCustomerReservations/${customerId}`, {
      cache: "no-cache",
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    });
    if (!response.ok) {
      throw new Error(`Error fetching rooms: ${response.statusText}`);
    }
    const data = await response.json();
    const reservations: Reservation[] = data.data;
    return reservations;
  };

  const fetchData = async (customerId: string) => {
    try {
      const allReservations = await viewAllReservations();
      const filteredReservations = allReservations.filter(
        (reservation) => reservation.customerId === customerId,
      );
      return filteredReservations;
    } catch (error) {
      console.log(error);
    }
  };

  const customerReservations = await fetchData(customerId);

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
            {customerReservations?.map((reservation) => (
              <BookingCard
                key={reservation.id}
                requestNumber={reservation.id}
                requestStatus={reservation.status as RequestStatus}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export enum RequestStatus {
  Processing = "PENDING",
  Rejected = "REJECTED",
  Confirmed = "CONFIRMED",
  Payed = "PAYED",
}
