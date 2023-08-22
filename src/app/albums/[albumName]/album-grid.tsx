"use client";

import React from 'react'
import ImageGrid from '@/components/image-grid';
import CloudinaryImages from '../../../components/cloudinary-images';
import { SearchResult } from './page';


export default  function AlbumGrid({images} : {images : SearchResult[]}) {


  return (
 <ImageGrid images={images} getImages={(imageData : SearchResult) => <CloudinaryImages key={imageData.public_id} result={imageData} /> } />
  )
}
