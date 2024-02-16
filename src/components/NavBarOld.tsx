"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signout, authenticated } from "~/app/utils/Authentication";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const NavBar = () => {
  const router = useRouter();

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

  const handleNavbar = () => {
    const expandIcon = document.getElementById("expand-icon");
    const collapseIcon = document.getElementById("collapse-icon");
    const navbarItems = document.getElementById("navbar-items");
    const ribbon = document.getElementById("ribbon");

    //Collapse:
    if (expandIcon?.classList.contains("hidden")) {
      expandIcon?.classList.remove("hidden");
      collapseIcon?.classList.add("hidden");
      navbarItems?.classList.remove("z-10");
      navbarItems?.classList.add("z-[-1]");
      navbarItems?.classList.remove("translate-y-0");
      navbarItems?.classList.add("translate-y-[-350%]");
      ribbon?.classList.add("h-20");
      ribbon?.classList.remove("h-[15rem]");
    } //Expand:
    else {
      expandIcon?.classList.add("hidden");
      collapseIcon?.classList.remove("hidden");
      navbarItems?.classList.remove("z-[-1]");
      navbarItems?.classList.add("z-10");
      navbarItems?.classList.remove("translate-y-[-350%]");
      navbarItems?.classList.add("translate-y-0");
      ribbon?.classList.remove("h-20");
      ribbon?.classList.add("h-[15rem]");
    }
  };

  useEffect(() => {
    if (!authenticated()) {
      router.push("/");
    }
  }, [router]);

  return (
    <nav id="ribbon" className="h-20 md:min-w-fit">
      <div className="z-10 flex h-20 flex-col bg-primary pt-4 text-white transition-all md:flex-row md:items-center md:justify-between md:py-0">
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
          className="absolute right-4 top-[1.70rem] text-3xl md:hidden"
          onClick={handleNavbar}
        >
          <FaBars />
        </button>
        <button
          id="collapse-icon"
          className="absolute right-4 top-[1.70rem] hidden text-3xl md:hidden"
          onClick={handleNavbar}
        >
          <ImCross />
        </button>

        <ul
          id="navbar-items"
          className="z-[-1] mt-3 flex h-full translate-y-[-350%] flex-col items-center bg-slate-100 font-[poppins] text-lg transition-all ease-out md:z-10 md:mr-6 md:mt-0 md:translate-y-0 md:flex-row md:justify-between md:space-x-8 md:bg-primary md:pl-0"
        >
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
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
