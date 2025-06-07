import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";






export default function Search() {
  return (
    <section className="flex items-start justify-center flex-col gap-4 max-h-screen max-w-6xl mx-auto w-full mb-8">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800">Find a Traveler who's ready to go.</h1>

      <form className="flex items-start justify-center gap-3">
        <div className="flex w-full max-w-sm items-center gap-3">
          <Label htmlFor="from">From:</Label>
          <Input type="text" id="from" placeholder="Country" />
        </div>

        <div className="flex w-full max-w-sm items-center gap-3">
          <Label htmlFor="to">To:</Label>
          <Input type="text" id="to" placeholder="Country" />
        </div>
        <button className="bg-orange-500 px-4 py-2 rounded-md text-white hover:bg-orange-400 hover:shadow-lg">Find</button>
      </form>
    </section>
  );
}
