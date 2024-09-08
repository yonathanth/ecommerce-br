"use server";
import prisma from "@/prisma/client";
import { Order, SheinOrder } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function createOrder(data: {
  userId: string;
  productId: string;
  pricePaidInCents: number;
  shippingAddress: string;
  quantity: number; // Add quantity
}): Promise<Order> {
  const order = await prisma.order.create({
    data: {
      userId: data.userId,
      productId: data.productId,
      pricePaidInCents: data.pricePaidInCents,
      shippingAddress: data.shippingAddress,
      quantity: data.quantity, // Save quantity in DB
    },
  });

  revalidatePath("/");
  return order;
}

export async function createSheinOrder(data: {
  userId: string;
  url: string;
  description: string;
  pricePaidInCents: number;
  shippingAddress: string;
  quantity: number; // Add quantity
}): Promise<SheinOrder> {
  const sheinOrder = await prisma.sheinOrder.create({
    data: {
      userId: data.userId,
      url: data.url,
      description: data.description,
      pricePaidInCents: data.pricePaidInCents,
      shippingAddress: data.shippingAddress,
      quantity: data.quantity, // Save quantity in DB
    },
  });

  revalidatePath("/");
  return sheinOrder;
}
