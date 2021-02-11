import React, { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../contentClient";
import BlockContent from "@sanity/block-content-to-react";
import stationImg from "../asset/station.jpg";
import WaitingMark from "./WaitingMark";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!author) return <WaitingMark />;

  return (
    <main className="relative">
      <img
        src={stationImg}
        alt="A big warm station"
        className="absolute w-full"
      />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="rounded-lg shadow-2xl lg:flex p-20">
          <div className="about-overlay" />
          <div className="text-lg flex flex-col justify-center z-10">
            <h1 className="cursive text-6xl text-yellow-100 mb-4">
              Hey there. I am
              <br />
              <span className="text-gray-100">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <BlockContent
                blocks={author.bio}
                projectId="d4cqphsq"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
