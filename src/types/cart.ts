export interface CartItemType {
  id: string;
  name: string;
  image: string;
  color: string;
  battery: string;
  size: string;
  price: number;
  oldPrice?: number;
  quantity: number;
}