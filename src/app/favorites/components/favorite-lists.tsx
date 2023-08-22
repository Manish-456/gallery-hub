"use client";
import React, { useState, useEffect } from "react";

import CloudinaryImages from "../../../components/cloudinary-images";
import { SearchResult } from "../page";
import ImageGrid from "@/components/image-grid";
import { useRouter } from "next/navigation";


export default function FavoriteLists({
  initialResources,
}: {
  initialResources: SearchResult[];
}) {
  const [resources, setResources] = useState(initialResources);
  const router = useRouter();

  useEffect(() => {
    router.refresh()
  }, [router])

  return (

    <ImageGrid
      images={resources}
      getImages={(result) => (
        <CloudinaryImages
          unHearted={(unheartedResource: SearchResult) =>
            setResources((currResources) =>
              currResources.filter(
                (resource) => resource.public_id !== unheartedResource.public_id
              )
            )
          }
          key={result.public_id}
          result={result}
        />
      )}
    />
  );
}
