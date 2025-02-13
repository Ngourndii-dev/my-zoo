import Review from '@/ui/Review'
import { Suspense } from 'react'
 
export default async function Page() {
  const data = await fetch('https://api.vercel.app/blog')
  const reviews = await data.json()
 
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Review reviews={reviews}/>
    </Suspense>
  )
}