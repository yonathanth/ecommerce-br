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
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
