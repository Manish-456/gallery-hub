"use client";
import { PenSquare, Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AddToAlbumDialog } from "./add-to-album-dialog";
import { SearchResult } from "@/app/gallery/page";
import { useState } from "react";
import Link from "next/link";

export function ImageMenu({ image }: { image: SearchResult }) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2  mr-4 w-40">
        <DropdownMenuItem className=" cursor-pointer" asChild>
       <Link href={`/edit/?publicId=${encodeURIComponent(image.public_id)}`}>   <PenSquare className="mr-2 h-4 w-4" />
          <span>
            Edit
          </span></Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          {/* Dialog component */}
          <AddToAlbumDialog image={image} onClose={() => setOpen(false)} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
