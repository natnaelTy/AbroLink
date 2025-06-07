import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PlaneTakeoff  } from 'lucide-react';




export default function Search() {
  return (
    <section className="flex items-start justify-center flex-col gap-4 max-h-screen max-w-6xl mx-auto w-full mb-8 p-2">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900">Search for travelers</h1>

      <form className="flex items-center justify-center gap-4">
        <div className="flex w-full max-w-sm items-center gap-3">
          <Label htmlFor="from">From:</Label>
          <Input type="text" id="from" placeholder="Country" />
        </div>
         <PlaneTakeoff className="size-16"/>
        <div className="flex w-full max-w-sm items-center gap-4">
          <Label htmlFor="to">To:</Label>
          <Input type="text" id="to" placeholder="Country" />
        </div>
        <Button className="px-5 py-2">Find</Button>
      </form>
    </section>
  );
}
