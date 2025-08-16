"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PlaneTakeoff } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import countriesandcity from "./Country";

export default function Search() {

  const country = countriesandcity.map((country: { name: string }) => country.name);
  console.log(country);

  return (
    <section className="flex items-center justify-center flex-col gap-4 mx-auto w-full p-1 mt-4">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold ">
        Search for travelers
      </h1>

      <form className="flex items-center flex-wrap justify-between gap-4 w-full max-w-[700px]">
        <div className="flex items-center gap-2">
          <Label htmlFor="from">From :</Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">{}</SelectItem>
              <SelectItem value="dark">USA</SelectItem>
              <SelectItem value="system">Germany</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <PlaneTakeoff className="size-6 hidden md:block" />
        </div>

        <div className="flex items-center gap-2">
          <Label htmlFor="to">To :</Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">China</SelectItem>
              <SelectItem value="dark">Japan</SelectItem>
              <SelectItem value="system">Italy</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <button
          type="submit"
          className="bg-clip-bg bg-gradient-to-br from-amber-400 via-orange-500 to-orange-600 px-4 py-2.5 text-white font-medium rounded-full"
        >
          Find Traveler
        </button>
      </form>
    </section>
  );
}
