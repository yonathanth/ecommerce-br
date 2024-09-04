"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { createOrder, createSheinOrder } from "./_orderActions/orderActions";
import { useCart } from "../_components/cartContext";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const { data: session, status } = useSession();
  const [shippingAddress, setShippingAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated" || !session || !session.user) {
    return <p>You must be logged in to complete the checkout.</p>;
  }

  const handleCheckout = async () => {
    setLoading(true);

    if (!session?.user?.id) {
      console.error(
        "User is not authenticated or session.user.id is undefined"
      );
      setLoading(false);
      return;
    }

    try {
      for (const item of cartItems) {
        const orderData = {
          userId: session.user.id,
          pricePaidInCents: item.price * item.quantity * 100,
          shippingAddress,
        };

        if (item.link) {
          await createSheinOrder({
            ...orderData,
            url: item.link,
            description: item.remarks || "",
          });
        } else {
          await createOrder({
            ...orderData,
            productId: item.id,
          });
        }
      }
      clearCart();
      router.push("/success");
    } catch (error) {
      console.error("Checkout failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="address"
        >
          Shipping Address
        </label>
        <input
          type="text"
          id="address"
          className="w-full px-3 py-2 border rounded-md"
          value={shippingAddress}
          onChange={(e) => setShippingAddress(e.target.value)}
        />
      </div>
      <button
        onClick={handleCheckout}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        disabled={loading}
      >
        {loading ? "Processing..." : "Place Order"}
      </button>
    </div>
  );
}
