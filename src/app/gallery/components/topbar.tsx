"use client";
import React from 'react'
import { Button } from '@/components/ui/button';
import { CldUploadButton } from 'next-cloudinary'
import {useRouter} from 'next/navigation';
export default function Topbar({title} : {title : string}) {
  const router = useRouter();
  return (
    <div className="flex my-4  justify-between">
    <h1 className='text-3xl font-bold'>{title}</h1>
    
  <div>
<Button asChild >
<div>


<CldUploadButton
 className='flex gap-1 items-center'
  onUpload={(result, widget) => {
    router.refresh()
  }}
  uploadPreset="wgpti4jk" >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4  h-4">
<path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
</svg>
Upload
  </CldUploadButton>
</div>
</Button>
  </div>
      </div>
  )
}
