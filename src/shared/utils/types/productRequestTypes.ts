import { PhoneData, ProfileName, StatusResponse } from "./common";

interface Ingredient {
  name: string;
  cost: number;
  img: string;
}

interface Size {
  name: "SMALL" | "LARGE" | "MEDIUM";
  price: number;
}

interface Dough {
  name: "THIN" | "THICK";
  price: number;
}
interface PizzaFullView {
  id: string;
  name: string;
  description: string;
  ingredients: Ingredient[];
  toppings: Ingredient[];
  sizes: Size[];
  doughs: Dough[];
  calories: number;
  protein: string;
  totalFat: string;
  carbohydrates: string;
  sodium: string;
  allergens: string[];
  isVegetarian: boolean;
  isGlutenFree: boolean;
  isNew: boolean;
  isHit: boolean;
  img: string;
}

interface PizzaCatalogue extends StatusResponse {
  catalog: PizzaFullView[];
}
interface Order {
  pizzas: Pizza[];
  person: Person;
  receiverAddress: Address;
  status: number;
  cancellable: boolean;
}

interface OrderResponse extends StatusResponse {
  order: Order;
}

interface OrdersResponse extends StatusResponse {
  orders: Order[];
}

interface OrderId {
  orderId: string;
}

interface Pizza {
  id: string;
  name: string;
  toppings: Ingredient[];
  size: Size;
  doughs: Dough;
}

interface Person extends ProfileName, PhoneData {}

interface Address {
  street: string;
  house: string;
  apartment: string;
  commment: string;
}

interface DebitCard {
  pan: string;
  expireDate: string;
  cvv: string;
}

interface OrderPayment {
  pizzas: Pizza[];
  person: Person;
  receiverAddress: Address;
  debitCard: DebitCard;
}
export type {
  PizzaCatalogue,
  PizzaFullView,
  OrderResponse,
  OrdersResponse,
  OrderId,
  OrderPayment,
};
