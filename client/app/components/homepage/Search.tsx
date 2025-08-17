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
import { useEffect, useState } from "react";
import { getCountries } from "@/lib/Country";

export default function Search() {
  const [countries, setCountries] = useState<any[]>([]);

  useEffect(() => {
    getCountries().then(setCountries);
  }, []);

  console.log(countries.map((country) => country.emoji));

  return (
    <section className="flex items-center justify-center flex-col gap-4 mx-auto w-full p-1 mt-4">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold ">
        Search for travelers
      </h1>

      <form className="flex items-center flex-wrap md:justify-center justify-start gap-6 w-full max-w-[700px]">
        <div className="flex items-center gap-2">
          <Label htmlFor="from">From :</Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country.id} value={country.iso2}>
                  {country.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <Label htmlFor="from">To :</Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country.id} value={country.iso2}>
                  {country.name}
                </SelectItem>
              ))}
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
