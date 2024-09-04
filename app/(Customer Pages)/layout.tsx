import AuthProvider from "./(auth)/register/Provider";
import { CartProvider } from "./_components/cartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the Inter font globally and Poppins where needed */}

      <body>
        <AuthProvider>
          <CartProvider>{children}</CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
