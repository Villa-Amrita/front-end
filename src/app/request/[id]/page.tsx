import NavBar from "~/components/NavBar";
import Content from "./components/Content";
import { viewReservation, viewAllMeals } from "lib/client";

export default async function HomePage({
  params,
}: Readonly<{ params: { id: number } }>) {
  const id: number = params.id;
  const requestNumber = parseInt(id.toString());

  const fetchDates = async () => {
    const reservation = await viewReservation(requestNumber);
    const startDate: Date = new Date(reservation.startDate);
    const endDate: Date = new Date(reservation.endDate);

    const dates = [];
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  const fetchMeals = async () => {
    const meals = await viewAllMeals();
    return meals;
  };

  const dates: Date[] = await fetchDates();
  const meals = await fetchMeals();

  return (
    <>
      <NavBar />
      <Content requestNumber={requestNumber} dates={dates} meals={meals} />
    </>
  );
}

export enum DiningType {
  Chef = "Chef",
  Restaurant = "Restaurant",
  None = "None",
}
