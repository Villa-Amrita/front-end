"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signout, authenticated } from "~/app/utils/Authentication";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const NavBar = () => {
  const router = useRouter();

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const itemStyles =
    "text-black md:text-white hover:text-slate-300 transition-colors";
  const itemOutlineStyles =
    "py-3 md:py-0 border border-white flex justify-center items-center h-full w-full min-w-fit md:border-none bg-slate-100 md:bg-primary";

  const handleLogout = async () => {
    try {
      await signout();
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        alert(error.message);
      } else {
        console.error("An unknown error occurred");
        alert("An unknown error occurred");
      }
    } finally {
      router.push("/");
    }
  };

  useEffect(() => {
    if (!authenticated()) {
      router.push("/");
    }
  }, [router]);

  return (
    <nav id="ribbon" className="md:min-w-fit">
      <div className="flex min-h-20 flex-col bg-primary pt-4 text-white transition-all duration-300 ease-in-out md:flex-row md:items-center md:justify-between md:py-0">
        <div>
          <Link
            href={"/"}
            className="ml-2 flex h-full w-fit flex-row items-center justify-between font-[poppins] text-xl md:ml-4"
          >
            <Image
              src="/Icon.png"
              alt="Logo"
              height={60}
              width={60}
              className="mx-2 rounded-full bg-white py-2"
            />
            Villa Amrita
          </Link>

          <button
            id="expand-icon"
            className="absolute right-4 top-[1.70rem] text-3xl lg:hidden"
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          >
            {isNavbarOpen ? <ImCross /> : <FaBars />}
          </button>
        </div>

        <ul
          id="navbar-items"
          className={`grid overflow-hidden transition-all duration-300 ease-in-out md:mr-6 ${isNavbarOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 md:grid-rows-[1fr] md:opacity-100"}`}
        >
          <div className="mt-3 flex flex-col items-center overflow-hidden font-[poppins] text-lg md:mt-0 md:flex-row md:justify-between md:space-x-8">
            <li className={itemOutlineStyles}>
              <Link href={"/dashboard"} className={itemStyles}>
                Book Now
              </Link>
            </li>
            <li className={itemOutlineStyles}>
              <Link href={"/my-bookings"} className={itemStyles}>
                My Bookings
              </Link>
            </li>
            <li className={itemOutlineStyles}>
              <button
                id="logout-button"
                className="rounded-full text-rose-600 transition-colors md:bg-rose-600 md:px-4 md:py-1 md:text-white md:hover:bg-rose-700"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
