export default class OrderItem {
  orderItem: string;
  price: number;
  
  constructor(orderItem: string, price: number) {
    this.orderItem = orderItem;
    this.price = price;
  };

}