export interface Review {
    id: number;
    author: string;
    id_animal: number;
    rating: number;
    comment: string;
    status: "pending" | "available" | "unavailable";
  }