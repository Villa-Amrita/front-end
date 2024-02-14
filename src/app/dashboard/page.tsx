import RoomImage from "~/components/RoomImage";
import NavBar from "~/components/NavBar";
import BlankLine from "~/components/BlankLine";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="my-8">
        <h1 className="flex items-center justify-center font-[poppins] text-3xl font-bold text-primary">
          Book Now
        </h1>
        <BlankLine />
        <section className="mx-4 mt-8 flex flex-col items-center justify-between space-y-12 md:mx-8 md:mt-12 md:flex-row md:space-x-6 md:space-y-0 lg:mx-14 lg:mt-28">
          <RoomImage
            roomNumber={1}
            imageNumber={1}
            roomName="Honeymoon Suite"
          />
          <RoomImage roomNumber={2} imageNumber={1} roomName="Family Room" />
          <RoomImage roomNumber={3} imageNumber={1} roomName="Luxury Suite" />
        </section>
      </main>
    </>
  );
}
