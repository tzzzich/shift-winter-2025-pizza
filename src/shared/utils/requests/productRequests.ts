import {
  OrderId,
  OrderPayment,
  OrderResponse,
  OrdersResponse,
  PizzaCatalogue,
  StatusResponse,
} from "@types";
import axios, { AxiosResponse } from "axios";
import { api } from "./instance";

const getPizzaCatalogue = async (): Promise<AxiosResponse<PizzaCatalogue>> =>
  await api.get("/pizza/catalog");

const makeOrder = async (
  data: OrderPayment
): Promise<AxiosResponse<OrderResponse>> =>
  await axios.post("pizza/payment", data);

const getOrders = async (): Promise<AxiosResponse<OrdersResponse>> =>
  await api.get("/pizza/orders");

const getOrder = async (
  orderId: OrderId
): Promise<AxiosResponse<OrderResponse>> =>
  await axios.get(`pizza/orders/${orderId}`);

const cancelOrder = async (
  data: OrderId
): Promise<AxiosResponse<StatusResponse>> =>
  await axios.put("pizza/orders/cancel", data);

export { getPizzaCatalogue, makeOrder, getOrders, getOrder, cancelOrder };
