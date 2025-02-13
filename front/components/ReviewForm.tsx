import { useState } from 'react'
import { z } from 'zod'
import { create } from 'zustand'

const reviewSchema = z.object({
  rating: z.number().min(1, 'Rating must be at least 1').max(5, 'Rating must be at most 5'),
  comment: z.string().min(10, 'Comment must contain at least 10 characters')
})
type ReviewFormData = z.infer<typeof reviewSchema>

const useReviewStore = create<{
  formData: ReviewFormData
  setFormData: (data: ReviewFormData) => void
}>((set) => ({
  formData: { rating: 0, comment: '' },
  setFormData: (data) => set({ formData: data })
}))

const ReviewForm = () => {
  const { formData, setFormData } = useReviewStore()
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const validatedData = reviewSchema.parse(formData)
      console.log('Validated data:', validatedData)
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMap: Record<string, string> = {}
        error.errors.forEach(err => {
          if (err.path) errorMap[err.path[0]] = err.message
        })
        setErrors(errorMap)
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: name === 'rating' ? parseInt(value) : value
    })
    setErrors({ ...errors, [name]: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-6 p-6 bg-white rounded-lg shadow-md">
      <div className="space-y-4">
        <label htmlFor="rating" className="text-sm font-medium text-gray-700">
          Rating (1-5):
        </label>
        <input
          id="rating"
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          min="1"
          max="5"
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.rating ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
          }`}
        />
        {errors.rating && (
          <span className="text-sm text-red-500">{errors.rating}</span>
        )}
      </div>

      <div className="space-y-4">
        <label htmlFor="comment" className="text-sm font-medium text-gray-700">
          Comment:
        </label>
        <textarea
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          className={`w-full min-h-[100px] px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.comment ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
          }`}
        />
        {errors.comment && (
          <span className="text-sm text-red-500">{errors.comment}</span>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
      >
        Submit Review
      </button>
    </form>
  )
}

export default ReviewForm