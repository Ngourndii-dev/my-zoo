'use client'
import { use } from 'react'
 
export default function Review({
  reviews,
}: {
  reviews: Promise<{ id: string; title: string }[]>
}) {
  const allreviews = use(reviews)
 
  return (
    <ul>
      {allreviews.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}