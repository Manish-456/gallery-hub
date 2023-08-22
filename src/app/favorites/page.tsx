import React from 'react'
import Topbar from '../gallery/components/topbar';
import cloudinary from 'cloudinary';
import FavoriteLists from './components/favorite-lists';
import ForceRefresh from '@/components/force-refresh';

export type SearchResult = {
  public_id : string;
  tags : string[]
}

export default async function Page() {
   const results =  await cloudinary.v2.search
    .expression('resource_type:image AND tags=favorite')
    .max_results(100)
    .with_field("tags")
    .execute() as {resources :  SearchResult[]};
   
 
  return (
    <section className='w-full'>
      <ForceRefresh />
     <Topbar title={"Favorited"}/>
    <FavoriteLists initialResources={results.resources} />
    </section>
  )
}
