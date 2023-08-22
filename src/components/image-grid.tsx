"use client";

import { SearchResult } from '@/app/gallery/page';
import { useRouter } from 'next/navigation';
import React, {useEffect} from 'react'

export default function ImageGrid({images, getImages} : {images : SearchResult[], getImages : (imageData : SearchResult) => React.ReactNode}) {
     const router = useRouter();
    const MAX_COLUMNS = 4;
   function getColumns(colIndex : number) {
    return images.filter((resource, idx) => idx % MAX_COLUMNS === colIndex)
   }

   useEffect(() => {
     router.refresh();
   }, [router])
  return (
<div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 mt-4 justify-items-center gap-4">
   {[
   getColumns(0),
   getColumns(1),
   getColumns(2),
   getColumns(3),
   ].map((column, idx) => <div key={idx} className='flex flex-col gap-4'>
     {
      column.map(getImages) 
     }
   </div>)}
 
  </div>
  )
}
