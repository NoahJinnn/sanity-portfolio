import React from 'react'
import mugImg from '../asset/mug.jpg'

export default function Home() {
  return (
    <main>
      <picture className="absolute h-100 w-100">
        <img src={mugImg} alt="This is a swarm smug" className="home-page-image" />
      </picture>

      <section className="relative  min-h-screen lg:pl-36 sm:pl-10 pt-2">
        <h1
          className="text-6xl text-gray-100 font-bold cursive leading-none lg:leading-snug home-name"
          style={{ width: '30vw', marginTop: '16px' }}>
          Read
          <br />
          Think
          <br />
          Action
        </h1>
      </section>
    </main>
  )
}
