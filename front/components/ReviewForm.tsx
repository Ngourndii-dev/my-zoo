import { Review } from '@/types/review';
import React, { useState, useCallback } from 'react';

interface ReviewFormProps {
  animalId: number;
  onClose: () => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ animalId, onClose }) => {
  const [author, setAuthor] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!author.trim() || rating < 1 || rating > 5 || !comment.trim()) {
        setError('Please fill in all fields correctly. Rating must be between 1 and 5.');
        return;
      }

      const review: Review = {
        author,
        animal: { id: animalId },
        rating,
        comment,
      };

      try {
        const response = await fetch(`http://localhost:8080/reviews`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(review),
        });

        if (response.ok) {
          alert('Review submitted successfully!');
          onClose();
        } else {
          throw new Error('Failed to submit review.');
        }
      } catch (error) {
        console.error('Error:', error);
        setError('An error occurred while submitting the review.');
      }
    },
    [author, rating, comment, animalId, onClose]
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-white mb-4">Add Review</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">Animal ID</label>
            <input
              type="text"
              value={animalId}
              readOnly
              className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Your Name</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Rating (1-5)</label>
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white"
              required
              min="1"
              max="5"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Comment</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white"
              required
              rows={4}
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;