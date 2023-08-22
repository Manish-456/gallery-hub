import cloudinary from 'cloudinary';
import Topbar from '../gallery/components/topbar';
import ForceRefresh from '@/components/force-refresh';
import { AlbumCard } from './components/album-card';


export type FolderType = {
  name : string;
  path : string
}


export default async function Page() {
   const {folders} =  await cloudinary.v2.api.root_folders() as {
    folders : FolderType[]
   };

  return (
    <section className='w-full'>
      <ForceRefresh />
     <Topbar title={"Albums"}/>
     <div className="grid xl:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

     {
       folders.map(folder => <AlbumCard key={folder.name} folder={folder} />)
      }
      </div>
    </section>
  )
}
