"use client"

import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="p-4 flex justify-between items-center w-full sticky">
        <h1 className="font-bold text-2xl text-primary">
          <Link href="/">mlbytes</Link>
        </h1>
        <div className="flex items-center space-x-4">
            <Link href="/about">About</Link>
            <Button>Sign Up</Button>
        </div>
    </div>
  );
};

export default Navbar;
