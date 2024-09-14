"use client";

import { useState, useEffect } from "react";
import { useCart } from "../../providers/cartContext";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession, signIn } from "next-auth/react"; // Import signIn function
import { createOrder, createSheinOrder } from "./_orderActions/orderActions";

const CheckoutPage: React.FC = () => {
  const { cartItems, clearCart } = useCart();
  const [shippingAddress, setShippingAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session, status } = useSession(); // Fetch the session

  const userId = session?.user?.id || ""; // Get userId from session

  // Handle redirect after login
  const callbackUrl = searchParams.get("callbackUrl") || "/checkout";

  // Redirect if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      signIn(undefined, { callbackUrl }); // Redirect to login with the callbackUrl
    }
  }, [status, router, callbackUrl]);

  // Prevent flashing before session is loaded
  if (status === "loading") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-complimentSeventy to-accentthirty">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
          <p className="text-accentthirty">Checking session...</p>
        </div>
      </div>
    ); // Loading state while session is fetched
  }

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!shippingAddress) {
      setError("Shipping address is required");
      setIsSubmitting(false);
      return;
    }

    if (!userId) {
      setError("User is not authenticated");
      setIsSubmitting(false);
      return;
    }

    try {
      for (const item of cartItems) {
        if (item.link) {
          await createSheinOrder({
            userId,
            url: item.link,
            description: item.remarks || "",
            pricePaidInCents: item.price * 100,
            shippingAddress,
            quantity: item.quantity,
          });
        } else {
          await createOrder({
            userId,
            productId: item.id,
            pricePaidInCents: item.price * 100,
            shippingAddress,
            quantity: item.quantity,
          });
        }
      }

      clearCart();
      router.push("./checkout/success");
    } catch (error) {
      console.error("Checkout error:", error);
      setError("Something went wrong during checkout.");
      router.push("./checkout/failure");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-complimentSeventy to-accentthirty border border-accentthirty">
      <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-md space-y-6 border border-thirty">
        <h2 className="text-3xl font-bold text-center text-accentthirty">
          Checkout
        </h2>

        {error && <p className="text-red-600 text-center">{error}</p>}

        <form onSubmit={handleCheckout} className="space-y-6">
          <div>
            <label
              htmlFor="shippingAddress"
              className="block text-sm font-medium text-gray-700"
            >
              Shipping Address
            </label>
            <textarea
              id="shippingAddress"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
              rows={4}
              required
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700">
              Order Summary
            </h3>
            <ul className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="py-4 flex justify-between items-center"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                    {item.link && (
                      <p className="text-sm text-gray-400">SHEIN Product</p>
                    )}
                    {item.remarks && (
                      <p className="text-xs text-gray-500">
                        Remarks: {item.remarks}
                      </p>
                    )}
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ETB {item.price.toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-between items-center">
              <p className="text-lg font-medium text-gray-900">Total:</p>
              <p className="text-lg font-bold text-gray-900">
                ETB {totalAmount.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accentthirty">
              Payment Instructions
            </h3>
            <div className="p-4 bg-seventy rounded-md border border-accentthirty shadow-sm">
              <p className="text-sm text-gray-800 font-medium">
                {`Please transfer 50% of the total amount --- ETB ${
                  totalAmount / 2
                } --- to one of the following
                accounts:`}
              </p>
              <ul className="mt-2 space-y-2">
                <li className="text-sm">
                  <strong>CBE:</strong> Account Number 123456789
                </li>
                <li className="text-sm">
                  <strong>Bank of Abyssinia:</strong> Account Number 987654321
                </li>
                <li className="text-sm">
                  <strong>TeleBirr:</strong> Phone Number 0912345678
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                After making the payment, click the button below to confirm your
                order.
              </p>
            </div>
          </div>

          <button
            type="submit"
            className={`w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-thirty hover:bg-accentthirty focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
              isSubmitting ? "opacity-50" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Placing Order..." : "Place Order - I Have Paid"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
