import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import CheckoutPage from "./CheckOut";

export default async function Checkout() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return <p>You need to be logged in to access this page.</p>;
  }

  const userId = session.user.id;

  return <CheckoutPage userId={userId} />;
}
