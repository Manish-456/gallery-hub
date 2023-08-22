import React from "react";
import Topbar from "./components/topbar";
import cloudinary from "cloudinary";
import ForceRefresh from "@/components/force-refresh";
import GalleryGrid from "./components/gallery-grid";
import SearchForm from "./components/search-form";

export type SearchResult = {
  public_id: string;
  tags: string[];
};

export default async function Page({
  searchParams,
}: {
  searchParams: {
    search: string;
  };
}) {
  const results = (await cloudinary.v2.search
    .expression(
      `resource_type:image ${
        searchParams.search ? ` AND tags=${searchParams.search}` : ""
      }`
    )
    .max_results(20)
    .with_field("tags")
    .execute()) as { resources: SearchResult[] };


  return (
    <section className="w-full">
      <ForceRefresh />
      <SearchForm initialSearch={searchParams.search}/>
      <Topbar title={"Gallery"} />
      <GalleryGrid images={results.resources} />
    </section>
  );
}
