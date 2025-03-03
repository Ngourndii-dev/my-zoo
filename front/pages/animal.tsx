import AnimalList from '@/components/Animals'
import Navbar from '@/components/Navbar'
import Separator from '@/components/ui/Separator'
import React from 'react'

export default function AnimalPage() {
  return (
    <div>
        <Navbar/>
        <Separator/>
        <AnimalList/>
    </div>
  )
}
