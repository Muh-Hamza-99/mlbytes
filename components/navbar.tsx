"use client"

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="p-4 flex justify-between items-center w-full sticky">
        <h1 className="font-bold text-2xl text-primary">
          <Link href="/">mlbytes</Link>
        </h1>
        <Link href="/about">About</Link>
    </div>
  );
};

export default Navbar;
