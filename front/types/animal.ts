export interface Animal {
    id: number;
    name: string;
    sex: "male" | "female";
    origin: string;
    price: number;
    rent: number;
    status: "available" | "unavailable";
    color: string;
    image: string;
  }