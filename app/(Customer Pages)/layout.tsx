import { CartProvider } from "./components/cartContext";
import Footer from "./Footer";

import NavBar from "./NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the Inter font globally and Poppins where needed */}
      <CartProvider>
        <body>
          <NavBar />
          {children}
          <Footer />
        </body>
      </CartProvider>
    </html>
  );
}
