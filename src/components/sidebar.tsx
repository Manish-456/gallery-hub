
import { cn } from "@/lib/utils";
import SidebarItems from "./side-bar-items";
import cloudinary from 'cloudinary';
import { FolderType } from "@/app/albums/page";

export async function Sidebar() {
  const {folders} =  await cloudinary.v2.api.root_folders() as {
    folders : FolderType[]
   };
  return (
    <div className={cn("pb-12 w-[14%] fixed z-10 bg-background min-h-screen top-")}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
      
          
          <SidebarItems folders={folders} />
        </div>
      
     
      </div>
    </div>
  );
}
8