"use server";
import prisma from "@/prisma/client";
import { Order, SheinOrder } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function createOrder(data: {
  userId: string;
  productId: string;
  pricePaidInCents: number;
  shippingAddress: string;
}): Promise<Order> {
  const order = await prisma.order.create({
    data: {
      userId: data.userId, // Directly assign userId
      productId: data.productId, // Directly assign productId
      pricePaidInCents: data.pricePaidInCents,
      shippingAddress: data.shippingAddress,
    },
  });

  revalidatePath("/checkout");
  return order;
}

export async function createSheinOrder(data: {
  userId: string;
  url: string;
  description: string;
  pricePaidInCents: number;
  shippingAddress: string;
}): Promise<SheinOrder> {
  const sheinOrder = await prisma.sheinOrder.create({
    data: {
      userId: data.userId, // Directly assign userId
      url: data.url,
      description: data.description,
      pricePaidInCents: data.pricePaidInCents,
      shippingAddress: data.shippingAddress,
    },
  });

  revalidatePath("/checkout");
  return sheinOrder;
}
