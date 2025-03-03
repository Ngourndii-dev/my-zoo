import ContactForm from '@/components/ContactForm'
import Navbar from '@/components/Navbar'
import Separator from '@/components/ui/Separator'
import React from 'react'

export default function Contact() {
  return (
    <div id="contact">
      <Navbar/>  
      <Separator/>
      <ContactForm/>  
    </div>
  )
}
