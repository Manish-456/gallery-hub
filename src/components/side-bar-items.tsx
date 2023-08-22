"use client";
import React from 'react'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icons } from './icons/icon';
import { FolderType } from '../app/albums/page';

export default function SidebarItems({folders} : {folders : FolderType[]}) {
    const pathname = usePathname();
  return (
    <div className="space-y-1">
            <Button  variant={`${pathname === "/gallery" ? "secondary" : "ghost"}`} className="w-full justify-center lg:justify-start">
             <Link href={'/gallery'} className="flex items-center"> <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="lg:w-4 h-6 w-6 mx-auto lg:h-4 lg:mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <span className='lg:block hidden'>Gallery</span>
              </Link>
            </Button>
            <Button variant={`${pathname === "/albums" ? "secondary" : "ghost"}`} className="w-full justify-center lg:justify-start">
          <Link href={'/albums'} className="flex items-center">
          <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="lg:w-4 lg:mr-2 mx-auto w-6 h-6 lg:h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg>
              <span className='lg:block hidden'>
              Albums

              </span>
          </Link>
            </Button>
            {folders.map(folder => <Button className="mx-4 w-full md:flex hidden justify-start" key={folder.name} variant={"outline"}>
                
                <Link href={`/albums/${folder.path}`}>{folder.name}</Link>

            </Button>)}
            <Button variant={`${pathname === "/favorites" ? "secondary" : "ghost"}`} className="w-full justify-center lg:justify-start ">
            <Link href={'/favorites'} className="flex items-center">
            <Icons.heart  className='lg:h-4 mx-auto lg:mr-2 lg:w-4 h-6 w-6'/>
            <span className='lg:block hidden'>Favorites</span>
            </Link>
            </Button>
          </div>
  )
}
