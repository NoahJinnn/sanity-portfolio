import React from "react";
import mugImg from "../asset/mug.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={mugImg}
        alt="A warm mug"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative  min-h-screen pl-36 pt-2">
        <h1
          className="text-6xl text-gray-100 font-bold cursive leading-none lg:leading-snug home-name"
          style={{ width: "30vw", marginTop: "16px" }}
        >
          Read
          <br />
          Think
          <br />
          Action
        </h1>
      </section>
    </main>
  );
}
