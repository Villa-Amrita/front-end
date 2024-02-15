import NavBar from "~/components/NavBar";
import RoomView from "./components/RoomView";
import BlankLine from "~/components/BlankLine";
import RoomCalendar from "./components/RoomCalendar";
import PlaceBookingRequestButton from "./components/PlaceBookingRequestButton";

export default function HomePage({
  params,
}: Readonly<{ params: { id: number } }>) {
  const id: number = params.id;
  const roomNumber = parseInt(id.toString());

  return (
    <>
      <NavBar />
      <main className="py-8">
        <h1 className="flex items-center justify-center font-[poppins] text-3xl font-bold text-primary">
          Booking Request
        </h1>
        <BlankLine />
        <div className="mx-6 flex items-center justify-center lg:mt-2">
          <RoomView roomNumber={roomNumber} />
        </div>
        <BlankLine />
        <BlankLine />
        <BlankLine />
        <div className="hidden lg:block">
          <BlankLine />
        </div>
        <section>
          <span className="flex items-center justify-center font-[poppins] text-xl font-bold text-primary">
            Select days of stay
          </span>
          <RoomCalendar roomNumber={roomNumber} />
          <BlankLine />
          <BlankLine />
          <span className="flex items-center justify-center font-[poppins] text-xl font-bold text-primary">
            Special Requests
          </span>
          <BlankLine />
          <div className="flex items-center justify-center">
            <textarea className="mx-4 flex w-[92%] rounded-lg border border-primary p-4 md:w-[95%] lg:mx-60 lg:w-[68.5%]"></textarea>
          </div>
        </section>
        <BlankLine />
        <BlankLine />
        <div className="hidden lg:block">
          <BlankLine />
        </div>
        <div className="flex w-full items-center justify-center">
          <div className="mx-4 w-full lg:w-60">
            <PlaceBookingRequestButton roomNumber={roomNumber} />
          </div>
        </div>
      </main>
    </>
  );
}
