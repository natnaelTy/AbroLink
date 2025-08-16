import React from "react";
import { Package, AlignJustify, LogOut, UserRound, Settings, Wallet, ToggleRight  } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function () {
  return (
    <nav className="w-full flex items-center justify-between p-2 py-4 mx-auto sticky top-0 left-0 right-0 z-10 bg-white border-b-1 border-gray-100">
      <div className="max-w-6xl w-full flex items-center justify-between mx-auto">
        <div className="flex items-center gap-1">
          <Package className="sixe-6 md:size-7" />
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-400 via-orange-500 to-orange-600">
            AbroLink<span className="text-slate-900">.</span>
          </h1>
        </div>

        <ul className="flex items-center gap-6 hidden md:flex">
          <li>
            <Link href="#">Find Travelers</Link>
          </li>
          <li>
            <Link href="about">Resources</Link>
          </li>
        </ul>

        <div className="flex items-center gap-5 hidden md:flex">
          <button className="bg-clip-bg bg-gradient-to-br from-amber-400 via-orange-500 to-orange-600 px-5 py-2.5 text-white rounded-full">
            Register
          </button>
          <button className="bg-transparent hover:bg-slate-900 hover:text-white rounded-full border-2 border-slate-900 px-5 py-2.5 hover:shadow-xl">
            Log in
          </button>
        </div>

        <div className="block md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger><AlignJustify /></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem><UserRound />Profile</DropdownMenuItem>
              <DropdownMenuItem><Settings/>Account Settings</DropdownMenuItem>
              <DropdownMenuItem><Wallet />My Wallet</DropdownMenuItem>
              <DropdownMenuItem><ToggleRight/>Switch Profiles</DropdownMenuItem>
                 <DropdownMenuSeparator />
              <DropdownMenuLabel>
                  <button
                  
                    className="flex items-center gap-1 w-full hover:text-purple-600 cursor-pointer transition ease-in duration-300"
                  >
                    
                    <LogOut className="size-4"/>
                    Logout
                  </button>
                </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
