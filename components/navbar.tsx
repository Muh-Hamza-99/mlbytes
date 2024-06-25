"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { setTheme } = useTheme();
  return (
    <div className="p-4 flex justify-between items-center w-full sticky">
        <h1 className="font-bold text-lg text-primary">mlbytes</h1>
        <div className="flex items-center space-x-4">
            <Link href="/about">About</Link>
            <Button>Sign Up</Button>
        </div>
    </div>
  );
};

export default Navbar;
