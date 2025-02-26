import { Review } from "@/types/review";
import { useState } from "react";
import { z } from "zod";
import { useStore } from "zustand";
import { create } from "zustand";

const reviewSchema = z.object({
    author: z.string().min(1, "L'auteur est requis"),
    id_animal: z.number().min(1, "L'ID animal est requis"),
    rating: z.number().min(1).max(5, "La note doit être entre 1 et 5"),
    comment: z.string().min(1, "Le commentaire est requis"),
    status: z.enum(["pending", "available", "unavailable"]),
  });
  
  interface ReviewFormState {
    review: Partial<Review>;
    setReview: (review: Partial<Review>) => void;
  }
  
  const useReviewStore = create<ReviewFormState>((set) => ({
    review: {},
    setReview: (review) => set({ review }),
  }));
  
  export function ReviewForm() {
    const { review, setReview } = useReviewStore();
    const [error, setError] = useState<string | null>(null);
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      const validation = reviewSchema.safeParse(review);
      if (!validation.success) {
        setError(validation.error.errors.map((err) => err.message).join(", "));
        return;
      }
      setError(null);
      await fetch("http://localhost:8080/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(review),
      });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Auteur" onChange={(e) => setReview({ ...review, author: e.target.value })} />
        <input type="number" placeholder="Note (1-5)" onChange={(e) => setReview({ ...review, rating: Number(e.target.value) })} />
        <button type="submit">Envoyer</button>
        {error && <p>{error}</p>}
      </form>
    );
  }
  