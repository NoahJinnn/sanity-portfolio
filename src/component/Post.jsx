import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import sanityClient from '../contentClient'
import WaitingMark from './WaitingMark'

export default function Post() {
  const { t } = useTranslation()
  const [posts, setPosts] = useState(null)
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`,
      )
      .then((data) => setPosts(data))
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (!posts) return <WaitingMark />

  return (
    <main className="bg-gray-200 min-h-screen p-2 md:p-12 ">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">Blog Posts</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">{t('welcome.blog')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <article className="rounded">
              <Link to={`/post/${post.slug.current}`} key={post.slug.current}>
                <span className="block h-48 relative rounded shadow leading-snug bg-white" key={index}>
                  <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="w-full h-full  object-cover absolute" />
                </span>
                <span className="block bg-gray-900 relativeflex justify-end items-end pr-4 pb-4">
                  <h3 className="text-yellow-200 text-lg font-blog px-3 py-4 bg-opacity-75 rounded">{post.title}</h3>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
