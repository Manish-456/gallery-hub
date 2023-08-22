"use client";

import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import React, { useState } from 'react';
export default function Home() {
  const [imageId, setImageId] = useState<string | null>(null)
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    <CldUploadButton
    onUpload={(result, widget) => {
      setImageId(result?.info?.public_id);
    }}
    uploadPreset="wgpti4jk" />

 
{
  imageId && (<CldImage
    width="960"
    height="600"
    src={imageId}
    sizes="100vw"
    alt="Description of my image"

    blurFaces
/>)
}
    </main>
  )
}
