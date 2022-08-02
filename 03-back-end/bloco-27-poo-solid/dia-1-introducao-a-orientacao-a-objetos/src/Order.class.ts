import OrderItem from "./OrderItem.class";

class Order {
  client: Client;
  paymentMethod: string;
  discount: number = 0;
  items: OrderItem[] = [];

  constructor(client: Client, paymentMethod: string, discount: number, items: OrderItem[]) {
    this.client = client;
    this.paymentMethod = paymentMethod;
    this.discount = discount;
    this.items = items;
  };

  total() {
    const total = this.items.reduce((acc, currValue) => acc + currValue.price, 0)

    console.log(total);
  }

  totalWithDiscount() {
    const total = this.items.reduce((acc, currValue) => acc + currValue.price, 0)

    const totalWithDiscount = total - (total * this.discount)

    console.log(totalWithDiscount);
  }
}