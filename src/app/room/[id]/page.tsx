import RoomShowcase from "~/components/RoomShowcase";
import NavBar from "~/components/NavBar";
import BlankLine from "~/components/BlankLine";
import BookNowButton from "./components/BookNowButton";

export default function HomePage({
  params,
}: Readonly<{ params: { id: number } }>) {
  const id: number = params.id;
  const roomNumber = parseInt(id.toString());

  return (
    <>
      <NavBar />
      <main className="mt-6">
        <div className="mx-0 md:mx-10">
          <RoomShowcase roomNumber={roomNumber} />
        </div>
        <section className="mx-4 my-8 lg:absolute lg:left-[50%] lg:top-48 lg:mx-0 lg:my-0">
          <div>
            <span className="font-[poppins] text-lg font-bold text-primary lg:text-xl">
              Description
            </span>
            <ul className="ml-4 mt-2 font-[poppins] text-lg font-bold">
              <li>
                <span className="hidden lg:inline">-</span> King Sized Bed
              </li>
              <li>
                <span className="hidden lg:inline">-</span> AC
              </li>
              <li>
                <span className="hidden lg:inline">-</span> Large TV
              </li>
              <li>
                <span className="hidden lg:inline">-</span> Wifi
              </li>
            </ul>
          </div>
          <BlankLine />
          <div>
            <span className="font-[poppins] text-lg font-bold text-primary md:text-xl">
              Conditions
            </span>
            <ul className="ml-4 mt-2 font-[poppins] text-lg font-bold">
              <li>
                <span className="hidden lg:inline">-</span> No Children Allowed
              </li>
            </ul>
          </div>
        </section>
        <section className="mx-4 my-6 flex flex-col items-center justify-center lg:absolute lg:left-[75%] lg:top-[22rem] lg:mx-0 lg:my-0">
          <div className="flex h-8 w-52 items-center justify-center rounded-full bg-primary px-4 py-6 font-[poppins] text-xl font-bold text-white md:h-12 lg:h-16 lg:min-w-fit lg:py-0 lg:text-2xl">
            LKR. 7,500 /=
          </div>
          <span className="flex items-center justify-center font-[poppins] text-lg lg:my-1 lg:text-xl">
            Per Day
          </span>
        </section>
        <BookNowButton />
      </main>
    </>
  );
}
