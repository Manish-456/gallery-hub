"use client";
import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import React from "react";
import { useState } from "react";

export default function Page({
  searchParams,
}: {
  searchParams: {
    publicId: string;
  };
}) {
  const { publicId } = searchParams;

  const [transformation, setTransformation] = useState<
    | undefined
    | "generative-fill"
    | "blur-fill"
    | "gray"
    | "pixelate"
    | "remove_background"
  >();

  return (
    <section>
      <div className="flex flex-col mt-6 gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Edit </h1>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button
            variant={"secondary"}
            onClick={() => setTransformation("generative-fill")}
          >
            Apply Generative Fill
          </Button>
          <Button
            variant={"secondary"}
            onClick={() => setTransformation("blur-fill")}
          >
            Apply Blur{" "}
          </Button>
          <Button
            variant={"secondary"}
            onClick={() => setTransformation("gray")}
          >
            Convert to Gray{" "}
          </Button>
          <Button
            variant={"secondary"}
            onClick={() => setTransformation("remove_background")}
          >
            Remove Background{" "}
          </Button>
          <Button
            variant={"secondary"}
            onClick={() => setTransformation("pixelate")}
          >
            Pixelate{" "}
          </Button>

          <Button
            variant={"secondary"}
            onClick={() => setTransformation(undefined)}
          >
            Clear All
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <CldImage
            src={publicId}
            width={300}
            height={200}
            alt="random image"
          />
          {transformation === "generative-fill" && (
            <CldImage
              src={publicId}
              alt="random image"
              width="960"
              height="600"
              crop="pad" 
              fillBackground
            />
          )}
          {transformation === "blur-fill" && (
            <CldImage
              src={publicId}
              width={300}
              height={200}
              alt="random image"
              // @ts-ignore
              blur={800}
            />
          )}
          {transformation === "gray" && (
            <CldImage
              src={publicId}
              width={300}
              height={200}
              alt="random image"
              // @ts-ignore
              grayscale
            />
          )}
          {transformation === "pixelate" && (
            <CldImage
              src={publicId}
              width={300}
              height={200}
              alt="random image"
              // @ts-ignore
              pixelate
            />
          )}
   
          {transformation === "remove_background" && (
            <CldImage
              src={publicId}
              width={300}
              height={200}
              alt="random image"
              // @ts-ignore
              removeBackground
            />
          )}
   
        </div>
      </div>
    </section>
  );
}
