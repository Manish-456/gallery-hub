"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";


export default function SearchForm({initialSearch} : {initialSearch : string}) {
  const [tagName, setTagName] = useState(initialSearch ?? "");
  const router = useRouter();

  function handleSubmit(e : React.FormEvent<HTMLFormElement>){
    e.preventDefault();
  router.push(`/gallery?search=${encodeURIComponent(tagName)}`);  
}

useEffect(() => {
    setTagName(initialSearch)
}, [initialSearch])

  return (
    <form className="flex gap-4 bg-background  sticky w-full top-16 z-30 flex-col" onSubmit={handleSubmit}>
     <div className="flex gap-4 flex-col">
     <div className="flex items-center gap-4">
     <Input
        type="search"
        id="album-name"
        onChange={(e) => setTagName(e.target.value)}
        placeholder="Search by tags"
        value={tagName}
      />
      <Button type="submit" variant={'outline'}>Search</Button>
     </div>
     </div>
    </form>
  );
}
