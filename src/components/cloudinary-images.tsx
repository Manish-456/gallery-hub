"use client";
import { CldImage } from 'next-cloudinary'
import React, { useState } from 'react'
import { SearchResult } from '../app/gallery/page'
import { Icons } from '@/components/icons/icon';

import { removeAsFavoriteImage, setAsFavoriteImage } from '../app/gallery/tagaction';
import { usePathname } from 'next/navigation';
import { ImageMenu } from './image-menu';

export default function CloudinaryImages({result, unHearted} : {result : SearchResult, unHearted? : (unheartedResource : SearchResult) => void}) {
    const [isFavorited, setIsFavorited] = useState(result.tags.includes('favorite'))
    const path = usePathname();


  return (
<div className='relative'>
    
<CldImage
        key={result.public_id}
        width="500"
        height="300"
        src={result.public_id}
        sizes="100vw"
        alt="Description of my image"
    />
    <div className="bg-gray-600/[0.4] group hover:bg-gray-300/[0.2] absolute cursor-pointer text-center  p-2 rounded-full top-2 left-2">

   <Icons.heart className={`h-6 w-6 mx-auto group-hover:text-red-300 ${isFavorited ? 'fill-red-500' : ''} `}
   onClick={() => {
    if(isFavorited){
      setIsFavorited(false)
      removeAsFavoriteImage(result.public_id, path)
      unHearted?.(result);
    }else{
      setIsFavorited(true)
      setAsFavoriteImage(result.public_id, path);
    }
   }}
   />
    </div>
    <div className="bg-gray-600/[0.4] group hover:text-teal-500 hover:bg-gray-300/[0.2] absolute cursor-pointer text-center  p-2 rounded-full top-2 right-2">

   <ImageMenu image={result}/>
    </div>

</div>
  )
}
