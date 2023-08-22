import React from 'react'
import cloudinary from 'cloudinary';
import ForceRefresh from '@/components/force-refresh';
import AlbumGrid from './album-grid';
import Topbar from '@/app/gallery/components/topbar';


export type SearchResult = {
  public_id : string;
  tags : string[]
}

export default async function Page({
    params
} : {
    params : {
        albumName : string
    }
}) {
   const results =  await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${params.albumName}`)
    .max_results(100)
    .with_field("tags")
    .execute() as {resources :  SearchResult[]};


  
  return (
    <section className='w-full'>
      <ForceRefresh />
     <Topbar title={`Album ${params.albumName}`}/>
   <AlbumGrid images={results.resources} />
    </section>
  )
}
