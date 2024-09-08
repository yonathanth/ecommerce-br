import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import AuthProvider from "./providers/AuthProvider";
import { CartProvider } from "./providers/cartContext";

// Import both Inter and Poppins fonts
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Customize the weights you want to include
});

export const metadata: Metadata = {
  title: "Best Online and Shein Shop in Ethiopia - Brukti's",
  description:
    "Discover amazing deals on fashion, electronics, and more at Brikti's Collections.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the Inter font globally and Poppins where needed */}
      <body className={`${inter.className} ${poppins.className}`}>
        <AuthProvider>
          <CartProvider>{children}</CartProvider>
        </AuthProvider>{" "}
      </body>
    </html>
  );
}
