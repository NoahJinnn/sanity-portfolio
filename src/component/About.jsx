import React, { useEffect, useState } from 'react'
import sanityClient from '../contentClient'
import BlockContent from '@sanity/block-content-to-react'
import stationImg from '../asset/station.jpg'
import WaitingMark from './WaitingMark'

export default function About() {
  const [author, setAuthor] = useState(null)
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`,
      )
      .then((data) => setAuthor(data[0]))
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (!author) return <WaitingMark />

  return (
    <main className="relative">
      <img src={stationImg} alt="A big warm station" className="absolute w-full h-full hidden md:block" style={{ zIndex: -2 }} />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="rounded-lg shadow-2xl lg:flex md:p-20">
          <div className="about-overlay hidden md:block" style={{ zIndex: -1 }} />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-yellow-300 md:text-yellow-100 mb-4">
              Hey there. I am
              <br />
              <span className="text-gray-900 md:text-gray-100">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <BlockContent blocks={author.bio} projectId="d4cqphsq" dataset="production" />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
