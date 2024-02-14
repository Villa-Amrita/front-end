"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "config/firebase";

const NavBar = () => {
  const router = useRouter();

  const itemStyles = "text-white hover:text-slate-300 transition-colors";

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      router.push("/");
    }
  }, [router]);

  return (
    <nav>
      <div className="flex h-20 items-center justify-between bg-primary text-white">
        <Link href={"/"} className="ml-6">
          <span className="flex h-full items-center justify-between font-[poppins] text-xl">
            <Image
              src="/Icon.png"
              alt="Logo"
              height={60}
              width={60}
              className="mx-2 rounded-full bg-white py-2"
            />
            Villa Amrita
          </span>
        </Link>

        <ul className="mr-6 flex h-full items-center justify-between space-x-8 font-[poppins] text-lg">
          <li>
            <Link href={"/dashboard"} className={itemStyles}>
              Book Now
            </Link>
          </li>
          <li>
            <Link href={"/my-bookings"} className={itemStyles}>
              My Bookings
            </Link>
          </li>
          <li>
            <button
              className="rounded-full bg-rose-600 px-4 py-1 text-white transition-colors hover:bg-rose-700"
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
