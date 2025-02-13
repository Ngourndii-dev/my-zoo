import About from '@/components/About'
import Link from 'next/link'
import React from 'react'

export default function index() {
  return (
    <div>
      <Link href="/">About </Link> 
      <Link href="/contact">Contact </Link> 
      <Link href="/sales">Sales </Link> 
      <Link href="/service">Service </Link>
      <About /> 
       <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>

    </div>
  ) 
}
