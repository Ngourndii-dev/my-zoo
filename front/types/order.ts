export interface Order {
  orderDate: string;
  quantity: number;
  client: { id: number }; 
  animal: { id: number };
}
