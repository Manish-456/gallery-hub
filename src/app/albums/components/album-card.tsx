import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { FolderType } from "../page"
import Link from "next/link"


export function AlbumCard({folder} : {folder : FolderType}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{folder.name} </CardTitle>
        <CardDescription>All your {folder.name} images</CardDescription>
      </CardHeader>
      {/* Content goes here */}
      <CardContent></CardContent>
      <CardFooter className="flex w-full">

        <Button variant={'outline'} className="w-full"><Link href={`/albums/${folder.name}`}>view</Link></Button>
      </CardFooter>
    </Card>
  )
}
