"use client";

import React from 'react'
import ImageGrid from '@/components/image-grid';
import { SearchResult } from '../page';
import CloudinaryImages from '../../../components/cloudinary-images';


export default  function GalleryGrid({images} : {images : SearchResult[]}) {


  return (
 <ImageGrid images={images} getImages={(imageData : SearchResult) => <CloudinaryImages key={imageData.public_id} result={imageData} /> } />
  )
}
