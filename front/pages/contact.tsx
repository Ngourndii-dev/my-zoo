import ContactForm from '@/components/ContactForm'
import ReviewForm from '@/components/ReviewForm'
import React from 'react'
type Props = {}

export default function Contact({}: Props) {
  return (
    <div>
      <ContactForm />
      <ReviewForm />
    </div>
  )
}