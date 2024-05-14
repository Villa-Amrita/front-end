import NavBar from "~/components/NavBar";
import RoomShowcase from "~/components/RoomShowcase";
import BlankLine from "~/components/BlankLine";
import BookNowButton from "./components/BookNowButton";
import { viewRoom } from "lib/client";

export default async function HomePage({
  params,
}: Readonly<{ params: { id: number } }>) {
  const id: number = params.id;
  const roomNumber = parseInt(id.toString());

  const extractRoomConditions = (text: string): string[] => {
    const conditions: string[] = [];
    let condition = "";

    for (const char of text) {
      if (char === ".") {
        if (condition.trim().length > 0) {
          conditions.push(condition.trim());
        }
        break; // Stop processing when a period is encountered
      } else if (char === ",") {
        conditions.push(condition.trim());
        condition = ""; // Reset the condition string
      } else {
        condition += char; // Append characters to the current condition
      }
    }

    if (conditions.length === 0) {
      conditions.push("None".trim());
    }

    return conditions;
  };

  const formatPrice = (amount: number): string => {
    const formattedAmount = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "LKR",
    }).format(amount);

    return `${formattedAmount} /=`;
  };

  const roomDetails = await viewRoom(roomNumber);
  console.log(roomDetails);
  const roomDescription: string = roomDetails.roomDescription;
  const roomConditions: string[] = extractRoomConditions(
    roomDetails.roomConditions,
  );
  const roomPrice: string = formatPrice(roomDetails.roomPrice);

  return (
    <>
      <NavBar />
      <main className="mt-6 lg:mt-8">
        <div className="mx-0 overflow-x-hidden md:mx-10">
          <RoomShowcase roomNumber={roomNumber} />
        </div>
        <section className="mx-4 my-8 md:w-[30rem] lg:absolute lg:left-[43%] lg:top-64 lg:mx-0 lg:my-0">
          <div>
            <span className="font-[poppins] text-lg font-bold text-primary lg:text-xl">
              Description
            </span>
            <p className="ml-4 mt-2 font-[poppins] text-lg font-bold">
              {roomDescription}
            </p>
          </div>
          <BlankLine />
          <div>
            <span className="font-[poppins] text-lg font-bold text-primary md:text-xl">
              Conditions
            </span>
            <ul className="ml-4 mt-2 font-[poppins] text-lg font-bold">
              {roomConditions.map((condition: string) => (
                <li key={condition}>
                  <span className="hidden lg:inline">-</span> {condition}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="mx-4 my-8 flex flex-col items-center justify-center lg:absolute lg:left-[76%] lg:top-[20.5rem] lg:mx-0 lg:my-0">
          <div className="w-min-52 my-2 flex h-8 items-center justify-center rounded-full bg-primary px-4 py-6 font-[poppins] text-xl font-bold text-white md:h-12 lg:my-0 lg:h-16 lg:min-w-fit lg:py-0 lg:text-2xl">
            {roomPrice}
          </div>
          <span className="flex items-center justify-center font-[poppins] text-lg lg:my-1 lg:text-xl">
            Per Day
          </span>
        </section>
        <section>
          <BookNowButton roomNumber={roomNumber} />
        </section>
        <BlankLine />
      </main>
    </>
  );
}
