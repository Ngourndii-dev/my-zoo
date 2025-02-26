export interface Order {
    id: number;
    order_date: string;
    status: "append" | "available" | "unavailable";
    quantity: number;
    id_client: number;
    id_animal: number;
  }